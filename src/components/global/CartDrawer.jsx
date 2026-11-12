// Cart drawer — port of the original module 29427 (3caqzl0t03zug.js). Renders nothing until the cart
// is opened (only via add-to-cart, and every product on the live site is sold out).
import { useEffect, useRef, useState } from 'react';
import { useCart, cart as cartStore } from '../../lib/global/cart';

const T = { title: 'CART', empty: 'Nothing here yet.', subtotal: 'Subtotal', note: 'Shipping and taxes calculated at checkout', checkout: 'Checkout', continue: 'Continue Shopping', unavailable: 'Checkout is not connected yet - write to dor@pamidordesign.co and the order is yours.' };
const usd = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

export default function CartDrawer() {
  const cart = useCart();
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const panel = useRef(null);
  const closeBtn = useRef(null);
  const prevFocus = useRef(null);

  useEffect(() => {
    if (!cart.open) return;
    prevFocus.current = document.activeElement;
    closeBtn.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { cart.setOpen(false); return; }
      if (e.key !== 'Tab') return;
      const els = panel.current?.querySelectorAll('button, a[href]');
      if (!els || !els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); prevFocus.current?.focus(); };
  }, [cart.open]);

  useEffect(() => { if (!cart.open) setFailed(false); }, [cart.open]);

  // Shop BuyBox dispatches window 'cart:add' {detail:{slug}} (stands in for useCart().add).
  useEffect(() => {
    const onAdd = (e) => { const slug = e?.detail?.slug; if (slug) cartStore.add(slug); };
    window.addEventListener('cart:add', onAdd);
    return () => window.removeEventListener('cart:add', onAdd);
  }, []);

  const checkout = async () => {
    if (busy || cart.lines.length === 0) return;
    setBusy(true); setFailed(false);
    try {
      const r = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items: cart.lines }) });
      const j = await r.json().catch(() => null);
      if (r.ok && j?.url) { window.location.href = j.url; return; }
      setFailed(true);
    } catch { setFailed(true); }
    setBusy(false);
  };

  if (!cart.open) return null;
  return (
    <div data-lenis-prevent="true" className="fixed inset-0 z-[60]">
      <button type="button" aria-label="Close cart" onClick={() => cart.setOpen(false)} className="absolute inset-0 h-full w-full cursor-pointer bg-ink/40" />
      <div ref={panel} role="dialog" aria-modal="true" aria-label="Cart" className="absolute right-0 top-0 flex h-full w-[min(calc(480*var(--px)),100vw)] flex-col bg-canvas px-6 pb-8 pt-10 sm:px-10 lg:pt-[calc(40*var(--px))]">
        <div className="flex items-center justify-between">
          <p className="font-archivo text-[calc(15*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">{T.title} ({cart.count})</p>
          <button ref={closeBtn} type="button" onClick={() => cart.setOpen(false)} aria-label="Close cart" className="-my-2 -mr-2 inline-flex min-h-[calc(44*var(--px))] min-w-[calc(44*var(--px))] items-center justify-center px-2 text-[calc(18*var(--px))] text-ink transition-colors hover:text-accent">✕</button>
        </div>
        <div aria-hidden="true" className="mt-5 h-px w-full bg-ink/[0.18]" />
        <div className="flex-1 overflow-y-auto">
          {cart.lines.length === 0 && <p className="pt-8 text-body text-muted">{T.empty}</p>}
        </div>
        <div aria-hidden="true" className="h-px w-full bg-ink/[0.18]" />
        <div className="flex items-baseline justify-between pt-[calc(26*var(--px))]">
          <p className="font-archivo text-[calc(15*var(--px))] font-medium text-ink">{T.subtotal}</p>
          <p className="font-archivo text-[calc(17*var(--px))] font-semibold text-ink">{usd(cart.subtotal)}</p>
        </div>
        <p className="pt-[calc(8*var(--px))] font-archivo text-[calc(13*var(--px))] text-muted">{T.note}</p>
        {failed && <p aria-live="polite" className="pt-3 font-archivo text-[calc(13*var(--px))] text-accent">{T.unavailable}</p>}
        <button type="button" onClick={checkout} disabled={busy || cart.lines.length === 0} className="mt-[calc(24*var(--px))] w-full rounded-[calc(3*var(--px))] bg-ink py-[calc(20*var(--px))] text-center font-archivo text-[calc(15*var(--px))] font-semibold text-white transition-opacity hover:opacity-85 disabled:pointer-events-none disabled:opacity-50">{busy ? 'One moment…' : T.checkout}</button>
        <button type="button" onClick={() => cart.setOpen(false)} className="mx-auto mt-[calc(18*var(--px))] font-archivo text-[calc(13*var(--px))] font-medium text-muted transition-colors hover:text-ink">{T.continue}</button>
      </div>
    </div>
  );
}
