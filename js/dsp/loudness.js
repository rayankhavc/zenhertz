/* Loudness after ITU-R BS.1770-4 / EBU R128 (approximation: computed on the
   analysis sample rate, sample peak instead of true peak).

   All loudness work is done on 100 ms sub-blocks of K-weighted channel power:
   a 400 ms momentary block = 4 sub-blocks, a 3 s short-term block = 30. */
import { kWeight } from './filters.js';

const SUB = 0.1;
const toLufs = p => (p > 0 ? -0.691 + 10 * Math.log10(p) : -Infinity);

function subBlockPower(channels, fs){
  const hop = Math.round(SUB * fs);
  const n = Math.floor(channels[0].length / hop);
  const pw = new Float64Array(n);
  for (const ch of channels){
    const k = kWeight(ch, fs);
    for (let b = 0; b < n; b++){
      let s = 0;
      const o = b * hop;
      for (let i = 0; i < hop; i++){ const v = k[o + i]; s += v * v; }
      pw[b] += s / hop;          // channel weights G = 1 for L/R/mono
    }
  }
  return pw;
}

function windowed(pw, len, step){
  const out = [];
  for (let s = 0; s + len <= pw.length; s += step){
    let sum = 0;
    for (let i = 0; i < len; i++) sum += pw[s + i];
    out.push(sum / len);
  }
  return out;
}

function gatedMean(powers, relDb){
  const abs = powers.filter(p => toLufs(p) > -70);
  if (!abs.length) return { level: -Infinity, kept: [] };
  const mean = abs.reduce((a, b) => a + b, 0) / abs.length;
  const rel = toLufs(mean) + relDb;
  const kept = abs.filter(p => toLufs(p) > rel);
  const m = kept.length ? kept.reduce((a, b) => a + b, 0) / kept.length : mean;
  return { level: toLufs(m), kept };
}

function percentile(sorted, q){
  if (!sorted.length) return 0;
  const i = (sorted.length - 1) * q, lo = Math.floor(i), hi = Math.ceil(i);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (i - lo);
}

export function analyzeLoudness(channels, fs){
  const pw = subBlockPower(channels, fs);
  const momentary = windowed(pw, 4, 1);                 // 400 ms, 75 % overlap
  const integrated = gatedMean(momentary, -10).level;

  const stPow = windowed(pw, 30, 10);                   // 3 s every 1 s
  const shortTerm = stPow.map(p => Math.max(-70, toLufs(p)));
  const lraKept = gatedMean(stPow, -20).kept.map(toLufs).sort((a, b) => a - b);
  const lra = lraKept.length > 1 ? percentile(lraKept, 0.95) - percentile(lraKept, 0.10) : 0;

  let peak = 0;
  for (const ch of channels) for (let i = 0; i < ch.length; i++){ const a = Math.abs(ch[i]); if (a > peak) peak = a; }

  return { integrated, lra, shortTerm, samplePeak: peak };
}
