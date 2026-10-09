/* Reference tests for the analysis engine — synthetic signals with known
   answers. Run: npm test (node tests/run.js). Prints a summary and writes
   tests/results.json, which the site shows in its "Méthode" section. */
import { writeFileSync } from 'node:fs';
import { analyzeSignal } from '../js/dsp/analyze.js';
import { scoreTrack, hasPulse } from '../js/scoring.js';

const SR = 24000;   // analysis rate used by the site (integer hops at 100 frames/s)
let seed = 1;
/* mulberry32 — a PRNG with a long period (a short-period one makes "noise" periodic). */
const rand = () => {
  let t = (seed = (seed + 0x6D2B79F5) | 0);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return (((t ^ (t >>> 14)) >>> 0) / 4294967296) * 2 - 1;
};

/* Drum pattern: kick on every beat, snare on 2 & 4, hi-hat on 8ths. */
function drums(bpm, seconds, { gain = 0.5, hats = true } = {}){
  seed = 7;
  const x = new Float32Array(Math.round(seconds * SR));
  const beat = 60 / bpm;
  const add = (t0, fn, dur) => {
    const s0 = Math.round(t0 * SR), n = Math.round(dur * SR);
    for (let i = 0; i < n && s0 + i < x.length; i++) x[s0 + i] += fn(i / SR);
  };
  for (let b = 0, t = 0; t < seconds; b++, t = b * beat){
    add(t, s => gain * Math.sin(2 * Math.PI * (55 + 60 * Math.exp(-s * 30)) * s) * Math.exp(-s * 18), 0.25);
    if (b % 2 === 1) add(t, s => 0.6 * gain * rand() * Math.exp(-s * 25), 0.15);
    if (hats){ add(t, s => 0.15 * gain * rand() * Math.exp(-s * 120), 0.04); add(t + beat / 2, s => 0.12 * gain * rand() * Math.exp(-s * 120), 0.04); }
  }
  return x;
}

function sine(freq, dbfs, seconds){
  const a = Math.pow(10, dbfs / 20), x = new Float32Array(Math.round(seconds * SR));
  for (let i = 0; i < x.length; i++) x[i] = a * Math.sin(2 * Math.PI * freq * i / SR);
  return x;
}

function pinkNoise(seconds, gain){
  seed = 3;
  const x = new Float32Array(Math.round(seconds * SR));
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < x.length; i++){
    const w = rand();
    b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913;
    x[i] = gain * (b0 + b1 + b2 + w * 0.1848) * 0.2;
  }
  return x;
}

/* Brick-wall style compression: soft clip with high drive. */
const crush = (x, drive) => x.map(v => Math.tanh(drive * v) / Math.tanh(drive));

const results = [];
function check(name, ok, detail){
  results.push({ name, ok, detail });
  console.log(`${ok ? '✓' : '✗'} ${name}  ${detail}`);
}

// 1. Tempo on drum patterns (±2 %, half/double accepted but reported).
for (const bpm of [70, 90, 100, 120, 128, 140, 160, 174]){
  const m = analyzeSignal([drums(bpm, 60)], SR);
  const err = Math.abs(m.bpm - bpm) / bpm;
  const oct = Math.min(Math.abs(m.bpm - 2 * bpm), Math.abs(m.bpm - bpm / 2)) / bpm < 0.02;
  // As in MIREX "accuracy 2": half/double tempo counts (it is the same pulse
  // felt differently) but is reported.
  check(`Tempo ${bpm} BPM`, err <= 0.02 || oct, `→ ${m.bpm} BPM${oct ? ' (ressenti à la moitié — accepté)' : ''}, clarté ${m.pulseClarity}`);
}

// 2. Loudness: 997 Hz sine at −20 dBFS, mono ⇒ −23.0 LUFS (BS.1770 reference behaviour).
{
  const m = analyzeSignal([sine(997, -20, 20)], SR);
  check('Loudness sinus −20 dBFS', Math.abs(m.lufs - (-23.0)) <= 0.5, `→ ${m.lufs} LUFS (attendu −23.0)`);
  const st = analyzeSignal([sine(997, -20, 20), sine(997, -20, 20)], SR);
  check('Loudness stéréo (+3 LU)', Math.abs(st.lufs - (-20.0)) <= 0.5, `→ ${st.lufs} LUFS (attendu −20.0)`);
}

// 3. Compression ordering: crushed version has lower PLR and lower comfort score.
{
  const base = drums(128, 40, { gain: 0.3 });
  const a = analyzeSignal([base], SR), b = analyzeSignal([crush(base, 12)], SR);
  check('Compression détectée (PLR)', b.plr < a.plr - 3, `PLR ${a.plr} dB → ${b.plr} dB`);
  const sa = scoreTrack(a), sb = scoreTrack(b);
  check('Confort longue écoute baisse', sb.usages.long.score < sa.usages.long.score, `${sa.usages.long.score} → ${sb.usages.long.score}`);
}

// 4. No beat: pink noise and a steady tone have no marked pulse.
{
  const n = analyzeSignal([pinkNoise(40, 0.3)], SR);
  check('Bruit rose : pas de pulsation', !hasPulse(n), `clarté ${n.pulseClarity}`);
  const t = analyzeSignal([sine(220, -12, 40)], SR);
  check('Son tenu : pas de pulsation', !hasPulse(t), `clarté ${t.pulseClarity}`);
}

// 5. Usage logic: a calm pad beats a 174 BPM loud beat for sleep; the reverse for running.
{
  const pad = analyzeSignal([sine(196, -24, 60).map((v, i) => v + 0.4 * Math.sin(2 * Math.PI * 293.7 * i / SR) * 0.06)], SR);
  const dnb = analyzeSignal([crush(drums(174, 60, { gain: 0.6 }), 4)], SR);
  const sp = scoreTrack(pad), sd = scoreTrack(dnb);
  check('Sommeil : nappe calme > beat 174', sp.usages.sleep.score > sd.usages.sleep.score + 20, `${sp.usages.sleep.score} vs ${sd.usages.sleep.score}`);
  check('Course : beat 174 > nappe calme', sd.usages.run.score > sp.usages.run.score + 20, `${sd.usages.run.score} vs ${sp.usages.run.score}`);
}

// 6. Sudden rise detection: quiet then loud.
{
  const q = pinkNoise(30, 0.02), l = pinkNoise(30, 0.4);
  const x = new Float32Array(q.length + l.length); x.set(q); x.set(l, q.length);
  const m = analyzeSignal([x], SR);
  check('Montée brutale repérée', m.rises.length >= 1 && Math.abs(m.rises[0].t - 30) <= 3, `→ ${m.rises.map(r => r.t + ' s').join(', ') || 'aucune'}`);
}

// 7. Determinism: same input ⇒ identical output.
{
  const x = drums(120, 30);
  const a = JSON.stringify(analyzeSignal([x], SR)), b = JSON.stringify(analyzeSignal([x], SR));
  check('Déterminisme', a === b, a === b ? 'résultats identiques' : 'résultats différents');
}

const passed = results.filter(r => r.ok).length;
console.log(`\n${passed}/${results.length} tests réussis`);
writeFileSync(new URL('./results.json', import.meta.url), JSON.stringify({ passed, total: results.length, date: new Date().toISOString().slice(0, 10), results }, null, 2));
process.exit(passed === results.length ? 0 : 1);
