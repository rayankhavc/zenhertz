/* Share: a link that carries the measurements (never audio) and a PNG card.
   The receiver's browser recomputes the same scores (deterministic scoring). */
import { t } from './i18n.js';
import { USAGES } from './scoring.js';

const b64url = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64url = s => decodeURIComponent(escape(atob(s.replace(/-/g, '+').replace(/_/g, '/'))));
const BAND_KEYS = ['sub', 'bass', 'mid', 'presence', 'air'];

function pack(title, m){
  return {
    n: title, d: m.duration, a: m.analyzedSeconds, b: m.bpm, pc: m.pulseClarity, ts: m.tempoStability,
    ta: m.tempoAgreement ? 1 : 0, o: m.onsetRate, l: m.lufs, r: m.lra, pk: m.peakDb, p: m.plr,
    lv: m.loudnessVariation, bd: m.bands ? BAND_KEYS.map(k => m.bands[k]) : null, c: m.centroid,
    br: m.brightness, ri: m.rises.map(x => [x.t, x.rise]), cu: m.curve.map(Math.round)
  };
}

function unpack(o){
  return {
    title: String(o.n || 'Audio').slice(0, 80),
    m: {
      version: 2, duration: +o.d || 0, analyzedSeconds: +o.a || 0, bpm: +o.b || 0, pulseClarity: +o.pc || 0,
      tempoStability: +o.ts || 0, tempoAgreement: !!o.ta, onsetRate: +o.o || 0, lufs: +o.l || -70, lra: +o.r || 0,
      peakDb: +o.pk || 0, plr: +o.p || 0, loudnessVariation: +o.lv || 0,
      bands: Array.isArray(o.bd) ? Object.fromEntries(BAND_KEYS.map((k, i) => [k, +o.bd[i] || 0])) : null,
      centroid: +o.c || 0, brightness: +o.br || 0,
      rises: Array.isArray(o.ri) ? o.ri.map(([tt, rise]) => ({ t: +tt, rise: +rise })) : [],
      curve: Array.isArray(o.cu) ? o.cu.map(Number) : []
    }
  };
}

export function buildLink(tracks){
  const payload = b64url(JSON.stringify(tracks.slice(0, 2).map(x => pack(x.title, x.m))));
  return `${location.origin}${location.pathname}#r=${payload}`;
}

export function readLink(){
  const h = location.hash.match(/#r=([A-Za-z0-9_-]+)/);
  if (!h) return null;
  try {
    const arr = JSON.parse(unb64url(h[1]));
    return Array.isArray(arr) && arr.length ? arr.slice(0, 2).map(unpack) : null;
  } catch (_){ return null; }
}

/* ── PNG card (1080×1350, readable in feeds and stories) ── */
const ICON = { sleep: '😴', focus: '🎯', run: '🏃', long: '🎧' };
const LABEL_COLOR = { ideal: '#22c55e', good: '#a3e635', fair: '#f59e0b', avoid: '#ef4444' };

function wrap(ctx, text, x, y, maxW, lh, maxLines = 3){
  const words = text.split(' ');
  let line = '', lines = 0;
  for (const w of words){
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line){
      ctx.fillText(line, x, y); y += lh; line = w;
      if (++lines >= maxLines - 1){ line = words.slice(words.indexOf(w)).join(' '); break; }
    } else line = test;
  }
  if (ctx.measureText(line).width > maxW){
    while (line.length > 1 && ctx.measureText(line + '…').width > maxW) line = line.slice(0, -1);
    line += '…';
  }
  ctx.fillText(line, x, y);
  return y + lh;
}

function roundRect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

export async function drawCard(tracks, verdicts){
  const W = 1080, H = 1350;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#120a2a'); g.addColorStop(1, '#2e1065');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  const font = (w, s) => `${w} ${s}px Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;

  ctx.fillStyle = '#c4b5fd'; ctx.font = font(800, 40); ctx.fillText('ZenHertz', 72, 110);
  ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.font = font(500, 28);
  ctx.fillText(tracks.length > 1 ? t('duel.title') : t('r.verdict'), 72, 160);

  let y = 250;
  if (tracks.length === 1){
    const { title, s } = tracks[0];
    ctx.fillStyle = '#fff'; ctx.font = font(800, 62);
    y = wrap(ctx, title, 72, y, W - 144, 72, 2) + 10;
    ctx.fillStyle = '#e9d5ff'; ctx.font = font(600, 40);
    y = wrap(ctx, verdicts[0], 72, y, W - 144, 52, 3) + 30;
    for (const u of USAGES){
      const r = s.usages[u];
      roundRect(ctx, 72, y, W - 144, 150, 28); ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.fill();
      ctx.font = font(400, 56); ctx.fillText(ICON[u], 104, y + 98);
      ctx.fillStyle = '#fff'; ctx.font = font(700, 40); ctx.fillText(t('usage.' + u), 196, y + 70);
      ctx.fillStyle = LABEL_COLOR[r.label]; ctx.font = font(700, 30); ctx.fillText(t('r.label.' + r.label), 196, y + 116);
      ctx.fillStyle = '#fff'; ctx.font = font(800, 64); ctx.textAlign = 'right'; ctx.fillText(String(r.score), W - 110, y + 100); ctx.textAlign = 'left';
      y += 172;
    }
  } else {
    const [A, B] = tracks;
    ctx.fillStyle = '#fff'; ctx.font = font(800, 46);
    y = wrap(ctx, 'A · ' + A.title, 72, y, W - 144, 56, 2);
    ctx.fillStyle = '#c4b5fd'; y = wrap(ctx, 'B · ' + B.title, 72, y + 4, W - 144, 56, 2) + 30;
    for (const u of USAGES){
      const a = A.s.usages[u].score, b = B.s.usages[u].score;
      roundRect(ctx, 72, y, W - 144, 170, 28); ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = font(700, 38); ctx.fillText(`${ICON[u]}  ${t('usage.' + u)}`, 104, y + 60);
      const bw = W - 144 - 64 - 120;
      [[a, '#fff', 0], [b, '#c4b5fd', 1]].forEach(([v, col, i]) => {
        const by = y + 90 + i * 44;
        roundRect(ctx, 104, by, bw, 22, 11); ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fill();
        roundRect(ctx, 104, by, Math.max(22, bw * v / 100), 22, 11); ctx.fillStyle = col; ctx.fill();
        ctx.font = font(800, 30); ctx.fillText(`${'AB'[i]} ${v}`, 104 + bw + 20, by + 22);
      });
      y += 190;
    }
  }
  ctx.fillStyle = 'rgba(255,255,255,.75)'; ctx.font = font(600, 30);
  ctx.fillText(location.host || 'zen-hertz.vercel.app', 72, H - 72);
  return await new Promise(res => cv.toBlob(res, 'image/png'));
}

export async function shareOrDownload(blob, text, url){
  const file = new File([blob], 'zenhertz.png', { type: 'image/png' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })){
      await navigator.share({ files: [file], text: `${text} ${url}` });
      return 'shared';
    }
  } catch (e){ if (e && e.name === 'AbortError') return 'aborted'; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'zenhertz.png';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  return 'downloaded';
}

export async function copyText(text){
  try { await navigator.clipboard.writeText(text); return true; }
  catch (_){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) {}
    ta.remove();
    return ok;
  }
}
