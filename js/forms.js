/* Forms → POST /api/submit (Vercel function). The confirmation is shown only
   when the server confirms delivery (res.ok); otherwise an error is shown. */
import { t } from './i18n.js';

export function bindForms(root = document){
  root.querySelectorAll('form[data-form]').forEach(form => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const status = form.querySelector('.form-status');
      const data = Object.fromEntries(new FormData(form).entries());
      data.type = form.dataset.form;
      data.lang = document.documentElement.lang;
      data.page = location.pathname;
      btn.disabled = true;
      const label = btn.textContent;
      btn.textContent = t('form.sending');
      status.textContent = ''; status.className = 'form-status';
      try {
        const res = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        status.textContent = t('form.ok'); status.classList.add('ok');
      } catch (_){
        status.textContent = t('form.err'); status.classList.add('err');
      } finally {
        btn.disabled = false; btn.textContent = label;
      }
    });
  });
}
