// Owned by the "global" workstream: Lenis smooth scroll, scroll restoration, cursor state,
// client-side link routing, nav + menu, cart drawer. (The route curtain is <RouteCurtain/> in App.jsx.)
import SmoothScroll from './global/SmoothScroll';
import ScrollRestore from './global/ScrollRestore';
import CursorState from './global/CursorState';
import LinkRouter from './global/LinkRouter';
import MenuController from './global/MenuController';
import CartDrawer from './global/CartDrawer';
import CookieBanner from './global/CookieBanner';

export default function GlobalFX() {
  return (<>
    <SmoothScroll />
    <ScrollRestore />
    <CursorState />
    <LinkRouter />
    <MenuController />
    <CartDrawer />
    <CookieBanner />
  </>);
}
