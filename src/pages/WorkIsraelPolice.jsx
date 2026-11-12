import WorkVideo from '../components/work/WorkVideo';
import ClipReveal from '../components/work/ClipReveal';
export default function WorkIsraelPolice() {
  return (
    <>
    <div className="page-enter" data-canvas="fixed">
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
      <main id="main">
        <header id="top" className="relative w-full bg-canvas">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <p className="pt-12 text-label text-muted lg:pt-[126px]">
              (CASE STUDY · 04)
            </p>
            <h1 className="mt-4 -ml-[0.062em] w-full font-space text-case-title font-medium text-ink lg:mt-[24px]">
              ISRAEL POLICE
            </h1>
            <ul className="flex flex-wrap gap-[calc(10*var(--px))] mt-6 lg:mt-[52px]">
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Brand Design
              </li>
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Art Direction
              </li>
            </ul>
            <figure className="overflow-hidden bg-canvas mt-8 lg:mt-[47px]">
              <WorkVideo poster="/projects/israel-police/border-police/hero-poster.webp" width="1920" height="1080" muted loop playsInline preload="none" aria-label="Israel Police - the refreshed Border Police emblem struck as a coin, turning in the light" className="bg-canvas h-auto w-full ">
                <source src="/projects/israel-police/border-police/hero.mp4" type="video/mp4" />
              </WorkVideo>
            </figure>
            <p className="mt-8 max-w-[75ch] text-body-lg text-ink lg:mt-[47px]">
              Two identity projects for the Israel Police, as an external brand design consultant. A brand refresh for the Border Police, and a new emblem and identity for YAMAM, its national counter-terror unit.
            </p>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-10 lg:mt-[52px]" />
            <dl className="grid grid-cols-2 gap-x-0 gap-y-8 pt-6 sm:grid-cols-4 sm:gap-x-6 lg:gap-0 lg:pt-[22px]">
              <div>
                <dt className="text-label text-muted">
                  ROLE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Brand Design
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TIMELINE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Ongoing
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  YEAR
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  2026
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TEAM
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Israel Police (external)
                </dd>
              </div>
            </dl>
          </div>
        </header>
        <section className="relative w-full bg-canvas pt-16 lg:pt-[88px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div className="grid grid-cols-1 gap-y-2 pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[22px]">
              <p className="text-label text-muted lg:col-span-2">
                (MY ROLE)
              </p>
              <ul className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                <li className="pt-2 first:pt-0">
                  Redrew the Border Police emblem and built the system around it: six colors with print values, one Hebrew typeface, and twelve unit insignia as one family.
                </li>
                <li className="pt-2 first:pt-0">
                  Wrote the uniform placement map - every patch, rank and tag, by sleeve and by shoulder.
                </li>
                <li className="pt-2 first:pt-0">
                  Designed a new symbol and seal for YAMAM, and the black, gray and yellow system around them.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-16 lg:pt-[88px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <dl className="pt-2 lg:pt-0">
              <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                <dt className="text-label text-muted lg:col-span-2">
                  (OVERVIEW)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  Two units, two badges, one design division. The Border Police emblem was rebuilt as a full system, and YAMAM got a new symbol and seal. Both projects share the same rules: keep what people recognize, redraw it clean, and write down how it is used.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                <dt className="text-label text-muted lg:col-span-2">
                  (THE CHALLENGE)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  Both badges existed only as traced files with no rules: no color values, no typeface, no guide for the uniform. Each unit needed a mark that works on a patch, a screen and a wall.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                <dt className="text-label text-muted lg:col-span-2">
                  (THE SOLUTION)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  Two brand books built as tools. For the Border Police: a clean emblem, twelve unit insignia, a palette, a Hebrew typeface and a uniform map. For YAMAM: a facelift of the badge, a new symbol and a black, gray and yellow system.
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-16 lg:pt-[96px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <h2 data-reveal="ssr" className="reveal text-subhead font-medium text-ink">
              Process
            </h2>
            <ol className="mt-8 lg:mt-[18px]">
              <li>
                <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                  <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                    <span className="text-body text-muted lg:pt-[8px]">
                      01
                    </span>
                    <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                      Audit
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Reviewing both badges, the existing files and how each unit shows up in the field.
                  </p>
                </div>
              </li>
              <li>
                <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                  <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                    <span className="text-body text-muted lg:pt-[8px]">
                      02
                    </span>
                    <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                      Identity Systems
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Logo rules, colors and typography for the Border Police and for YAMAM.
                  </p>
                </div>
              </li>
              <li>
                <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                  <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                    <span className="text-body text-muted lg:pt-[8px]">
                      03
                    </span>
                    <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                      Uniform & Insignia
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Unit insignia, the YAMAM seal, and one placement map for the uniform.
                  </p>
                </div>
              </li>
              <li>
                <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                  <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                    <span className="text-body text-muted lg:pt-[8px]">
                      04
                    </span>
                    <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                      Rollout
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Patches, posters, social and web, all from the same systems.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="pb-14 lg:pb-[116px]">
              <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-8 lg:grid-cols-5 lg:gap-0 lg:pt-[36px]">
                <div className="lg:col-span-2">
                  <p className="mb-3 text-label text-muted lg:mb-[16px]">
                    (PART 01)
                  </p>
                  <h2 className="text-project font-medium text-ink lg:max-w-[505px]">
                    Border Police
                  </h2>
                </div>
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[44px]">
                  A brand refresh: emblem, colors, type, twelve unit insignia and a placement map for the uniform.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Brand Refresh
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Same watchtower, same arched name. The emblem was redrawn on a grid, extra points were removed, and it now holds up at small sizes.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4 lg:gap-5">
                <div className="w-full sm:w-auto" style={{"flex":"1.0035714285714286 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="Border Police - the previous emblem, an auto-trace carrying hundreds of extra points" loading="lazy" width="843" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/previous-logo-384.webp 384w, /_img/projects/israel-police/border-police/previous-logo-640.webp 640w, /_img/projects/israel-police/border-police/previous-logo-828.webp 828w, /_img/projects/israel-police/border-police/previous-logo-1200.webp 1200w, /_img/projects/israel-police/border-police/previous-logo-1920.webp 1920w, /_img/projects/israel-police/border-police/previous-logo-2560.webp 2560w, /_img/projects/israel-police/border-police/previous-logo-3840.webp 3840w" src="/_img/projects/israel-police/border-police/previous-logo-3840.webp" />
                  </figure>
                </div>
                <div className="w-full sm:w-auto" style={{"flex":"1.0047619047619047 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="Border Police - the emblem redrawn on its construction grid" loading="lazy" width="844" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/construction-grid-384.webp 384w, /_img/projects/israel-police/border-police/construction-grid-640.webp 640w, /_img/projects/israel-police/border-police/construction-grid-828.webp 828w, /_img/projects/israel-police/border-police/construction-grid-1200.webp 1200w, /_img/projects/israel-police/border-police/construction-grid-1920.webp 1920w, /_img/projects/israel-police/border-police/construction-grid-2560.webp 2560w, /_img/projects/israel-police/border-police/construction-grid-3840.webp 3840w" src="/_img/projects/israel-police/border-police/construction-grid-3840.webp" />
                  </figure>
                </div>
                <div className="w-full sm:w-auto" style={{"flex":"1.0047619047619047 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="Border Police - the cleaned vector, point by point" loading="lazy" width="844" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/vector-cleanup-384.webp 384w, /_img/projects/israel-police/border-police/vector-cleanup-640.webp 640w, /_img/projects/israel-police/border-police/vector-cleanup-828.webp 828w, /_img/projects/israel-police/border-police/vector-cleanup-1200.webp 1200w, /_img/projects/israel-police/border-police/vector-cleanup-1920.webp 1920w, /_img/projects/israel-police/border-police/vector-cleanup-2560.webp 2560w, /_img/projects/israel-police/border-police/vector-cleanup-3840.webp 3840w" src="/_img/projects/israel-police/border-police/vector-cleanup-3840.webp" />
                  </figure>
                </div>
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="overflow-hidden bg-canvas  ">
                  <picture>
                    <source media="(max-width: 639px)" srcSet="/projects/israel-police/border-police/emblem-refresh-m.webp" width="780" height="780" />
                    <img src="/projects/israel-police/border-police/emblem-refresh.webp" alt="Border Police - the refreshed emblem beside the one it replaces" width="2624" height="1200" loading="lazy" decoding="async" className="h-auto w-full" />
                  </picture>
                </figure>
              </div>
            </div>
            <div className="mt-8 px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px] bg-[#F7F6F2]">
              <p className="text-label text-muted">
                05 · THE FAMILY
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-8 lg:mt-[44px] lg:gap-x-[24px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <figure>
                  <img alt="Border Police - the primary emblem, in Off-Road Green" loading="lazy" width="1012" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/border-police/family-primary-384.webp 384w, /_img/projects/israel-police/border-police/family-primary-640.webp 640w, /_img/projects/israel-police/border-police/family-primary-828.webp 828w, /_img/projects/israel-police/border-police/family-primary-1200.webp 1200w, /_img/projects/israel-police/border-police/family-primary-1920.webp 1920w, /_img/projects/israel-police/border-police/family-primary-2560.webp 2560w, /_img/projects/israel-police/border-police/family-primary-3840.webp 3840w" src="/_img/projects/israel-police/border-police/family-primary-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-muted">
                    Primary emblem
                  </figcaption>
                </figure>
                <figure>
                  <img alt="Border Police - the emblem in one colour" loading="lazy" width="1012" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/border-police/family-one-color-384.webp 384w, /_img/projects/israel-police/border-police/family-one-color-640.webp 640w, /_img/projects/israel-police/border-police/family-one-color-828.webp 828w, /_img/projects/israel-police/border-police/family-one-color-1200.webp 1200w, /_img/projects/israel-police/border-police/family-one-color-1920.webp 1920w, /_img/projects/israel-police/border-police/family-one-color-2560.webp 2560w, /_img/projects/israel-police/border-police/family-one-color-3840.webp 3840w" src="/_img/projects/israel-police/border-police/family-one-color-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-muted">
                    One color
                  </figcaption>
                </figure>
                <figure>
                  <img alt="Border Police - the official seal, ringed with the force name in Hebrew and English" loading="lazy" width="1012" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/border-police/family-seal-384.webp 384w, /_img/projects/israel-police/border-police/family-seal-640.webp 640w, /_img/projects/israel-police/border-police/family-seal-828.webp 828w, /_img/projects/israel-police/border-police/family-seal-1200.webp 1200w, /_img/projects/israel-police/border-police/family-seal-1920.webp 1920w, /_img/projects/israel-police/border-police/family-seal-2560.webp 2560w, /_img/projects/israel-police/border-police/family-seal-3840.webp 3840w" src="/_img/projects/israel-police/border-police/family-seal-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-muted">
                    Official seal
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Emblem in Material
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The new emblem tested on different materials: brass, polymer, print, chrome, ink, stone, leather and fabric.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-[64px]">
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-materials">
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem on polymer, on a rifle body" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-rifle-32.webp 32w, /_img/projects/israel-police/border-police/material-rifle-48.webp 48w, /_img/projects/israel-police/border-police/material-rifle-64.webp 64w, /_img/projects/israel-police/border-police/material-rifle-96.webp 96w, /_img/projects/israel-police/border-police/material-rifle-128.webp 128w, /_img/projects/israel-police/border-police/material-rifle-256.webp 256w, /_img/projects/israel-police/border-police/material-rifle-384.webp 384w, /_img/projects/israel-police/border-police/material-rifle-640.webp 640w, /_img/projects/israel-police/border-police/material-rifle-828.webp 828w, /_img/projects/israel-police/border-police/material-rifle-1200.webp 1200w, /_img/projects/israel-police/border-police/material-rifle-1920.webp 1920w, /_img/projects/israel-police/border-police/material-rifle-2560.webp 2560w, /_img/projects/israel-police/border-police/material-rifle-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-rifle-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem printed as a postage stamp" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-stamp-32.webp 32w, /_img/projects/israel-police/border-police/material-stamp-48.webp 48w, /_img/projects/israel-police/border-police/material-stamp-64.webp 64w, /_img/projects/israel-police/border-police/material-stamp-96.webp 96w, /_img/projects/israel-police/border-police/material-stamp-128.webp 128w, /_img/projects/israel-police/border-police/material-stamp-256.webp 256w, /_img/projects/israel-police/border-police/material-stamp-384.webp 384w, /_img/projects/israel-police/border-police/material-stamp-640.webp 640w, /_img/projects/israel-police/border-police/material-stamp-828.webp 828w, /_img/projects/israel-police/border-police/material-stamp-1200.webp 1200w, /_img/projects/israel-police/border-police/material-stamp-1920.webp 1920w, /_img/projects/israel-police/border-police/material-stamp-2560.webp 2560w, /_img/projects/israel-police/border-police/material-stamp-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-stamp-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem in black ink on paper" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-ink-32.webp 32w, /_img/projects/israel-police/border-police/material-ink-48.webp 48w, /_img/projects/israel-police/border-police/material-ink-64.webp 64w, /_img/projects/israel-police/border-police/material-ink-96.webp 96w, /_img/projects/israel-police/border-police/material-ink-128.webp 128w, /_img/projects/israel-police/border-police/material-ink-256.webp 256w, /_img/projects/israel-police/border-police/material-ink-384.webp 384w, /_img/projects/israel-police/border-police/material-ink-640.webp 640w, /_img/projects/israel-police/border-police/material-ink-828.webp 828w, /_img/projects/israel-police/border-police/material-ink-1200.webp 1200w, /_img/projects/israel-police/border-police/material-ink-1920.webp 1920w, /_img/projects/israel-police/border-police/material-ink-2560.webp 2560w, /_img/projects/israel-police/border-police/material-ink-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-ink-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem cut into stone" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-stone-32.webp 32w, /_img/projects/israel-police/border-police/material-stone-48.webp 48w, /_img/projects/israel-police/border-police/material-stone-64.webp 64w, /_img/projects/israel-police/border-police/material-stone-96.webp 96w, /_img/projects/israel-police/border-police/material-stone-128.webp 128w, /_img/projects/israel-police/border-police/material-stone-256.webp 256w, /_img/projects/israel-police/border-police/material-stone-384.webp 384w, /_img/projects/israel-police/border-police/material-stone-640.webp 640w, /_img/projects/israel-police/border-police/material-stone-828.webp 828w, /_img/projects/israel-police/border-police/material-stone-1200.webp 1200w, /_img/projects/israel-police/border-police/material-stone-1920.webp 1920w, /_img/projects/israel-police/border-police/material-stone-2560.webp 2560w, /_img/projects/israel-police/border-police/material-stone-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-stone-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem under a red light" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-red-32.webp 32w, /_img/projects/israel-police/border-police/material-red-48.webp 48w, /_img/projects/israel-police/border-police/material-red-64.webp 64w, /_img/projects/israel-police/border-police/material-red-96.webp 96w, /_img/projects/israel-police/border-police/material-red-128.webp 128w, /_img/projects/israel-police/border-police/material-red-256.webp 256w, /_img/projects/israel-police/border-police/material-red-384.webp 384w, /_img/projects/israel-police/border-police/material-red-640.webp 640w, /_img/projects/israel-police/border-police/material-red-828.webp 828w, /_img/projects/israel-police/border-police/material-red-1200.webp 1200w, /_img/projects/israel-police/border-police/material-red-1920.webp 1920w, /_img/projects/israel-police/border-police/material-red-2560.webp 2560w, /_img/projects/israel-police/border-police/material-red-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-red-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="false">
                  <img alt="Border Police - the emblem woven into camouflage fabric" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-camo-32.webp 32w, /_img/projects/israel-police/border-police/material-camo-48.webp 48w, /_img/projects/israel-police/border-police/material-camo-64.webp 64w, /_img/projects/israel-police/border-police/material-camo-96.webp 96w, /_img/projects/israel-police/border-police/material-camo-128.webp 128w, /_img/projects/israel-police/border-police/material-camo-256.webp 256w, /_img/projects/israel-police/border-police/material-camo-384.webp 384w, /_img/projects/israel-police/border-police/material-camo-640.webp 640w, /_img/projects/israel-police/border-police/material-camo-828.webp 828w, /_img/projects/israel-police/border-police/material-camo-1200.webp 1200w, /_img/projects/israel-police/border-police/material-camo-1920.webp 1920w, /_img/projects/israel-police/border-police/material-camo-2560.webp 2560w, /_img/projects/israel-police/border-police/material-camo-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-camo-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-rifle-32.webp 32w, /_img/projects/israel-police/border-police/material-rifle-48.webp 48w, /_img/projects/israel-police/border-police/material-rifle-64.webp 64w, /_img/projects/israel-police/border-police/material-rifle-96.webp 96w, /_img/projects/israel-police/border-police/material-rifle-128.webp 128w, /_img/projects/israel-police/border-police/material-rifle-256.webp 256w, /_img/projects/israel-police/border-police/material-rifle-384.webp 384w, /_img/projects/israel-police/border-police/material-rifle-640.webp 640w, /_img/projects/israel-police/border-police/material-rifle-828.webp 828w, /_img/projects/israel-police/border-police/material-rifle-1200.webp 1200w, /_img/projects/israel-police/border-police/material-rifle-1920.webp 1920w, /_img/projects/israel-police/border-police/material-rifle-2560.webp 2560w, /_img/projects/israel-police/border-police/material-rifle-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-rifle-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-stamp-32.webp 32w, /_img/projects/israel-police/border-police/material-stamp-48.webp 48w, /_img/projects/israel-police/border-police/material-stamp-64.webp 64w, /_img/projects/israel-police/border-police/material-stamp-96.webp 96w, /_img/projects/israel-police/border-police/material-stamp-128.webp 128w, /_img/projects/israel-police/border-police/material-stamp-256.webp 256w, /_img/projects/israel-police/border-police/material-stamp-384.webp 384w, /_img/projects/israel-police/border-police/material-stamp-640.webp 640w, /_img/projects/israel-police/border-police/material-stamp-828.webp 828w, /_img/projects/israel-police/border-police/material-stamp-1200.webp 1200w, /_img/projects/israel-police/border-police/material-stamp-1920.webp 1920w, /_img/projects/israel-police/border-police/material-stamp-2560.webp 2560w, /_img/projects/israel-police/border-police/material-stamp-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-stamp-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-ink-32.webp 32w, /_img/projects/israel-police/border-police/material-ink-48.webp 48w, /_img/projects/israel-police/border-police/material-ink-64.webp 64w, /_img/projects/israel-police/border-police/material-ink-96.webp 96w, /_img/projects/israel-police/border-police/material-ink-128.webp 128w, /_img/projects/israel-police/border-police/material-ink-256.webp 256w, /_img/projects/israel-police/border-police/material-ink-384.webp 384w, /_img/projects/israel-police/border-police/material-ink-640.webp 640w, /_img/projects/israel-police/border-police/material-ink-828.webp 828w, /_img/projects/israel-police/border-police/material-ink-1200.webp 1200w, /_img/projects/israel-police/border-police/material-ink-1920.webp 1920w, /_img/projects/israel-police/border-police/material-ink-2560.webp 2560w, /_img/projects/israel-police/border-police/material-ink-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-ink-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-stone-32.webp 32w, /_img/projects/israel-police/border-police/material-stone-48.webp 48w, /_img/projects/israel-police/border-police/material-stone-64.webp 64w, /_img/projects/israel-police/border-police/material-stone-96.webp 96w, /_img/projects/israel-police/border-police/material-stone-128.webp 128w, /_img/projects/israel-police/border-police/material-stone-256.webp 256w, /_img/projects/israel-police/border-police/material-stone-384.webp 384w, /_img/projects/israel-police/border-police/material-stone-640.webp 640w, /_img/projects/israel-police/border-police/material-stone-828.webp 828w, /_img/projects/israel-police/border-police/material-stone-1200.webp 1200w, /_img/projects/israel-police/border-police/material-stone-1920.webp 1920w, /_img/projects/israel-police/border-police/material-stone-2560.webp 2560w, /_img/projects/israel-police/border-police/material-stone-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-stone-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-red-32.webp 32w, /_img/projects/israel-police/border-police/material-red-48.webp 48w, /_img/projects/israel-police/border-police/material-red-64.webp 64w, /_img/projects/israel-police/border-police/material-red-96.webp 96w, /_img/projects/israel-police/border-police/material-red-128.webp 128w, /_img/projects/israel-police/border-police/material-red-256.webp 256w, /_img/projects/israel-police/border-police/material-red-384.webp 384w, /_img/projects/israel-police/border-police/material-red-640.webp 640w, /_img/projects/israel-police/border-police/material-red-828.webp 828w, /_img/projects/israel-police/border-police/material-red-1200.webp 1200w, /_img/projects/israel-police/border-police/material-red-1920.webp 1920w, /_img/projects/israel-police/border-police/material-red-2560.webp 2560w, /_img/projects/israel-police/border-police/material-red-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-red-3840.webp" />
                </div>
                <div className="mx-[6px] h-[347px] w-[260px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[560px] lg:w-[420px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 260px" srcSet="/_img/projects/israel-police/border-police/material-camo-32.webp 32w, /_img/projects/israel-police/border-police/material-camo-48.webp 48w, /_img/projects/israel-police/border-police/material-camo-64.webp 64w, /_img/projects/israel-police/border-police/material-camo-96.webp 96w, /_img/projects/israel-police/border-police/material-camo-128.webp 128w, /_img/projects/israel-police/border-police/material-camo-256.webp 256w, /_img/projects/israel-police/border-police/material-camo-384.webp 384w, /_img/projects/israel-police/border-police/material-camo-640.webp 640w, /_img/projects/israel-police/border-police/material-camo-828.webp 828w, /_img/projects/israel-police/border-police/material-camo-1200.webp 1200w, /_img/projects/israel-police/border-police/material-camo-1920.webp 1920w, /_img/projects/israel-police/border-police/material-camo-2560.webp 2560w, /_img/projects/israel-police/border-police/material-camo-3840.webp 3840w" src="/_img/projects/israel-police/border-police/material-camo-3840.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin " />
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Color & Type
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The colors come from the force itself: the green of the beret and the gray of the patches. The light green is a tactical choice, a muted tone that does not reflect light at night. One Hebrew typeface, Fb Constructor, in four weights.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6 lg:gap-x-[20px]">
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#003E27"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Off-Road Green
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #003E27
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone 3435 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    The green of the Border Police beret. Main brand color.
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#032616"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Nightly Woods
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #032616
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone 5535 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    A darker green for backgrounds. Depth without using black.
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#8FA57C"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Lady Fern
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #8FA57C
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone 7494 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    A tactical choice. A muted green that does not reflect light at night. Used for details and insignia.
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#3D4344"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Dark River
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #3D4344
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone 446 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    The gray of the patches. The base of every unit insignia.
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#000000"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Raven's Coat
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #000000
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone Black 6 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    Black for text and one-color use.
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#EFEFEF"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Snowflake
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #EFEFEF
                    <span className="px-[6px]">
                      ·
                    </span>
                    Pantone 663 C
                  </dd>
                  <dd className="mt-2 text-[13px] leading-[1.45] text-muted lg:text-[14px]">
                    Off-white for backgrounds. Softer than pure white.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-8 px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px] bg-[#F7F6F2]">
              <p className="text-label text-muted">
                FB CONSTRUCTOR · THE NEW BRAND TYPEFACE · PRINT, SOCIAL AND UNIFORM
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-8 lg:mt-[44px] lg:gap-x-[24px] grid-cols-1">
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    WEIGHTS
                  </figcaption>
                  <img alt="Border Police - the aleph drawn in each of the four weights" loading="lazy" width="470" height="425" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"235px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/border-police/type-weights-float-640.webp 640w, /_img/projects/israel-police/border-police/type-weights-float-828.webp 828w, /_img/projects/israel-police/border-police/type-weights-float-1200.webp 1200w, /_img/projects/israel-police/border-police/type-weights-float-1920.webp 1920w, /_img/projects/israel-police/border-police/type-weights-float-2560.webp 2560w, /_img/projects/israel-police/border-police/type-weights-float-3840.webp 3840w" src="/_img/projects/israel-police/border-police/type-weights-float-3840.webp" />
                </figure>
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    ALPHABET
                  </figcaption>
                  <img alt="Border Police - the Hebrew alphabet, first weight" loading="lazy" width="2040" height="120" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"1020px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/border-police/type-alpha-bold-float-640.webp 640w, /_img/projects/israel-police/border-police/type-alpha-bold-float-828.webp 828w, /_img/projects/israel-police/border-police/type-alpha-bold-float-1200.webp 1200w, /_img/projects/israel-police/border-police/type-alpha-bold-float-1920.webp 1920w, /_img/projects/israel-police/border-police/type-alpha-bold-float-2560.webp 2560w, /_img/projects/israel-police/border-police/type-alpha-bold-float-3840.webp 3840w" src="/_img/projects/israel-police/border-police/type-alpha-bold-float-3840.webp" />
                </figure>
                <figure>
                  <img alt="Border Police - the Hebrew alphabet, second weight" loading="lazy" width="2040" height="120" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"1020px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/border-police/type-alpha-medium-float-640.webp 640w, /_img/projects/israel-police/border-police/type-alpha-medium-float-828.webp 828w, /_img/projects/israel-police/border-police/type-alpha-medium-float-1200.webp 1200w, /_img/projects/israel-police/border-police/type-alpha-medium-float-1920.webp 1920w, /_img/projects/israel-police/border-police/type-alpha-medium-float-2560.webp 2560w, /_img/projects/israel-police/border-police/type-alpha-medium-float-3840.webp 3840w" src="/_img/projects/israel-police/border-police/type-alpha-medium-float-3840.webp" />
                </figure>
                <figure>
                  <img alt="Border Police - the Hebrew alphabet, third weight" loading="lazy" width="2040" height="120" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"1020px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/border-police/type-alpha-light-float-640.webp 640w, /_img/projects/israel-police/border-police/type-alpha-light-float-828.webp 828w, /_img/projects/israel-police/border-police/type-alpha-light-float-1200.webp 1200w, /_img/projects/israel-police/border-police/type-alpha-light-float-1920.webp 1920w, /_img/projects/israel-police/border-police/type-alpha-light-float-2560.webp 2560w, /_img/projects/israel-police/border-police/type-alpha-light-float-3840.webp 3840w" src="/_img/projects/israel-police/border-police/type-alpha-light-float-3840.webp" />
                </figure>
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    THE NAME
                  </figcaption>
                  <img alt="Border Police - the force name set in Fb Constructor" loading="lazy" width="1600" height="255" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"800px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/border-police/type-name-float-640.webp 640w, /_img/projects/israel-police/border-police/type-name-float-828.webp 828w, /_img/projects/israel-police/border-police/type-name-float-1200.webp 1200w, /_img/projects/israel-police/border-police/type-name-float-1920.webp 1920w, /_img/projects/israel-police/border-police/type-name-float-2560.webp 2560w, /_img/projects/israel-police/border-police/type-name-float-3840.webp 3840w" src="/_img/projects/israel-police/border-police/type-name-float-3840.webp" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Unit Insignia
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Twelve units, one family. Every insignia uses the same ring, the same lettering and the same two colors, and was produced as a patch.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="Border Police - the twelve unit insignia drawn as one family" loading="lazy" width="2616" height="1781" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/israel-police/border-police/units-board-640.webp 640w, /_img/projects/israel-police/border-police/units-board-828.webp 828w, /_img/projects/israel-police/border-police/units-board-1200.webp 1200w, /_img/projects/israel-police/border-police/units-board-1920.webp 1920w, /_img/projects/israel-police/border-police/units-board-2560.webp 2560w, /_img/projects/israel-police/border-police/units-board-3840.webp 3840w" src="/_img/projects/israel-police/border-police/units-board-3840.webp" />
                </figure>
              </div>
            </div>
          </div>
          <div className="mt-10 border-y border-rule bg-[#F6F6F6] py-12 lg:mt-[64px] lg:pb-[64px] lg:pt-[48px]">
            <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                <span className="text-label text-muted">
                  ONE UNIFORM BASE · ONLY THE UNIT INSIGNIA CHANGES
                </span>
                <span className="text-label text-muted">
                  AUTO-SCROLLING GALLERY · LOOPS · PAUSES ON HOVER
                </span>
              </div>
            </div>
            <div className="marquee-wrapper mt-10 lg:mt-[56px]">
              <div className="marquee-track marquee-units">
                <img alt="Border Police - the twelve unit insignia on one uniform base, seven regions and five brigades" aria-hidden="false" loading="lazy" width="6342" height="528" decoding="async" data-nimg="1" className="h-[132px] w-auto max-w-none shrink-0 lg:h-[264px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 3171px, 1586px" srcSet="/_img/projects/israel-police/border-police/units-marquee-32.webp 32w, /_img/projects/israel-police/border-police/units-marquee-48.webp 48w, /_img/projects/israel-police/border-police/units-marquee-64.webp 64w, /_img/projects/israel-police/border-police/units-marquee-96.webp 96w, /_img/projects/israel-police/border-police/units-marquee-128.webp 128w, /_img/projects/israel-police/border-police/units-marquee-256.webp 256w, /_img/projects/israel-police/border-police/units-marquee-384.webp 384w, /_img/projects/israel-police/border-police/units-marquee-640.webp 640w, /_img/projects/israel-police/border-police/units-marquee-828.webp 828w, /_img/projects/israel-police/border-police/units-marquee-1200.webp 1200w, /_img/projects/israel-police/border-police/units-marquee-1920.webp 1920w, /_img/projects/israel-police/border-police/units-marquee-2560.webp 2560w, /_img/projects/israel-police/border-police/units-marquee-3840.webp 3840w" src="/_img/projects/israel-police/border-police/units-marquee-3840.webp" />
                <img alt="" aria-hidden="true" loading="lazy" width="6342" height="528" decoding="async" data-nimg="1" className="h-[132px] w-auto max-w-none shrink-0 lg:h-[264px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 3171px, 1586px" srcSet="/_img/projects/israel-police/border-police/units-marquee-32.webp 32w, /_img/projects/israel-police/border-police/units-marquee-48.webp 48w, /_img/projects/israel-police/border-police/units-marquee-64.webp 64w, /_img/projects/israel-police/border-police/units-marquee-96.webp 96w, /_img/projects/israel-police/border-police/units-marquee-128.webp 128w, /_img/projects/israel-police/border-police/units-marquee-256.webp 256w, /_img/projects/israel-police/border-police/units-marquee-384.webp 384w, /_img/projects/israel-police/border-police/units-marquee-640.webp 640w, /_img/projects/israel-police/border-police/units-marquee-828.webp 828w, /_img/projects/israel-police/border-police/units-marquee-1200.webp 1200w, /_img/projects/israel-police/border-police/units-marquee-1920.webp 1920w, /_img/projects/israel-police/border-police/units-marquee-2560.webp 2560w, /_img/projects/israel-police/border-police/units-marquee-3840.webp 3840w" src="/_img/projects/israel-police/border-police/units-marquee-3840.webp" />
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Uniform Placement
                </h2>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-6 hidden sm:grid">
                <figure className="hidden overflow-hidden sm:block bg-canvas ">
                  <picture>
                    <source media="(max-width: 639px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    <img src="/projects/israel-police/border-police/uniform-a.webp" alt="Border Police - the uniform shirt the system is worn on" width="1502" height="2002" loading="lazy" decoding="async" className="h-auto w-full" />
                  </picture>
                </figure>
                <figure className="hidden overflow-hidden sm:block bg-canvas ">
                  <picture>
                    <source media="(max-width: 639px)" srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    <img src="/projects/israel-police/border-police/uniform-b.webp" alt="Border Police - the same shirt from the other side" width="1502" height="2002" loading="lazy" decoding="async" className="h-auto w-full" />
                  </picture>
                </figure>
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="Border Police - the placement map: the shirt with every patch, rank and tag numbered by sleeve and shoulder" loading="lazy" width="2624" height="1300" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/israel-police/border-police/placement-shirt-640.webp 640w, /_img/projects/israel-police/border-police/placement-shirt-828.webp 828w, /_img/projects/israel-police/border-police/placement-shirt-1200.webp 1200w, /_img/projects/israel-police/border-police/placement-shirt-1920.webp 1920w, /_img/projects/israel-police/border-police/placement-shirt-2560.webp 2560w, /_img/projects/israel-police/border-police/placement-shirt-3840.webp 3840w" src="/_img/projects/israel-police/border-police/placement-shirt-3840.webp" />
                </figure>
              </div>
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 ">
                <figure className="bg-canvas ">
                  <img alt="Border Police - the right sleeve, with name and role tags" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/placement-right-384.webp 384w, /_img/projects/israel-police/border-police/placement-right-640.webp 640w, /_img/projects/israel-police/border-police/placement-right-828.webp 828w, /_img/projects/israel-police/border-police/placement-right-1200.webp 1200w, /_img/projects/israel-police/border-police/placement-right-1920.webp 1920w, /_img/projects/israel-police/border-police/placement-right-2560.webp 2560w, /_img/projects/israel-police/border-police/placement-right-3840.webp 3840w" src="/_img/projects/israel-police/border-police/placement-right-3840.webp" />
                </figure>
                <figure className="bg-canvas ">
                  <img alt="Border Police - the left sleeve, mandatory service" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/placement-left-mandatory-384.webp 384w, /_img/projects/israel-police/border-police/placement-left-mandatory-640.webp 640w, /_img/projects/israel-police/border-police/placement-left-mandatory-828.webp 828w, /_img/projects/israel-police/border-police/placement-left-mandatory-1200.webp 1200w, /_img/projects/israel-police/border-police/placement-left-mandatory-1920.webp 1920w, /_img/projects/israel-police/border-police/placement-left-mandatory-2560.webp 2560w, /_img/projects/israel-police/border-police/placement-left-mandatory-3840.webp 3840w" src="/_img/projects/israel-police/border-police/placement-left-mandatory-3840.webp" />
                </figure>
                <figure className="bg-canvas ">
                  <img alt="Border Police - the left sleeve, career service" loading="lazy" width="1250" height="1666" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/border-police/placement-left-career-384.webp 384w, /_img/projects/israel-police/border-police/placement-left-career-640.webp 640w, /_img/projects/israel-police/border-police/placement-left-career-828.webp 828w, /_img/projects/israel-police/border-police/placement-left-career-1200.webp 1200w, /_img/projects/israel-police/border-police/placement-left-career-1920.webp 1920w, /_img/projects/israel-police/border-police/placement-left-career-2560.webp 2560w, /_img/projects/israel-police/border-police/placement-left-career-3840.webp 3840w" src="/_img/projects/israel-police/border-police/placement-left-career-3840.webp" />
                </figure>
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="Border Police - the system laid out as a deck on a 45-degree lattice" loading="lazy" width="1312" height="738" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/israel-police/border-police/deck-display-640.webp 640w, /_img/projects/israel-police/border-police/deck-display-828.webp 828w, /_img/projects/israel-police/border-police/deck-display-1200.webp 1200w, /_img/projects/israel-police/border-police/deck-display-1920.webp 1920w, /_img/projects/israel-police/border-police/deck-display-2560.webp 2560w, /_img/projects/israel-police/border-police/deck-display-3840.webp 3840w" src="/_img/projects/israel-police/border-police/deck-display-3840.webp" />
                </figure>
              </div>
            </div>
            <div className="mt-8 bg-[#F7F6F2] px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px]">
              <p className="text-label text-muted">
                WHAT GOES WHERE
              </p>
              <dl className="mt-7 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:mt-[44px] lg:grid-cols-4 lg:gap-x-[24px]">
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Right sleeve
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    01 Name tag · 02 Role tag · 03 Region / brigade pin
                  </dd>
                </div>
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Shoulders
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    04 Permanent / officer rank
                  </dd>
                </div>
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Left sleeve
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    05 Border Police emblem · 06 Regular rank / flag
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="pb-14 lg:pb-[116px]">
              <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-8 lg:grid-cols-5 lg:gap-0 lg:pt-[36px]">
                <div className="lg:col-span-2">
                  <p className="mb-3 text-label text-muted lg:mb-[16px]">
                    (PART 02)
                  </p>
                  <h2 className="text-project font-medium text-ink lg:max-w-[505px]">
                    YAMAM
                  </h2>
                </div>
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[44px]">
                  A new emblem and identity for YAMAM, Israel's national counter-terror unit: a facelift of the badge, a clean symbol and a black, gray and yellow system.
                </p>
              </div>
              <div data-reveal="ssr" className="reveal mt-10 lg:mt-[116px]">
                <figure className="bg-canvas ">
                  <img alt="YAMAM - the new symbol on its construction geometry" loading="lazy" width="2624" height="1476" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/israel-police/yamam/cover-640.webp 640w, /_img/projects/israel-police/yamam/cover-828.webp 828w, /_img/projects/israel-police/yamam/cover-1200.webp 1200w, /_img/projects/israel-police/yamam/cover-1920.webp 1920w, /_img/projects/israel-police/yamam/cover-2560.webp 2560w, /_img/projects/israel-police/yamam/cover-3840.webp 3840w" src="/_img/projects/israel-police/yamam/cover-3840.webp" />
                </figure>
              </div>
            </div>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  The Symbol
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The old badge, the construction grid and the new symbol. Wings, sword and star stayed. Everything was redrawn.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4 lg:gap-5">
                <div className="w-full sm:w-auto" style={{"flex":"1.0047619047619047 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="YAMAM - the old badge, before the redraw" loading="lazy" width="422" height="420" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/yamam/old-badge-v2-384.webp 384w, /_img/projects/israel-police/yamam/old-badge-v2-640.webp 640w, /_img/projects/israel-police/yamam/old-badge-v2-828.webp 828w, /_img/projects/israel-police/yamam/old-badge-v2-1200.webp 1200w, /_img/projects/israel-police/yamam/old-badge-v2-1920.webp 1920w, /_img/projects/israel-police/yamam/old-badge-v2-2560.webp 2560w, /_img/projects/israel-police/yamam/old-badge-v2-3840.webp 3840w" src="/_img/projects/israel-police/yamam/old-badge-v2-3840.webp" />
                  </figure>
                </div>
                <div className="w-full sm:w-auto" style={{"flex":"1.0047619047619047 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="YAMAM - the symbol on its construction grid" loading="lazy" width="844" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/yamam/construction-384.webp 384w, /_img/projects/israel-police/yamam/construction-640.webp 640w, /_img/projects/israel-police/yamam/construction-828.webp 828w, /_img/projects/israel-police/yamam/construction-1200.webp 1200w, /_img/projects/israel-police/yamam/construction-1920.webp 1920w, /_img/projects/israel-police/yamam/construction-2560.webp 2560w, /_img/projects/israel-police/yamam/construction-3840.webp 3840w" src="/_img/projects/israel-police/yamam/construction-3840.webp" />
                  </figure>
                </div>
                <div className="w-full sm:w-auto" style={{"flex":"1.0047619047619047 1 0%"}}>
                  <figure className="bg-canvas ">
                    <img alt="YAMAM - the new symbol, drawn clean" loading="lazy" width="844" height="840" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/israel-police/yamam/symbol-384.webp 384w, /_img/projects/israel-police/yamam/symbol-640.webp 640w, /_img/projects/israel-police/yamam/symbol-828.webp 828w, /_img/projects/israel-police/yamam/symbol-1200.webp 1200w, /_img/projects/israel-police/yamam/symbol-1920.webp 1920w, /_img/projects/israel-police/yamam/symbol-2560.webp 2560w, /_img/projects/israel-police/yamam/symbol-3840.webp 3840w" src="/_img/projects/israel-police/yamam/symbol-3840.webp" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-[#F7F6F2] px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px]">
              <p className="text-label text-muted">
                WHAT THE SYMBOL CARRIES
              </p>
              <dl className="mt-7 grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:mt-[44px] lg:grid-cols-4 lg:gap-x-[24px]">
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Wings
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    Freedom of action, crossing borders, and constant pursuit of the mission.
                  </dd>
                </div>
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Sword
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    The continuity of Jewish fighting, from the Bible to today.
                  </dd>
                </div>
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Star of David
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    Jewish identity and nationhood, an anchor of values.
                  </dd>
                </div>
                <div>
                  <dt className="text-[17px] font-medium text-[#100E0C] lg:text-[18px]">
                    Menorah
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.5] text-[#84827E] lg:mt-[10px] lg:text-[15px]">
                    Light, path and leadership. Stability and order.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Seven Becomes Nine
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The emblem already carries a menorah. Two more bases make its seven branches nine - a chanukiah - and the sword stands as the shamash. It puts the unit inside the story of the rededication: a light relit, and a state brought back with it.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="overflow-hidden bg-canvas  ">
                  <picture>
                    <source media="(max-width: 639px)" srcSet="/projects/israel-police/yamam/chanukiah-m.webp" width="780" height="780" />
                    <img src="/projects/israel-police/yamam/chanukiah-band.svg" alt="YAMAM - the emblem read as a chanukiah: eight segments lit across the wings, the sword standing as the shamash" width="2500" height="1300" loading="lazy" decoding="async" className="h-auto w-full" />
                  </picture>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  The Badge
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The round seal rebuilt around the new symbol, in Hebrew and in English, and tested at every size down to a 10 percent patch.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="mt-8 px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px] bg-[#F7F6F2]">
              <p className="text-label text-muted">
                THE SEAL · TWO VERSIONS, DIGITAL AND PATCHES / PRINT
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-8 lg:mt-[44px] lg:gap-x-[24px] grid-cols-1 sm:grid-cols-2">
                <figure>
                  <img alt="YAMAM - the seal drawn in outline, for digital use" loading="lazy" width="1380" height="1323" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 644px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/seal-digital-384.webp 384w, /_img/projects/israel-police/yamam/seal-digital-640.webp 640w, /_img/projects/israel-police/yamam/seal-digital-828.webp 828w, /_img/projects/israel-police/yamam/seal-digital-1200.webp 1200w, /_img/projects/israel-police/yamam/seal-digital-1920.webp 1920w, /_img/projects/israel-police/yamam/seal-digital-2560.webp 2560w, /_img/projects/israel-police/yamam/seal-digital-3840.webp 3840w" src="/_img/projects/israel-police/yamam/seal-digital-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-muted">
                    Digital
                  </figcaption>
                </figure>
                <figure>
                  <img alt="YAMAM - the seal drawn solid, for patches and print" loading="lazy" width="1380" height="1323" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 644px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/seal-print-384.webp 384w, /_img/projects/israel-police/yamam/seal-print-640.webp 640w, /_img/projects/israel-police/yamam/seal-print-828.webp 828w, /_img/projects/israel-police/yamam/seal-print-1200.webp 1200w, /_img/projects/israel-police/yamam/seal-print-1920.webp 1920w, /_img/projects/israel-police/yamam/seal-print-2560.webp 2560w, /_img/projects/israel-police/yamam/seal-print-3840.webp 3840w" src="/_img/projects/israel-police/yamam/seal-print-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-muted">
                    Patches / print
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px] bg-[#111111]">
              <p className="text-label text-[#8A8A86]">
                MINIMUM SIZES
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-8 lg:mt-[44px] lg:gap-x-[24px] grid-cols-2 lg:grid-cols-4">
                <figure>
                  <img alt="YAMAM - the full seal, used at full size" loading="lazy" width="529" height="520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/size-100-384.webp 384w, /_img/projects/israel-police/yamam/size-100-640.webp 640w, /_img/projects/israel-police/yamam/size-100-828.webp 828w, /_img/projects/israel-police/yamam/size-100-1200.webp 1200w, /_img/projects/israel-police/yamam/size-100-1920.webp 1920w, /_img/projects/israel-police/yamam/size-100-2560.webp 2560w, /_img/projects/israel-police/yamam/size-100-3840.webp 3840w" src="/_img/projects/israel-police/yamam/size-100-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-[#C9C9C4]">
                    100%
                  </figcaption>
                </figure>
                <figure>
                  <img alt="YAMAM - the full seal at eighty percent" loading="lazy" width="529" height="520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/size-80-384.webp 384w, /_img/projects/israel-police/yamam/size-80-640.webp 640w, /_img/projects/israel-police/yamam/size-80-828.webp 828w, /_img/projects/israel-police/yamam/size-80-1200.webp 1200w, /_img/projects/israel-police/yamam/size-80-1920.webp 1920w, /_img/projects/israel-police/yamam/size-80-2560.webp 2560w, /_img/projects/israel-police/yamam/size-80-3840.webp 3840w" src="/_img/projects/israel-police/yamam/size-80-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-[#C9C9C4]">
                    80%
                  </figcaption>
                </figure>
                <figure>
                  <img alt="YAMAM - wings and sword only, the mark simplified for small use" loading="lazy" width="529" height="520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/size-25-384.webp 384w, /_img/projects/israel-police/yamam/size-25-640.webp 640w, /_img/projects/israel-police/yamam/size-25-828.webp 828w, /_img/projects/israel-police/yamam/size-25-1200.webp 1200w, /_img/projects/israel-police/yamam/size-25-1920.webp 1920w, /_img/projects/israel-police/yamam/size-25-2560.webp 2560w, /_img/projects/israel-police/yamam/size-25-3840.webp 3840w" src="/_img/projects/israel-police/yamam/size-25-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-[#C9C9C4]">
                    25%
                  </figcaption>
                </figure>
                <figure>
                  <img alt="YAMAM - the simplest form of the mark, for a ten percent patch" loading="lazy" width="529" height="520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 92vw" srcSet="/_img/projects/israel-police/yamam/size-10-384.webp 384w, /_img/projects/israel-police/yamam/size-10-640.webp 640w, /_img/projects/israel-police/yamam/size-10-828.webp 828w, /_img/projects/israel-police/yamam/size-10-1200.webp 1200w, /_img/projects/israel-police/yamam/size-10-1920.webp 1920w, /_img/projects/israel-police/yamam/size-10-2560.webp 2560w, /_img/projects/israel-police/yamam/size-10-3840.webp 3840w" src="/_img/projects/israel-police/yamam/size-10-3840.webp" />
                  <figcaption className="mt-3 text-[13px] lg:mt-[14px] lg:text-[14px] text-[#C9C9C4]">
                    10%
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Color & Type
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Five grays from off-white to near black, and one yellow for what matters. Fb Trick as the Hebrew typeface.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="mt-8 sm:mt-10 lg:mt-12">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6 lg:gap-x-[20px]">
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#E9E9E9"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Off-white
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #E9E9E9
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#D9D9D9"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Light gray
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #D9D9D9
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#B2B2B2"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Mid gray
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #B2B2B2
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#404040"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Dark gray
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #404040
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#202020"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Near black
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #202020
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#E7AD33"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Yellow
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #E7AD33
                  </dd>
                </div>
                <div>
                  <div className="aspect-[4/3] w-full" style={{"backgroundColor":"#FFDD97"}} aria-hidden="true" />
                  <dt className="mt-3 text-[15px] font-medium text-ink lg:mt-[14px] lg:text-[16px]">
                    Pale yellow
                  </dt>
                  <dd className="mt-1 text-[12px] tabular-nums text-muted lg:text-[13px]">
                    #FFDD97
                  </dd>
                </div>
              </dl>
            </div>
            <div className="mt-8 px-6 py-7 sm:mt-10 lg:mt-12 lg:px-[40px] lg:py-[40px] bg-[#F7F6F2]">
              <p className="text-label text-muted">
                FB TRICK · THE HEBREW TYPEFACE
              </p>
              <div className="mt-7 grid gap-x-5 gap-y-8 lg:mt-[44px] lg:gap-x-[24px] grid-cols-1">
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    01 · THE LETTER
                  </figcaption>
                  <img alt="YAMAM - the aleph of Fb Trick, drawn large" loading="lazy" width="610" height="600" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"305px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/yamam/type-letter-vec-640.webp 640w, /_img/projects/israel-police/yamam/type-letter-vec-828.webp 828w, /_img/projects/israel-police/yamam/type-letter-vec-1200.webp 1200w, /_img/projects/israel-police/yamam/type-letter-vec-1920.webp 1920w, /_img/projects/israel-police/yamam/type-letter-vec-2560.webp 2560w, /_img/projects/israel-police/yamam/type-letter-vec-3840.webp 3840w" src="/_img/projects/israel-police/yamam/type-letter-vec-3840.webp" />
                </figure>
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    02 · ALPHABET
                  </figcaption>
                  <img alt="YAMAM - the Hebrew alphabet in Fb Trick" loading="lazy" width="1400" height="514" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"700px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/yamam/type-alphabet-vec-640.webp 640w, /_img/projects/israel-police/yamam/type-alphabet-vec-828.webp 828w, /_img/projects/israel-police/yamam/type-alphabet-vec-1200.webp 1200w, /_img/projects/israel-police/yamam/type-alphabet-vec-1920.webp 1920w, /_img/projects/israel-police/yamam/type-alphabet-vec-2560.webp 2560w, /_img/projects/israel-police/yamam/type-alphabet-vec-3840.webp 3840w" src="/_img/projects/israel-police/yamam/type-alphabet-vec-3840.webp" />
                </figure>
                <figure>
                  <figcaption className="text-label text-muted mb-3 lg:mb-[14px]">
                    03 · NUMERALS
                  </figcaption>
                  <img alt="YAMAM - the numerals in Fb Trick" loading="lazy" width="840" height="104" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent","maxWidth":"420px"}} sizes="(min-width: 1024px) 1312px, 92vw" srcSet="/_img/projects/israel-police/yamam/type-numerals-vec-640.webp 640w, /_img/projects/israel-police/yamam/type-numerals-vec-828.webp 828w, /_img/projects/israel-police/yamam/type-numerals-vec-1200.webp 1200w, /_img/projects/israel-police/yamam/type-numerals-vec-1920.webp 1920w, /_img/projects/israel-police/yamam/type-numerals-vec-2560.webp 2560w, /_img/projects/israel-police/yamam/type-numerals-vec-3840.webp 3840w" src="/_img/projects/israel-police/yamam/type-numerals-vec-3840.webp" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Photography
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-[64px]">
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-photos">
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - an operator and a dog clearing a doorway" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/1-32.webp 32w, /_img/projects/israel-police/yamam/photos/1-48.webp 48w, /_img/projects/israel-police/yamam/photos/1-64.webp 64w, /_img/projects/israel-police/yamam/photos/1-96.webp 96w, /_img/projects/israel-police/yamam/photos/1-128.webp 128w, /_img/projects/israel-police/yamam/photos/1-256.webp 256w, /_img/projects/israel-police/yamam/photos/1-384.webp 384w, /_img/projects/israel-police/yamam/photos/1-640.webp 640w, /_img/projects/israel-police/yamam/photos/1-828.webp 828w, /_img/projects/israel-police/yamam/photos/1-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/1-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/1-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/1-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/1-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - a team moving through undergrowth, seen through a burst of motion" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/2-32.webp 32w, /_img/projects/israel-police/yamam/photos/2-48.webp 48w, /_img/projects/israel-police/yamam/photos/2-64.webp 64w, /_img/projects/israel-police/yamam/photos/2-96.webp 96w, /_img/projects/israel-police/yamam/photos/2-128.webp 128w, /_img/projects/israel-police/yamam/photos/2-256.webp 256w, /_img/projects/israel-police/yamam/photos/2-384.webp 384w, /_img/projects/israel-police/yamam/photos/2-640.webp 640w, /_img/projects/israel-police/yamam/photos/2-828.webp 828w, /_img/projects/israel-police/yamam/photos/2-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/2-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/2-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/2-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/2-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - hands working a breaching charge" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/3-32.webp 32w, /_img/projects/israel-police/yamam/photos/3-48.webp 48w, /_img/projects/israel-police/yamam/photos/3-64.webp 64w, /_img/projects/israel-police/yamam/photos/3-96.webp 96w, /_img/projects/israel-police/yamam/photos/3-128.webp 128w, /_img/projects/israel-police/yamam/photos/3-256.webp 256w, /_img/projects/israel-police/yamam/photos/3-384.webp 384w, /_img/projects/israel-police/yamam/photos/3-640.webp 640w, /_img/projects/israel-police/yamam/photos/3-828.webp 828w, /_img/projects/israel-police/yamam/photos/3-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/3-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/3-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/3-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/3-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - a suppressed barrel over a shoulder" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/4-32.webp 32w, /_img/projects/israel-police/yamam/photos/4-48.webp 48w, /_img/projects/israel-police/yamam/photos/4-64.webp 64w, /_img/projects/israel-police/yamam/photos/4-96.webp 96w, /_img/projects/israel-police/yamam/photos/4-128.webp 128w, /_img/projects/israel-police/yamam/photos/4-256.webp 256w, /_img/projects/israel-police/yamam/photos/4-384.webp 384w, /_img/projects/israel-police/yamam/photos/4-640.webp 640w, /_img/projects/israel-police/yamam/photos/4-828.webp 828w, /_img/projects/israel-police/yamam/photos/4-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/4-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/4-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/4-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/4-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - a helmet light burning toward the camera in a stairwell" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/5-32.webp 32w, /_img/projects/israel-police/yamam/photos/5-48.webp 48w, /_img/projects/israel-police/yamam/photos/5-64.webp 64w, /_img/projects/israel-police/yamam/photos/5-96.webp 96w, /_img/projects/israel-police/yamam/photos/5-128.webp 128w, /_img/projects/israel-police/yamam/photos/5-256.webp 256w, /_img/projects/israel-police/yamam/photos/5-384.webp 384w, /_img/projects/israel-police/yamam/photos/5-640.webp 640w, /_img/projects/israel-police/yamam/photos/5-828.webp 828w, /_img/projects/israel-police/yamam/photos/5-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/5-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/5-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/5-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/5-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - two operators fast-roping from a helicopter" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/6-32.webp 32w, /_img/projects/israel-police/yamam/photos/6-48.webp 48w, /_img/projects/israel-police/yamam/photos/6-64.webp 64w, /_img/projects/israel-police/yamam/photos/6-96.webp 96w, /_img/projects/israel-police/yamam/photos/6-128.webp 128w, /_img/projects/israel-police/yamam/photos/6-256.webp 256w, /_img/projects/israel-police/yamam/photos/6-384.webp 384w, /_img/projects/israel-police/yamam/photos/6-640.webp 640w, /_img/projects/israel-police/yamam/photos/6-828.webp 828w, /_img/projects/israel-police/yamam/photos/6-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/6-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/6-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/6-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/6-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - a masked operator in a gas mask against a wall" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/7-32.webp 32w, /_img/projects/israel-police/yamam/photos/7-48.webp 48w, /_img/projects/israel-police/yamam/photos/7-64.webp 64w, /_img/projects/israel-police/yamam/photos/7-96.webp 96w, /_img/projects/israel-police/yamam/photos/7-128.webp 128w, /_img/projects/israel-police/yamam/photos/7-256.webp 256w, /_img/projects/israel-police/yamam/photos/7-384.webp 384w, /_img/projects/israel-police/yamam/photos/7-640.webp 640w, /_img/projects/israel-police/yamam/photos/7-828.webp 828w, /_img/projects/israel-police/yamam/photos/7-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/7-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/7-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/7-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/7-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="false">
                  <img alt="YAMAM - two figures rappelling down a building" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/8-32.webp 32w, /_img/projects/israel-police/yamam/photos/8-48.webp 48w, /_img/projects/israel-police/yamam/photos/8-64.webp 64w, /_img/projects/israel-police/yamam/photos/8-96.webp 96w, /_img/projects/israel-police/yamam/photos/8-128.webp 128w, /_img/projects/israel-police/yamam/photos/8-256.webp 256w, /_img/projects/israel-police/yamam/photos/8-384.webp 384w, /_img/projects/israel-police/yamam/photos/8-640.webp 640w, /_img/projects/israel-police/yamam/photos/8-828.webp 828w, /_img/projects/israel-police/yamam/photos/8-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/8-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/8-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/8-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/8-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/1-32.webp 32w, /_img/projects/israel-police/yamam/photos/1-48.webp 48w, /_img/projects/israel-police/yamam/photos/1-64.webp 64w, /_img/projects/israel-police/yamam/photos/1-96.webp 96w, /_img/projects/israel-police/yamam/photos/1-128.webp 128w, /_img/projects/israel-police/yamam/photos/1-256.webp 256w, /_img/projects/israel-police/yamam/photos/1-384.webp 384w, /_img/projects/israel-police/yamam/photos/1-640.webp 640w, /_img/projects/israel-police/yamam/photos/1-828.webp 828w, /_img/projects/israel-police/yamam/photos/1-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/1-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/1-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/1-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/1-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/2-32.webp 32w, /_img/projects/israel-police/yamam/photos/2-48.webp 48w, /_img/projects/israel-police/yamam/photos/2-64.webp 64w, /_img/projects/israel-police/yamam/photos/2-96.webp 96w, /_img/projects/israel-police/yamam/photos/2-128.webp 128w, /_img/projects/israel-police/yamam/photos/2-256.webp 256w, /_img/projects/israel-police/yamam/photos/2-384.webp 384w, /_img/projects/israel-police/yamam/photos/2-640.webp 640w, /_img/projects/israel-police/yamam/photos/2-828.webp 828w, /_img/projects/israel-police/yamam/photos/2-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/2-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/2-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/2-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/2-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/3-32.webp 32w, /_img/projects/israel-police/yamam/photos/3-48.webp 48w, /_img/projects/israel-police/yamam/photos/3-64.webp 64w, /_img/projects/israel-police/yamam/photos/3-96.webp 96w, /_img/projects/israel-police/yamam/photos/3-128.webp 128w, /_img/projects/israel-police/yamam/photos/3-256.webp 256w, /_img/projects/israel-police/yamam/photos/3-384.webp 384w, /_img/projects/israel-police/yamam/photos/3-640.webp 640w, /_img/projects/israel-police/yamam/photos/3-828.webp 828w, /_img/projects/israel-police/yamam/photos/3-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/3-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/3-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/3-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/3-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/4-32.webp 32w, /_img/projects/israel-police/yamam/photos/4-48.webp 48w, /_img/projects/israel-police/yamam/photos/4-64.webp 64w, /_img/projects/israel-police/yamam/photos/4-96.webp 96w, /_img/projects/israel-police/yamam/photos/4-128.webp 128w, /_img/projects/israel-police/yamam/photos/4-256.webp 256w, /_img/projects/israel-police/yamam/photos/4-384.webp 384w, /_img/projects/israel-police/yamam/photos/4-640.webp 640w, /_img/projects/israel-police/yamam/photos/4-828.webp 828w, /_img/projects/israel-police/yamam/photos/4-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/4-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/4-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/4-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/4-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/5-32.webp 32w, /_img/projects/israel-police/yamam/photos/5-48.webp 48w, /_img/projects/israel-police/yamam/photos/5-64.webp 64w, /_img/projects/israel-police/yamam/photos/5-96.webp 96w, /_img/projects/israel-police/yamam/photos/5-128.webp 128w, /_img/projects/israel-police/yamam/photos/5-256.webp 256w, /_img/projects/israel-police/yamam/photos/5-384.webp 384w, /_img/projects/israel-police/yamam/photos/5-640.webp 640w, /_img/projects/israel-police/yamam/photos/5-828.webp 828w, /_img/projects/israel-police/yamam/photos/5-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/5-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/5-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/5-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/5-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/6-32.webp 32w, /_img/projects/israel-police/yamam/photos/6-48.webp 48w, /_img/projects/israel-police/yamam/photos/6-64.webp 64w, /_img/projects/israel-police/yamam/photos/6-96.webp 96w, /_img/projects/israel-police/yamam/photos/6-128.webp 128w, /_img/projects/israel-police/yamam/photos/6-256.webp 256w, /_img/projects/israel-police/yamam/photos/6-384.webp 384w, /_img/projects/israel-police/yamam/photos/6-640.webp 640w, /_img/projects/israel-police/yamam/photos/6-828.webp 828w, /_img/projects/israel-police/yamam/photos/6-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/6-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/6-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/6-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/6-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/7-32.webp 32w, /_img/projects/israel-police/yamam/photos/7-48.webp 48w, /_img/projects/israel-police/yamam/photos/7-64.webp 64w, /_img/projects/israel-police/yamam/photos/7-96.webp 96w, /_img/projects/israel-police/yamam/photos/7-128.webp 128w, /_img/projects/israel-police/yamam/photos/7-256.webp 256w, /_img/projects/israel-police/yamam/photos/7-384.webp 384w, /_img/projects/israel-police/yamam/photos/7-640.webp 640w, /_img/projects/israel-police/yamam/photos/7-828.webp 828w, /_img/projects/israel-police/yamam/photos/7-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/7-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/7-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/7-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/7-3840.webp" />
                </div>
                <div className="mx-[6px] h-[170px] w-[280px] shrink-0 overflow-hidden lg:mx-[10px] lg:h-[182px] lg:w-[300px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="454" height="301" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 300px, 280px" srcSet="/_img/projects/israel-police/yamam/photos/8-32.webp 32w, /_img/projects/israel-police/yamam/photos/8-48.webp 48w, /_img/projects/israel-police/yamam/photos/8-64.webp 64w, /_img/projects/israel-police/yamam/photos/8-96.webp 96w, /_img/projects/israel-police/yamam/photos/8-128.webp 128w, /_img/projects/israel-police/yamam/photos/8-256.webp 256w, /_img/projects/israel-police/yamam/photos/8-384.webp 384w, /_img/projects/israel-police/yamam/photos/8-640.webp 640w, /_img/projects/israel-police/yamam/photos/8-828.webp 828w, /_img/projects/israel-police/yamam/photos/8-1200.webp 1200w, /_img/projects/israel-police/yamam/photos/8-1920.webp 1920w, /_img/projects/israel-police/yamam/photos/8-2560.webp 2560w, /_img/projects/israel-police/yamam/photos/8-3840.webp 3840w" src="/_img/projects/israel-police/yamam/photos/8-3840.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin " />
        </section>
        <section className="relative w-full bg-canvas pb-16 pt-16 lg:pb-[120px] lg:pt-[104px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <a className="group block pt-6 lg:pt-[34px]" aria-label="Next project: Rise" href="/work/rise">
              <p className="text-label text-muted">
                NEXT PROJECT
              </p>
              <div className="mt-4 flex items-end justify-between gap-6 lg:mt-[36px]">
                <p className="-ml-[0.062em] w-full font-space text-case-title font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  RISE
                </p>
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="mb-2 h-[36px] w-[36px] shrink-0 text-ink transition-transform duration-300 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1 lg:mb-[18px] lg:h-[56px] lg:w-[56px]">
                  <g transform="rotate(-45 8 8) translate(5.1 5.649596381536973) scale(0.19476)">
                    <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </section>
      </main>
      <ClipReveal>
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
      </ClipReveal>
    </div>
    </>
  );
}
