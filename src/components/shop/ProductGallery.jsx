import { useState } from 'react';
import { srcSet, imgUrl, W_MAIN, W_THUMB, FILL_STYLE } from '../../lib/shop/img';

// Product gallery (original module 80317): thumbnail buttons swap the main
// image instantly (main <img> is keyed by src so it remounts, no transition).
export default function ProductGallery({ images, name }) {
  const [idx, setIdx] = useState(0);
  const cur = images[idx] ?? images[0];
  return (
    <div>
      <div className="relative aspect-[736/920] w-full overflow-hidden bg-white">
        <img key={cur.src} alt={cur.alt} decoding="async" data-nimg="fill" className="object-cover" style={FILL_STYLE} sizes="(min-width: 1729px) 42.6vw, (min-width: 1024px) 736px, 100vw" srcSet={srcSet(cur.src, W_MAIN)} src={imgUrl(cur.src, 3840)} />
      </div>
      {images.length > 1 && (
        <div className="mt-6 flex gap-4">
          {images.map((im, i) => (
            <button key={im.src} type="button" onClick={() => setIdx(i)} aria-label={im.alt} aria-pressed={i === idx} className={`relative h-[calc(104*var(--px))] w-[calc(84*var(--px))] overflow-hidden border-[1.5px] transition-colors ${i === idx ? 'border-ink' : 'border-transparent hover:border-ink/30'}`}>
              <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={FILL_STYLE} sizes="(min-width: 1729px) 4.87vw, 84px" srcSet={srcSet(im.src, W_THUMB)} src={imgUrl(im.src, 3840)} />
            </button>
          ))}
        </div>
      )}
      <span className="sr-only">
        {name}
      </span>
    </div>
  );
}
