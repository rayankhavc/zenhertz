/* Tempo, pulse clarity, tempo stability and onset density.

   Pipeline (ported from ZenHertz v1, now pure JS so it runs in a Worker and in
   Node tests):
     two bands — kick/bass 25–200 Hz and snare/clap 150–600 Hz
       → 20 ms energy envelope at 100 frames/s
       → half-wave rectified derivative (onset strength), bands fused
       → normalised autocorrelation on 20 s windows (hop 10 s), averaged over
         the whole track — the average gives the global tempo, each window
         gives a local tempo (stability)
       → harmonic scoring (super/sub-harmonics) + gentle prior at 115 BPM
       → octave corrections, parabolic interpolation of the peak

   Pulse clarity = normalised ACF value at the chosen period (0 = no periodic
   pulse, 1 = metronome), as in MIR "pulse clarity" descriptors. */
import { bandpass, biquad, rbj } from './filters.js';
import { fft, hann } from './fft.js';

const FPS = 100;
const BPM_MIN = 60, BPM_MAX = 190;
const WIN = 20 * FPS, HOP = 10 * FPS;

/* Energy envelope with a 40 ms Hann window (a rectangular window aliases the
   ripple of sustained tones into fake beats), then half-wave rectified
   derivative. */
function onsetEnvelope(x, fs){
  const win = Math.round(0.04 * fs);
  const hop = Math.round(fs / FPS);
  const w = hann(win);
  const frames = Math.floor((x.length - win) / hop) + 1;
  if (frames < 2) return new Float32Array(0);
  const energy = new Float32Array(frames);
  for (let f = 0; f < frames; f++){
    const base = f * hop;
    let e = 0;
    for (let j = 0; j < win; j++){ const s = x[base + j]; e += w[j] * s * s; }
    energy[f] = e / win;
  }
  const osf = new Float32Array(frames);
  for (let f = 1; f < frames; f++){ const d = energy[f] - energy[f - 1]; osf[f] = d > 0 ? d : 0; }
  return osf;
}

/* Log-compressed spectral flux at FPS frames/s, computed at fs/2 with a
   512-point FFT (≈ 46 ms): robust to brick-wall mastering and to music without
   a dominant kick, cheap enough for phones. */
function spectralFlux(x, fs){
  const lp = rbj('lowpass', 0.2 * fs, Math.SQRT1_2, fs);
  const y = biquad(biquad(x, lp), lp);
  const d = new Float32Array(Math.floor(y.length / 2));
  for (let i = 0; i < d.length; i++) d[i] = y[2 * i];
  const sr = fs / 2, N = 512, half = N >> 1, hop = Math.round(sr / FPS);
  const frames = Math.floor((d.length - N) / hop) + 1;
  if (frames < 2) return new Float32Array(0);
  const win = hann(N), re = new Float32Array(N), im = new Float32Array(N), mag = new Float32Array(half);
  let prev = new Float32Array(half), cur = new Float32Array(half);
  const out = new Float32Array(frames);
  for (let f = 0; f < frames; f++){
    const o = f * hop;
    for (let i = 0; i < N; i++){ re[i] = d[o + i] * win[i]; im[i] = 0; }
    fft(re, im);
    let max = 0;
    for (let k = 1; k < half; k++){ const a = Math.hypot(re[k], im[k]); mag[k] = a; if (a > max) max = a; }
    const floor = max * 1e-3;          // ignore leakage tails below −60 dB
    let sum = 0;
    for (let k = 1; k < half; k++){
      const v = mag[k] > floor ? Math.log1p(100 * mag[k]) : 0;
      cur[k] = v;
      const diff = v - prev[k];
      if (diff > 0) sum += diff;
    }
    out[f] = f ? sum : 0;
    const t = prev; prev = cur; cur = t;
  }
  return out;
}

