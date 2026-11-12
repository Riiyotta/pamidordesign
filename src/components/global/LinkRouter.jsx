// Client-side routing for plain <a href="/..."> in the generated markup (stands in for next/link).
// Runs in the bubble phase, after RouteCurtain's capture handler; anything it already handled is
// defaultPrevented and skipped. Covers same-page links and the reduced-motion (no curtain) path.
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLenis } from '../../lib/global/lenis';

export default function LinkRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target?.closest?.('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      e.preventDefault();
      const to = url.pathname + url.search + url.hash;
      if (url.pathname !== window.location.pathname) { navigate(to); return; }
      if (to !== window.location.pathname + window.location.search + window.location.hash) navigate(to);
      if (url.hash) {
        // With Lenis, its `anchors` click handler (window, bubble) performs the smooth scroll.
        if (!getLenis()) {
          const id = decodeURIComponent(url.hash.slice(1));
          const el = document.getElementById(id);
          if (el) el.scrollIntoView(); else if (id === 'top') window.scrollTo({ top: 0 });
        }
      } else {
        window.scrollTo({ top: 0 }); // html{scroll-behavior:smooth} makes this smooth, like Next
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
  return null;
}
