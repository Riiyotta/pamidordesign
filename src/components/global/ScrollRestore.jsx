// Scroll position memory + route-change scroll reset.
// Port of the original module 64091 (sessionStorage "pamidor-scroll", manual history restoration),
// plus the scroll-to-top / scroll-to-hash that Next's router performs on push navigations.
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { scrollInstant } from '../../lib/global/lenis';

const KEY = 'pamidor-scroll';
const urlKey = () => location.pathname + location.search + location.hash;

function findHash(hash) {
  if (!hash || hash === '#') return null;
  const id = decodeURIComponent(hash.slice(1));
  if (id === 'top') return document.getElementById('top') || 0;
  return document.getElementById(id);
}

export default function ScrollRestore() {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const saved = useRef({});
  const pending = useRef(null);
  const lastPath = useRef(pathname);
  const first = useRef(true);

  const restore = (k) => {
    const y = saved.current[k] ?? 0;
    scrollInstant(y);
    let n = 2;
    const tick = () => {
      if (Math.abs(window.scrollY - y) > 1 && y <= document.documentElement.scrollHeight - window.innerHeight) scrollInstant(y);
      if (--n > 0) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    history.scrollRestoration = 'manual';
    try { const s = sessionStorage.getItem(KEY); if (s) saved.current = JSON.parse(s); } catch {}
    const onScroll = () => { if (pending.current === null) saved.current[urlKey()] = window.scrollY; };
    const persist = () => { try { sessionStorage.setItem(KEY, JSON.stringify(saved.current)); } catch {} };
    const onPop = () => {
      const k = urlKey();
      pending.current = k;
      if (location.pathname === lastPath.current) requestAnimationFrame(() => { if (pending.current === k) { pending.current = null; restore(k); } });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('popstate', onPop);
    window.addEventListener('pagehide', persist);
    document.addEventListener('visibilitychange', persist);
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav && (nav.type === 'reload' || nav.type === 'back_forward') && saved.current[urlKey()]) restore(urlKey());
    else if (location.hash && location.pathname !== '/') {
      // SSR got native fragment scrolling; the SPA renders after parse, so do it once here.
      requestAnimationFrame(() => { const el = findHash(location.hash); if (el) scrollInstant(el); });
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('popstate', onPop);
      window.removeEventListener('pagehide', persist);
      document.removeEventListener('visibilitychange', persist);
    };
  }, []);

  useLayoutEffect(() => {
    if (first.current) { first.current = false; return; }
    const changedPath = lastPath.current !== pathname;
    lastPath.current = pathname;
    const p = pending.current;
    if (p !== null) { pending.current = null; restore(p); return; }
    if (navType === 'POP' || !changedPath) return; // same-page hash links: Lenis `anchors` (or native) scrolls
    const el = findHash(hash);
    scrollInstant(el ?? 0);
  }, [key]);

  return null;
}