/* Normalised ACF of one window for lags [0, maxLag]. Returns null if silent. */
function windowAcf(seg, maxLag){
  const n = seg.length;
  let mean = 0;
  for (let i = 0; i < n; i++) mean += seg[i];
  mean /= n;
  const s = new Float32Array(n);
  let e0 = 0;
  for (let i = 0; i < n; i++){ s[i] = seg[i] - mean; e0 += s[i] * s[i]; }
  if (e0 < 1e-14) return null;
  const acf = new Float32Array(maxLag + 1);
  for (let lag = 1; lag <= maxLag; lag++){
    let sum = 0;
    for (let i = 0, m = n - lag; i < m; i++) sum += s[i] * s[i + lag];
    acf[lag] = sum / e0;
  }
  return acf;
}

const LAG_MIN = Math.floor(60 * FPS / BPM_MAX);
const LAG_MAX = Math.ceil(60 * FPS / BPM_MIN);

/* Picks the beat period from an ACF. Returns {lag (fractional), clarity}. */
function pickPeriod(acf){
  const pos = l => (l >= 1 && l < acf.length ? Math.max(0, acf[l]) : 0);
  const score = new Float32Array(LAG_MAX + 1);
  for (let lag = LAG_MIN; lag <= LAG_MAX; lag++){
    let sc = acf[lag];
    for (const [k, w] of [[2, 0.5], [3, 0.33], [4, 0.25], [5, 0.2]]) sc += pos(Math.round(lag * k)) * w;
    for (const [k, w] of [[2, 0.4], [3, 0.25]]){ const h = Math.round(lag / k); if (h >= LAG_MIN) sc += pos(h) * w; }
    // Log-Gaussian tempo prior centred on 120 BPM (σ = 1 octave), as in
    // Ellis (2007): breaks octave ties, penalises syllable / 16th-note rates.
    const bpm = 60 * FPS / lag;
    score[lag] = sc * (0.7 + 0.3 * Math.exp(-0.5 * Math.log2(bpm / 120) ** 2));
  }
  let best = LAG_MIN;
  for (let lag = LAG_MIN; lag <= LAG_MAX; lag++) if (score[lag] > score[best]) best = lag;

  let lag = best;
  // Downward octave fold (hi-hat / trap doubling). Stricter support is needed
  // when the pick sits at the fast edge of the search range.
  const edge = lag <= LAG_MIN + 1;
  if (60 * FPS / lag > 148 && lag * 2 < acf.length && acf[lag * 2] >= (edge ? 0.25 : 0.5) * acf[lag]) lag *= 2;
  // Upward fold (half-time feel read as the main pulse).
  else if (60 * FPS / lag < 80){
    const h = Math.round(lag / 2);
    if (h >= LAG_MIN && acf[h] >= 0.6 * acf[lag]) lag = h;
  }
  // Parabolic interpolation on the ACF around the chosen lag.
  let frac = lag;
  if (lag > 1 && lag + 1 < acf.length){
    const a = acf[lag - 1], b = acf[lag], c = acf[lag + 1];
    const den = a - 2 * b + c;
    if (den < 0){ const d = 0.5 * (a - c) / den; if (Math.abs(d) < 1) frac = lag + d; }
  }
  return { lag: frac, clarity: Math.max(0, Math.min(1, acf[lag])) };
}

/* Onsets per second: local maxima above an adaptive (1 s moving mean) threshold. */
function onsetRate(osf, activeSeconds){
  const n = osf.length;
  if (n < 3 || activeSeconds <= 0) return 0;
  let gmax = 0;
  for (let i = 0; i < n; i++) if (osf[i] > gmax) gmax = osf[i];
  if (gmax <= 0) return 0;
  const half = FPS >> 1;
  let sum = 0, count = 0, last = -1e9;
  for (let i = 0; i < Math.min(n, half); i++) sum += osf[i];
  for (let i = 0; i < n; i++){
    const add = i + half, rem = i - half - 1;
    if (add < n) sum += osf[add];
    if (rem >= 0) sum -= osf[rem];
    const width = Math.min(n - 1, i + half) - Math.max(0, i - half) + 1;
    // Adaptive threshold + absolute floor: a held pure tone peaks below 2, the
    // median frame of real music is above 25 (measured on the calibration set).
    const thr = Math.max(5, 1.5 * sum / width + 0.02 * gmax);
    const v = osf[i];
    if (v > thr && v >= (osf[i - 1] || 0) && v >= (osf[i + 1] || 0) && i - last >= 5){ count++; last = i; }
  }
  return count / activeSeconds;
}

