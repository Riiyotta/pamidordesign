import HeroTrail from './HeroTrail';
import DoorName from './DoorName';

// Props the original server component passes to the >=1440px trail (hit-tested against the photo).
const HERO_PHOTO = { width: 3200, height: 1811 };
const HERO_FOCUS = { x: 0.5, y: 0.5, zoom: 1.15, zoomX: 0.48, zoomY: 1 };

export default function HomeMain1Top() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-canvas">
      <div className="absolute inset-0 hidden overflow-hidden min-[1440px]:block">
        <div data-hero-3d="backdrop" className="absolute inset-0" style={{"--h3d":"0ms"}}>
          <picture>
            <source media="(min-width: 1440px)" srcSet="/_img/images/hero-full-640.webp 640w, /_img/images/hero-full-828.webp 828w, /_img/images/hero-full-1200.webp 1200w, /_img/images/hero-full-1920.webp 1920w, /_img/images/hero-full-2560.webp 2560w, /_img/images/hero-full-3840.webp 3840w" sizes="100vw" />
            <img alt="Dor Sharaby" width="3200" height="1811" decoding="async" style={{"objectPosition":"50% 50%","transform":"scale(1.15)","transformOrigin":"48% 100%"}} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
        </div>
        <HeroTrail photo={HERO_PHOTO} focus={HERO_FOCUS} />
      </div>
      <div className="relative mx-auto flex w-full max-w-canvas flex-col lg:h-[100dvh] lg:min-h-[calc(680*var(--px))]">
        <div data-hero-3d="portrait" className="absolute hidden overflow-hidden lg:block min-[1440px]:hidden" style={{"left":"40.9722%","top":"8.2%","width":"54.6528%","height":"90.4%","--h3d":"0ms"}}>
          <picture>
            <source media="(min-width: 1440px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <source media="(max-width: 1023px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <img alt="Dor Sharaby" width="1232" height="1415" decoding="async" style={{"left":"0%","top":"0%","width":"100%","height":"100%"}} sizes="55vw" srcSet="/_img/images/hero-portrait-2-384.webp 384w, /_img/images/hero-portrait-2-640.webp 640w, /_img/images/hero-portrait-2-828.webp 828w, /_img/images/hero-portrait-2-1200.webp 1200w, /_img/images/hero-portrait-2-1920.webp 1920w, /_img/images/hero-portrait-2-2560.webp 2560w, /_img/images/hero-portrait-2-3840.webp 3840w" src="/_img/images/hero-portrait-2-3840.webp" className="absolute max-w-none object-cover object-top" />
          </picture>
          <HeroTrail />
        </div>
        <div data-nav-intro="" className="relative z-40 w-full lg:flex lg:h-[8.2%] lg:items-center">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <nav aria-label="Primary" className="flex items-center justify-between pt-8 lg:h-[calc(26*var(--px))] lg:pt-0">
              <a className="-my-2 -ml-2 inline-flex min-h-[calc(44*var(--px))] items-center px-2 text-body-lg" href="/">
                <img src="/images/wordmark-pamidor-studio-ink.svg" alt="PAMIDOR® STUDIO" width="1371" height="118" className="h-[0.691em] w-auto" />
              </a>
              <button type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu" className="-my-4 -mr-2 flex w-[calc(56*var(--px))] flex-col items-end justify-center gap-[8px] px-2 py-4">
                <span className="block h-[2px] w-[calc(40*var(--px))] bg-ink transition-transform duration-300 ease-out-soft " />
                <span className="block h-[2px] w-[calc(40*var(--px))] bg-ink transition-transform duration-300 ease-out-soft " />
              </button>
            </nav>
          </div>
        </div>
        <div aria-hidden="true" data-menu-scrim="closed" className="fixed inset-0 z-20 bg-ink/25" />
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
          <div id="site-menu" tabIndex="-1" aria-hidden="true" data-menu="closed" data-lenis-prevent="true" className="pointer-events-auto absolute inset-0 overflow-y-auto overscroll-contain bg-canvas pt-24 outline-none will-change-transform lg:pt-32">
            <div className="mx-auto flex w-full max-w-canvas flex-col px-6 pb-16 sm:px-10 lg:px-margin">
              <ul className="flex flex-col">
                <li data-menu-item="true" style={{"--menu-i":"0"}}>
                  <a tabIndex="-1" data-hw="true" className="block py-3 text-project font-medium text-ink transition-colors duration-200 [--hw-base:#0A0A0A] hover:text-accent" href="/#top">
                    <span className="sr-only">
                      Home
                    </span>
                    <span aria-hidden="true">
                      <span className="inline-block whitespace-nowrap">
                        <span data-hw-char="true" data-ch="H" className="inline-block" style={{"--hwi":"0"}} />
                        <span data-hw-char="true" data-ch="o" className="inline-block" style={{"--hwi":"1"}} />
                        <span data-hw-char="true" data-ch="m" className="inline-block" style={{"--hwi":"2"}} />
                        <span data-hw-char="true" data-ch="e" className="inline-block" style={{"--hwi":"3"}} />
                      </span>
                    </span>
                  </a>
                </li>
                <li data-menu-item="true" style={{"--menu-i":"1"}}>
                  <a tabIndex="-1" data-hw="true" className="block py-3 text-project font-medium text-ink transition-colors duration-200 [--hw-base:#0A0A0A] hover:text-accent" href="/studio">
                    <span className="sr-only">
                      Studio
                    </span>
                    <span aria-hidden="true">
                      <span className="inline-block whitespace-nowrap">
                        <span data-hw-char="true" data-ch="S" className="inline-block" style={{"--hwi":"0"}} />
                        <span data-hw-char="true" data-ch="t" className="inline-block" style={{"--hwi":"1"}} />
                        <span data-hw-char="true" data-ch="u" className="inline-block" style={{"--hwi":"2"}} />
                        <span data-hw-char="true" data-ch="d" className="inline-block" style={{"--hwi":"3"}} />
                        <span data-hw-char="true" data-ch="i" className="inline-block" style={{"--hwi":"4"}} />
                        <span data-hw-char="true" data-ch="o" className="inline-block" style={{"--hwi":"5"}} />
                      </span>
                    </span>
                  </a>
                </li>
                <li data-menu-item="true" style={{"--menu-i":"2"}}>
                  <a tabIndex="-1" data-hw="true" className="block py-3 text-project font-medium text-ink transition-colors duration-200 [--hw-base:#0A0A0A] hover:text-accent" href="/#projects">
                    <span className="sr-only">
                      Work
                    </span>
                    <span aria-hidden="true">
                      <span className="inline-block whitespace-nowrap">
                        <span data-hw-char="true" data-ch="W" className="inline-block" style={{"--hwi":"0"}} />
                        <span data-hw-char="true" data-ch="o" className="inline-block" style={{"--hwi":"1"}} />
                        <span data-hw-char="true" data-ch="r" className="inline-block" style={{"--hwi":"2"}} />
                        <span data-hw-char="true" data-ch="k" className="inline-block" style={{"--hwi":"3"}} />
                      </span>
                    </span>
                  </a>
                </li>
                <li data-menu-item="true" style={{"--menu-i":"3"}}>
                  <a tabIndex="-1" data-hw="true" className="block py-3 text-project font-medium text-ink transition-colors duration-200 [--hw-base:#0A0A0A] hover:text-accent" href="/art-lab">
                    <span className="sr-only">
                      Art Lab
                    </span>
                    <span aria-hidden="true">
                      <span className="inline-block whitespace-nowrap">
                        <span data-hw-char="true" data-ch="A" className="inline-block" style={{"--hwi":"0"}} />
                        <span data-hw-char="true" data-ch="r" className="inline-block" style={{"--hwi":"1"}} />
                        <span data-hw-char="true" data-ch="t" className="inline-block" style={{"--hwi":"2"}} />
                      </span>
                      {" "}
                      <span className="inline-block whitespace-nowrap">
                        <span data-hw-char="true" data-ch="L" className="inline-block" style={{"--hwi":"3"}} />
                        <span data-hw-char="true" data-ch="a" className="inline-block" style={{"--hwi":"4"}} />
                        <span data-hw-char="true" data-ch="b" className="inline-block" style={{"--hwi":"5"}} />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <div data-menu-item="true" style={{"--menu-i":"4"}} className="mt-10">
                <a tabIndex="-1" className="inline-flex items-center py-2 text-body text-muted underline underline-offset-4 transition-colors [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] hover:text-ink" href="mailto:dor@pamidordesign.co">
                  DOR@PAMIDORDESIGN.CO
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin flex flex-1 flex-col lg:justify-center">
          <div data-hero-3d="portrait" className="relative mt-8 aspect-[787/904] max-h-[68vh] w-full overflow-hidden lg:hidden" style={{"--h3d":"0ms"}}>
            <picture>
              <source media="(min-width: 1024px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              <img alt="Dor Sharaby" width="1232" height="1415" decoding="async" style={{"color":"transparent"}} sizes="100vw" srcSet="/_img/images/hero-portrait-2-640.webp 640w, /_img/images/hero-portrait-2-828.webp 828w, /_img/images/hero-portrait-2-1200.webp 1200w, /_img/images/hero-portrait-2-1920.webp 1920w, /_img/images/hero-portrait-2-2560.webp 2560w, /_img/images/hero-portrait-2-3840.webp 3840w" src="/_img/images/hero-portrait-2-3840.webp" className="absolute inset-0 h-full w-full object-cover object-top" />
            </picture>
          </div>
          <div className="mt-10 lg:mt-0">
            <h1 data-hero-name="true" data-hero-3d-lines="true" className="-ml-[0.06em] w-full text-display font-medium text-ink" style={{"--h3d":"140ms"}}>
              <DoorName text="Dor" />
              {" "}
              <DoorName text="Sharaby" />
            </h1>
            <p data-hero-3d-lines="true" className="mt-[calc(5*var(--px))] text-body-lg text-ink lg:mt-[calc(9*var(--px))] lg:max-w-[40%]" style={{"--h3d":"340ms"}}>
              <span className="block">
                Brands, products & the art in between.
              </span>
              <span className="block">
                I take the fun seriously.
              </span>
            </p>
            <div data-hero-3d="true" style={{"--h3d":"520ms"}}>
              <ul className="flex flex-wrap gap-[calc(10*var(--px))] mt-6 min-[368px]:max-w-[calc(400*var(--px))] lg:mt-[calc(35*var(--px))] lg:max-w-[min(40%,calc(400*var(--px)))]">
                <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                  Brand Design
                </li>
                <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                  Product Design
                </li>
                <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                  UX | UI
                </li>
                <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                  Art Direction
                </li>
                <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                  Motion & 3D
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
          <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-12 lg:mt-0" />
        </div>
      </div>
    </section>
  );
}
