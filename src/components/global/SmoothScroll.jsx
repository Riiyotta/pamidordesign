// Lenis smooth scroll — exact options from the original layout chunk (3caqzl0t03zug.js, module 18003).
import { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenis } from '../../lib/global/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, syncTouch: false, anchors: true, autoRaf: true, stopInertiaOnNavigate: true });
    setLenis(lenis);
    window.__lenis = lenis;
    const html = document.documentElement;
    const body = document.body;
    // Stop while the home loader runs or while something (menu / modal) locks body scroll.
    const sync = () => { (html.dataset.loading === 'true' || body.style.overflow === 'hidden') ? lenis.stop() : lenis.start(); };
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(html, { attributes: true, attributeFilter: ['data-loading'] });
    mo.observe(body, { attributes: true, attributeFilter: ['style'] });
    return () => { mo.disconnect(); setLenis(null); delete window.__lenis; lenis.destroy(); };
  }, []);
  return null;
}
