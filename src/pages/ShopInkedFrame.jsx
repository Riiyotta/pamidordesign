import ProductGallery from '../components/shop/ProductGallery';
import BuyBox from '../components/shop/BuyBox';
import { getProduct } from '../lib/shop/products';

export default function ShopInkedFrame() {
  const product = getProduct('inked-frame');
  return (
    <>
    <div className="page-enter flex min-h-[100dvh] flex-col bg-canvas">
      <div className="sticky top-0 z-40 w-full bg-canvas">
        <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
          <nav aria-label="Primary" className="flex items-center justify-between py-4 lg:py-[calc(22*var(--px))]">
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
      <main id="main" className="flex-1">
        <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
          <p className="pt-7">
            <a className="inline-flex items-center gap-2 font-archivo text-[calc(14*var(--px))] font-medium text-muted transition-colors hover:text-ink" href="/shop">
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-[calc(14*var(--px))] w-[calc(14*var(--px))] shrink-0">
                <g transform="rotate(180 8 8) translate(3.25 4.150200969758837) scale(0.31900)">
                  <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
                </g>
              </svg>
              Back to shop
            </a>
          </p>
          <div className="gap-y-10 pt-6 lg:flex lg:justify-between lg:pt-[calc(52*var(--px))]">
            <div className="lg:w-[56.098%] lg:shrink-0">
              <ProductGallery images={product.images} name={product.name} />
            </div>
            <div className="pt-10 lg:w-[40.015%] lg:shrink-0 lg:pt-[calc(6*var(--px))]">
              <span className="inline-block rounded-[calc(2*var(--px))] border border-ink/25 px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">
                FRAMED · EDITION OF 10
              </span>
              <h1 className="pt-5 font-archivo text-[calc(40*var(--px))] font-semibold leading-none text-ink lg:text-[calc(56*var(--px))]">
                Inked Frame
              </h1>
              <p className="flex flex-wrap items-baseline gap-x-4 pt-6 lg:pt-[calc(36*var(--px))]">
                <span className="font-archivo text-[calc(28*var(--px))] font-semibold text-ink">
                  $132
                </span>
                <span className="font-archivo text-[calc(14*var(--px))] text-muted">
                  Ships framed, worldwide
                </span>
              </p>
              <p className="max-w-[calc(505*var(--px))] pt-6 text-body text-muted lg:pt-[calc(34*var(--px))]">
                Framed print from the Pamidor series. Each print is signed and numbered.
              </p>
              <dl className="mt-10 border-t border-ink/[0.18] lg:mt-[calc(52*var(--px))]">
                <div className="flex items-baseline justify-between border-b border-ink/[0.18] py-[calc(17*var(--px))]">
                  <dt className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
                    MEDIUM
                  </dt>
                  <dd className="font-archivo text-[calc(15*var(--px))] font-medium text-ink">
                    Framed giclée print
                  </dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/[0.18] py-[calc(17*var(--px))]">
                  <dt className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
                    EDITION
                  </dt>
                  <dd className="font-archivo text-[calc(15*var(--px))] font-medium text-ink">
                    Edition of 10, signed
                  </dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/[0.18] py-[calc(17*var(--px))]">
                  <dt className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
                    SHIPPING
                  </dt>
                  <dd className="font-archivo text-[calc(15*var(--px))] font-medium text-ink">
                    Worldwide, 5 to 7 days
                  </dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-ink/[0.18] py-[calc(17*var(--px))]">
                  <dt className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted">
                    RETURNS
                  </dt>
                  <dd className="font-archivo text-[calc(15*var(--px))] font-medium text-ink">
                    14 days, no questions
                  </dd>
                </div>
              </dl>
              <p className="max-w-[calc(505*var(--px))] pt-6 text-body text-muted lg:pt-[calc(26*var(--px))]">
                Every piece is an edition of 10, signed and numbered by hand. Once all ten are gone the piece leaves the shop for good - a numbered edition is never reprinted.
              </p>
              <div className="pt-10 lg:pt-[calc(52*var(--px))]">
                <BuyBox product={product} />
              </div>
            </div>
          </div>
          <section className="flex min-h-[100svh] flex-col justify-center py-16">
            <div aria-hidden="true" className="h-px w-full bg-ink/[0.18]" />
            <div className="flex items-baseline justify-between pt-10 lg:pt-[calc(42*var(--px))]">
              <h2 className="font-archivo text-[calc(28*var(--px))] font-semibold text-ink lg:text-[calc(40*var(--px))]">
                More From The Shop
              </h2>
              <a className="font-archivo text-[calc(12*var(--px))] font-semibold tracking-[calc(1.2*var(--px))] text-muted transition-colors hover:text-ink [@media(pointer:coarse)]:my-[calc(-15*var(--px))] [@media(pointer:coarse)]:py-[calc(15*var(--px))]" href="/shop">
                VIEW ALL
              </a>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pt-[calc(54*var(--px))]">
              <a className="group block" href="/shop/red-series-01">
                <div className="relative aspect-[416/520] w-full overflow-hidden">
                  <img alt="Red Series 01 - red ink illustration from the Pamidor series" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} sizes="(min-width: 1729px) 24.08vw, (min-width: 1024px) 416px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/shop/red-series-01-384.webp 384w, /_img/shop/red-series-01-640.webp 640w, /_img/shop/red-series-01-828.webp 828w, /_img/shop/red-series-01-1200.webp 1200w, /_img/shop/red-series-01-1920.webp 1920w, /_img/shop/red-series-01-2560.webp 2560w, /_img/shop/red-series-01-3840.webp 3840w" src="/_img/shop/red-series-01-3840.webp" />
                  <div className="absolute left-[calc(14*var(--px))] top-[calc(14*var(--px))] flex gap-2">
                    <span className="rounded-[calc(2*var(--px))] bg-canvas px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">
                      PRINT
                    </span>
                    <span className="rounded-[calc(2*var(--px))] bg-ink px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-canvas">
                      SOLD OUT
                    </span>
                  </div>
                </div>
                <div className="mt-[calc(18*var(--px))] flex items-baseline justify-between">
                  <h3 className="font-archivo text-[calc(20*var(--px))] font-semibold text-ink">
                    Red Series 01
                  </h3>
                  <p className="font-archivo text-[calc(17*var(--px))] font-medium text-ink">
                    $140
                  </p>
                </div>
                <p className="mt-[calc(8*var(--px))] font-archivo text-[calc(14*var(--px))] text-muted">
                  Giclée print · Edition of 10
                </p>
              </a>
              <a className="group block" href="/shop/red-series-02">
                <div className="relative aspect-[416/520] w-full overflow-hidden">
                  <img alt="Red Series 02 - red ink illustration from the Pamidor series" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} sizes="(min-width: 1729px) 24.08vw, (min-width: 1024px) 416px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/shop/red-series-02-384.webp 384w, /_img/shop/red-series-02-640.webp 640w, /_img/shop/red-series-02-828.webp 828w, /_img/shop/red-series-02-1200.webp 1200w, /_img/shop/red-series-02-1920.webp 1920w, /_img/shop/red-series-02-2560.webp 2560w, /_img/shop/red-series-02-3840.webp 3840w" src="/_img/shop/red-series-02-3840.webp" />
                  <div className="absolute left-[calc(14*var(--px))] top-[calc(14*var(--px))] flex gap-2">
                    <span className="rounded-[calc(2*var(--px))] bg-canvas px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">
                      PRINT
                    </span>
                    <span className="rounded-[calc(2*var(--px))] bg-ink px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-canvas">
                      SOLD OUT
                    </span>
                  </div>
                </div>
                <div className="mt-[calc(18*var(--px))] flex items-baseline justify-between">
                  <h3 className="font-archivo text-[calc(20*var(--px))] font-semibold text-ink">
                    Red Series 02
                  </h3>
                  <p className="font-archivo text-[calc(17*var(--px))] font-medium text-ink">
                    $140
                  </p>
                </div>
                <p className="mt-[calc(8*var(--px))] font-archivo text-[calc(14*var(--px))] text-muted">
                  Giclée print · Edition of 10
                </p>
              </a>
              <a className="group block" href="/shop/red-series-03">
                <div className="relative aspect-[416/520] w-full overflow-hidden">
                  <img alt="Red Series 03 - red ink illustration from the Pamidor series" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0","color":"transparent"}} sizes="(min-width: 1729px) 24.08vw, (min-width: 1024px) 416px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/shop/red-series-03-384.webp 384w, /_img/shop/red-series-03-640.webp 640w, /_img/shop/red-series-03-828.webp 828w, /_img/shop/red-series-03-1200.webp 1200w, /_img/shop/red-series-03-1920.webp 1920w, /_img/shop/red-series-03-2560.webp 2560w, /_img/shop/red-series-03-3840.webp 3840w" src="/_img/shop/red-series-03-3840.webp" />
                  <div className="absolute left-[calc(14*var(--px))] top-[calc(14*var(--px))] flex gap-2">
                    <span className="rounded-[calc(2*var(--px))] bg-canvas px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-ink">
                      PRINT
                    </span>
                    <span className="rounded-[calc(2*var(--px))] bg-ink px-[calc(10*var(--px))] py-[calc(6*var(--px))] font-archivo text-[calc(10*var(--px))] font-semibold tracking-[calc(1*var(--px))] text-canvas">
                      SOLD OUT
                    </span>
                  </div>
                </div>
                <div className="mt-[calc(18*var(--px))] flex items-baseline justify-between">
                  <h3 className="font-archivo text-[calc(20*var(--px))] font-semibold text-ink">
                    Red Series 03
                  </h3>
                  <p className="font-archivo text-[calc(17*var(--px))] font-medium text-ink">
                    $140
                  </p>
                </div>
                <p className="mt-[calc(8*var(--px))] font-archivo text-[calc(14*var(--px))] text-muted">
                  Giclée print · Edition of 10
                </p>
              </a>
            </div>
          </section>
        </div>
      </main>
      <div className="will-change-[clip-path]">
        <footer data-cursor-invert="true" className="relative w-full bg-night">
          <div className="mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin">
            <div aria-hidden="true" className="h-px w-full bg-white/10" />
          </div>
          <div className="mx-auto w-full max-w-canvas px-6 pt-16 sm:px-10 lg:px-margin lg:pt-[calc(104*var(--px))]">
            <img alt="Pamidor.Studio®" loading="lazy" width="1371" height="118" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} src="/images/wordmark-pamidor-studio.svg?dpl=dpl_Fa51UQg54dXo76KJix6ccg67Coqj" />
            <div className="mt-12 flex flex-col gap-8 lg:mt-[calc(72*var(--px))] lg:flex-row lg:items-end lg:gap-0">
              <p className="text-subhead font-medium uppercase text-white lg:w-1/2">
                Somewhere between structure and instinct.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 lg:w-1/2 lg:justify-end lg:pl-5">
                <a data-hw="true" className="inline-flex items-center py-[calc(11*var(--px))] text-body-lg text-white transition-colors duration-200 [--hw-base:#fff] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] hover:text-accent" href="mailto:dor@pamidordesign.co">
                  <span className="sr-only">
                    DOR@PAMIDORDESIGN.CO
                  </span>
                  <span aria-hidden="true">
                    <span className="inline-block whitespace-nowrap">
                      <span data-hw-char="true" data-ch="D" className="inline-block" style={{"--hwi":"0"}} />
                      <span data-hw-char="true" data-ch="O" className="inline-block" style={{"--hwi":"1"}} />
                      <span data-hw-char="true" data-ch="R" className="inline-block" style={{"--hwi":"2"}} />
                      <span data-hw-char="true" data-ch="@" className="inline-block" style={{"--hwi":"3"}} />
                      <span data-hw-char="true" data-ch="P" className="inline-block" style={{"--hwi":"4"}} />
                      <span data-hw-char="true" data-ch="A" className="inline-block" style={{"--hwi":"5"}} />
                      <span data-hw-char="true" data-ch="M" className="inline-block" style={{"--hwi":"6"}} />
                      <span data-hw-char="true" data-ch="I" className="inline-block" style={{"--hwi":"7"}} />
                      <span data-hw-char="true" data-ch="D" className="inline-block" style={{"--hwi":"8"}} />
                      <span data-hw-char="true" data-ch="O" className="inline-block" style={{"--hwi":"9"}} />
                      <span data-hw-char="true" data-ch="R" className="inline-block" style={{"--hwi":"10"}} />
                      <span data-hw-char="true" data-ch="D" className="inline-block" style={{"--hwi":"11"}} />
                      <span data-hw-char="true" data-ch="E" className="inline-block" style={{"--hwi":"12"}} />
                      <span data-hw-char="true" data-ch="S" className="inline-block" style={{"--hwi":"13"}} />
                      <span data-hw-char="true" data-ch="I" className="inline-block" style={{"--hwi":"14"}} />
                      <span data-hw-char="true" data-ch="G" className="inline-block" style={{"--hwi":"15"}} />
                      <span data-hw-char="true" data-ch="N" className="inline-block" style={{"--hwi":"16"}} />
                      <span data-hw-char="true" data-ch="." className="inline-block" style={{"--hwi":"17"}} />
                      <span data-hw-char="true" data-ch="C" className="inline-block" style={{"--hwi":"18"}} />
                      <span data-hw-char="true" data-ch="O" className="inline-block" style={{"--hwi":"19"}} />
                    </span>
                  </span>
                </a>
                <ul className="-mx-[calc(10*var(--px))] flex items-center" aria-label="Profiles">
                  <li>
                    <a href="https://www.instagram.com/pamidor_design/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="flex h-[calc(40*var(--px))] w-[calc(40*var(--px))] items-center justify-center text-white transition-colors duration-200 [@media(pointer:coarse)]:h-[calc(48*var(--px))] [@media(pointer:coarse)]:w-[calc(48*var(--px))] hover:text-accent">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[calc(20*var(--px))] w-[calc(20*var(--px))]">
                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dor-sharaby/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="flex h-[calc(40*var(--px))] w-[calc(40*var(--px))] items-center justify-center text-white transition-colors duration-200 [@media(pointer:coarse)]:h-[calc(48*var(--px))] [@media(pointer:coarse)]:w-[calc(48*var(--px))] hover:text-accent">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[calc(20*var(--px))] w-[calc(20*var(--px))]">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/pamidordesign69" target="_blank" rel="noreferrer" aria-label="Dribbble" title="Dribbble" className="flex h-[calc(40*var(--px))] w-[calc(40*var(--px))] items-center justify-center text-white transition-colors duration-200 [@media(pointer:coarse)]:h-[calc(48*var(--px))] [@media(pointer:coarse)]:w-[calc(48*var(--px))] hover:text-accent">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[calc(20*var(--px))] w-[calc(20*var(--px))]">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/PamidorDesign/" target="_blank" rel="noreferrer" aria-label="Pinterest" title="Pinterest" className="flex h-[calc(40*var(--px))] w-[calc(40*var(--px))] items-center justify-center text-white transition-colors duration-200 [@media(pointer:coarse)]:h-[calc(48*var(--px))] [@media(pointer:coarse)]:w-[calc(48*var(--px))] hover:text-accent">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[calc(20*var(--px))] w-[calc(20*var(--px))]">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@dorsharaby" target="_blank" rel="noreferrer" aria-label="TikTok" title="TikTok" className="flex h-[calc(40*var(--px))] w-[calc(40*var(--px))] items-center justify-center text-white transition-colors duration-200 [@media(pointer:coarse)]:h-[calc(48*var(--px))] [@media(pointer:coarse)]:w-[calc(48*var(--px))] hover:text-accent">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[calc(20*var(--px))] w-[calc(20*var(--px))]">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <a data-hw="true" className="inline-flex items-center py-[calc(11*var(--px))] text-body-lg text-white transition-colors duration-200 [--hw-base:#fff] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] hover:text-accent" href="/privacy">
                  <span className="sr-only">
                    PRIVACY
                  </span>
                  <span aria-hidden="true">
                    <span className="inline-block whitespace-nowrap">
                      <span data-hw-char="true" data-ch="P" className="inline-block" style={{"--hwi":"0"}} />
                      <span data-hw-char="true" data-ch="R" className="inline-block" style={{"--hwi":"1"}} />
                      <span data-hw-char="true" data-ch="I" className="inline-block" style={{"--hwi":"2"}} />
                      <span data-hw-char="true" data-ch="V" className="inline-block" style={{"--hwi":"3"}} />
                      <span data-hw-char="true" data-ch="A" className="inline-block" style={{"--hwi":"4"}} />
                      <span data-hw-char="true" data-ch="C" className="inline-block" style={{"--hwi":"5"}} />
                      <span data-hw-char="true" data-ch="Y" className="inline-block" style={{"--hwi":"6"}} />
                    </span>
                  </span>
                </a>
                <a data-hw="true" className="inline-flex items-center py-[calc(11*var(--px))] text-body-lg text-white transition-colors duration-200 [--hw-base:#fff] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] hover:text-accent" href="/terms">
                  <span className="sr-only">
                    TERMS
                  </span>
                  <span aria-hidden="true">
                    <span className="inline-block whitespace-nowrap">
                      <span data-hw-char="true" data-ch="T" className="inline-block" style={{"--hwi":"0"}} />
                      <span data-hw-char="true" data-ch="E" className="inline-block" style={{"--hwi":"1"}} />
                      <span data-hw-char="true" data-ch="R" className="inline-block" style={{"--hwi":"2"}} />
                      <span data-hw-char="true" data-ch="M" className="inline-block" style={{"--hwi":"3"}} />
                      <span data-hw-char="true" data-ch="S" className="inline-block" style={{"--hwi":"4"}} />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-2 pb-8 text-body-lg text-white lg:mt-[calc(60*var(--px))] lg:flex-row lg:items-baseline lg:justify-between lg:gap-8 lg:pb-[calc(24*var(--px))]">
              <p>
                © 2026 Pamidor Studio. All rights reserved.
              </p>
              <p>
                Designed and built at Pamidor Studio by Dor Sharaby.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}
