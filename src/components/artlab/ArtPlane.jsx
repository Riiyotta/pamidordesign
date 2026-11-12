import { useRef } from 'react';
import { ITEMS, DPL } from '../../lib/artlab/layout';
import usePlane from '../../lib/artlab/usePlane';

// Fixed full-viewport drag/wheel/keyboard plane (original module 17227).
export default function ArtPlane() {
  const planeRef = useRef(null);
  usePlane(planeRef);
  return (
    <div className="absolute inset-0 touch-none select-none overflow-hidden">
      <div ref={planeRef} className="absolute left-0 top-0 origin-top-left">
        {ITEMS.map((e) => (
          <div key={e.src} className="absolute left-0 top-0 will-change-transform" style={{ width: e.w, height: e.h, transform: `translate3d(${e.x}px, ${e.y}px, 0)` }}>
            <img alt={e.alt} draggable="false" loading="lazy" width={e.width} height={e.height} decoding="async" data-nimg="1" className="pointer-events-none h-full w-full object-cover" style={{ color: 'transparent' }} src={e.src + DPL} />
          </div>
        ))}
      </div>
    </div>
  );
}
