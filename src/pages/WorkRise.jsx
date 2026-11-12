import DashboardFinder from '../components/work/DashboardFinder';
import CustomerDashboard from '../components/work/CustomerDashboard';
import WorkVideo from '../components/work/WorkVideo';
import ClipReveal from '../components/work/ClipReveal';
import BoardGallery from '../components/work/BoardGallery';
const BOARDS_0 = [
  {
    "stage": "Discovery",
    "alt": "Dashboard Finder - discovery and UX definition",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/finder-discovery.png"
  },
  {
    "stage": "User Flow",
    "alt": "Dashboard Finder - user flow",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/finder-userflow.png"
  },
  {
    "stage": "Wireframes",
    "alt": "Dashboard Finder - lo-fi wireframes",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/finder-wireframes.png"
  }
];

const BOARDS_1 = [
  {
    "stage": "Discovery",
    "alt": "Customer Dashboard - discovery and UX definition",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/cd-discovery.png"
  },
  {
    "stage": "User Flow",
    "alt": "Customer Dashboard - user flow",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/cd-userflow.png"
  },
  {
    "stage": "Wireframes",
    "alt": "Customer Dashboard - lo-fi wireframes",
    "width": 1968,
    "height": 1504,
    "src": "/projects/rise/cd-wireframes.png"
  }
];

