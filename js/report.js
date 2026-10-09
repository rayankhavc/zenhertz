/* Report rendering (HTML strings). Single track, duel (2) and playlist (3+). */
import { t } from './i18n.js';
import { USAGES, hasPulse, cadenceOf, compare, orderPlaylist } from './scoring.js';

const ICON = { sleep: '😴', focus: '🎯', run: '🏃', long: '🎧' };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const fmtTime = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
const fmtNum = (v, d = 1) => Number(v).toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: 0 });

/* One-sentence verdict, deterministic. */
export function verdict(s){
  const best = s.usages[s.best], worst = s.usages[s.worst];
  let out;
  if (best.label === 'ideal') out = t('r.best', { usage: t('r.for.' + s.best) });
  else if (best.label === 'good') out = t('r.goodFor', { usage: t('r.for.' + s.best) });
  else out = t('r.noIdeal', { usage: t('r.for.' + s.best) });
  if (worst.label === 'avoid' && s.worst !== s.best) out += ' ' + t('r.avoid', { usage: t('r.for.' + s.worst) });
  return out;
}

function reasonText(u, r){
  switch (r.k){
    case 'rise': {
      const more = r.n > 2 ? t('why.riseMore', { n: r.n - 1 }) : r.n === 2 ? t('why.riseMore1') : '';
      return t('why.rise', { time: fmtTime(r.t), more });
    }
    case 'cadence': return t('why.run.cadence.' + r.zone, { c: r.c });
    case 'swings': case 'lowEnergy': case 'midEnergy': case 'highEnergy': return t('why.' + r.k);
    default: return t(`why.${u}.${r.k}`, r);
  }
}

/* Notes shown smaller (generic caveats, not track-specific). */
const NOTE_KEYS = new Set(['lyrics', 'volume']);

export function bpmBlock(m){
  if (!hasPulse(m)) return { main: '—', sub: t('r.bpmNone') };
  const b = Math.round(m.bpm);
  const approx = !m.tempoAgreement && m.pulseClarity < 0.2;
  let sub = approx ? t('r.bpmApprox') : 'BPM';
  if (b >= 70 && b < 100 && m.pulseClarity >= 0.25) sub = `BPM · ${t('r.bpmDouble', { b: b * 2 })}`;
  return { main: (approx ? '≈ ' : '') + b, sub };
}

function usageCard(u, r){
  const reasons = r.reasons.filter(x => !NOTE_KEYS.has(x.k)).slice(0, 2).map(x => `<li>${esc(reasonText(u, x))}</li>`).join('');
  const notes = r.reasons.filter(x => NOTE_KEYS.has(x.k)).map(x => `<p class="u-note">${esc(reasonText(u, x))}</p>`).join('');
  return `<article class="ucard lab-${r.label}">
    <header class="ucard-h"><span class="u-ico" aria-hidden="true">${ICON[u]}</span>
      <div><h3>${t('usage.' + u)}</h3><p class="u-lab">${t('r.label.' + r.label)}</p></div>
      <p class="u-score" aria-label="${r.score}/100"><b>${r.score}</b><small>/100</small></p></header>
    <div class="bar" aria-hidden="true"><i style="width:${Math.max(3, r.score)}%"></i></div>
    <ul class="u-why">${reasons}</ul>${notes}
    <button class="ev ev-${r.evidence}" type="button" aria-expanded="false" data-ev="${u}">
      <span class="ev-dot" aria-hidden="true"></span>${t('r.ev.' + r.evidence)} <span aria-hidden="true">ⓘ</span></button>
    <p class="ev-text" hidden>${t('ev.' + u)}</p>
  </article>`;
}

function curveSvg(m){
  const c = m.curve;
  if (!c || c.length < 2) return '';
  const W = 600, H = 120, lo = Math.max(-60, Math.min(...c) - 2), hi = Math.max(...c) + 2;
  const x = i => (i / (c.length - 1)) * W, y = v => H - ((Math.max(lo, v) - lo) / (hi - lo || 1)) * (H - 10) - 5;
  const pts = c.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const total = m.analyzedSeconds || 1;
  const marks = m.rises.map(r => {
    const xx = (r.t / total) * W;
    return `<g class="rise"><line x1="${xx}" x2="${xx}" y1="0" y2="${H}"/><circle cx="${xx}" cy="8" r="6"><title>${t('r.curveRise')} ${fmtTime(r.t)}</title></circle></g>`;
  }).join('');
  return `<figure class="curve"><figcaption>${t('r.curve')}${m.rises.length ? ` · <span class="rise-key">● ${t('r.curveRise')}</span>` : ''}</figcaption>
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${t('r.curve')}">
      <polygon class="area" points="0,${H} ${pts} ${W},${H}"/><polyline class="line" points="${pts}"/>${marks}</svg>
    <div class="curve-axis"><span>0:00</span><span>${fmtTime(total)}</span></div></figure>`;
}

