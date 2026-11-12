import { T } from '../../lib/shop/products';

// Add-to-cart row (original module 1492). The cart itself lives in the global
// layout; we hand off via a window event: 'cart:add' with detail { slug }.
// The original's add(slug) also opens the drawer, so the listener should open it.
export default function BuyBox({ product }) {
  const add = () => window.dispatchEvent(new CustomEvent('cart:add', { detail: { slug: product.slug } }));
  return (
    <div>
      <div className="flex flex-wrap gap-4 lg:gap-[calc(29*var(--px))]">
        <button type="button" disabled={product.soldOut} onClick={add} className="rounded-[calc(3*var(--px))] bg-ink px-9 py-[calc(19*var(--px))] font-archivo text-[calc(15*var(--px))] font-semibold text-white transition-opacity hover:opacity-85 disabled:pointer-events-none disabled:opacity-65">
          {product.soldOut ? T.soldOut : T.addToCart}
        </button>
        <a className="rounded-[calc(3*var(--px))] border border-ink/30 px-[calc(30*var(--px))] py-[calc(19*var(--px))] font-archivo text-[calc(15*var(--px))] font-medium text-ink transition-colors hover:border-ink" href="/#start-project">
          {T.askQuestion}
        </a>
      </div>
      <p className="pt-6 font-archivo text-[calc(13*var(--px))] text-muted">
        {T.trust}
      </p>
    </div>
  );
}
