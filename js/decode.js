/* File → { channels: Float32Array[] at ANALYSIS_RATE, duration } on the main
   thread (decodeAudioData needs an AudioContext). Fallback chain kept from v1:
   native decode → FFmpeg.wasm (loaded on demand) → real-time capture. */
export const ANALYSIS_RATE = 24000;   // integer hops at 100 frames/s
export const MAX_SECONDS = 480;       // longer files: the first 8 minutes
export const MAX_MB = 250;

let ctx = null;
function audioCtx(){
  if (!ctx || ctx.state === 'closed') ctx = new (window.AudioContext || window.webkitAudioContext)();
  return ctx;
}
export function unlockAudio(){
  try { const c = audioCtx(); if (c.state === 'suspended') c.resume(); } catch (_) {}
}

function decodeNative(ab){
  return new Promise((resolve, reject) => {
    let p;
    try { p = audioCtx().decodeAudioData(ab, resolve, reject); } catch (e){ reject(e); return; }
    if (p && p.catch) p.catch(() => {});
  });
}

/* Resample + crop with an OfflineAudioContext (native, fast, anti-aliased).
   Keeps stereo (needed for correct BS.1770 loudness), mono stays mono. */
async function toAnalysisBuffer(buf){
  const nCh = Math.min(2, buf.numberOfChannels);
  const seconds = Math.min(buf.duration, MAX_SECONDS);
  const frames = Math.max(1, Math.floor(seconds * ANALYSIS_RATE));
  try {
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const off = new OAC(nCh, frames, ANALYSIS_RATE);
    const src = off.createBufferSource();
    src.buffer = buf;
    src.connect(off.destination);
    src.start(0, 0, seconds);
    const out = await off.startRendering();
    return Array.from({ length: nCh }, (_, c) => out.getChannelData(c).slice());
  } catch (_){
    // Fallback: linear interpolation (input is already band-limited enough for our features).
    const ratio = buf.sampleRate / ANALYSIS_RATE;
    return Array.from({ length: nCh }, (_, c) => {
      const x = buf.getChannelData(c), y = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const p = i * ratio, k = Math.floor(p), f = p - k;
        y[i] = (x[k] || 0) * (1 - f) + (x[k + 1] || 0) * f;
      }
      return y;
    });
  }
}

/* ── FFmpeg.wasm (single-thread core: no COOP/COEP headers needed) ── */
let ffPromise = null;
function loadFFmpeg(){
  if (ffPromise) return ffPromise;
  ffPromise = (async () => {
    if (!window.FFmpeg){
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js';
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
    }
    const ff = window.FFmpeg.createFFmpeg({ log: false, corePath: 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js' });
    await ff.load();
    return ff;
  })();
  ffPromise.catch(() => { ffPromise = null; });
  return ffPromise;
}

async function decodeWithFFmpeg(file){
  const ff = await loadFFmpeg();
  const ext = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
  const inName = `in.${ext}`;
  ff.FS('writeFile', inName, await window.FFmpeg.fetchFile(file));
  await ff.run('-i', inName, '-t', String(MAX_SECONDS), '-vn', '-ac', '2', '-ar', '44100', '-c:a', 'pcm_s16le', 'out.wav');
  const raw = ff.FS('readFile', 'out.wav');
  try { ff.FS('unlink', inName); ff.FS('unlink', 'out.wav'); } catch (_) {}
  if (raw.length < 1000) throw new Error('ffmpeg_empty');
  return decodeNative(raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength));
}

/* Last resort: play the media silently into a MediaRecorder (real time, ≤ 90 s). */
function captureRealtime(file){
  return new Promise((resolve, reject) => {
    if (typeof MediaRecorder === 'undefined'){ reject(new Error('no_recorder')); return; }
    const url = URL.createObjectURL(file);
    const v = document.createElement('video');
    Object.assign(v, { src: url, preload: 'auto', playsInline: true });
    v.style.cssText = 'position:fixed;left:-9999px;width:1px;height:1px;opacity:0';
    document.body.appendChild(v);
    const done = () => { URL.revokeObjectURL(url); v.remove(); };
    v.onerror = () => { done(); reject(new Error('media_error')); };
    v.addEventListener('loadeddata', async () => {
      try {
        const live = new (window.AudioContext || window.webkitAudioContext)();
        const src = live.createMediaElementSource(v);
        const dest = live.createMediaStreamDestination();
        src.connect(dest);                       // not connected to speakers: silent
        const chunks = [];
        const rec = new MediaRecorder(dest.stream);
        rec.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };
        rec.onstop = async () => {
          live.close(); done();
          try { resolve(await decodeNative(await new Blob(chunks).arrayBuffer())); } catch (e){ reject(e); }
        };
        rec.start(1000);
        await v.play();
        const stop = () => { if (rec.state !== 'inactive') rec.stop(); };
        setTimeout(() => { v.pause(); stop(); }, Math.min(v.duration || 90, 90) * 1000);
        v.onended = stop;
      } catch (e){ done(); reject(e); }
    }, { once: true });
  });
}

export async function decodeFile(file, onStage = () => {}){
  if (file.size > MAX_MB * 1024 * 1024) throw Object.assign(new Error('too_big'), { code: 'too_big' });
  onStage('read');
  const ab = await file.arrayBuffer();
  let buf = null;
  onStage('decode');
  try { buf = await decodeNative(ab); } catch (_) {}
  if (!buf || !buf.length){
    onStage('decodeFf');
    try { buf = await decodeWithFFmpeg(file); } catch (_) {}
  }
  if (!buf || !buf.length){
    onStage('capture');
    buf = await captureRealtime(file);
  }
  const channels = await toAnalysisBuffer(buf);
  return { channels, duration: buf.duration };
}

export function titleFromFile(file){
  let s = file.name.replace(/\.[^/.]+$/, '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-/i.test(s) || !s) s = 'Audio';
  return s.length > 60 ? s.slice(0, 58) + '…' : s;
}
