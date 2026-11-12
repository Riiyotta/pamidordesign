// html[data-cursor=down] while a pointer is pressed (original module 6039). Cursor images are CSS.
import { useEffect } from 'react';

export default function CursorState() {
  useEffect(() => {
    const html = document.documentElement;
    const down = () => html.setAttribute('data-cursor', 'down');
    const up = () => html.removeAttribute('data-cursor');
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    window.addEventListener('blur', up);
    return () => {
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('blur', up);
      up();
    };
  }, []);
  return null;
}
