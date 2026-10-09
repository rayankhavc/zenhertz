/* Usage scores (0–100) from measured metrics. Pure and deterministic:
   same metrics ⇒ same scores and the same reason codes.

   Every number below is a threshold on a measured quantity; the comment says
   why it is there. Texts are not produced here — only reason codes with
   parameters, rendered by report.js through i18n. */

export const USAGES = ['sleep', 'focus', 'run', 'long'];

/* Level of evidence behind each usage claim (see the "Méthode" section):
   strong      — meta-analyses / consistent studies
   moderate    — studies exist, effects vary between people
   exploratory — few studies or an extrapolation from measured features */
export const EVIDENCE = { sleep: 'moderate', focus: 'exploratory', run: 'strong', long: 'exploratory' };

export const T = {
  pulse: 0.10,          // pulse clarity under this ⇒ "no marked beat" (speech, lullaby, rubato) — calibrated on real tracks
  riseLu: 9,            // see analyze.js — sudden rise detection
  label: { ideal: 75, good: 55, fair: 35 }
};

const clamp01 = v => Math.max(0, Math.min(1, v));
/* Linear 0→1 between a and b (reversed if a > b). */
const ramp = (x, a, b) => clamp01((x - a) / (b - a));
const bell = (x, c, w) => Math.exp(-0.5 * ((x - c) / w) ** 2);
const pct = v => Math.round(100 * clamp01(v));

/* A beat is "marked" when it is periodic enough and holds over the track
   (speech can look periodic locally but drifts: low stability). */
export function hasPulse(m){
  return m.bpm > 0 && m.pulseClarity >= T.pulse && (m.tempoStability >= 0.5 || m.pulseClarity >= 0.25);
}

/* Steps per minute a runner would naturally lock to: one step per beat in the
   140–200 range, two steps per beat for half-time tracks (70–100 BPM). */
export function cadenceOf(m){
  if (!hasPulse(m)) return 0;
  const b = m.bpm;
  if (b >= 70 && b < 100) return Math.round(b * 2);
  return Math.round(b);
}

export function cadenceZone(c){
  if (!c || c < 95) return 'none';
  if (c < 140) return 'walk';      // brisk walking ≈ 100–130 steps/min
  if (c < 160) return 'jog';
  if (c <= 185) return 'run';      // typical recreational running cadence
  return 'fast';
}

/* Perceived energy / arousal proxy (0–100). Tempo, event density, loudness and
   brightness are the musical features most consistently linked to arousal. */
export function energyOf(m){
  const p = hasPulse(m);
  const tempo = p ? ramp(m.bpm, 70, 150) * (0.5 + 0.5 * ramp(m.pulseClarity, T.pulse, 0.45)) : 0;
  const density = ramp(m.onsetRate, 1, 5);          // onsets per second (spectral-flux onsets)
  const loud = ramp(m.lufs, -24, -8);               // mastering level, not your volume
  const bright = ramp(m.brightness, 0.02, 0.3);     // share of energy above 1.5 kHz
  return pct(0.35 * tempo + 0.3 * density + 0.2 * loud + 0.15 * bright);
}

function labelOf(score){
  if (score >= T.label.ideal) return 'ideal';
  if (score >= T.label.good) return 'good';
  if (score >= T.label.fair) return 'fair';
  return 'avoid';
}

function sleep(m, E){
  const reasons = [];
  let s = 100 - E;
  if (!hasPulse(m)) reasons.push({ k: 'noPulse' });
  else if (m.bpm <= 80) reasons.push({ k: 'slowTempo', bpm: Math.round(m.bpm) });
  else if (m.bpm <= 105) reasons.push({ k: 'midTempo', bpm: Math.round(m.bpm) });
  else reasons.push({ k: 'fastTempo', bpm: Math.round(m.bpm) });
  if (m.rises.length){
    s -= Math.min(30, 12 * m.rises.length);         // sudden loudness jumps can wake / startle
    reasons.unshift({ k: 'rise', t: m.rises[0].t, n: m.rises.length });
  }
  const swing = ramp(m.loudnessVariation, 4, 8);    // big level swings over time
  if (swing > 0){ s -= 15 * swing; reasons.push({ k: 'swings' }); }
  reasons.push({ k: E < 35 ? 'lowEnergy' : E < 60 ? 'midEnergy' : 'highEnergy' });
  return { score: pct(s / 100), reasons };
}

