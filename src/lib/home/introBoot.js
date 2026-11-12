// Port of the original's inline <head> bootstrap script (runs once per full page load).
// Original:
//   if(location.pathname!=='/')return;
//   d.setAttribute('data-loading','true');
//   s = sessionStorage['pamidor-intro']==='1' (set to '1' on first visit)
//   if(s) d.setAttribute('data-intro','short');
//   setTimeout(()=>d.removeAttribute('data-loading'), s?3000:6000)   // safety net
// In this SPA it runs at module-evaluation time (app boot, before first render), which is the
// closest equivalent. If index.html ever gets the inline script, the window flag prevents a re-run.
export const BOOT_TIME = typeof performance !== 'undefined' ? performance.now() : 0;

(function introBoot() {
  if (typeof window === 'undefined') return;
  if (window.__pamidorIntroBoot) return;
  window.__pamidorIntroBoot = true;
  try {
    if (location.pathname !== '/') return;
    const d = document.documentElement;
    if (d.hasAttribute('data-loading')) return; // inline script already ran
    let s = false;
    d.setAttribute('data-loading', 'true');
    try {
      s = sessionStorage.getItem('pamidor-intro') === '1';
      if (!s) sessionStorage.setItem('pamidor-intro', '1');
    } catch (e) { /* storage blocked */ }
    if (s) d.setAttribute('data-intro', 'short');
    setTimeout(() => d.removeAttribute('data-loading'), s ? 3000 : 6000);
  } catch (e) { /* noop */ }
})();
