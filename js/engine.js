/* Runs analyzeSignal in a module Worker, or on the main thread if module
   workers are unavailable (older Safari / Firefox). */
let worker = null, broken = false, seq = 0;
const pending = new Map();

function getWorker(){
  if (broken) return null;
  if (worker) return worker;
  try {
    worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
    worker.onmessage = e => {
      const p = pending.get(e.data.id);
      if (!p) return;
      pending.delete(e.data.id);
      e.data.error ? p.reject(new Error(e.data.error)) : p.resolve(e.data.metrics);
    };
    worker.onerror = () => {
      broken = true; worker = null;
      for (const p of pending.values()) p.reject(Object.assign(new Error('worker_failed'), { code: 'worker_failed' }));
      pending.clear();
    };
    return worker;
  } catch (_){ broken = true; return null; }
}

export async function analyzeOnMainThread(channels, sampleRate, meta){
  await new Promise(r => setTimeout(r, 30));     // let the progress UI paint
  const { analyzeSignal } = await import('./dsp/analyze.js');
  return analyzeSignal(channels, sampleRate, meta);
}

export function analyze(channels, sampleRate, meta){
  const w = getWorker();
  if (!w) return analyzeOnMainThread(channels, sampleRate, meta);
  return new Promise((resolve, reject) => {
    const id = ++seq;
    // Buffers are transferred (no copy). If the worker dies, the caller gets
    // code 'worker_failed' and re-decodes for analyzeOnMainThread.
    pending.set(id, { resolve, reject });
    w.postMessage({ id, channels, sampleRate, meta }, channels.map(c => c.buffer));
  });
}
