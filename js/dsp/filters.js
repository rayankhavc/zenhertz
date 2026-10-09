/* Biquad filters (RBJ Audio-EQ-Cookbook — same responses as Web Audio's
   BiquadFilterNode) and the ITU-R BS.1770 K-weighting pre-filter. */

/* Returns normalised coefficients {b0,b1,b2,a1,a2}. */
export function rbj(type, f0, Q, fs){
  const w0 = 2 * Math.PI * f0 / fs;
  const cw = Math.cos(w0), alpha = Math.sin(w0) / (2 * Q);
  let b0, b1, b2;
  if (type === 'lowpass'){ b0 = (1 - cw) / 2; b1 = 1 - cw; b2 = (1 - cw) / 2; }
  else if (type === 'highpass'){ b0 = (1 + cw) / 2; b1 = -(1 + cw); b2 = (1 + cw) / 2; }
  else throw new Error('unknown filter ' + type);
  const a0 = 1 + alpha;
  return { b0: b0 / a0, b1: b1 / a0, b2: b2 / a0, a1: -2 * cw / a0, a2: (1 - alpha) / a0 };
}

/* Direct form II transposed. Returns a new Float32Array. */
export function biquad(x, c){
  const y = new Float32Array(x.length);
  const { b0, b1, b2, a1, a2 } = c;
  let z1 = 0, z2 = 0;
  for (let i = 0; i < x.length; i++){
    const xi = x[i];
    const yi = b0 * xi + z1;
    z1 = b1 * xi - a1 * yi + z2;
    z2 = b2 * xi - a2 * yi;
    y[i] = yi;
  }
  return y;
}

/* Band-limit with a 2nd-order high-pass then low-pass (Q = 0.707). */
export function bandpass(x, lo, hi, fs){
  return biquad(biquad(x, rbj('highpass', lo, Math.SQRT1_2, fs)), rbj('lowpass', hi, Math.SQRT1_2, fs));
}

/* K-weighting for any sample rate, using the analog-prototype derivation
   from libebur128 (high-shelf ≈ +4 dB above 1.5 kHz, then RLB high-pass). */
export function kWeight(x, fs){
  let f0 = 1681.974450955533, G = 3.999843853973347, Q = 0.7071752369554196;
  let K = Math.tan(Math.PI * f0 / fs);
  const Vh = Math.pow(10, G / 20), Vb = Math.pow(Vh, 0.4996667741545416);
  let a0 = 1 + K / Q + K * K;
  const shelf = {
    b0: (Vh + Vb * K / Q + K * K) / a0,
    b1: 2 * (K * K - Vh) / a0,
    b2: (Vh - Vb * K / Q + K * K) / a0,
    a1: 2 * (K * K - 1) / a0,
    a2: (1 - K / Q + K * K) / a0
  };
  f0 = 38.13547087602444; Q = 0.5003270373238773;
  K = Math.tan(Math.PI * f0 / fs);
  a0 = 1 + K / Q + K * K;
  const hp = { b0: 1, b1: -2, b2: 1, a1: 2 * (K * K - 1) / a0, a2: (1 - K / Q + K * K) / a0 };
  return biquad(biquad(x, shelf), hp);
}