function measures(m){
  const row = (k, v) => `<tr><th scope="row">${t(k)}</th><td>${v}</td></tr>`;
  const bands = m.bands ? Object.entries(m.bands).map(([k, v]) =>
    `<div class="band"><span>${t('m.band.' + k)}</span><i style="width:${Math.max(2, v * 100)}%"></i><b>${Math.round(v * 100)} %</b></div>`).join('') : '—';
  return `<details class="measures"><summary>${t('r.measures')}</summary><table>
    ${row('m.duration', fmtTime(m.duration))}
    ${row('m.bpm', m.bpm ? fmtNum(m.bpm) + ' BPM' : '—')}
    ${row('m.clarity', Math.round(m.pulseClarity * 100) + ' %')}
    ${row('m.stability', Math.round(m.tempoStability * 100) + ' %')}
    ${row('m.agree', m.tempoAgreement ? t('m.yes') : t('m.no'))}
    ${row('m.onsets', fmtNum(m.onsetRate))}
    ${row('m.lufs', fmtNum(m.lufs) + ' LUFS')}
    ${row('m.lra', fmtNum(m.lra) + ' LU')}
    ${row('m.peak', fmtNum(m.peakDb) + ' dBFS')}
    ${row('m.plr', fmtNum(m.plr) + ' dB')}
    ${row('m.bright', Math.round(m.brightness * 100) + ' %')}
    ${row('m.centroid', fmtNum(m.centroid, 0) + ' Hz')}
    </table><div class="bands"><p>${t('m.bands')}</p>${bands}</div></details>`;
}

let uid = 0;
export function renderSingle(tr, { shared = false, embedded = false } = {}){
  const { title, m, s } = tr;
  const hid = 'rep-' + (++uid);
  const bpm = bpmBlock(m);
  const cad = cadenceOf(m);
  const cropped = m.duration > m.analyzedSeconds + 1;
  return `<section class="report${embedded ? ' embedded' : ''}" aria-labelledby="${hid}">
    ${shared && !embedded ? `<div class="shared-banner"><div><b>${t('r.shared')}</b><p>${t('r.sharedSub')}</p></div>
      <div class="sb-actions"><button class="btn btn-primary" data-act="challenge">${t('r.challenge')}</button><button class="btn" data-act="new">${t('r.analyzeMine')}</button></div></div>` : ''}
    <header class="rep-head">
      <p class="eyebrow">${t('r.verdict')}</p>
      <h2 id="${hid}" class="rep-title">${esc(title)}</h2>
      <p class="rep-verdict">${esc(verdict(s))}</p>
      <div class="chips">
        <span class="chip"><b>${bpm.main}</b> ${esc(bpm.sub)}</span>
        ${cad ? `<span class="chip"><b>${t('r.cadence', { c: cad })}</b></span>` : ''}
        <span class="chip"><b>${s.energy}</b>/100 ${t('r.energy')}</span>
        <span class="chip"><b>${fmtNum(m.lufs)}</b> LUFS</span>
      </div>
      ${cropped ? `<p class="muted small">${t('r.analyzedPart', { s: Math.round(m.analyzedSeconds / 60) })}</p>` : ''}
    </header>
    <div class="ugrid">${USAGES.map(u => usageCard(u, s.usages[u])).join('')}</div>
    ${curveSvg(m)}
    ${measures(m)}
    ${embedded ? '' : `<div class="rep-actions">
      <button class="btn btn-primary" data-act="share">${t('r.share')}</button>
      <button class="btn" data-act="copy">${t('r.copyLink')}</button>
      ${shared ? '' : `<button class="btn" data-act="compare">${t('r.compare')}</button>`}
    </div>
    <p class="disclaimer">${t('r.disclaimer')}</p>`}
  </section>`;
}

