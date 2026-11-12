import { T, price } from '../../lib/shop/products';
import { srcSet, imgUrl, W_CARD, FILL_STYLE } from '../../lib/shop/img';

// Shop grid card (original fn `x` in chunk 0i9-w5fy8ra5v.js).
export default function ProductCard({ product, priority = false, as: Tag = 'h3' }) {
  const im = product.images[0];
  return (
    <a className="group block" href={`/shop/${product.slug}`}>
      <div className="relative aspect-[416/520] w-full overflow-hidden">
        <img alt={im.alt} loading={priority ? undefined : 'lazy'} decoding="async" data-nimg="fill" className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]" style={FILL_STYLE} sizes="(min-width: 1729px) 24.08vw, (min-width: 1024px) 416px, (min-width: 640px) 46vw, 100vw" srcSet={srcSet(im.src, W_CARD)} src={imgUrl(im.src, 3840)} />
        <div className="absolute left-[calc(14*var(--px))] top-[calc(14*var(--px))] flex gap-2">
          <span className="rounded-[calc(2*var(--px))] bg-canvas px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">
            {product.tag}
          </span>
          {product.soldOut && (
            <span className="rounded-[calc(2*var(--px))] bg-ink px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-canvas">
              {T.soldOut}
            </span>
          )}
        </div>
      </div>
      <div className="mt-[calc(18*var(--px))] flex items-baseline justify-between">
        <Tag className="font-archivo text-[calc(20*var(--px))] font-semibold text-ink">
          {product.name}
        </Tag>
        <p className="font-archivo text-[calc(17*var(--px))] font-medium text-ink">
          {price(product.price)}
        </p>
      </div>
      <p className="mt-[calc(8*var(--px))] font-archivo text-[calc(14*var(--px))] text-muted">
        {product.line}
      </p>
    </a>
  );
}
