// Nav hamburger + full-screen menu, driven on the SSR markup already rendered by each page.
// Port of the nav component shared by all routes (00_ke73_g_6t6.js module 34172 and its per-route copies):
// toggle, aria state, scrim click, Escape, focus trap, body scroll lock, close on link click / route change.
// Visual transitions are pure CSS ([data-menu], [data-menu-scrim], [data-menu-item]) from original.css.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const OPEN_A = ['translate-y-[5px]', 'rotate-45'];
const OPEN_B = ['-translate-y-[5px]', '-rotate-45'];

const q = () => ({
  btn: document.querySelector('button[aria-controls="site-menu"]'),
  menu: document.getElementById('site-menu'),
  scrim: document.querySelector('[data-menu-scrim]'),
});

let isOpen = false;
let prevOverflow = '';

function apply(open) {
  const { btn, menu, scrim } = q();
  if (btn) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    const [a, b] = btn.querySelectorAll(':scope > span');
    OPEN_A.forEach((c) => a?.classList.toggle(c, open));
    OPEN_B.forEach((c) => b?.classList.toggle(c, open));
  }
  if (scrim) scrim.setAttribute('data-menu-scrim', open ? 'open' : 'closed');
  if (menu) {
    menu.setAttribute('data-menu', open ? 'open' : 'closed');
    menu.setAttribute('aria-hidden', String(!open));
    // menu links + email link: tabIndex undefined when open, -1 when closed
    menu.querySelectorAll('[data-menu-item] a').forEach((el) => { if (open) el.removeAttribute('tabindex'); else el.setAttribute('tabindex', '-1'); });
  }
}

function onKey(e) {
  if (e.key === 'Escape') { setOpen(false); return; }
  if (e.key !== 'Tab') return;
  const { menu } = q();
  const els = Array.from(menu?.querySelectorAll('a[href], button') ?? []);
  if (!els.length) return;
  const first = els[0], last = els[els.length - 1];
  const inside = menu.contains(document.activeElement);
  if (e.shiftKey && (document.activeElement === first || !inside)) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && (document.activeElement === last || !inside)) { e.preventDefault(); first.focus(); }
}

function setOpen(open) {
  if (open === isOpen) return;
  isOpen = open;
  apply(open);
  if (open) {
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    q().menu?.focus();
  } else {
    document.body.style.overflow = prevOverflow;
    window.removeEventListener('keydown', onKey);
    q().btn?.focus();
  }
}

export default function MenuController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const onClick = (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('button[aria-controls="site-menu"]')) { setOpen(!isOpen); return; }
      if (t.closest('[data-menu-scrim]')) { setOpen(false); return; }
      if (t.closest('#site-menu a')) setOpen(false);
    };
    // bubble phase on document (where React would see it); the curtain's capture handler
    // stops propagation for cross-route links, so the menu stays open under the curtain like the original.
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // useState(false) remount + close on pathname change
  useEffect(() => {
    if (isOpen) {
      isOpen = false;
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    }
    apply(false);
  }, [pathname]);

  return null;
}
