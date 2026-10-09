/* Long-term average spectrum (Welch): Hann-windowed FFT frames spread over the
   whole track, power-averaged. Silent frames are skipped. */
import { fft, hann } from './fft.js';

const N = 4096;
const MAX_FRAMES = 320;
export const BANDS = [
  ['sub', 20, 60], ['bass', 60, 250], ['mid', 250, 2000], ['presence', 2000, 6000], ['air', 6000, 20000]
];

export function analyzeSpectrum(x, fs){
  const win = hann(N);
  const half = N >> 1;
  const avg = new Float64Array(half);
  const usable = x.length - N;
  if (usable <= 0) return null;
  const frames = Math.min(MAX_FRAMES, Math.max(1, Math.floor(usable / (N / 2))));
  const step = usable / frames;
  const re = new Float32Array(N), im = new Float32Array(N);
  let used = 0;
  for (let f = 0; f < frames; f++){
    const o = Math.floor(f * step);
    let e = 0;
    for (let i = 0; i < N; i++){ const v = x[o + i]; e += v * v; re[i] = v * win[i]; im[i] = 0; }
    if (e / N < 1e-7) continue;                         // ≈ −70 dBFS: silence
    fft(re, im);
    for (let k = 0; k < half; k++) avg[k] += re[k] * re[k] + im[k] * im[k];
    used++;
  }
  if (!used) return null;

  const binHz = fs / N;
  const bands = Object.fromEntries(BANDS.map(([k]) => [k, 0]));
  let total = 0, weighted = 0, above1500 = 0;
  for (let k = 1; k < half; k++){
    const f = k * binHz, p = avg[k];
    if (f < 20) continue;
    total += p; weighted += p * f;
    if (f >= 1500) above1500 += p;
    for (const [name, lo, hi] of BANDS) if (f >= lo && f < hi){ bands[name] += p; break; }
  }
  if (total <= 0) return null;
  for (const k in bands) bands[k] /= total;
  return {
    bands,
    centroid: weighted / total,
    brightness: above1500 / total          // share of energy above 1.5 kHz
  };
}
