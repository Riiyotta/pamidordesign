// Local stand-ins for the original's form endpoints (no backend in this clone).
// Original: POST /api/subscribe {email, website, page} (newsletter "drops" form, chunk 0i9-w5fy8ra5v)
//           POST /api/lead {name,email,phone,reason,message,website} (home "Open the door" form)
// Both resolve like a fetch Response ({ ok }) so components keep the original state machine:
//   idle -> sending -> done/sent | failed (and 'invalid' client-side for subscribe).
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LATENCY = 700;
const wait = ms => new Promise(r => setTimeout(r, ms));

async function stubPost(endpoint, body) {
  await wait(LATENCY);
  // Honeypot: the original API silently accepts bot submissions; mirror that.
  if (typeof window !== 'undefined' && window.__PAMIDOR_FORMS_FAIL) return { ok: false, status: 500, endpoint, body };
  return { ok: true, status: 200, endpoint, body };
}

export function subscribe({ email, website = '', page = typeof window !== 'undefined' ? window.location.pathname : '/' }) {
  return stubPost('/api/subscribe', { email, website, page });
}

export function submitLead(fields) {
  return stubPost('/api/lead', fields);
}
