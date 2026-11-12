// Mirrors the original next/image custom loader (module 9921): /_img/<path>-<w>.webp
const WIDTHS = [32, 48, 64, 96, 128, 256, 384, 640, 828, 1200, 1920, 2560, 3840];
const EXT = /\.(jpe?g|png|webp|avif)$/i;
export const imgUrl = (src, w) => `/_img${src.replace(EXT, '')}-${w}.webp`;
export const srcSetFor = (src, widths = WIDTHS) => widths.map(w => `${imgUrl(src, w)} ${w}w`).join(', ');
export const FILL_STYLE = { position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' };
