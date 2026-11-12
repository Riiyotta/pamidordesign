import { useState } from 'react';
import { PRODUCTS, T } from '../../lib/shop/products';
import ProductCard from './ProductCard';
import DropsForm from './DropsForm';

// Filter bar + product grid + drops form (original default export of chunk 0i9-w5fy8ra5v.js).
export default function ShopListing() {
  const [kind, setKind] = useState(null);
  const list = PRODUCTS.filter((p) => kind === null || p.kind === kind);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-y-4 pt-8">
        <div className="flex flex-wrap gap-[calc(18*var(--px))]">
          {T.filters.map((f) => {
            const on = kind === f.kind;
            return (
              <button key={f.label} type="button" onClick={() => setKind(f.kind)} aria-pressed={on} className={`inline-flex items-center rounded-[calc(3*var(--px))] border px-4 py-[calc(9*var(--px))] font-archivo text-[calc(13*var(--px))] font-medium transition-colors [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] ${on ? 'border-ink bg-ink text-white' : 'border-ink/25 text-ink hover:border-ink'}`}>
                {f.label}
              </button>
            );
          })}
        </div>
        <p className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
          {T.sort}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-[calc(46*var(--px))] sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <ProductCard key={p.slug} product={p} priority={i < 3} as="h2" />)}
      </div>
      <DropsForm />
    </>
  );
}
