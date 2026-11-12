// Route transition curtain — port of the original module 52348.
// idle -> cover (0.667s, CSS) -> navigate -> reveal (0.754s, CSS) -> idle.
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RouteCurtain() {
  const [state, setState] = useState('idle');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const target = useRef(null);
  const lastPath = useRef(pathname);
  const stateRef = useRef('idle');
  stateRef.current = state;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      e.preventDefault();
      e.stopPropagation();
      target.current = url.pathname + url.search + url.hash;
      setState('cover');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  useEffect(() => {
    if (state !== 'cover' || !target.current) return;
    const t = window.setTimeout(() => { const to = target.current; target.current = null; if (to) navigate(to); }, 667);
    return () => window.clearTimeout(t);
  }, [state, navigate]);

  useEffect(() => {
    if (pathname === lastPath.current) return;
    lastPath.current = pathname;
    if (stateRef.current !== 'cover') return;
    setState('reveal');
    const t = window.setTimeout(() => setState('idle'), 754);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return <div aria-hidden="true" data-route-curtain={state} className="pointer-events-none fixed inset-0 z-[90] bg-night" />;
}
