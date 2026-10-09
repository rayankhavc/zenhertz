/* Vercel serverless function: receives the site's forms and delivers them.
   Configure at least one destination in Vercel → Settings → Environment Variables:
     SUPABASE_URL + SUPABASE_KEY   insert into table zh_submissions (insert-only RLS)
     FORMS_WEBHOOK_URL   any webhook (Make, Zapier, n8n, Discord, Slack…) — JSON POST
     RESEND_API_KEY + FORMS_TO_EMAIL (+ FORMS_FROM_EMAIL)   email via resend.com
   Without a destination it answers 503, so the page shows an error instead of
   pretending the message was received. */
const TYPES = new Set(['pro', 'partner', 'feedback']);
const LIMITS = { name: 120, org: 160, email: 200, message: 4000, subject: 80, lang: 5, page: 200 };
const hits = new Map();   // naive per-instance rate limit

function clean(body){
  const out = {};
  for (const [k, max] of Object.entries(LIMITS)) if (typeof body[k] === 'string') out[k] = body[k].trim().slice(0, max);
  return out;
}

export default async function handler(req, res){
  if (req.method !== 'POST'){ res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'method' }); }
  let body = req.body;
  if (typeof body === 'string'){ try { body = JSON.parse(body); } catch (_){ body = {}; } }
  body = body || {};
  if (body.website) return res.status(200).json({ ok: true });            // honeypot: bots fill it
  const type = TYPES.has(body.type) ? body.type : null;
  const data = clean(body);
  if (!type) return res.status(400).json({ error: 'type' });
  if (type !== 'feedback' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email || '')) return res.status(400).json({ error: 'email' });
  if (type === 'feedback' && !data.message) return res.status(400).json({ error: 'message' });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const now = Date.now(), recent = (hits.get(ip) || []).filter(x => now - x < 60_000);
  if (recent.length >= 5) return res.status(429).json({ error: 'rate' });
  hits.set(ip, [...recent, now]);

  const record = { type, ...data, receivedAt: new Date().toISOString() };
  const deliveries = [];
  if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY){
    deliveries.push(fetch(`${process.env.SUPABASE_URL}/rest/v1/zh_submissions`, {
      method: 'POST',
      headers: {
        apikey: process.env.SUPABASE_KEY, Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
        'Content-Type': 'application/json', Prefer: 'return=minimal'
      },
      body: JSON.stringify({ type, name: data.name || null, org: data.org || null, email: data.email || null,
        message: data.message || null, subject: data.subject || null, lang: data.lang || null, page: data.page || null })
    }).then(r => { if (!r.ok) throw new Error('supabase ' + r.status); }));
  }
  if (process.env.FORMS_WEBHOOK_URL){
    deliveries.push(fetch(process.env.FORMS_WEBHOOK_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...record, content: `[ZenHertz · ${type}] ${data.name || ''} <${data.email || '—'}> ${data.org || ''}\n${data.message || ''}` })
    }).then(r => { if (!r.ok) throw new Error('webhook ' + r.status); }));
  }
  if (process.env.RESEND_API_KEY && process.env.FORMS_TO_EMAIL){
    deliveries.push(fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.FORMS_FROM_EMAIL || 'ZenHertz <onboarding@resend.dev>',
        to: process.env.FORMS_TO_EMAIL.split(',').map(s => s.trim()),
        reply_to: data.email || undefined,
        subject: `[ZenHertz] ${type} — ${data.name || data.email || 'anonyme'}`,
        text: Object.entries(record).map(([k, v]) => `${k}: ${v}`).join('\n')
      })
    }).then(r => { if (!r.ok) throw new Error('resend ' + r.status); }));
  }
  if (!deliveries.length){
    console.error('[submit] no destination configured; submission:', JSON.stringify(record));
    return res.status(503).json({ error: 'not_configured' });
  }
  const results = await Promise.allSettled(deliveries);
  if (results.some(r => r.status === 'fulfilled')) return res.status(200).json({ ok: true });
  console.error('[submit] delivery failed', results.map(r => r.reason && r.reason.message), JSON.stringify(record));
  return res.status(502).json({ error: 'delivery' });
}