/* Global tempo + clarity + stability of one onset function. */
function periodicity(osf){
  const len = osf.length;
  const maxLag = Math.min(LAG_MAX * 2 + 2, WIN - 1);
  const windows = [];
  if (len >= WIN){
    for (let s = 0; s + WIN <= len; s += HOP){
      const acf = windowAcf(osf.subarray(s, s + WIN), maxLag);
      if (acf) windows.push(acf);
    }
  } else if (len > 4 * FPS){
    const acf = windowAcf(osf, Math.min(maxLag, len - 1));
    if (acf) windows.push(acf);
  }
  if (!windows.length) return null;
  const mean = new Float32Array(windows[0].length);
  for (const w of windows) for (let i = 0; i < mean.length; i++) mean[i] += w[i] / windows.length;
  const g = pickPeriod(mean);
  const bpm = 60 * FPS / g.lag;
  let agree = 0;                       // windows whose local tempo matches (octave-tolerant)
  for (const w of windows) if (sameTempo(60 * FPS / pickPeriod(w).lag, bpm)) agree++;
  // Clarity during the bulk of the track (60th percentile over windows), so a
  // beatless intro/outro does not hide a clear groove.
  const li = Math.round(g.lag);
  const per = windows.map(w => Math.max(0, w[li])).sort((a, b) => a - b);
  const p60 = per[Math.floor(0.6 * (per.length - 1))];
  return { bpm, clarity: Math.min(1, Math.max(g.clarity, p60)), stability: agree / windows.length };
}

function sameTempo(a, b){
  while (a > b * 1.5) a /= 2;
  while (a < b / 1.5) a *= 2;
  return Math.abs(a - b) / b < 0.04;
}

function zNorm(x){
  let m = 0;
  for (let i = 0; i < x.length; i++) m += x[i];
  m /= x.length || 1;
  let v = 0;
  for (let i = 0; i < x.length; i++) v += (x[i] - m) ** 2;
  const sd = Math.sqrt(v / (x.length || 1)) || 1;
  const out = new Float32Array(x.length);
  for (let i = 0; i < x.length; i++) out[i] = x[i] / sd;
  return out;
}

/* Two independent onset functions (band energy, spectral flux) are fused for
   the estimate; `agreement` says whether each one alone finds the same tempo. */
export function analyzeTempo(mono, fs, activeSeconds){
  const kick = onsetEnvelope(bandpass(mono, 25, 200, fs), fs);
  const snare = onsetEnvelope(bandpass(mono, 150, 600, fs), fs);
  const flux = spectralFlux(mono, fs);
  const len = Math.min(kick.length, snare.length, flux.length);
  const energy = new Float32Array(len);
  for (let i = 0; i < len; i++) energy[i] = kick[i] + 0.55 * snare[i];
  const e = zNorm(energy), f = zNorm(flux.subarray(0, len));
  const fused = new Float32Array(len);
  for (let i = 0; i < len; i++) fused[i] = e[i] + f[i];

  const rate = onsetRate(flux, activeSeconds);
  const g = periodicity(fused);
  // Without onsets there is no beat: periodic ripples of a held tone or of
  // numerical noise must not be read as a pulse.
  if (g && rate < 0.3){ g.clarity = 0; g.stability = 0; }
  if (!g) return { bpm: 0, clarity: 0, stability: 0, agreement: false, onsetRate: rate };
  const pe = periodicity(energy), pf = periodicity(flux);
  return {
    bpm: Math.round(g.bpm * 10) / 10,
    clarity: g.clarity,
    stability: g.stability,
    agreement: !!(pe && pf && sameTempo(pe.bpm, g.bpm) && sameTempo(pf.bpm, g.bpm)),
    onsetRate: rate
  };
}
