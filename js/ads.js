import config from './ads.config.js';
import { t } from './i18n.js';

/* Fills every <div data-ad="slot-id"> according to ads.config.js. Space is
   reserved in CSS so slots never shift the layout. */
export function renderAds(root = document){
  root.querySelectorAll('[data-ad]').forEach(el => {
    const slot = config.slots[el.dataset.ad];
    if (config.mode === 'off' || !slot){ el.hidden = true; return; }
    el.className = `ad ad-${slot.size}`;
    el.setAttribute('role', 'complementary');
    el.setAttribute('aria-label', t('ad.label'));
    el.innerHTML = `<span class="ad-label">${t('ad.label')}</span>
      <div class="ad-body"><b>${t('ad.title')}</b><p>${t('ad.text')}</p></div>
      <a class="btn btn-small" href="#partenaires" data-subject="pub">${t('ad.cta')}</a>`;
  });
}
