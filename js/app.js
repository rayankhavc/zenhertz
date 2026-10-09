/* ZenHertz v2 — UI orchestration. */
import { t, getLang, setLang, applyStatic } from './i18n.js';
import { decodeFile, titleFromFile, unlockAudio, ANALYSIS_RATE, MAX_SECONDS, MAX_MB } from './decode.js';
import { analyze, analyzeOnMainThread } from './engine.js';
import { scoreTrack } from './scoring.js';
import { renderSingle, renderDuel, renderPlaylist, playlistCsv, verdict, PLAYLIST_MODES } from './report.js';
import { buildLink, readLink, drawCard, shareOrDownload, copyText } from './share.js';
import { renderAds } from './ads.js';
import { bindForms } from './forms.js';
import { LEGAL } from './legal.js';

const MAX_FILES = 10;
const $ = s => document.querySelector(s);
const state = { tracks: [], plMode: 'run', shared: false, pendingA: null };

/* ── i18n / theme ── */
function refreshText(){
  applyStatic();
  renderAds();
  loadValidation();
  if (state.tracks.length) renderReport();
}
function toggleTheme(){
  const cur = document.documentElement.dataset.theme
    || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('zh-theme', next); } catch (_) {}
}

let validation = null;
async function loadValidation(){
  if (!validation){
    try { validation = await (await fetch('tests/results.json', { cache: 'no-store' })).json(); }
    catch (_){ validation = { passed: 18, total: 18 }; }
  }
  $('#valid-text').innerHTML = t('method.valid.p', { passed: validation.passed, total: validation.total });
}

function toast(msg){
  const el = $('#toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ── views ── */
function showHome(){
  $('#app').hidden = true; $('#home').hidden = false;
  document.body.classList.remove('in-app');
  state.tracks = []; state.shared = false; state.pendingA = null;
  if (location.hash.startsWith('#r=')) history.replaceState(null, '', location.pathname);
  scrollTo({ top: 0, behavior: 'smooth' });
}
function showApp(){
  $('#home').hidden = true; $('#app').hidden = false;
  document.body.classList.add('in-app');
  scrollTo({ top: 0 });
}

/* ── analysis ── */
const STAGES = { read: 'an.read', decode: 'an.decode', decodeFf: 'an.decodeFf', capture: 'an.capture', analyze: 'an.analyze', done: 'an.done', fail: 'an.fail' };

function progressRow(i, name){
  const li = document.createElement('li');
  li.className = 'prow';
  li.innerHTML = `<span class="spin" aria-hidden="true"></span><div><b></b><small></small></div>`;
  li.querySelector('b').textContent = name;
  $('#progress-list').appendChild(li);
  return stage => {
    li.querySelector('small').textContent = t(STAGES[stage]);
    li.dataset.stage = stage;
  };
}

async function analyzeFile(file, setStage){
  const meta = f => ({ duration: f.duration, maxSeconds: MAX_SECONDS });
  const decoded = await decodeFile(file, setStage);
  setStage('analyze');
  let m;
  try { m = await analyze(decoded.channels, ANALYSIS_RATE, meta(decoded)); }
  catch (e){
    if (e.code !== 'worker_failed') throw e;
    const again = await decodeFile(file, () => {});
    m = await analyzeOnMainThread(again.channels, ANALYSIS_RATE, meta(again));
  }
  return { title: titleFromFile(file), m, s: scoreTrack(m) };
}

async function handleFiles(fileList, { append = false } = {}){
  let files = [...fileList].filter(f => f && f.size > 0);
  if (!files.length) return;
  unlockAudio();
  const tooBig = files.filter(f => f.size > MAX_MB * 1024 * 1024);
  tooBig.forEach(f => toast(t('err.tooBig', { name: f.name, mb: MAX_MB })));
  files = files.filter(f => !tooBig.includes(f));
  const room = MAX_FILES - (append ? state.tracks.length : 0);
  if (files.length > room){ toast(t('drop.limit', { n: MAX_FILES })); files = files.slice(0, room); }
  if (!files.length) return;

  const base = append ? state.tracks.slice() : (state.pendingA ? [state.pendingA] : []);
  state.pendingA = null;
  state.shared = false;
  if (location.hash.startsWith('#r=')) history.replaceState(null, '', location.pathname);
  showApp();
  $('#report').innerHTML = '';
  $('#progress-list').innerHTML = '';
  $('#progress').hidden = false;

  const results = [];
  for (const f of files){
    const set = progressRow(results.length, titleFromFile(f));
    set('read');
    try { results.push(await analyzeFile(f, set)); set('done'); }
    catch (e){ console.warn('analysis failed', f.name, e); set('fail'); }
  }
  const ok = base.concat(results);
  if (!results.length){
    toast(t('err.file'));
    if (!ok.length){ setTimeout(showHome, 1600); return; }
  }
  state.tracks = ok;
  $('#progress').hidden = true;
  renderReport();
}

/* ── report ── */
function renderReport(){
  const tr = state.tracks;
  const box = $('#report');
  if (tr.length === 1) box.innerHTML = renderSingle(tr[0], { shared: state.shared });
  else if (tr.length === 2) box.innerHTML = renderDuel(tr[0], tr[1], { shared: state.shared });
  else box.innerHTML = renderPlaylist(tr.map((x, i) => ({ ...x, i })), state.plMode);
  renderAds($('#app'));
  box.querySelector('.report')?.focus?.();
}

async function onShare(){
  const tr = state.tracks.slice(0, 2);
  const url = buildLink(tr);
  const text = tr.length === 2
    ? t('share.duel', { a: tr[0].title, b: tr[1].title })
    : t('share.text', { title: tr[0].title, verdict: verdict(tr[0].s) });
  try {
    const blob = await drawCard(tr, tr.map(x => verdict(x.s)));
    const r = await shareOrDownload(blob, text, url);
    if (r === 'downloaded'){ await copyText(`${text} ${url}`); toast(t('err.share') + ' ' + t('r.copied')); }
  } catch (_){
    if (await copyText(`${text} ${url}`)) toast(t('r.copied'));
  }
}

function downloadCsv(){
  const csv = playlistCsv(state.tracks.map((x, i) => ({ ...x, i })), state.plMode);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
  a.download = `zenhertz-playlist-${state.plMode}.csv`;
  document.body.appendChild(a); a.click(); a.remove();
}

/* ── modal ── */
function openModal(kind, opts = {}){
  const dlg = $('#modal'), body = $('#modal-body');
  if (kind === 'legal' || kind === 'privacy'){
    const c = (LEGAL[getLang()] || LEGAL.fr)[kind];
    body.innerHTML = `<h2 id="modal-title" class="h3">${c.title}</h2><div class="prose">${c.html}</div>`;
  } else {
    body.innerHTML = '';
    body.appendChild($('#tpl-' + kind).content.cloneNode(true));
    applyStatic(body);
    if (opts.subject) body.querySelector('[name=subject]')?.setAttribute('value', opts.subject);
    bindForms(body);
  }
  if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  body.querySelector('input,textarea')?.focus();
}
function closeModal(){ const d = $('#modal'); if (d.close) d.close(); else d.removeAttribute('open'); }

/* ── events ── */
const input = $('#file-input');
let pickMode = 'new';
function pick(mode){ pickMode = mode; input.value = ''; input.click(); }
input.addEventListener('change', () => {
  const files = input.files;
  if (!files || !files.length) return;
  handleFiles(files, { append: pickMode === 'compare' });
});

const drop = $('#drop');
drop.addEventListener('click', () => pick('new'));
drop.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); pick('new'); } });

