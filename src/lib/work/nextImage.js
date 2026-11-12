// Mirrors the original's next/image loader (module 9921) + Next's srcset width
// selection, so client-only images (e.g. the board lightbox) get the exact same
// src / srcset the original builds at runtime.
const DEVICE = [640, 828, 1200, 1920, 2560, 3840];
const ALL = [16, 32, 48, 64, 96, 128, 256, 384, ...DEVICE];
const RASTER = /\.(jpe?g|png|webp|avif)$/i;
const SKIP = /^\/(_img|art-lab\/opt|og|icons|videos)\//;

export function loader(src, width) {
  if (!src.startsWith('/') || !RASTER.test(src) || SKIP.test(src)) return src;
  const w = ALL.find((x) => x >= width) ?? ALL[ALL.length - 1];
  return `/_img${src.replace(RASTER, '')}-${w}.webp`;
}

/** Widths Next would emit for a `sizes` string (smallest vw ratio rule). */
function widthsFor(sizes) {
  const vw = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map((m) => parseInt(m[2], 10));
  if (!vw.length) return DEVICE;
  const min = DEVICE[0] * (Math.min(...vw) * 0.01);
  return ALL.filter((w) => w >= min);
}

export function imageProps(src, sizes) {
  const widths = widthsFor(sizes);
  return {
    sizes,
    srcSet: widths.map((w) => `${loader(src, w)} ${w}w`).join(', '),
    src: loader(src, widths[widths.length - 1]),
  };
}
