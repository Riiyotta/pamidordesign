// Minimal port of the original cart store (chunk 3-c2dq377uxaj, module 60147).
// Every product on the live site is sold out, so `add()` is a no-op for them and the
// drawer can never open in practice — the store exists so the drawer matches 1:1.
import { useSyncExternalStore } from 'react';

const KEY = 'pamidor-cart-v1';
const PRODUCTS = {
  'red-series-01': { soldOut: true }, 'red-series-02': { soldOut: true }, 'red-series-03': { soldOut: true },
  'inked-frame': { soldOut: true }, 'pink-portrait': { soldOut: true },
};
let state = { lines: [], open: false };
const subs = new Set();
const emit = () => subs.forEach((f) => f());
const set = (patch) => { state = { ...state, ...patch }; emit(); };

if (typeof window !== 'undefined') {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (Array.isArray(raw)) state.lines = raw.filter((l) => { const p = PRODUCTS[l?.slug]; return !!p && !p.soldOut && Number.isInteger(l.qty) && l.qty > 0; });
  } catch {}
}

const persist = (lines) => { set({ lines }); try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch {} };

export const cart = {
  get: () => state,
  subscribe: (f) => { subs.add(f); return () => subs.delete(f); },
  setOpen: (open) => set({ open }),
  add: (slug) => {
    const p = PRODUCTS[slug]; if (!p || p.soldOut) return;
    const ex = state.lines.find((l) => l.slug === slug);
    persist(ex ? state.lines.map((l) => (l.slug === slug ? { ...l, qty: l.qty + 1 } : l)) : [...state.lines, { slug, qty: 1 }]);
    set({ open: true });
  },
  remove: (slug) => persist(state.lines.filter((l) => l.slug !== slug)),
};

export function useCart() {
  const s = useSyncExternalStore(cart.subscribe, cart.get, cart.get);
  const count = s.lines.reduce((a, l) => a + l.qty, 0);
  return { ...s, count, subtotal: 0, setOpen: cart.setOpen, add: cart.add, remove: cart.remove };
}