export function renderDuel(A, B, { shared = false } = {}){
  const w = compare(A.s, B.s);
  const name = i => (i === 0 ? 'A' : 'B');
  const rows = USAGES.map(u => {
    const a = A.s.usages[u].score, b = B.s.usages[u].score;
    const win = w[u];
    return `<div class="drow"><h3><span aria-hidden="true">${ICON[u]}</span> ${t('usage.' + u)}
        <span class="ev-mini ev-${A.s.usages[u].evidence}">${t('r.ev.' + A.s.usages[u].evidence)}</span></h3>
      <div class="dbar ${win === 0 ? 'win' : ''}"><span class="dl">A</span><div class="bar"><i style="width:${Math.max(3, a)}%"></i></div><b>${a}</b>${win === 0 ? '<span class="crown" aria-label="winner">👑</span>' : ''}</div>
      <div class="dbar b ${win === 1 ? 'win' : ''}"><span class="dl">B</span><div class="bar"><i style="width:${Math.max(3, b)}%"></i></div><b>${b}</b>${win === 1 ? '<span class="crown" aria-label="winner">👑</span>' : ''}</div></div>`;
  }).join('');
  const summary = USAGES.map(u => `<li>${w[u] === 'tie' ? t('duel.forTie', { usage: t('r.for.' + u) }) : t('duel.for', { usage: t('r.for.' + u), winner: `<b>${name(w[u])}</b>` })}</li>`).join('');
  const tag = (tr, i) => { const bp = bpmBlock(tr.m); return `<div class="dname"><span class="dl">${name(i)}</span><div><b>${esc(tr.title)}</b><small>${bp.main} ${esc(bp.sub)} · ${t('r.energy')} ${tr.s.energy}/100</small></div></div>`; };
  return `<section class="report duel" aria-labelledby="duel-title">
    ${shared ? `<div class="shared-banner"><div><b>${t('r.shared')}</b><p>${t('r.sharedSub')}</p></div><div class="sb-actions"><button class="btn btn-primary" data-act="new">${t('r.analyzeMine')}</button></div></div>` : ''}
    <header class="rep-head"><p class="eyebrow">${t('duel.title')}</p><h2 id="duel-title" class="sr-only">${t('duel.title')}</h2>
      <div class="dnames">${tag(A, 0)}<span class="vs">${t('duel.vs')}</span>${tag(B, 1)}</div></header>
    <div class="drows">${rows}</div>
    <div class="dsum"><h3>${t('duel.summary')}</h3><ul>${summary}</ul></div>
    <div class="rep-actions"><button class="btn btn-primary" data-act="share">${t('r.share')}</button><button class="btn" data-act="copy">${t('r.copyLink')}</button></div>
    <div class="tabs" role="tablist">
      <button role="tab" class="tab on" aria-selected="true" data-tab="0">A · ${t('duel.details')}</button>
      <button role="tab" class="tab" aria-selected="false" data-tab="1">B · ${t('duel.details')}</button></div>
    <div class="tabpanel" data-panel="0">${renderSingle(A, { embedded: true })}</div>
    <div class="tabpanel" data-panel="1" hidden>${renderSingle(B, { embedded: true })}</div>
    <p class="disclaimer">${t('r.disclaimer')}</p>
  </section>`;
}

export const PLAYLIST_MODES = ['run', 'session', 'winddown', 'focus', 'bpm'];

export function renderPlaylist(items, mode){
  const ordered = orderPlaylist(items, mode);
  const scoreKey = { run: 'run', session: 'run', winddown: 'sleep', focus: 'focus', bpm: 'run' }[mode];
  const rows = ordered.map((x, i) => {
    const bp = bpmBlock(x.m), cad = cadenceOf(x.m);
    const sc = x.s.usages[scoreKey];
    return `<tr><td class="num">${i + 1}</td><td class="tt">${esc(x.title)}</td><td>${bp.main}</td><td>${cad || '—'}</td>
      <td><div class="mini"><i style="width:${x.s.energy}%"></i></div><span class="sr-only">${x.s.energy}</span></td>
      <td><span class="pill lab-${sc.label}">${sc.score}</span></td></tr>`;
  }).join('');
  return `<section class="report playlist" aria-labelledby="pl-title">
    <header class="rep-head"><p class="eyebrow">${t('pl.n', { n: items.length })}</p><h2 id="pl-title" class="rep-title">${t('pl.title')}</h2>
      <label class="pl-sort">${t('pl.sort')}
        <select data-act="plmode">${PLAYLIST_MODES.map(k => `<option value="${k}" ${k === mode ? 'selected' : ''}>${t('pl.mode.' + k)}</option>`).join('')}</select></label></header>
    <div class="table-wrap"><table class="pl-table"><thead><tr><th>#</th><th>${t('pl.col.title')}</th><th>${t('pl.col.bpm')}</th><th>${t('pl.col.cad')}</th><th>${t('pl.col.energy')}</th><th>${t('pl.col.score')}</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
    <div class="rep-actions"><button class="btn btn-primary" data-act="csv">${t('pl.export')}</button></div>
    <p class="muted small">${t('pl.pro')} <a href="#pro">${t('nav.pro')} →</a></p>
    <p class="disclaimer">${t('r.disclaimer')}</p>
  </section>`;
}

export function playlistCsv(items, mode){
  const ordered = orderPlaylist(items, mode);
  const q = v => `"${String(v).replace(/"/g, '""')}"`;
  const head = ['#', 'title', 'bpm', 'steps_per_min', 'energy', ...USAGES.map(u => 'score_' + u), 'lufs', 'plr_db', 'duration_s'];
  const lines = ordered.map((x, i) => [i + 1, q(x.title), hasPulse(x.m) ? Math.round(x.m.bpm) : '', cadenceOf(x.m) || '', x.s.energy,
    ...USAGES.map(u => x.s.usages[u].score), x.m.lufs, x.m.plr, Math.round(x.m.duration)].join(','));
  return [head.join(','), ...lines].join('\n');
}
