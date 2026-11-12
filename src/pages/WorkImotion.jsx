import WorkVideo from '../components/work/WorkVideo';
import ClipReveal from '../components/work/ClipReveal';
export default function WorkImotion() {
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
              (CASE STUDY · 03)
            </p>
            <h1 className="mt-4 -ml-[0.062em] w-full font-space text-case-title font-medium text-ink lg:mt-[24px]">
              IMOTION
            </h1>
            <ul className="flex flex-wrap gap-[calc(10*var(--px))] mt-6 lg:mt-[52px]">
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Brand Design
              </li>
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Product Design
              </li>
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Art Direction
              </li>
            </ul>
            <p className="mt-8 max-w-[75ch] text-body-lg text-ink lg:mt-[47px]">
              A brand and digital launch for iMotion, a professional EMDR device that runs visual, auditory and tactile stimulation from one unit instead of three. Identity, product communication, and the site therapists pre-order it on.
            </p>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-10 lg:mt-[52px]" />
            <dl className="grid grid-cols-2 gap-x-0 gap-y-8 pt-6 sm:grid-cols-4 sm:gap-x-6 lg:gap-0 lg:pt-[22px]">
              <div>
                <dt className="text-label text-muted">
                  ROLE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Brand & Product Designer
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TIMELINE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  3 Months
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  YEAR
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  2025 / 2026
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TEAM
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Co-founded studio
                </dd>
              </div>
            </dl>
            <figure className="bg-canvas mt-8 lg:mt-[52px]">
              <img alt="The iMotion device, controller and companion app" width="2624" height="1548" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/hero-band-640.webp 640w, /_img/projects/imotion/hero-band-828.webp 828w, /_img/projects/imotion/hero-band-1200.webp 1200w, /_img/projects/imotion/hero-band-1920.webp 1920w, /_img/projects/imotion/hero-band-2560.webp 2560w, /_img/projects/imotion/hero-band-3840.webp 3840w" src="/_img/projects/imotion/hero-band-3840.webp" />
            </figure>
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
                  Built the brand system - typography, palette and the rules that keep a clinical device from reading cold.
                </li>
                <li className="pt-2 first:pt-0">
                  Designed how the device is explained: one unit doing what three separate tools used to.
                </li>
                <li className="pt-2 first:pt-0">
                  Designed the product site and the pre-order flow therapists reserve the device through.
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
                  (THE PROBLEM)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  EMDR therapists typically run visual, auditory, and tactile stimulation from separate tools. iMotion brings the three into one device, so the therapist manages the session without switching between disconnected equipment.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                <dt className="text-label text-muted lg:col-span-2">
                  (TRUST & POSITIONING)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  A new clinical device has to feel credible without going cold or overly medical. So the product is presented through precise explanation: what the system is, what is included, how it is used in session, and the practical layer - support, warranty, shipping.
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                <dt className="text-label text-muted lg:col-span-2">
                  (WHAT CHANGED)
                </dt>
                <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                  Shipped. Customers have placed orders and received devices. The product has since been refined with industrial designers - the look and the functionality improved, the same idea carried to a modern standard.
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-16 lg:pt-[96px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <h2 data-reveal="ssr" className="reveal text-subhead font-medium text-ink">
              Approach
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
                      Positioning
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Defined the product’s core story around trust, clinical flow, and multi-sensory EMDR support.
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
                      Brand System
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    A restrained visual direction using light tones, sharp typography, product focus, and medical-tech precision.
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
                      Website Structure
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    A landing-page narrative that explains the product, its use cases, and its value for therapists.
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
                      Product Communication
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Translated technical features into clear user benefits across visual, auditory, and tactile stimulation.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  One Device. Three Stimulations.
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                iMotion brings visual, auditory, and tactile stimulation into one connected EMDR tool. The goal was to present the device as a complete clinical system, not a collection of separate accessories - making the value clear from the first interaction.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <div className="relative overflow-hidden">
                    <img alt="The iMotion base and light bar annotated - controller, tactile stimulation, visual stimulation and the start/stop button" loading="lazy" width="2622" height="1522" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/device-trio-640.webp 640w, /_img/projects/imotion/device-trio-828.webp 828w, /_img/projects/imotion/device-trio-1200.webp 1200w, /_img/projects/imotion/device-trio-1920.webp 1920w, /_img/projects/imotion/device-trio-2560.webp 2560w, /_img/projects/imotion/device-trio-3840.webp 3840w" src="/_img/projects/imotion/device-trio-3840.webp" />
                    <div className="absolute overflow-hidden" style={{"left":"61.14%","top":"14.52%","width":"33.52%","height":"71.42%"}}>
                      <WorkVideo poster="/projects/imotion/device-screen.jpg" muted loop playsInline preload="none" aria-label="The iMotion base and light bar annotated - controller, tactile stimulation, visual stimulation and the start/stop button" className="bg-canvas h-full w-full object-cover ">
                        <source src="/projects/imotion/device-screen.mp4" type="video/mp4" />
                      </WorkVideo>
                    </div>
                  </div>
                </figure>
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="Combining visual, auditory and tactile stimulation - the iMotion app icon on a phone" loading="lazy" width="2630" height="1316" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/companion-app-640.webp 640w, /_img/projects/imotion/companion-app-828.webp 828w, /_img/projects/imotion/companion-app-1200.webp 1200w, /_img/projects/imotion/companion-app-1920.webp 1920w, /_img/projects/imotion/companion-app-2560.webp 2560w, /_img/projects/imotion/companion-app-3840.webp 3840w" src="/_img/projects/imotion/companion-app-3840.webp" />
                </figure>
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="The blue field the brand uses for the stimulation itself" loading="lazy" width="2618" height="1298" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/stimulation-640.webp 640w, /_img/projects/imotion/stimulation-828.webp 828w, /_img/projects/imotion/stimulation-1200.webp 1200w, /_img/projects/imotion/stimulation-1920.webp 1920w, /_img/projects/imotion/stimulation-2560.webp 2560w, /_img/projects/imotion/stimulation-3840.webp 3840w" src="/_img/projects/imotion/stimulation-3840.webp" />
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
                  Website & Pre-Order Flow
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                A product-led website that presents iMotion as a professional EMDR system and guides therapists toward reserving the device. Calm layouts, focused product visuals, sharp messaging, and a direct path from understanding the device to taking action - supporting pre-orders without feeling aggressive.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="iMotion - Website & Pre-Order Flow (1)" loading="lazy" width="1968" height="1142" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/website-640.webp 640w, /_img/projects/imotion/website-828.webp 828w, /_img/projects/imotion/website-1200.webp 1200w, /_img/projects/imotion/website-1920.webp 1920w, /_img/projects/imotion/website-2560.webp 2560w, /_img/projects/imotion/website-3840.webp 3840w" src="/_img/projects/imotion/website-3840.webp" />
                </figure>
              </div>
              <div className="mt-8 sm:mt-10 lg:mt-12">
                <div style={{"zIndex":"1"}} className="sticky mb-6 w-[86%] last:mb-0 sm:w-[72%] lg:mb-10 lg:w-[36.357%] motion-reduce:static motion-reduce:w-full top-20 ml-0 lg:ml-0">
                  <div>
                    <figure className=" ">
                      <img alt="iMotion - pre-order flow, step 1" loading="lazy" width="1090" height="836" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/imotion/web-card-1-384.webp 384w, /_img/projects/imotion/web-card-1-640.webp 640w, /_img/projects/imotion/web-card-1-828.webp 828w, /_img/projects/imotion/web-card-1-1200.webp 1200w, /_img/projects/imotion/web-card-1-1920.webp 1920w, /_img/projects/imotion/web-card-1-2560.webp 2560w, /_img/projects/imotion/web-card-1-3840.webp 3840w" src="/_img/projects/imotion/web-card-1-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"2"}} className="sticky mb-6 w-[86%] last:mb-0 sm:w-[72%] lg:mb-10 lg:w-[36.357%] motion-reduce:static motion-reduce:w-full top-[6.5rem] ml-[4%] lg:ml-[21.265%]">
                  <div>
                    <figure className=" ">
                      <img alt="iMotion - pre-order flow, step 2" loading="lazy" width="1090" height="836" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/imotion/web-card-2-384.webp 384w, /_img/projects/imotion/web-card-2-640.webp 640w, /_img/projects/imotion/web-card-2-828.webp 828w, /_img/projects/imotion/web-card-2-1200.webp 1200w, /_img/projects/imotion/web-card-2-1920.webp 1920w, /_img/projects/imotion/web-card-2-2560.webp 2560w, /_img/projects/imotion/web-card-2-3840.webp 3840w" src="/_img/projects/imotion/web-card-2-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"3"}} className="sticky mb-6 w-[86%] last:mb-0 sm:w-[72%] lg:mb-10 lg:w-[36.357%] motion-reduce:static motion-reduce:w-full top-32 ml-[8%] lg:ml-[42.530%]">
                  <div>
                    <figure className=" ">
                      <img alt="iMotion - pre-order flow, step 3" loading="lazy" width="1090" height="836" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/imotion/web-card-3-384.webp 384w, /_img/projects/imotion/web-card-3-640.webp 640w, /_img/projects/imotion/web-card-3-828.webp 828w, /_img/projects/imotion/web-card-3-1200.webp 1200w, /_img/projects/imotion/web-card-3-1920.webp 1920w, /_img/projects/imotion/web-card-3-2560.webp 2560w, /_img/projects/imotion/web-card-3-3840.webp 3840w" src="/_img/projects/imotion/web-card-3-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"4"}} className="sticky mb-6 w-[86%] last:mb-0 sm:w-[72%] lg:mb-10 lg:w-[36.357%] motion-reduce:static motion-reduce:w-full top-[10.5rem] ml-[12%] lg:ml-[63.796%]">
                  <div>
                    <figure className=" ">
                      <img alt="iMotion - pre-order flow, step 4" loading="lazy" width="1090" height="836" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 421px, (min-width: 640px) 46vw, 100vw" srcSet="/_img/projects/imotion/web-card-4-384.webp 384w, /_img/projects/imotion/web-card-4-640.webp 640w, /_img/projects/imotion/web-card-4-828.webp 828w, /_img/projects/imotion/web-card-4-1200.webp 1200w, /_img/projects/imotion/web-card-4-1920.webp 1920w, /_img/projects/imotion/web-card-4-2560.webp 2560w, /_img/projects/imotion/web-card-4-3840.webp 3840w" src="/_img/projects/imotion/web-card-4-3840.webp" />
                    </figure>
                  </div>
                </div>
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
                  Brand System
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Sharp typography, a restrained color palette, and clean visual rules create a brand that feels precise without becoming cold - calm, trustworthy, and easy to recognize across the website, product visuals, decks, and marketing touchpoints.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div className="mt-8 sm:mt-10 lg:-mb-[30%] lg:mt-12">
                <div style={{"zIndex":"1"}} className="sticky mb-[26%] motion-reduce:static motion-reduce:mb-6 top-[96px]">
                  <div style={{"transform":"rotate(-1.1deg)"}}>
                    <figure className="bg-canvas ">
                      <img alt="The iMotion wordmark on its ground" loading="lazy" width="2624" height="1486" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-card-1-640.webp 640w, /_img/projects/imotion/brand-card-1-828.webp 828w, /_img/projects/imotion/brand-card-1-1200.webp 1200w, /_img/projects/imotion/brand-card-1-1920.webp 1920w, /_img/projects/imotion/brand-card-1-2560.webp 2560w, /_img/projects/imotion/brand-card-1-3840.webp 3840w" src="/_img/projects/imotion/brand-card-1-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"2"}} className="sticky mb-[26%] motion-reduce:static motion-reduce:mb-6 top-[113px]">
                  <div style={{"transform":"rotate(0.8deg)"}}>
                    <figure className="bg-canvas ">
                      <img alt="The wordmark enlarged to outlines, o t i o running off both edges" loading="lazy" width="2624" height="1486" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-card-2-640.webp 640w, /_img/projects/imotion/brand-card-2-828.webp 828w, /_img/projects/imotion/brand-card-2-1200.webp 1200w, /_img/projects/imotion/brand-card-2-1920.webp 1920w, /_img/projects/imotion/brand-card-2-2560.webp 2560w, /_img/projects/imotion/brand-card-2-3840.webp 3840w" src="/_img/projects/imotion/brand-card-2-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"3"}} className="sticky mb-[26%] motion-reduce:static motion-reduce:mb-6 top-[130px]">
                  <div style={{"transform":"rotate(-0.6deg)"}}>
                    <figure className="bg-canvas ">
                      <img alt="Type specimen - Poppins Medium, alphabet and numerals" loading="lazy" width="2624" height="1486" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-card-3-640.webp 640w, /_img/projects/imotion/brand-card-3-828.webp 828w, /_img/projects/imotion/brand-card-3-1200.webp 1200w, /_img/projects/imotion/brand-card-3-1920.webp 1920w, /_img/projects/imotion/brand-card-3-2560.webp 2560w, /_img/projects/imotion/brand-card-3-3840.webp 3840w" src="/_img/projects/imotion/brand-card-3-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"4"}} className="sticky mb-[26%] motion-reduce:static motion-reduce:mb-6 top-[147px]">
                  <div style={{"transform":"rotate(0.35deg)"}}>
                    <figure className="bg-canvas ">
                      <img alt="A New Standard For EMDR Tools, set on blue silk" loading="lazy" width="2624" height="1486" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-card-4-640.webp 640w, /_img/projects/imotion/brand-card-4-828.webp 828w, /_img/projects/imotion/brand-card-4-1200.webp 1200w, /_img/projects/imotion/brand-card-4-1920.webp 1920w, /_img/projects/imotion/brand-card-4-2560.webp 2560w, /_img/projects/imotion/brand-card-4-3840.webp 3840w" src="/_img/projects/imotion/brand-card-4-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div style={{"zIndex":"5"}} className="sticky mb-[26%] motion-reduce:static motion-reduce:mb-6 top-[164px]">
                  <div style={{"transform":"rotate(0deg)"}}>
                    <figure className="bg-canvas ">
                      <img alt="An approach and perspective that blend technology with emotion" loading="lazy" width="2624" height="1486" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-card-5-640.webp 640w, /_img/projects/imotion/brand-card-5-828.webp 828w, /_img/projects/imotion/brand-card-5-1200.webp 1200w, /_img/projects/imotion/brand-card-5-1920.webp 1920w, /_img/projects/imotion/brand-card-5-2560.webp 2560w, /_img/projects/imotion/brand-card-5-3840.webp 3840w" src="/_img/projects/imotion/brand-card-5-3840.webp" />
                    </figure>
                  </div>
                </div>
                <div aria-hidden="true" className="pt-[46%] motion-reduce:hidden" />
              </div>
              <div data-reveal="ssr" className="reveal  ">
                <figure className="bg-canvas ">
                  <img alt="The brand out of doors - a hoarding reading “a tool both patients and therapists can fully trust”, beside the icon set" loading="lazy" width="2624" height="1040" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/imotion/brand-billboard-640.webp 640w, /_img/projects/imotion/brand-billboard-828.webp 828w, /_img/projects/imotion/brand-billboard-1200.webp 1200w, /_img/projects/imotion/brand-billboard-1920.webp 1920w, /_img/projects/imotion/brand-billboard-2560.webp 2560w, /_img/projects/imotion/brand-billboard-3840.webp 3840w" src="/_img/projects/imotion/brand-billboard-3840.webp" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pb-16 pt-16 lg:pb-[120px] lg:pt-[104px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <a className="group block pt-6 lg:pt-[34px]" aria-label="Next project: Israel Police" href="/work/israel-police">
              <p className="text-label text-muted">
                NEXT PROJECT
              </p>
              <div className="mt-4 flex items-end justify-between gap-6 lg:mt-[36px]">
                <p className="-ml-[0.062em] w-full font-space text-case-title font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  ISRAEL POLICE
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
