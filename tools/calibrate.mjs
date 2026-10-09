/* Dev tool: run the browser analysis engine on real files (decoded by ffmpeg)
   to calibrate scoring thresholds.  Usage: node tools/calibrate.mjs <files…> */
import { spawnSync } from 'node:child_process';
import { analyzeSignal } from '../js/dsp/analyze.js';
import { scoreTrack } from '../js/scoring.js';

const SR = 24000, MAX_S = 480;
const rows = [];
for (const file of process.argv.slice(2)){
  const p = spawnSync('ffmpeg', ['-v', 'error', '-i', file, '-t', String(MAX_S), '-ac', '2', '-ar', String(SR), '-f', 'f32le', '-'], { maxBuffer: 1 << 30 });
  if (p.status !== 0){ console.error('decode failed', file); continue; }
  const all = new Float32Array(p.stdout.buffer, p.stdout.byteOffset, p.stdout.byteLength / 4);
  const n = all.length / 2, L = new Float32Array(n), R = new Float32Array(n);
  for (let i = 0; i < n; i++){ L[i] = all[2 * i]; R[i] = all[2 * i + 1]; }
  const t0 = Date.now();
  const m = analyzeSignal([L, R], SR);
  const ms = Date.now() - t0;
  let s = null;
  try { s = scoreTrack(m); } catch (_) {}
  rows.push({ file: file.split('/').pop(), ms, bpm: m.bpm, clar: m.pulseClarity, stab: m.tempoStability, ons: m.onsetRate,
    lufs: m.lufs, lra: m.lra, plr: m.plr, var: m.loudnessVariation, bright: m.brightness, cent: m.centroid,
    sub: m.bands?.sub, bass: m.bands?.bass, pres: m.bands?.presence, rises: m.rises.length,
    ...(s ? Object.fromEntries(Object.entries(s.usages).map(([k, v]) => [k, v.score])) : {}), E: s?.energy });
}
console.table(rows);
