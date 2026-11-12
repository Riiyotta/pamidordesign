// Cookie notice — port of the original module 92016 (chunk 3-c2dq377uxaj.js).
// Appears 1.4s after load unless a choice is stored under localStorage "pamidor-consent-v1".
// (GA itself is not loaded in the clone.)
import { useEffect, useState } from 'react';

export const CONSENT_KEY = 'pamidor-consent-v1';
const BTN = 'group/btn items-center gap-3 border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let v = null;
    try { v = localStorage.getItem(CONSENT_KEY); } catch {}
    if (v === 'granted' || v === 'denied') return;
    const t = window.setTimeout(() => { setMounted(true); requestAnimationFrame(() => requestAnimationFrame(() => setShown(true))); }, 1400);
    return () => window.clearTimeout(t);
  }, []);

  // "Reset cookie choice" button on /privacy (original module 15550 in 00_ke73_g_6t6.js).
  useEffect(() => {
    const onClick = (e) => {
      const b = e.target instanceof Element && e.target.closest('button');
      if (!b || b.textContent.trim() !== 'Reset cookie choice') return;
      try { localStorage.removeItem(CONSENT_KEY); } catch {}
      const exp = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      const host = location.hostname.replace(/^www\./, '');
      document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga')).forEach((n) => {
        document.cookie = `${n}=; ${exp}`; document.cookie = `${n}=; ${exp}; domain=.${host}`;
      });
      location.reload();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const choose = (v) => {
    try { localStorage.setItem(CONSENT_KEY, v); } catch {}
    setShown(false);
    window.setTimeout(() => setMounted(false), 400);
  };

  if (!mounted) return null;
  return (
    <aside aria-label="Cookie notice" data-shown={shown || undefined} className="fixed bottom-4 left-4 z-[60] w-[min(21rem,calc(100vw-2rem))] border border-ink bg-canvas p-4 opacity-0 translate-y-3 transition-[opacity,transform] duration-500 ease-out-soft data-[shown]:translate-y-0 data-[shown]:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none sm:bottom-6 sm:left-6 sm:p-5">
      <p className="text-label uppercase text-muted">Cookies</p>
      <p className="mt-2 text-body text-ink">Analytics only - a count of visits and which work gets read. No ads, nothing sold.{' '}<a href="/privacy#cookies" className="underline underline-offset-4 hover:text-accent">Cookie policy</a></p>
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => choose('granted')} className={`${BTN} flex flex-1 justify-center border-ink bg-ink text-white hover:bg-transparent hover:text-ink`}>Accept</button>
        <button type="button" onClick={() => choose('denied')} className={`${BTN} flex flex-1 justify-center border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white`}>Decline</button>
      </div>
    </aside>
  );
}