function focus(m, E){
  const reasons = [];
  let s = 100 * bell(E, 40, 22);                    // steady, moderate stimulation
  const swing = ramp(m.loudnessVariation, 3, 7);
  if (swing > 0){ s -= 25 * swing; reasons.push({ k: 'swings' }); }
  if (m.rises.length){ s -= Math.min(24, 8 * m.rises.length); reasons.push({ k: 'rise', t: m.rises[0].t, n: m.rises.length }); }
  if (!reasons.length) reasons.push({ k: 'steady' });
  reasons.push({ k: E < 25 ? 'veryCalm' : E <= 60 ? 'midEnergy' : 'highEnergy' });
  reasons.push({ k: 'lyrics' });                    // we cannot detect vocals yet: say so
  return { score: pct(s / 100), reasons };
}

function run(m, E){
  const c = cadenceOf(m);
  const zone = cadenceZone(c);
  if (!c) return { score: pct(0.1 * E / 100), reasons: [{ k: 'noPulse' }], cadence: 0, zone };
  let fit;
  if (zone === 'run') fit = 0.85 + 0.15 * bell(c, 170, 10);
  else if (zone === 'jog' || zone === 'fast') fit = 0.65 * bell(c, 170, 22) + 0.2;
  else if (zone === 'walk') fit = 0.45;
  else fit = 0.1;
  const steady = 0.6 + 0.4 * m.tempoStability;      // a tempo that drifts is hard to run to
  const drive = ramp(E, 25, 75);
  const s = (0.6 * fit + 0.15 * ramp(m.pulseClarity, T.pulse, 0.45) + 0.25 * drive) * steady;
  const reasons = [{ k: 'cadence', c, zone }];
  if (m.tempoStability < 0.6) reasons.push({ k: 'unsteady' });
  reasons.push({ k: drive > 0.6 ? 'highEnergy' : drive > 0.25 ? 'midEnergy' : 'lowEnergy' });
  return { score: pct(s), reasons, cadence: c, zone };
}

/* Listening comfort over long sessions. Heavy compression (low PLR), very loud
   masters and strong 2–6 kHz energy are the usual suspects; the actual risk to
   hearing depends on playback level and duration, which a file cannot know. */
function long(m){
  const comp = ramp(m.plr, 14, 7);                  // PLR 14 dB = open, 7 dB = crushed
  const loud = ramp(m.lufs, -14, -7);
  const harsh = ramp(m.bands ? m.bands.presence : 0, 0.08, 0.3);
  const s = 1 - (0.45 * comp + 0.3 * loud + 0.25 * harsh);
  const reasons = [];
  if (comp > 0.5) reasons.push({ k: 'compressed', plr: m.plr });
  else reasons.push({ k: 'dynamic', plr: m.plr });
  if (harsh > 0.5) reasons.push({ k: 'harsh' });
  reasons.push({ k: 'volume' });                    // always remind: level × time matters most
  return { score: pct(s), reasons };
}

export function scoreTrack(m){
  const E = energyOf(m);
  const usages = { sleep: sleep(m, E), focus: focus(m, E), run: run(m, E), long: long(m) };
  for (const u of USAGES){ usages[u].label = labelOf(usages[u].score); usages[u].evidence = EVIDENCE[u]; }
  const order = [...USAGES].sort((a, b) => usages[b].score - usages[a].score || USAGES.indexOf(a) - USAGES.indexOf(b));
  return { energy: E, pulse: hasPulse(m), usages, best: order[0], worst: order[order.length - 1] };
}

/* Two tracks: winner per usage (tie under 5 points). */
export function compare(a, b){
  const out = {};
  for (const u of USAGES){
    const d = a.usages[u].score - b.usages[u].score;
    out[u] = Math.abs(d) < 5 ? 'tie' : d > 0 ? 0 : 1;
  }
  return out;
}

/* Playlist orders for 3+ tracks. items: [{ m, s }] */
export function orderPlaylist(items, mode){
  const by = (f, dir = 1) => [...items].sort((x, y) => dir * (f(x) - f(y)) || x.i - y.i);
  if (mode === 'bpm') return by(x => x.m.bpm || 999);
  if (mode === 'winddown') return by(x => x.s.energy, -1);            // energetic → calm
  if (mode === 'session'){                                             // warm-up → peak → cool-down
    const asc = by(x => x.s.energy);
    const left = [], right = [];
    asc.forEach((x, i) => (i % 2 ? right : left).push(x));
    return [...left, ...right.reverse()];
  }
  return by(x => x.s.usages[mode]?.score ?? 0, -1);
}