export default function WorkRise() {
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
              (CASE STUDY · 01)
            </p>
            <h1 className="mt-4 -ml-[0.062em] w-full font-space text-case-title font-medium text-ink lg:mt-[24px]">
              RISE
            </h1>
            <ul className="flex flex-wrap gap-[calc(10*var(--px))] mt-6 lg:mt-[52px]">
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Product Design
              </li>
              <li className="border-[1.2px] border-chip px-4 py-[calc(9*var(--px))] font-archivo text-label font-medium text-ink">
                Brand Design
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
            <figure className="bg-canvas mt-8 lg:mt-[47px]">
              <img alt="Rise - case study hero" width="1968" height="1091" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1440px) 1312px, (min-width: 1024px) 92vw, 100vw" srcSet="/_img/projects/rise/hero-640.webp 640w, /_img/projects/rise/hero-828.webp 828w, /_img/projects/rise/hero-1200.webp 1200w, /_img/projects/rise/hero-1920.webp 1920w, /_img/projects/rise/hero-2560.webp 2560w, /_img/projects/rise/hero-3840.webp 3840w" src="/_img/projects/rise/hero-3840.webp" />
            </figure>
            <p className="mt-8 max-w-[75ch] text-body-lg text-ink lg:mt-[47px]">
              Rise is an AI-powered programmatic advertising company building machine-learning infrastructure for publishers across web, in-app, and CTV. We helped evolve Rise from a deeply technical infrastructure brand into a scalable, premium, AI-first visual ecosystem - one that speaks the same language across brand, product, and marketing.
            </p>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-10 lg:mt-[52px]" />
            <dl className="grid grid-cols-2 gap-x-0 gap-y-8 pt-6 sm:grid-cols-4 sm:gap-x-6 lg:gap-0 lg:pt-[22px]">
              <div>
                <dt className="text-label text-muted">
                  ROLE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  Brand · Product · Marketing · Motion & 3D
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TIMELINE
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  17 Months
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  YEAR
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  2025-2026
                </dd>
              </div>
              <div>
                <dt className="text-label text-muted">
                  TEAM
                </dt>
                <dd className="mt-1 text-body text-ink lg:mt-[8px]">
                  In-House Studio
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
                  Designed the Dashboard Finder across 45+ Looker Studio dashboards.
                </li>
                <li className="pt-2 first:pt-0">
                  Designed the customer dashboard: which KPIs lead, which client data stays out.
                </li>
                <li className="pt-2 first:pt-0">
                  Built the brand system with the in-house studio, applied across product, marketing and events.
                </li>
                <li className="pt-2 first:pt-0">
                  Made the motion and 3D in-house.
                </li>
              </ul>
            </div>
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
                      Research & System
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    We audited every existing Rise touchpoint to map the gaps between what Rise was technically and what it looked like externally. The brief: evolve, don’t replace.
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
                      Brand Evolution
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    A refined typographic system, a sharper palette, and a 3D-led key visual approach that signals AI without leaning on clichés. Every brand asset rebuilt to scale.
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
                      Product & Web
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Website and dashboard UI treated as one system - same components, same logic, same rhythm, so a customer moves from marketing to product without a seam.
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
                      Motion & AI
                    </h3>
                  </div>
                  <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                    Motion and 3D became the brand’s signature surface. AI-augmented workflows turned weeks of exploration into days while raising visual quality.
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
                    Product Systems
                  </h2>
                </div>
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[44px]">
                  Two internal tools for a company whose reporting had outgrown its own filing. Both start from an information problem rather than a visual one.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <p className="mb-3 text-label text-muted lg:mb-[12px]">
                  (SYSTEM 01 · DASHBOARD FINDER)
                </p>
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Dashboard Finder
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                One search for 45 Looker dashboards across Rise and SaaS. Instead of hunting by name, the team picks fields, measures, dimensions, time frame, and every dashboard is ranked live by how well it matches: perfect first, gaps shown honestly. Final UI below, with the discovery, wireframes and flow that led there.
              </p>
            </div>
            <div data-reveal="ssr" className="reveal mt-2 lg:mt-0">
              <dl className="">
                <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                  <dt className="text-label text-muted lg:col-span-2">
                    (45+ DASHBOARDS. FINDING ONE WAS THE TASK.)
                  </dt>
                  <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                    Reporting had grown across Looker Studio until locating the right file was part of the work. Two months: enough to organize what existed, not to rebuild the data under it.
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                  <dt className="text-label text-muted lg:col-span-2">
                    (FINDABILITY OVER REPORTING)
                  </dt>
                  <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                    One entry point, structured around how account managers search rather than how the data is stored.
                  </dd>
                </div>
              </dl>
            </div>
            <p data-reveal="ssr" className="reveal mt-10 text-label text-muted lg:mt-[64px]">
              (SCOPE)
            </p>
            <dl data-reveal="ssr" className="reveal mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-[28px] lg:gap-0">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  dashboards in one index
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    45+
                  </span>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  platforms searched together
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    2
                  </span>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  filters ranking every result
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    4
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <BoardGallery items={BOARDS_0} />
            </div>
          </div>
          <DashboardFinder />
        </section>
        <section className="relative w-full bg-canvas pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <p className="mb-3 text-label text-muted lg:mb-[12px]">
                  (SYSTEM 02 · CUSTOMER DASHBOARD)
                </p>
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Customer Dashboard
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                The client-facing side of the platform. A parent account sees its whole network on one screen, KPI health on top, child organizations ranked below, settings and blocklists self-serve. Monitor, locate, act, without a single ticket to the Rise team. Client data anonymized throughout.
              </p>
            </div>
            <div data-reveal="ssr" className="reveal mt-2 lg:mt-0">
              <dl className="">
                <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                  <dt className="text-label text-muted lg:col-span-2">
                    (CLIENTS HAD TO ASK A PERSON)
                  </dt>
                  <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                    A parent account wanting its network's performance went through its account manager. Part of that data was confidential and could not simply be handed over.
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-y-2 pt-8 first:pt-6 lg:grid-cols-5 lg:gap-0 lg:pt-[40px] lg:first:pt-[22px]">
                  <dt className="text-label text-muted lg:col-span-2">
                    (KPIS FIRST, DETAIL SECOND)
                  </dt>
                  <dd className="text-body text-muted lg:col-span-3 lg:max-w-[747px]">
                    The state of a network in one glance, with the restricted layer left out of the interface entirely.
                  </dd>
                </div>
              </dl>
            </div>
            <p data-reveal="ssr" className="reveal mt-10 text-label text-muted lg:mt-[64px]">
              (SCOPE)
            </p>
            <dl data-reveal="ssr" className="reveal mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-[28px] lg:gap-0">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  screen for the whole network
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    1
                  </span>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  KPIs above the fold
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    4
                  </span>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-label text-muted lg:mt-[11px]">
                  tabs, all self-serve
                </dt>
                <dd className="order-1">
                  <span className="block text-stat font-medium text-ink">
                    3
                  </span>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <BoardGallery items={BOARDS_1} />
            </div>
          </div>
          <CustomerDashboard />
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
                    Brand Ecosystem
                  </h2>
                </div>
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[44px]">
                  The same company, the other half of the job: one visual system that had to survive brand, product, marketing, events, 3D and a sales deck without becoming four different companies.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <div className="lg:col-span-2">
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Visual Ecosystem
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Four layers: brand sets the tone, product applies it, marketing extends it, motion carries it.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-[64px]">
            <div className="marquee-wrapper">
              <div className="marquee-track marquee-gallery">
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - A tennis ball caught in the net against a bright sky" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/1-32.webp 32w, /_img/projects/rise/gallery/1-48.webp 48w, /_img/projects/rise/gallery/1-64.webp 64w, /_img/projects/rise/gallery/1-96.webp 96w, /_img/projects/rise/gallery/1-128.webp 128w, /_img/projects/rise/gallery/1-256.webp 256w, /_img/projects/rise/gallery/1-384.webp 384w, /_img/projects/rise/gallery/1-640.webp 640w, /_img/projects/rise/gallery/1-828.webp 828w, /_img/projects/rise/gallery/1-1200.webp 1200w, /_img/projects/rise/gallery/1-1920.webp 1920w, /_img/projects/rise/gallery/1-2560.webp 2560w, /_img/projects/rise/gallery/1-3840.webp 3840w" src="/_img/projects/rise/gallery/1-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - Spheres running along a looping ribbon track" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/2-32.webp 32w, /_img/projects/rise/gallery/2-48.webp 48w, /_img/projects/rise/gallery/2-64.webp 64w, /_img/projects/rise/gallery/2-96.webp 96w, /_img/projects/rise/gallery/2-128.webp 128w, /_img/projects/rise/gallery/2-256.webp 256w, /_img/projects/rise/gallery/2-384.webp 384w, /_img/projects/rise/gallery/2-640.webp 640w, /_img/projects/rise/gallery/2-828.webp 828w, /_img/projects/rise/gallery/2-1200.webp 1200w, /_img/projects/rise/gallery/2-1920.webp 1920w, /_img/projects/rise/gallery/2-2560.webp 2560w, /_img/projects/rise/gallery/2-3840.webp 3840w" src="/_img/projects/rise/gallery/2-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - A sheet of blue wire mesh rippling above a pale ground" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/3-32.webp 32w, /_img/projects/rise/gallery/3-48.webp 48w, /_img/projects/rise/gallery/3-64.webp 64w, /_img/projects/rise/gallery/3-96.webp 96w, /_img/projects/rise/gallery/3-128.webp 128w, /_img/projects/rise/gallery/3-256.webp 256w, /_img/projects/rise/gallery/3-384.webp 384w, /_img/projects/rise/gallery/3-640.webp 640w, /_img/projects/rise/gallery/3-828.webp 828w, /_img/projects/rise/gallery/3-1200.webp 1200w, /_img/projects/rise/gallery/3-1920.webp 1920w, /_img/projects/rise/gallery/3-2560.webp 2560w, /_img/projects/rise/gallery/3-3840.webp 3840w" src="/_img/projects/rise/gallery/3-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - A human hand reaching toward a chrome one" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/4-32.webp 32w, /_img/projects/rise/gallery/4-48.webp 48w, /_img/projects/rise/gallery/4-64.webp 64w, /_img/projects/rise/gallery/4-96.webp 96w, /_img/projects/rise/gallery/4-128.webp 128w, /_img/projects/rise/gallery/4-256.webp 256w, /_img/projects/rise/gallery/4-384.webp 384w, /_img/projects/rise/gallery/4-640.webp 640w, /_img/projects/rise/gallery/4-828.webp 828w, /_img/projects/rise/gallery/4-1200.webp 1200w, /_img/projects/rise/gallery/4-1920.webp 1920w, /_img/projects/rise/gallery/4-2560.webp 2560w, /_img/projects/rise/gallery/4-3840.webp 3840w" src="/_img/projects/rise/gallery/4-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - Concentric arcs and colored spheres around a dish of blue balls" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/5-32.webp 32w, /_img/projects/rise/gallery/5-48.webp 48w, /_img/projects/rise/gallery/5-64.webp 64w, /_img/projects/rise/gallery/5-96.webp 96w, /_img/projects/rise/gallery/5-128.webp 128w, /_img/projects/rise/gallery/5-256.webp 256w, /_img/projects/rise/gallery/5-384.webp 384w, /_img/projects/rise/gallery/5-640.webp 640w, /_img/projects/rise/gallery/5-828.webp 828w, /_img/projects/rise/gallery/5-1200.webp 1200w, /_img/projects/rise/gallery/5-1920.webp 1920w, /_img/projects/rise/gallery/5-2560.webp 2560w, /_img/projects/rise/gallery/5-3840.webp 3840w" src="/_img/projects/rise/gallery/5-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - Message cards floating off a white screen" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/6-32.webp 32w, /_img/projects/rise/gallery/6-48.webp 48w, /_img/projects/rise/gallery/6-64.webp 64w, /_img/projects/rise/gallery/6-96.webp 96w, /_img/projects/rise/gallery/6-128.webp 128w, /_img/projects/rise/gallery/6-256.webp 256w, /_img/projects/rise/gallery/6-384.webp 384w, /_img/projects/rise/gallery/6-640.webp 640w, /_img/projects/rise/gallery/6-828.webp 828w, /_img/projects/rise/gallery/6-1200.webp 1200w, /_img/projects/rise/gallery/6-1920.webp 1920w, /_img/projects/rise/gallery/6-2560.webp 2560w, /_img/projects/rise/gallery/6-3840.webp 3840w" src="/_img/projects/rise/gallery/6-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - A glass and plastic assembly of colored blocks and rings" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/7-32.webp 32w, /_img/projects/rise/gallery/7-48.webp 48w, /_img/projects/rise/gallery/7-64.webp 64w, /_img/projects/rise/gallery/7-96.webp 96w, /_img/projects/rise/gallery/7-128.webp 128w, /_img/projects/rise/gallery/7-256.webp 256w, /_img/projects/rise/gallery/7-384.webp 384w, /_img/projects/rise/gallery/7-640.webp 640w, /_img/projects/rise/gallery/7-828.webp 828w, /_img/projects/rise/gallery/7-1200.webp 1200w, /_img/projects/rise/gallery/7-1920.webp 1920w, /_img/projects/rise/gallery/7-2560.webp 2560w, /_img/projects/rise/gallery/7-3840.webp 3840w" src="/_img/projects/rise/gallery/7-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - Coloured spheres rising into a blue sky" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/8-32.webp 32w, /_img/projects/rise/gallery/8-48.webp 48w, /_img/projects/rise/gallery/8-64.webp 64w, /_img/projects/rise/gallery/8-96.webp 96w, /_img/projects/rise/gallery/8-128.webp 128w, /_img/projects/rise/gallery/8-256.webp 256w, /_img/projects/rise/gallery/8-384.webp 384w, /_img/projects/rise/gallery/8-640.webp 640w, /_img/projects/rise/gallery/8-828.webp 828w, /_img/projects/rise/gallery/8-1200.webp 1200w, /_img/projects/rise/gallery/8-1920.webp 1920w, /_img/projects/rise/gallery/8-2560.webp 2560w, /_img/projects/rise/gallery/8-3840.webp 3840w" src="/_img/projects/rise/gallery/8-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="false">
                  <img alt="Rise - A stepped platform of white and blue blocks" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/9-32.webp 32w, /_img/projects/rise/gallery/9-48.webp 48w, /_img/projects/rise/gallery/9-64.webp 64w, /_img/projects/rise/gallery/9-96.webp 96w, /_img/projects/rise/gallery/9-128.webp 128w, /_img/projects/rise/gallery/9-256.webp 256w, /_img/projects/rise/gallery/9-384.webp 384w, /_img/projects/rise/gallery/9-640.webp 640w, /_img/projects/rise/gallery/9-828.webp 828w, /_img/projects/rise/gallery/9-1200.webp 1200w, /_img/projects/rise/gallery/9-1920.webp 1920w, /_img/projects/rise/gallery/9-2560.webp 2560w, /_img/projects/rise/gallery/9-3840.webp 3840w" src="/_img/projects/rise/gallery/9-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/1-32.webp 32w, /_img/projects/rise/gallery/1-48.webp 48w, /_img/projects/rise/gallery/1-64.webp 64w, /_img/projects/rise/gallery/1-96.webp 96w, /_img/projects/rise/gallery/1-128.webp 128w, /_img/projects/rise/gallery/1-256.webp 256w, /_img/projects/rise/gallery/1-384.webp 384w, /_img/projects/rise/gallery/1-640.webp 640w, /_img/projects/rise/gallery/1-828.webp 828w, /_img/projects/rise/gallery/1-1200.webp 1200w, /_img/projects/rise/gallery/1-1920.webp 1920w, /_img/projects/rise/gallery/1-2560.webp 2560w, /_img/projects/rise/gallery/1-3840.webp 3840w" src="/_img/projects/rise/gallery/1-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/2-32.webp 32w, /_img/projects/rise/gallery/2-48.webp 48w, /_img/projects/rise/gallery/2-64.webp 64w, /_img/projects/rise/gallery/2-96.webp 96w, /_img/projects/rise/gallery/2-128.webp 128w, /_img/projects/rise/gallery/2-256.webp 256w, /_img/projects/rise/gallery/2-384.webp 384w, /_img/projects/rise/gallery/2-640.webp 640w, /_img/projects/rise/gallery/2-828.webp 828w, /_img/projects/rise/gallery/2-1200.webp 1200w, /_img/projects/rise/gallery/2-1920.webp 1920w, /_img/projects/rise/gallery/2-2560.webp 2560w, /_img/projects/rise/gallery/2-3840.webp 3840w" src="/_img/projects/rise/gallery/2-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/3-32.webp 32w, /_img/projects/rise/gallery/3-48.webp 48w, /_img/projects/rise/gallery/3-64.webp 64w, /_img/projects/rise/gallery/3-96.webp 96w, /_img/projects/rise/gallery/3-128.webp 128w, /_img/projects/rise/gallery/3-256.webp 256w, /_img/projects/rise/gallery/3-384.webp 384w, /_img/projects/rise/gallery/3-640.webp 640w, /_img/projects/rise/gallery/3-828.webp 828w, /_img/projects/rise/gallery/3-1200.webp 1200w, /_img/projects/rise/gallery/3-1920.webp 1920w, /_img/projects/rise/gallery/3-2560.webp 2560w, /_img/projects/rise/gallery/3-3840.webp 3840w" src="/_img/projects/rise/gallery/3-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/4-32.webp 32w, /_img/projects/rise/gallery/4-48.webp 48w, /_img/projects/rise/gallery/4-64.webp 64w, /_img/projects/rise/gallery/4-96.webp 96w, /_img/projects/rise/gallery/4-128.webp 128w, /_img/projects/rise/gallery/4-256.webp 256w, /_img/projects/rise/gallery/4-384.webp 384w, /_img/projects/rise/gallery/4-640.webp 640w, /_img/projects/rise/gallery/4-828.webp 828w, /_img/projects/rise/gallery/4-1200.webp 1200w, /_img/projects/rise/gallery/4-1920.webp 1920w, /_img/projects/rise/gallery/4-2560.webp 2560w, /_img/projects/rise/gallery/4-3840.webp 3840w" src="/_img/projects/rise/gallery/4-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/5-32.webp 32w, /_img/projects/rise/gallery/5-48.webp 48w, /_img/projects/rise/gallery/5-64.webp 64w, /_img/projects/rise/gallery/5-96.webp 96w, /_img/projects/rise/gallery/5-128.webp 128w, /_img/projects/rise/gallery/5-256.webp 256w, /_img/projects/rise/gallery/5-384.webp 384w, /_img/projects/rise/gallery/5-640.webp 640w, /_img/projects/rise/gallery/5-828.webp 828w, /_img/projects/rise/gallery/5-1200.webp 1200w, /_img/projects/rise/gallery/5-1920.webp 1920w, /_img/projects/rise/gallery/5-2560.webp 2560w, /_img/projects/rise/gallery/5-3840.webp 3840w" src="/_img/projects/rise/gallery/5-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/6-32.webp 32w, /_img/projects/rise/gallery/6-48.webp 48w, /_img/projects/rise/gallery/6-64.webp 64w, /_img/projects/rise/gallery/6-96.webp 96w, /_img/projects/rise/gallery/6-128.webp 128w, /_img/projects/rise/gallery/6-256.webp 256w, /_img/projects/rise/gallery/6-384.webp 384w, /_img/projects/rise/gallery/6-640.webp 640w, /_img/projects/rise/gallery/6-828.webp 828w, /_img/projects/rise/gallery/6-1200.webp 1200w, /_img/projects/rise/gallery/6-1920.webp 1920w, /_img/projects/rise/gallery/6-2560.webp 2560w, /_img/projects/rise/gallery/6-3840.webp 3840w" src="/_img/projects/rise/gallery/6-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/7-32.webp 32w, /_img/projects/rise/gallery/7-48.webp 48w, /_img/projects/rise/gallery/7-64.webp 64w, /_img/projects/rise/gallery/7-96.webp 96w, /_img/projects/rise/gallery/7-128.webp 128w, /_img/projects/rise/gallery/7-256.webp 256w, /_img/projects/rise/gallery/7-384.webp 384w, /_img/projects/rise/gallery/7-640.webp 640w, /_img/projects/rise/gallery/7-828.webp 828w, /_img/projects/rise/gallery/7-1200.webp 1200w, /_img/projects/rise/gallery/7-1920.webp 1920w, /_img/projects/rise/gallery/7-2560.webp 2560w, /_img/projects/rise/gallery/7-3840.webp 3840w" src="/_img/projects/rise/gallery/7-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/8-32.webp 32w, /_img/projects/rise/gallery/8-48.webp 48w, /_img/projects/rise/gallery/8-64.webp 64w, /_img/projects/rise/gallery/8-96.webp 96w, /_img/projects/rise/gallery/8-128.webp 128w, /_img/projects/rise/gallery/8-256.webp 256w, /_img/projects/rise/gallery/8-384.webp 384w, /_img/projects/rise/gallery/8-640.webp 640w, /_img/projects/rise/gallery/8-828.webp 828w, /_img/projects/rise/gallery/8-1200.webp 1200w, /_img/projects/rise/gallery/8-1920.webp 1920w, /_img/projects/rise/gallery/8-2560.webp 2560w, /_img/projects/rise/gallery/8-3840.webp 3840w" src="/_img/projects/rise/gallery/8-3840.webp" />
                </div>
                <div className="mx-[22px] h-[220px] w-[220px] shrink-0 overflow-hidden lg:mx-[45px] lg:h-[440px] lg:w-[440px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="880" height="880" decoding="async" data-nimg="1" className="h-full w-full object-cover" style={{"color":"transparent"}} sizes="(min-width: 1024px) 440px, 220px" srcSet="/_img/projects/rise/gallery/9-32.webp 32w, /_img/projects/rise/gallery/9-48.webp 48w, /_img/projects/rise/gallery/9-64.webp 64w, /_img/projects/rise/gallery/9-96.webp 96w, /_img/projects/rise/gallery/9-128.webp 128w, /_img/projects/rise/gallery/9-256.webp 256w, /_img/projects/rise/gallery/9-384.webp 384w, /_img/projects/rise/gallery/9-640.webp 640w, /_img/projects/rise/gallery/9-828.webp 828w, /_img/projects/rise/gallery/9-1200.webp 1200w, /_img/projects/rise/gallery/9-1920.webp 1920w, /_img/projects/rise/gallery/9-2560.webp 2560w, /_img/projects/rise/gallery/9-3840.webp 3840w" src="/_img/projects/rise/gallery/9-3840.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 lg:grid-cols-5 lg:items-center lg:gap-0">
                <p className="text-body text-muted lg:col-span-2 lg:max-w-[42ch] lg:pr-12">
                  The brand system on one board - palette, logo, shapes, tags and imagery.
                </p>
                <figure className="bg-canvas lg:col-span-3">
                  <img alt="Rise - brand system: palette, logo, shapes, tags and imagery" width="1990" height="1903" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 796px, 100vw" srcSet="/_img/projects/rise/cd-system-640.webp 640w, /_img/projects/rise/cd-system-828.webp 828w, /_img/projects/rise/cd-system-1200.webp 1200w, /_img/projects/rise/cd-system-1920.webp 1920w, /_img/projects/rise/cd-system-2560.webp 2560w, /_img/projects/rise/cd-system-3840.webp 3840w" src="/_img/projects/rise/cd-system-3840.webp" />
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
                  Marketing Ecosystem
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Landing pages, ads, decks, social and event branding, all from one modular system.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="overflow-hidden bg-canvas ">
                  <WorkVideo poster="/projects/rise/marketing-2.jpg" width="1280" height="720" muted loop playsInline preload="none" aria-label="Rise - the 3D system running across the live site" className="bg-canvas h-auto w-full ">
                    <source src="/projects/rise/marketing-2.mp4" type="video/mp4" />
                  </WorkVideo>
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
                  Motion & 3D System
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Modeled, lit and composited in-house rather than commissioned - one material library, reused.
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="flex flex-col gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
              <div data-reveal="ssr" className="reveal  ">
                <figure className="overflow-hidden bg-canvas ">
                  <WorkVideo poster="/projects/rise/marketing-1.jpg" width="1280" height="798" muted loop playsInline preload="none" aria-label="Rise - marketing motion reel" className="bg-canvas h-auto w-full ">
                    <source src="/projects/rise/marketing-1.mp4" type="video/mp4" />
                  </WorkVideo>
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
                <p className="mb-3 text-label text-muted lg:mb-[12px]">
                  (RISE · KICK OFF 26)
                </p>
                <h2 className="text-subhead font-medium text-ink lg:max-w-[505px]">
                  Pieces of Tomorrow
                </h2>
              </div>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                Full branding for Rise’s internal 2026 kick off, from concept to the room itself. One shape system carried across print, physical objects, stage screens and motion.
              </p>
            </div>
          </div>
          <div className="mt-10 border-y border-rule lg:mt-[64px]">
            <div className="marquee-wrapper py-8 lg:py-[46px]">
              <div className="marquee-track marquee-shapes">
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Search piece" loading="lazy" width="431" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/search-32.webp 32w, /_img/projects/rise/shapes/search-48.webp 48w, /_img/projects/rise/shapes/search-64.webp 64w, /_img/projects/rise/shapes/search-96.webp 96w, /_img/projects/rise/shapes/search-128.webp 128w, /_img/projects/rise/shapes/search-256.webp 256w, /_img/projects/rise/shapes/search-384.webp 384w, /_img/projects/rise/shapes/search-640.webp 640w, /_img/projects/rise/shapes/search-828.webp 828w, /_img/projects/rise/shapes/search-1200.webp 1200w, /_img/projects/rise/shapes/search-1920.webp 1920w, /_img/projects/rise/shapes/search-2560.webp 2560w, /_img/projects/rise/shapes/search-3840.webp 3840w" src="/_img/projects/rise/shapes/search-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Search
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Product piece" loading="lazy" width="348" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/product-32.webp 32w, /_img/projects/rise/shapes/product-48.webp 48w, /_img/projects/rise/shapes/product-64.webp 64w, /_img/projects/rise/shapes/product-96.webp 96w, /_img/projects/rise/shapes/product-128.webp 128w, /_img/projects/rise/shapes/product-256.webp 256w, /_img/projects/rise/shapes/product-384.webp 384w, /_img/projects/rise/shapes/product-640.webp 640w, /_img/projects/rise/shapes/product-828.webp 828w, /_img/projects/rise/shapes/product-1200.webp 1200w, /_img/projects/rise/shapes/product-1920.webp 1920w, /_img/projects/rise/shapes/product-2560.webp 2560w, /_img/projects/rise/shapes/product-3840.webp 3840w" src="/_img/projects/rise/shapes/product-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Product
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Data Science piece" loading="lazy" width="429" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/data-science-32.webp 32w, /_img/projects/rise/shapes/data-science-48.webp 48w, /_img/projects/rise/shapes/data-science-64.webp 64w, /_img/projects/rise/shapes/data-science-96.webp 96w, /_img/projects/rise/shapes/data-science-128.webp 128w, /_img/projects/rise/shapes/data-science-256.webp 256w, /_img/projects/rise/shapes/data-science-384.webp 384w, /_img/projects/rise/shapes/data-science-640.webp 640w, /_img/projects/rise/shapes/data-science-828.webp 828w, /_img/projects/rise/shapes/data-science-1200.webp 1200w, /_img/projects/rise/shapes/data-science-1920.webp 1920w, /_img/projects/rise/shapes/data-science-2560.webp 2560w, /_img/projects/rise/shapes/data-science-3840.webp 3840w" src="/_img/projects/rise/shapes/data-science-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Data Science
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the R&D piece" loading="lazy" width="440" height="369" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/rnd-32.webp 32w, /_img/projects/rise/shapes/rnd-48.webp 48w, /_img/projects/rise/shapes/rnd-64.webp 64w, /_img/projects/rise/shapes/rnd-96.webp 96w, /_img/projects/rise/shapes/rnd-128.webp 128w, /_img/projects/rise/shapes/rnd-256.webp 256w, /_img/projects/rise/shapes/rnd-384.webp 384w, /_img/projects/rise/shapes/rnd-640.webp 640w, /_img/projects/rise/shapes/rnd-828.webp 828w, /_img/projects/rise/shapes/rnd-1200.webp 1200w, /_img/projects/rise/shapes/rnd-1920.webp 1920w, /_img/projects/rise/shapes/rnd-2560.webp 2560w, /_img/projects/rise/shapes/rnd-3840.webp 3840w" src="/_img/projects/rise/shapes/rnd-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    R&D
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the HR piece" loading="lazy" width="423" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/hr-32.webp 32w, /_img/projects/rise/shapes/hr-48.webp 48w, /_img/projects/rise/shapes/hr-64.webp 64w, /_img/projects/rise/shapes/hr-96.webp 96w, /_img/projects/rise/shapes/hr-128.webp 128w, /_img/projects/rise/shapes/hr-256.webp 256w, /_img/projects/rise/shapes/hr-384.webp 384w, /_img/projects/rise/shapes/hr-640.webp 640w, /_img/projects/rise/shapes/hr-828.webp 828w, /_img/projects/rise/shapes/hr-1200.webp 1200w, /_img/projects/rise/shapes/hr-1920.webp 1920w, /_img/projects/rise/shapes/hr-2560.webp 2560w, /_img/projects/rise/shapes/hr-3840.webp 3840w" src="/_img/projects/rise/shapes/hr-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    HR
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Marketing piece" loading="lazy" width="440" height="439" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/marketing-32.webp 32w, /_img/projects/rise/shapes/marketing-48.webp 48w, /_img/projects/rise/shapes/marketing-64.webp 64w, /_img/projects/rise/shapes/marketing-96.webp 96w, /_img/projects/rise/shapes/marketing-128.webp 128w, /_img/projects/rise/shapes/marketing-256.webp 256w, /_img/projects/rise/shapes/marketing-384.webp 384w, /_img/projects/rise/shapes/marketing-640.webp 640w, /_img/projects/rise/shapes/marketing-828.webp 828w, /_img/projects/rise/shapes/marketing-1200.webp 1200w, /_img/projects/rise/shapes/marketing-1920.webp 1920w, /_img/projects/rise/shapes/marketing-2560.webp 2560w, /_img/projects/rise/shapes/marketing-3840.webp 3840w" src="/_img/projects/rise/shapes/marketing-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Marketing
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Sales piece" loading="lazy" width="380" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/sales-32.webp 32w, /_img/projects/rise/shapes/sales-48.webp 48w, /_img/projects/rise/shapes/sales-64.webp 64w, /_img/projects/rise/shapes/sales-96.webp 96w, /_img/projects/rise/shapes/sales-128.webp 128w, /_img/projects/rise/shapes/sales-256.webp 256w, /_img/projects/rise/shapes/sales-384.webp 384w, /_img/projects/rise/shapes/sales-640.webp 640w, /_img/projects/rise/shapes/sales-828.webp 828w, /_img/projects/rise/shapes/sales-1200.webp 1200w, /_img/projects/rise/shapes/sales-1920.webp 1920w, /_img/projects/rise/shapes/sales-2560.webp 2560w, /_img/projects/rise/shapes/sales-3840.webp 3840w" src="/_img/projects/rise/shapes/sales-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Sales
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Legal piece" loading="lazy" width="347" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/legal-32.webp 32w, /_img/projects/rise/shapes/legal-48.webp 48w, /_img/projects/rise/shapes/legal-64.webp 64w, /_img/projects/rise/shapes/legal-96.webp 96w, /_img/projects/rise/shapes/legal-128.webp 128w, /_img/projects/rise/shapes/legal-256.webp 256w, /_img/projects/rise/shapes/legal-384.webp 384w, /_img/projects/rise/shapes/legal-640.webp 640w, /_img/projects/rise/shapes/legal-828.webp 828w, /_img/projects/rise/shapes/legal-1200.webp 1200w, /_img/projects/rise/shapes/legal-1920.webp 1920w, /_img/projects/rise/shapes/legal-2560.webp 2560w, /_img/projects/rise/shapes/legal-3840.webp 3840w" src="/_img/projects/rise/shapes/legal-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Legal
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Finance piece" loading="lazy" width="379" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/finance-32.webp 32w, /_img/projects/rise/shapes/finance-48.webp 48w, /_img/projects/rise/shapes/finance-64.webp 64w, /_img/projects/rise/shapes/finance-96.webp 96w, /_img/projects/rise/shapes/finance-128.webp 128w, /_img/projects/rise/shapes/finance-256.webp 256w, /_img/projects/rise/shapes/finance-384.webp 384w, /_img/projects/rise/shapes/finance-640.webp 640w, /_img/projects/rise/shapes/finance-828.webp 828w, /_img/projects/rise/shapes/finance-1200.webp 1200w, /_img/projects/rise/shapes/finance-1920.webp 1920w, /_img/projects/rise/shapes/finance-2560.webp 2560w, /_img/projects/rise/shapes/finance-3840.webp 3840w" src="/_img/projects/rise/shapes/finance-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Finance
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the IT piece" loading="lazy" width="372" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/it-32.webp 32w, /_img/projects/rise/shapes/it-48.webp 48w, /_img/projects/rise/shapes/it-64.webp 64w, /_img/projects/rise/shapes/it-96.webp 96w, /_img/projects/rise/shapes/it-128.webp 128w, /_img/projects/rise/shapes/it-256.webp 256w, /_img/projects/rise/shapes/it-384.webp 384w, /_img/projects/rise/shapes/it-640.webp 640w, /_img/projects/rise/shapes/it-828.webp 828w, /_img/projects/rise/shapes/it-1200.webp 1200w, /_img/projects/rise/shapes/it-1920.webp 1920w, /_img/projects/rise/shapes/it-2560.webp 2560w, /_img/projects/rise/shapes/it-3840.webp 3840w" src="/_img/projects/rise/shapes/it-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    IT
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Partnerships piece" loading="lazy" width="440" height="437" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/partnerships-32.webp 32w, /_img/projects/rise/shapes/partnerships-48.webp 48w, /_img/projects/rise/shapes/partnerships-64.webp 64w, /_img/projects/rise/shapes/partnerships-96.webp 96w, /_img/projects/rise/shapes/partnerships-128.webp 128w, /_img/projects/rise/shapes/partnerships-256.webp 256w, /_img/projects/rise/shapes/partnerships-384.webp 384w, /_img/projects/rise/shapes/partnerships-640.webp 640w, /_img/projects/rise/shapes/partnerships-828.webp 828w, /_img/projects/rise/shapes/partnerships-1200.webp 1200w, /_img/projects/rise/shapes/partnerships-1920.webp 1920w, /_img/projects/rise/shapes/partnerships-2560.webp 2560w, /_img/projects/rise/shapes/partnerships-3840.webp 3840w" src="/_img/projects/rise/shapes/partnerships-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Partnerships
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the Professional Services piece" loading="lazy" width="440" height="387" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/professional-services-32.webp 32w, /_img/projects/rise/shapes/professional-services-48.webp 48w, /_img/projects/rise/shapes/professional-services-64.webp 64w, /_img/projects/rise/shapes/professional-services-96.webp 96w, /_img/projects/rise/shapes/professional-services-128.webp 128w, /_img/projects/rise/shapes/professional-services-256.webp 256w, /_img/projects/rise/shapes/professional-services-384.webp 384w, /_img/projects/rise/shapes/professional-services-640.webp 640w, /_img/projects/rise/shapes/professional-services-828.webp 828w, /_img/projects/rise/shapes/professional-services-1200.webp 1200w, /_img/projects/rise/shapes/professional-services-1920.webp 1920w, /_img/projects/rise/shapes/professional-services-2560.webp 2560w, /_img/projects/rise/shapes/professional-services-3840.webp 3840w" src="/_img/projects/rise/shapes/professional-services-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Professional Services
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="false">
                  <img alt="Rise kick off - the BI & Data piece" loading="lazy" width="433" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/bi-data-32.webp 32w, /_img/projects/rise/shapes/bi-data-48.webp 48w, /_img/projects/rise/shapes/bi-data-64.webp 64w, /_img/projects/rise/shapes/bi-data-96.webp 96w, /_img/projects/rise/shapes/bi-data-128.webp 128w, /_img/projects/rise/shapes/bi-data-256.webp 256w, /_img/projects/rise/shapes/bi-data-384.webp 384w, /_img/projects/rise/shapes/bi-data-640.webp 640w, /_img/projects/rise/shapes/bi-data-828.webp 828w, /_img/projects/rise/shapes/bi-data-1200.webp 1200w, /_img/projects/rise/shapes/bi-data-1920.webp 1920w, /_img/projects/rise/shapes/bi-data-2560.webp 2560w, /_img/projects/rise/shapes/bi-data-3840.webp 3840w" src="/_img/projects/rise/shapes/bi-data-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    BI & Data
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="431" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/search-32.webp 32w, /_img/projects/rise/shapes/search-48.webp 48w, /_img/projects/rise/shapes/search-64.webp 64w, /_img/projects/rise/shapes/search-96.webp 96w, /_img/projects/rise/shapes/search-128.webp 128w, /_img/projects/rise/shapes/search-256.webp 256w, /_img/projects/rise/shapes/search-384.webp 384w, /_img/projects/rise/shapes/search-640.webp 640w, /_img/projects/rise/shapes/search-828.webp 828w, /_img/projects/rise/shapes/search-1200.webp 1200w, /_img/projects/rise/shapes/search-1920.webp 1920w, /_img/projects/rise/shapes/search-2560.webp 2560w, /_img/projects/rise/shapes/search-3840.webp 3840w" src="/_img/projects/rise/shapes/search-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Search
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="348" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/product-32.webp 32w, /_img/projects/rise/shapes/product-48.webp 48w, /_img/projects/rise/shapes/product-64.webp 64w, /_img/projects/rise/shapes/product-96.webp 96w, /_img/projects/rise/shapes/product-128.webp 128w, /_img/projects/rise/shapes/product-256.webp 256w, /_img/projects/rise/shapes/product-384.webp 384w, /_img/projects/rise/shapes/product-640.webp 640w, /_img/projects/rise/shapes/product-828.webp 828w, /_img/projects/rise/shapes/product-1200.webp 1200w, /_img/projects/rise/shapes/product-1920.webp 1920w, /_img/projects/rise/shapes/product-2560.webp 2560w, /_img/projects/rise/shapes/product-3840.webp 3840w" src="/_img/projects/rise/shapes/product-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Product
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="429" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/data-science-32.webp 32w, /_img/projects/rise/shapes/data-science-48.webp 48w, /_img/projects/rise/shapes/data-science-64.webp 64w, /_img/projects/rise/shapes/data-science-96.webp 96w, /_img/projects/rise/shapes/data-science-128.webp 128w, /_img/projects/rise/shapes/data-science-256.webp 256w, /_img/projects/rise/shapes/data-science-384.webp 384w, /_img/projects/rise/shapes/data-science-640.webp 640w, /_img/projects/rise/shapes/data-science-828.webp 828w, /_img/projects/rise/shapes/data-science-1200.webp 1200w, /_img/projects/rise/shapes/data-science-1920.webp 1920w, /_img/projects/rise/shapes/data-science-2560.webp 2560w, /_img/projects/rise/shapes/data-science-3840.webp 3840w" src="/_img/projects/rise/shapes/data-science-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Data Science
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="440" height="369" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/rnd-32.webp 32w, /_img/projects/rise/shapes/rnd-48.webp 48w, /_img/projects/rise/shapes/rnd-64.webp 64w, /_img/projects/rise/shapes/rnd-96.webp 96w, /_img/projects/rise/shapes/rnd-128.webp 128w, /_img/projects/rise/shapes/rnd-256.webp 256w, /_img/projects/rise/shapes/rnd-384.webp 384w, /_img/projects/rise/shapes/rnd-640.webp 640w, /_img/projects/rise/shapes/rnd-828.webp 828w, /_img/projects/rise/shapes/rnd-1200.webp 1200w, /_img/projects/rise/shapes/rnd-1920.webp 1920w, /_img/projects/rise/shapes/rnd-2560.webp 2560w, /_img/projects/rise/shapes/rnd-3840.webp 3840w" src="/_img/projects/rise/shapes/rnd-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    R&D
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="423" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/hr-32.webp 32w, /_img/projects/rise/shapes/hr-48.webp 48w, /_img/projects/rise/shapes/hr-64.webp 64w, /_img/projects/rise/shapes/hr-96.webp 96w, /_img/projects/rise/shapes/hr-128.webp 128w, /_img/projects/rise/shapes/hr-256.webp 256w, /_img/projects/rise/shapes/hr-384.webp 384w, /_img/projects/rise/shapes/hr-640.webp 640w, /_img/projects/rise/shapes/hr-828.webp 828w, /_img/projects/rise/shapes/hr-1200.webp 1200w, /_img/projects/rise/shapes/hr-1920.webp 1920w, /_img/projects/rise/shapes/hr-2560.webp 2560w, /_img/projects/rise/shapes/hr-3840.webp 3840w" src="/_img/projects/rise/shapes/hr-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    HR
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="440" height="439" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/marketing-32.webp 32w, /_img/projects/rise/shapes/marketing-48.webp 48w, /_img/projects/rise/shapes/marketing-64.webp 64w, /_img/projects/rise/shapes/marketing-96.webp 96w, /_img/projects/rise/shapes/marketing-128.webp 128w, /_img/projects/rise/shapes/marketing-256.webp 256w, /_img/projects/rise/shapes/marketing-384.webp 384w, /_img/projects/rise/shapes/marketing-640.webp 640w, /_img/projects/rise/shapes/marketing-828.webp 828w, /_img/projects/rise/shapes/marketing-1200.webp 1200w, /_img/projects/rise/shapes/marketing-1920.webp 1920w, /_img/projects/rise/shapes/marketing-2560.webp 2560w, /_img/projects/rise/shapes/marketing-3840.webp 3840w" src="/_img/projects/rise/shapes/marketing-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Marketing
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="380" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/sales-32.webp 32w, /_img/projects/rise/shapes/sales-48.webp 48w, /_img/projects/rise/shapes/sales-64.webp 64w, /_img/projects/rise/shapes/sales-96.webp 96w, /_img/projects/rise/shapes/sales-128.webp 128w, /_img/projects/rise/shapes/sales-256.webp 256w, /_img/projects/rise/shapes/sales-384.webp 384w, /_img/projects/rise/shapes/sales-640.webp 640w, /_img/projects/rise/shapes/sales-828.webp 828w, /_img/projects/rise/shapes/sales-1200.webp 1200w, /_img/projects/rise/shapes/sales-1920.webp 1920w, /_img/projects/rise/shapes/sales-2560.webp 2560w, /_img/projects/rise/shapes/sales-3840.webp 3840w" src="/_img/projects/rise/shapes/sales-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Sales
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="347" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/legal-32.webp 32w, /_img/projects/rise/shapes/legal-48.webp 48w, /_img/projects/rise/shapes/legal-64.webp 64w, /_img/projects/rise/shapes/legal-96.webp 96w, /_img/projects/rise/shapes/legal-128.webp 128w, /_img/projects/rise/shapes/legal-256.webp 256w, /_img/projects/rise/shapes/legal-384.webp 384w, /_img/projects/rise/shapes/legal-640.webp 640w, /_img/projects/rise/shapes/legal-828.webp 828w, /_img/projects/rise/shapes/legal-1200.webp 1200w, /_img/projects/rise/shapes/legal-1920.webp 1920w, /_img/projects/rise/shapes/legal-2560.webp 2560w, /_img/projects/rise/shapes/legal-3840.webp 3840w" src="/_img/projects/rise/shapes/legal-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Legal
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="379" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/finance-32.webp 32w, /_img/projects/rise/shapes/finance-48.webp 48w, /_img/projects/rise/shapes/finance-64.webp 64w, /_img/projects/rise/shapes/finance-96.webp 96w, /_img/projects/rise/shapes/finance-128.webp 128w, /_img/projects/rise/shapes/finance-256.webp 256w, /_img/projects/rise/shapes/finance-384.webp 384w, /_img/projects/rise/shapes/finance-640.webp 640w, /_img/projects/rise/shapes/finance-828.webp 828w, /_img/projects/rise/shapes/finance-1200.webp 1200w, /_img/projects/rise/shapes/finance-1920.webp 1920w, /_img/projects/rise/shapes/finance-2560.webp 2560w, /_img/projects/rise/shapes/finance-3840.webp 3840w" src="/_img/projects/rise/shapes/finance-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Finance
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="372" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/it-32.webp 32w, /_img/projects/rise/shapes/it-48.webp 48w, /_img/projects/rise/shapes/it-64.webp 64w, /_img/projects/rise/shapes/it-96.webp 96w, /_img/projects/rise/shapes/it-128.webp 128w, /_img/projects/rise/shapes/it-256.webp 256w, /_img/projects/rise/shapes/it-384.webp 384w, /_img/projects/rise/shapes/it-640.webp 640w, /_img/projects/rise/shapes/it-828.webp 828w, /_img/projects/rise/shapes/it-1200.webp 1200w, /_img/projects/rise/shapes/it-1920.webp 1920w, /_img/projects/rise/shapes/it-2560.webp 2560w, /_img/projects/rise/shapes/it-3840.webp 3840w" src="/_img/projects/rise/shapes/it-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    IT
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="440" height="437" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/partnerships-32.webp 32w, /_img/projects/rise/shapes/partnerships-48.webp 48w, /_img/projects/rise/shapes/partnerships-64.webp 64w, /_img/projects/rise/shapes/partnerships-96.webp 96w, /_img/projects/rise/shapes/partnerships-128.webp 128w, /_img/projects/rise/shapes/partnerships-256.webp 256w, /_img/projects/rise/shapes/partnerships-384.webp 384w, /_img/projects/rise/shapes/partnerships-640.webp 640w, /_img/projects/rise/shapes/partnerships-828.webp 828w, /_img/projects/rise/shapes/partnerships-1200.webp 1200w, /_img/projects/rise/shapes/partnerships-1920.webp 1920w, /_img/projects/rise/shapes/partnerships-2560.webp 2560w, /_img/projects/rise/shapes/partnerships-3840.webp 3840w" src="/_img/projects/rise/shapes/partnerships-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Partnerships
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="440" height="387" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/professional-services-32.webp 32w, /_img/projects/rise/shapes/professional-services-48.webp 48w, /_img/projects/rise/shapes/professional-services-64.webp 64w, /_img/projects/rise/shapes/professional-services-96.webp 96w, /_img/projects/rise/shapes/professional-services-128.webp 128w, /_img/projects/rise/shapes/professional-services-256.webp 256w, /_img/projects/rise/shapes/professional-services-384.webp 384w, /_img/projects/rise/shapes/professional-services-640.webp 640w, /_img/projects/rise/shapes/professional-services-828.webp 828w, /_img/projects/rise/shapes/professional-services-1200.webp 1200w, /_img/projects/rise/shapes/professional-services-1920.webp 1920w, /_img/projects/rise/shapes/professional-services-2560.webp 2560w, /_img/projects/rise/shapes/professional-services-3840.webp 3840w" src="/_img/projects/rise/shapes/professional-services-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    Professional Services
                  </figcaption>
                </figure>
                <figure className="mx-6 flex shrink-0 flex-col items-center lg:mx-[46px]" aria-hidden="true">
                  <img alt="" loading="lazy" width="433" height="440" decoding="async" data-nimg="1" className="h-[116px] w-[116px] object-contain lg:h-[180px] lg:w-[180px]" style={{"color":"transparent"}} sizes="(min-width: 1024px) 180px, 116px" srcSet="/_img/projects/rise/shapes/bi-data-32.webp 32w, /_img/projects/rise/shapes/bi-data-48.webp 48w, /_img/projects/rise/shapes/bi-data-64.webp 64w, /_img/projects/rise/shapes/bi-data-96.webp 96w, /_img/projects/rise/shapes/bi-data-128.webp 128w, /_img/projects/rise/shapes/bi-data-256.webp 256w, /_img/projects/rise/shapes/bi-data-384.webp 384w, /_img/projects/rise/shapes/bi-data-640.webp 640w, /_img/projects/rise/shapes/bi-data-828.webp 828w, /_img/projects/rise/shapes/bi-data-1200.webp 1200w, /_img/projects/rise/shapes/bi-data-1920.webp 1920w, /_img/projects/rise/shapes/bi-data-2560.webp 2560w, /_img/projects/rise/shapes/bi-data-3840.webp 3840w" src="/_img/projects/rise/shapes/bi-data-3840.webp" />
                  <figcaption className="mt-4 text-label text-muted lg:mt-[22px]">
                    BI & Data
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="mt-8 flex flex-col gap-12 sm:mt-10 lg:mt-12 lg:gap-[104px]">
              <div data-reveal="ssr" className="reveal grid grid-cols-2 gap-3 sm:gap-4 lg:w-[66%] lg:gap-6">
                <img alt="Rise kick off - “Every piece matters” poster" loading="lazy" width="1074" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 46vw" srcSet="/_img/projects/rise/kickoff-poster-red-384.webp 384w, /_img/projects/rise/kickoff-poster-red-640.webp 640w, /_img/projects/rise/kickoff-poster-red-828.webp 828w, /_img/projects/rise/kickoff-poster-red-1200.webp 1200w, /_img/projects/rise/kickoff-poster-red-1920.webp 1920w, /_img/projects/rise/kickoff-poster-red-2560.webp 2560w, /_img/projects/rise/kickoff-poster-red-3840.webp 3840w" src="/_img/projects/rise/kickoff-poster-red-3840.webp" />
                <img alt="Rise kick off - “Connect the pieces” poster" loading="lazy" width="1074" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 420px, 46vw" srcSet="/_img/projects/rise/kickoff-poster-blue-384.webp 384w, /_img/projects/rise/kickoff-poster-blue-640.webp 640w, /_img/projects/rise/kickoff-poster-blue-828.webp 828w, /_img/projects/rise/kickoff-poster-blue-1200.webp 1200w, /_img/projects/rise/kickoff-poster-blue-1920.webp 1920w, /_img/projects/rise/kickoff-poster-blue-2560.webp 2560w, /_img/projects/rise/kickoff-poster-blue-3840.webp 3840w" src="/_img/projects/rise/kickoff-poster-blue-3840.webp" />
              </div>
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
                <div className="lg:col-span-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-label text-muted">
                      [{' '}
                      01
                      {' '}]
                    </span>
                    <span className="text-label text-ink">
                      PHYSICAL PRODUCTION
                    </span>
                  </div>
                  <p className="mt-4 max-w-[46ch] text-body text-muted lg:mt-[19px]">
                    Every puzzle piece was designed in house and produced with local vendors: CNC cut, hand finished, and color matched to the brand palette. Posters, legend cards and table sets were printed and assembled for every team in the company.
                  </p>
                </div>
                <div className="flex gap-3 lg:col-span-3 lg:gap-6">
                  <div className="min-w-0" style={{"flex":"0.5631578947368421 1 0%"}}>
                    <img alt="Rise kick off - printed legend cards and table set" loading="lazy" width="856" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 380px, 46vw" srcSet="/_img/projects/rise/kickoff-table-384.webp 384w, /_img/projects/rise/kickoff-table-640.webp 640w, /_img/projects/rise/kickoff-table-828.webp 828w, /_img/projects/rise/kickoff-table-1200.webp 1200w, /_img/projects/rise/kickoff-table-1920.webp 1920w, /_img/projects/rise/kickoff-table-2560.webp 2560w, /_img/projects/rise/kickoff-table-3840.webp 3840w" src="/_img/projects/rise/kickoff-table-3840.webp" />
                  </div>
                  <div className="min-w-0" style={{"flex":"0.5631578947368421 1 0%"}}>
                    <img alt="Rise kick off - assembled puzzle piece" loading="lazy" width="856" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 380px, 46vw" srcSet="/_img/projects/rise/kickoff-build-384.webp 384w, /_img/projects/rise/kickoff-build-640.webp 640w, /_img/projects/rise/kickoff-build-828.webp 828w, /_img/projects/rise/kickoff-build-1200.webp 1200w, /_img/projects/rise/kickoff-build-1920.webp 1920w, /_img/projects/rise/kickoff-build-2560.webp 2560w, /_img/projects/rise/kickoff-build-3840.webp 3840w" src="/_img/projects/rise/kickoff-build-3840.webp" />
                  </div>
                </div>
              </div>
              <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-10">
                <div className="lg:col-span-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-label text-muted">
                      [{' '}
                      02
                      {' '}]
                    </span>
                    <span className="text-label text-ink">
                      3D & MOTION
                    </span>
                  </div>
                  <p className="mt-4 max-w-[46ch] text-body text-muted lg:mt-[19px]">
                    The same pieces were rebuilt in 3D for the digital layer of the event: animated loops for the stage screens, reveal videos and social assets, all rendered in the brand colors and reused across Rise channels after the kick off.
                  </p>
                </div>
                <div className="flex gap-3 lg:col-span-3 lg:gap-6">
                  <div className="min-w-0" style={{"flex":"0.5 1 0%"}}>
                    <img alt="Rise kick off - the shape system built in 3D" loading="lazy" width="760" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 380px, 46vw" srcSet="/_img/projects/rise/kickoff-pieces-384.webp 384w, /_img/projects/rise/kickoff-pieces-640.webp 640w, /_img/projects/rise/kickoff-pieces-828.webp 828w, /_img/projects/rise/kickoff-pieces-1200.webp 1200w, /_img/projects/rise/kickoff-pieces-1920.webp 1920w, /_img/projects/rise/kickoff-pieces-2560.webp 2560w, /_img/projects/rise/kickoff-pieces-3840.webp 3840w" src="/_img/projects/rise/kickoff-pieces-3840.webp" />
                  </div>
                  <div className="min-w-0" style={{"flex":"0.75 1 0%"}}>
                    <img alt="Rise kick off - the stage screen in the room" loading="lazy" width="1140" height="1520" decoding="async" data-nimg="1" className="h-auto w-full" style={{"color":"transparent"}} sizes="(min-width: 1024px) 380px, 46vw" srcSet="/_img/projects/rise/kickoff-stage-384.webp 384w, /_img/projects/rise/kickoff-stage-640.webp 640w, /_img/projects/rise/kickoff-stage-828.webp 828w, /_img/projects/rise/kickoff-stage-1200.webp 1200w, /_img/projects/rise/kickoff-stage-1920.webp 1920w, /_img/projects/rise/kickoff-stage-2560.webp 2560w, /_img/projects/rise/kickoff-stage-3840.webp 3840w" src="/_img/projects/rise/kickoff-stage-3840.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-canvas pb-16 pt-16 lg:pb-[120px] lg:pt-[104px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
            <a className="group block pt-6 lg:pt-[34px]" aria-label="Next project: Figcoms" href="/work/figcoms">
              <p className="text-label text-muted">
                NEXT PROJECT
              </p>
              <div className="mt-4 flex items-end justify-between gap-6 lg:mt-[36px]">
                <p className="-ml-[0.062em] w-full font-space text-case-title font-medium text-ink transition-colors duration-300 group-hover:text-accent">
                  FIGCOMS
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
