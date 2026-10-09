/* Analysis Web Worker: keeps the UI fluid while the DSP runs. */
import { analyzeSignal } from './dsp/analyze.js';

self.onmessage = e => {
  const { id, channels, sampleRate, meta } = e.data;
  try { self.postMessage({ id, metrics: analyzeSignal(channels, sampleRate, meta) }); }
  catch (err){ self.postMessage({ id, error: String(err && err.message || err) }); }
};
