// next/image loader used by the original (module 9921): /shop/x.webp -> /_img/shop/x-<w>.webp
const strip = (src) => src.replace(/\.(jpe?g|png|webp|avif)$/i, '');
export const imgUrl = (src, w) => `/_img${strip(src)}-${w}.webp`;
// widths next/image emitted for each `sizes` string on the original pages
export const W_CARD = [384, 640, 828, 1200, 1920, 2560, 3840];
export const W_MAIN = [640, 828, 1200, 1920, 2560, 3840];
export const W_THUMB = [32, 48, 64, 96, 128, 256, 384, 640, 828, 1200, 1920, 2560, 3840];
export const srcSet = (src, ws) => ws.map((w) => `${imgUrl(src, w)} ${w}w`).join(', ');
export const FILL_STYLE = { position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', color: 'transparent' };