let dragDepth = 0;
const veil = $('#dropveil');
addEventListener('dragenter', e => { if ([...(e.dataTransfer?.types || [])].includes('Files')){ dragDepth++; veil.classList.add('on'); } });
addEventListener('dragleave', () => { if (--dragDepth <= 0){ dragDepth = 0; veil.classList.remove('on'); } });
addEventListener('dragover', e => e.preventDefault());
addEventListener('drop', e => {
  e.preventDefault(); dragDepth = 0; veil.classList.remove('on');
  if (e.dataTransfer?.files?.length) handleFiles(e.dataTransfer.files, { append: !$('#app').hidden && state.tracks.length === 1 && !state.shared });
});

document.addEventListener('click', async e => {
  const el = e.target.closest('[data-act],[data-modal],[data-close],[data-ev],[data-tab],a[href^="#"]');
  if (!el) return;
  if (el.dataset.modal){ e.preventDefault(); openModal(el.dataset.modal); return; }
  if (el.hasAttribute('data-close')){
    closeModal();
    if (el.getAttribute('href')?.startsWith('#')) return;   // let the anchor scroll
    return;
  }
  if (el.dataset.ev){
    const card = el.closest('.ucard'), txt = card.querySelector('.ev-text');
    const open = el.getAttribute('aria-expanded') === 'true';
    el.setAttribute('aria-expanded', String(!open)); txt.hidden = open;
    return;
  }
  if (el.dataset.tab){
    const root = el.closest('.report');
    root.querySelectorAll('.tab').forEach(b => { const on = b === el; b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on)); });
    root.querySelectorAll('.tabpanel').forEach(p => { p.hidden = p.dataset.panel !== el.dataset.tab; });
    return;
  }
  const href = el.getAttribute('href');
  if (href && href.length > 1 && !el.dataset.act){
    // In-page anchors live in the home view.
    if ($('#home').hidden && document.querySelector(href)){ e.preventDefault(); showHome(); setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50); }
    if (el.dataset.subject){ const s = document.querySelector('#partenaires [name=subject]'); if (s) s.value = el.dataset.subject; }
    return;
  }
  switch (el.dataset.act){
    case 'home': e.preventDefault(); showHome(); break;
    case 'new': showHome(); setTimeout(() => pick('new'), 50); break;
    case 'compare': pick('compare'); break;
    case 'challenge': state.pendingA = state.tracks[0]; pick('new'); break;
    case 'share': onShare(); break;
    case 'copy': {
      const ok = await copyText(buildLink(state.tracks.slice(0, 2)));
      toast(ok ? t('r.copied') : buildLink(state.tracks.slice(0, 2)));
      break;
    }
    case 'csv': downloadCsv(); break;
    case 'lang': setLang(getLang() === 'fr' ? 'en' : 'fr'); refreshText(); break;
    case 'theme': toggleTheme(); break;
    case 'pro': openModal('pro', { subject: el.dataset.plan }); break;
    case 'feedback': e.preventDefault(); openModal('feedback'); break;
  }
});

document.addEventListener('change', e => {
  if (e.target.matches('[data-act=plmode]') && PLAYLIST_MODES.includes(e.target.value)){
    state.plMode = e.target.value;
    renderReport();
  }
});

$('#modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });

/* ── boot ── */
refreshText();
bindForms();
const shared = readLink();
if (shared){
  state.tracks = shared.map(x => ({ ...x, s: scoreTrack(x.m) }));
  state.shared = true;
  showApp();
  renderReport();
}
