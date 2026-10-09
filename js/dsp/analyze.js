/* Single entry point: raw PCM channels → plain JSON metrics.
   Pure functions only, so it runs identically in the Worker, on the main
   thread (fallback) and in Node tests. Same input ⇒ same output. */
import { analyzeTempo } from './tempo.js';
import { analyzeLoudness } from './loudness.js';
import { analyzeSpectrum } from './spectrum.js';

export const ANALYSIS_VERSION = 2;
const CURVE_POINTS = 96;
const r1 = v => Math.round(v * 10) / 10;
const r3 = v => Math.round(v * 1000) / 1000;

/* Sudden rises of short-term loudness (1 value / s): ≥ 9 LU above the quietest
   point of the previous 6 s, ending near the track's main level. Intros are
   ignored (first 8 s); events closer than 15 s are merged. */
function suddenRises(st, integrated){
  const out = [];
  for (let t = 8; t < st.length; t++){
    let min = Infinity;
    for (let j = Math.max(0, t - 6); j < t; j++) min = Math.min(min, st[j]);
    const rise = st[t] - min;
    if (rise >= 9 && st[t] > integrated - 4){
      const prev = out[out.length - 1];
      if (prev && t - prev.t < 15){ if (rise > prev.rise) { prev.t = t; prev.rise = r1(rise); } }
      else out.push({ t, rise: r1(rise) });
    }
  }
  return out;
}

function downsample(arr, n){
  if (arr.length <= n) return arr.map(r1);
  const out = [];
  for (let i = 0; i < n; i++){
    const a = Math.floor(i * arr.length / n), b = Math.max(a + 1, Math.floor((i + 1) * arr.length / n));
    let s = 0;
    for (let j = a; j < b; j++) s += arr[j];
    out.push(r1(s / (b - a)));
  }
  return out;
}

function stdDev(arr){
  if (arr.length < 2) return 0;
  const m = arr.reduce((a, b) => a + b, 0) / arr.length;
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length);
}

/* channels: Float32Array[] (1 or 2), sampleRate: number,
   meta: { duration (s, full file), analyzedSeconds } */
export function analyzeSignal(channels, sampleRate, meta = {}){
  const len = channels[0].length;
  let mono = channels[0];
  if (channels.length > 1){
    mono = new Float32Array(len);
    for (let i = 0; i < len; i++) mono[i] = 0.5 * (channels[0][i] + channels[1][i]);
  }

  const loud = analyzeLoudness(channels, sampleRate);
  const active = loud.shortTerm.filter(v => v > -50).length || len / sampleRate;
  const tempo = analyzeTempo(mono, sampleRate, active);
  const spec = analyzeSpectrum(mono, sampleRate);

  const peakDb = loud.samplePeak > 0 ? 20 * Math.log10(loud.samplePeak) : -Infinity;
  const integrated = isFinite(loud.integrated) ? loud.integrated : -70;
  const gatedSt = loud.shortTerm.filter(v => v > integrated - 20);

  return {
    version: ANALYSIS_VERSION,
    duration: r1(meta.duration ?? len / sampleRate),
    analyzedSeconds: r1(len / sampleRate),
    bpm: tempo.bpm,
    pulseClarity: r3(tempo.clarity),
    tempoStability: r3(tempo.stability),
    tempoAgreement: tempo.agreement,
    onsetRate: r3(tempo.onsetRate),
    lufs: r1(integrated),
    lra: r1(loud.lra),
    peakDb: r1(isFinite(peakDb) ? peakDb : -70),
    plr: r1(isFinite(peakDb) ? peakDb - integrated : 0),
    loudnessVariation: r1(stdDev(gatedSt)),
    bands: spec ? Object.fromEntries(Object.entries(spec.bands).map(([k, v]) => [k, r3(v)])) : null,
    centroid: spec ? Math.round(spec.centroid) : 0,
    brightness: spec ? r3(spec.brightness) : 0,
    rises: suddenRises(loud.shortTerm, integrated),
    curve: downsample(loud.shortTerm, CURVE_POINTS)
  };
}
