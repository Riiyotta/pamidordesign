import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Studio from './pages/Studio';
import ArtLab from './pages/ArtLab';
import Shop from './pages/Shop';
import ShopRedSeries01 from './pages/ShopRedSeries01';
import ShopRedSeries02 from './pages/ShopRedSeries02';
import ShopRedSeries03 from './pages/ShopRedSeries03';
import ShopInkedFrame from './pages/ShopInkedFrame';
import ShopPinkPortrait from './pages/ShopPinkPortrait';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import WorkFigcoms from './pages/WorkFigcoms';
import WorkRise from './pages/WorkRise';
import WorkImotion from './pages/WorkImotion';
import WorkIsraelPolice from './pages/WorkIsraelPolice';
import Awwwards from './components/Awwwards';
import GlobalFX from './components/GlobalFX';
import RouteCurtain from './components/global/RouteCurtain';
import TextFX from './components/TextFX';

const ROUTES = [
  { path: '/', el: <Home />, title: 'Dor Sharaby | Brand & Product Designer | Pamidor Studio' },
  { path: '/studio', el: <Studio />, title: "Studio - Dor Sharaby \u00b7 Pamidor Studio" },
  { path: '/art-lab', el: <ArtLab />, title: "The Art Lab - Pamidor Studio" },
  { path: '/shop', el: <Shop />, title: "Originals & Prints - Pamidor Studio" },
  { path: '/shop/red-series-01', el: <ShopRedSeries01 />, title: "Red Series 01 - Pamidor Studio Shop" },
  { path: '/shop/red-series-02', el: <ShopRedSeries02 />, title: "Red Series 02 - Pamidor Studio Shop" },
  { path: '/shop/red-series-03', el: <ShopRedSeries03 />, title: "Red Series 03 - Pamidor Studio Shop" },
  { path: '/shop/inked-frame', el: <ShopInkedFrame />, title: "Inked Frame - Pamidor Studio Shop" },
  { path: '/shop/pink-portrait', el: <ShopPinkPortrait />, title: "Pink Portrait - Pamidor Studio Shop" },
  { path: '/privacy', el: <Privacy />, title: "Privacy Policy - Pamidor Studio" },
  { path: '/terms', el: <Terms />, title: "Terms of Use - Pamidor Studio" },
  { path: '/work/figcoms', el: <WorkFigcoms />, title: "Figcoms - Case Study \u00b7 Dor Sharaby" },
  { path: '/work/rise', el: <WorkRise />, title: "Rise - Case Study \u00b7 Dor Sharaby" },
  { path: '/work/imotion', el: <WorkImotion />, title: "iMotion - Case Study \u00b7 Dor Sharaby" },
  { path: '/work/israel-police', el: <WorkIsraelPolice />, title: "Israel Police - Case Study \u00b7 Dor Sharaby" },
];

function Titled({ title, children }) {
  useEffect(() => { document.title = title; }, [title]);
  return children;
}

export default function App() {
  const { pathname } = useLocation();
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-ink focus:bg-canvas focus:px-4 focus:py-3 focus:text-body focus:font-medium focus:text-ink">Skip to content</a>
    <RouteCurtain />
    <Routes>
      {ROUTES.map(r => <Route key={r.path} path={r.path} element={<Titled title={r.title}>{r.el}</Titled>} />)}
    </Routes>
    <Awwwards />
    <GlobalFX />
    <TextFX />
  </>);
}
