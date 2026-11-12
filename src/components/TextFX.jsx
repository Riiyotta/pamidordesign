// Owned by the "text effects" workstream: data-hw char sweep/wave, data-hw-appear,
// data-wave, data-reveal, data-word — shared across every route.
//
// The per-character hover sweep ([data-hw] / [data-hw-char] / --hwi) and the
// [data-hw-appear] reveal are pure CSS in src/original.css (keyframes hw-sweep /
// hw-appear, 0.4s, delay --hwi * 16ms, triggered by :hover or [data-hw-on]); the
// only JS involved is whoever toggles data-hw-on (home projects list, below).
//
// Everything else is DOM-driven: a scan in a layout effect (before paint, so
// .reveal elements never flash in their final position) re-run on every pathname
// change, plus a MutationObserver so content mounted later (delayed route
// transitions, lazy sections) is picked up too. Detached elements are cleaned up.
import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { collect } from '../lib/text/motion';
import { REVEAL_SELECTOR, attachReveal } from '../lib/text/reveal';
import { WAVE_SELECTOR, waveHostOf, attachWave } from '../lib/text/wave';
import { COUNT_SELECTOR, attachCountUp } from '../lib/text/countUp';
import { PROJECTS_SELECTOR, attachProjectsList } from '../lib/text/projectsList';

function createRegistry() {
  const reg = new Map(); // element -> cleanup | null
  const track = (el, attach) => {
    if (!reg.has(el)) reg.set(el, attach(el));
  };
  return {
    scan(root) {
      collect(root, REVEAL_SELECTOR).forEach((el) => track(el, attachReveal));
      new Set(collect(root, WAVE_SELECTOR).map(waveHostOf).filter(Boolean)).forEach((p) => track(p, attachWave));
      collect(root, COUNT_SELECTOR).forEach((el) => track(el, attachCountUp));
      collect(root, PROJECTS_SELECTOR).forEach((el) => track(el, attachProjectsList));
    },
    sweep() {
      for (const [el, off] of reg) {
        if (!el.isConnected) {
          off?.();
          reg.delete(el);
        }
      }
    },
    destroy() {
      for (const off of reg.values()) off?.();
      reg.clear();
    },
  };
}

function useTextEffects(pathname) {
  const registry = useRef(null);

  // Lifetime: registry + MutationObserver for late-mounted content.
  useLayoutEffect(() => {
    const reg = createRegistry();
    registry.current = reg;
    reg.scan(document.body);
    const mo = new MutationObserver((records) => {
      let removed = false;
      for (const r of records) {
        if (r.removedNodes.length) removed = true;
        r.addedNodes.forEach((n) => n.nodeType === 1 && reg.scan(n));
      }
      if (removed) reg.sweep();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      reg.destroy();
      registry.current = null;
    };
  }, []);

  // Route change: drop effects bound to the old page, bind the new page.
  useLayoutEffect(() => {
    const reg = registry.current;
    if (!reg) return;
    reg.sweep();
    reg.scan(document.body);
  }, [pathname]);
}

export default function TextFX() {
  const { pathname } = useLocation();
  useTextEffects(pathname);
  return null;
}
