import FaqAccordion from '../components/studio/FaqAccordion';
import ClipReveal from '../components/work/ClipReveal';
const FAQ = [
  {
    "q": "What do you specialize in?",
    "a": "I focus on digital product design, brand identity and visual systems, combining UX/UI with strong visual direction. In practice that means I design the product and the language it speaks in, rather than one handed over to someone else to finish. On the product side I work on flows, interfaces and the systems behind them - the states a screen can be in, what leads and what stays out of sight. On the brand side I build identities that are meant to be used: a palette with real values, a typeface with rules, a mark that holds on a patch, a screen and a wall. Around those two sit art direction, 3D, motion and digital experiences, which I bring in when they make the work clearer or more alive. Product design and brand identity stay at the center. Everything else serves them."
  },
  {
    "q": "Do you work with startups?",
    "a": "Yes - I work with early-stage startups, growing companies and established brands, and also with independent clients. The work changes with the stage. An early team usually needs a first identity and a product that can explain itself, often at the same time and with very little settled yet, so the job is to make decisions that will still hold when the company is bigger. A growing company tends to have the opposite problem: a product and a brand that grew in different directions and no longer sound like one thing. An established brand needs its language carried into new places without losing what people already recognize. I’ve been on the founding side myself - I co-founded Figcoms and designed it from the first board to launch - so I know what it is to make those calls from inside a small team."
  },
  {
    "q": "Do you work internationally?",
    "a": "Yes - I’m based in Tel Aviv and work with clients both in Israel and around the world. My clients include startups, technology companies, brands and independent clients, and the work does not depend on being in the same city: research, direction, design and delivery all happen in shared files, calls and reviews, wherever the team is. Working across markets also shapes the design itself. A product or an identity that will be read in more than one country has to be clear without leaning on local references, and a system has to be documented well enough that a team I never meet can apply it correctly. So I try to leave behind more than finished files: the color values, the type and how it is all used, written down clearly enough to travel."
  },
  {
    "q": "Can you handle both branding and product design?",
    "a": "Yes - I can develop a visual identity and carry its design language into digital products and interfaces. That is the part of the work I enjoy most, because it is where the two usually come apart. A brand made in isolation tends to look good in a presentation and struggle on a dashboard; a product designed without a brand tends to work and say nothing. When both come from the same hands, the identity is built with its real surfaces in mind - screens, states, data, small sizes - and the product inherits a voice instead of improvising one. My work for Rise is an example of that range: a brand system applied across product, marketing and events, next to product work like the Dashboard Finder and the customer dashboard. Figcoms is another - the identity, the motion language and the landing page were built in parallel with the app itself."
  },
  {
    "q": "Do you offer 3D and motion design?",
    "a": "Yes - I use 3D, motion and digital illustration when they add value to the project, not as decoration laid on top of it. Motion can explain how a product behaves faster than a page of copy, and 3D can give an identity a material quality that flat graphics cannot. Used well, they are part of the system: a motion language with its own rules, or a set of 3D forms that belong to the brand the way its colors do. For Rise I made the motion and 3D in-house, as part of the same visual language that runs through the brand and the product. For Figcoms the motion language was designed alongside the identity, so the product moves the way it looks. Outside client work, the Art Lab on this site is where I experiment with 3D, motion and visual art - personal work, studies and pieces that never had a brief."
  },
  {
    "q": "How do projects usually start?",
    "a": "With a conversation about the idea, the challenges, the scope and what needs to be achieved. Before any design, I want to understand what the project is really for - who it serves, what is in the way, and what would make it a success for the people paying for it. That first conversation is also where the shape of the work becomes clear: whether it is a brand, a product, or both, which of the five stages it needs, and what can wait for later. Some projects arrive with a full brief, others with a single sentence and a deadline, and both are fine starting points. From there we agree on the scope together, so the making starts from a shared picture of what is being made. If you have something in mind, the form at the bottom of the homepage or an email to dor@pamidordesign.co is the way to begin."
  }
];

export default function Studio() {
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
      <main id="main" className="relative bg-canvas">
        <section className="relative flex min-h-[calc(100svh-72px)] flex-col justify-center pb-16 pt-12 lg:pb-[96px] lg:pt-[96px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <p className="text-label text-muted">
              (DOR SHARABY · PAMIDOR STUDIO)
            </p>
            <h1 className="mt-4 -ml-[0.062em] w-full font-space text-case-title font-medium text-ink lg:mt-[24px]">
              Studio
            </h1>
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-12 lg:mt-[72px]" />
            <div className="grid grid-cols-1 gap-y-12 pt-8 lg:grid-cols-5 lg:gap-0 lg:pt-[32px]">
              <dl data-reveal="ssr" className="reveal grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-2 lg:gap-y-[40px] lg:pr-[48px]">
                <div>
                  <dt className="text-label uppercase text-muted">
                    Designing since
                  </dt>
                  <dd className="mt-2 text-lead font-medium text-ink lg:mt-[10px]">
                    2021
                  </dd>
                </div>
                <div>
                  <dt className="text-label uppercase text-muted">
                    Studio founded
                  </dt>
                  <dd className="mt-2 text-lead font-medium text-ink lg:mt-[10px]">
                    2023
                  </dd>
                </div>
                <div>
                  <dt className="text-label uppercase text-muted">
                    Based in
                  </dt>
                  <dd className="mt-2 text-lead font-medium text-ink lg:mt-[10px]">
                    Tel Aviv
                  </dd>
                </div>
                <div>
                  <dt className="text-label uppercase text-muted">
                    Clients
                  </dt>
                  <dd className="mt-2 text-lead font-medium text-ink lg:mt-[10px]">
                    Israel & worldwide
                  </dd>
                </div>
              </dl>
              <div data-reveal="ssr" className="reveal lg:col-span-3 lg:col-start-3">
                <h2 className="text-label uppercase text-muted">
                  Who is Dor Sharaby?
                </h2>
                <p className="mt-4 text-body-lg text-ink lg:mt-[16px] lg:max-w-[747px]">
                  I’m Dor Sharaby, a brand and product designer based in Tel Aviv, Israel, and the founder of Pamidor Studio. I’ve been designing professionally since 2021 and opened the studio in 2023. My background runs through branding, product design, art direction and visual systems, and most of my work now sits where those meet: a digital product that needs an identity of its own, or a brand that has to hold up as an interface. Pamidor is not an agency with layers between the client and the designer. I am the person behind the work, and on the projects that called for it I have worked as part of a team or with partners. The case studies on this site show the range - a workflow product I co-founded, the launch of a clinical device, an AI advertising company’s brand and product, and two identity systems for the Israel Police.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-16 lg:pt-0">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div className="lg:[height:calc(100vh+var(--travel))]" style={{"--travel":"135vh"}}>
              <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
                <div className="[height:calc(100svh+var(--travel))] lg:h-auto">
                  <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center lg:static lg:block lg:min-h-0">
                    <p className="max-w-[1129px] text-lead font-medium text-ink">
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          I
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          c
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          m
                        </span>
                        <span data-char="true">
                          b
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          p
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          c
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          ,
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          c
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          v
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          k
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          g
                        </span>
                        <span data-char="true">
                          ,
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          d
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          n
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          o
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          d
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          l
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          o
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          l
                        </span>
                        <span data-char="true">
                          v
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          p
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          b
                        </span>
                        <span data-char="true">
                          l
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          m
                        </span>
                        <span data-char="true">
                          s
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          g
                        </span>
                        <span data-char="true">
                          h
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          v
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          l
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          d
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          g
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          .
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          I
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          c
                        </span>
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          b
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          t
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          w
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          i
                        </span>
                        <span data-char="true">
                          n
                        </span>
                        <span data-char="true">
                          g
                        </span>
                        <span data-char="true">
                          s
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          w
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          r
                        </span>
                        <span data-char="true">
                          k
                        </span>
                        <span data-char="true">
                          ,
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          b
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          t
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          j
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          s
                        </span>
                        <span data-char="true">
                          t
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          s
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          m
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          c
                        </span>
                        <span data-char="true">
                          h
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          b
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          u
                        </span>
                        <span data-char="true">
                          t
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          w
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          t
                        </span>
                        <span data-char="true">
                          h
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          y
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          m
                        </span>
                        <span data-char="true">
                          a
                        </span>
                        <span data-char="true">
                          k
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          p
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          o
                        </span>
                        <span data-char="true">
                          p
                        </span>
                        <span data-char="true">
                          l
                        </span>
                        <span data-char="true">
                          e
                        </span>
                      </span>
                      {" "}
                      <span data-word="true" className="inline-block">
                        <span data-char="true">
                          f
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          e
                        </span>
                        <span data-char="true">
                          l
                        </span>
                        <span data-char="true">
                          .
                        </span>
                      </span>
                    </p>
                    <div className="mt-10 lg:mt-[56px]">
                      <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                      <div className="grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
                        <h2 className="text-label uppercase text-muted lg:col-span-2">
                          What makes your approach different?
                        </h2>
                        <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px]">
                          I combine product thinking with a strong background in visual design, branding and art direction, and I enjoy solving complex problems through visual ideas that challenge both how people see and how they feel. You can see it in Figcoms, where the first controls turned every comment into a form - they were cut for four states and an emoji once they started adding complexity instead of removing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-24 lg:pt-[152px]">
          <div className="marquee-wrapper overflow-hidden py-2">
            <div className="marquee-track items-baseline [animation-duration:60s]">
              <ul aria-hidden="false" className="flex shrink-0 items-baseline gap-[48px] pr-[48px] text-section font-medium text-ink">
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Technology & SaaS
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Artificial Intelligence
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Fintech
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Cybersecurity
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  AdTech
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Consumer Brands
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  Digital Products
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
              </ul>
              <ul aria-hidden="true" className="flex shrink-0 items-baseline gap-[48px] pr-[48px] text-section font-medium text-ink">
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Technology & SaaS" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Artificial Intelligence" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Fintech" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Cybersecurity" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="AdTech" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Consumer Brands" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
                <li className="flex items-baseline gap-[48px] whitespace-nowrap">
                  <span data-label="Digital Products" className="before:content-[attr(data-label)]" />
                  <span aria-hidden="true" className="text-accent before:content-['·']" />
                </li>
              </ul>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-12 lg:mt-[64px]" />
            <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-4 pt-7 lg:grid-cols-5 lg:gap-0 lg:pt-[28px]">
              <h2 className="text-subhead font-medium text-ink lg:col-span-2 lg:max-w-[505px] lg:pr-[48px]">
                Which industries do you work in?
              </h2>
              <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px] lg:pt-[6px]">
                I work mostly in technology and SaaS, artificial intelligence, fintech, cybersecurity, adtech, consumer brands and digital products. What connects them is less the sector than the shape of the problem: a product or a company that is more complex than it looks from the outside, and has to be understood quickly by people who were never in the room. Technical products tend to arrive with a lot of capability and very little language for it. Consumer brands arrive with a feeling that has not been pinned down yet. In both cases the work is to find the clear version of the thing and give it a form people can see, trust and use. The industry shapes the vocabulary, the constraints and the audience. The approach underneath - research, direction, exploration, then a system that can grow - stays the same from one field to the next.
              </p>
            </div>
          </div>
        </section>
        <div className="pt-16 lg:pt-[56px]">
          <section className="relative w-full bg-canvas pt-16 lg:pt-[96px]">
            <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
              <h2 data-reveal="ssr" className="reveal text-subhead font-medium text-ink">
                What does working with you look like?
              </h2>
              <div data-reveal="ssr" className="reveal mt-6 grid grid-cols-1 lg:mt-[28px] lg:grid-cols-5">
                <p className="text-body text-muted lg:col-span-3 lg:col-start-3 lg:max-w-[747px]">
                  Most projects move through five stages, adapted to what each one actually needs. The process is flexible and changes with the kind of project - not every one needs all five stages, and some spend most of their time in just one or two of them.
                </p>
              </div>
              <ol className="mt-8 lg:mt-[18px]">
                <li>
                  <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                  <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                    <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                      <span className="text-body text-muted lg:pt-[8px]">
                        01
                      </span>
                      <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                        Discovery & Research
                      </h3>
                    </div>
                    <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                      Understanding the business, its audience, challenges, and goals.
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
                        Strategy & Direction
                      </h3>
                    </div>
                    <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                      Defining the creative direction, design approach, and project priorities.
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
                        Concept & Exploration
                      </h3>
                    </div>
                    <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                      Exploring visual ideas, structures, interactions, and possible solutions.
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
                        Design & Development
                      </h3>
                    </div>
                    <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                      Turning selected concepts into complete visual identities, interfaces, or digital experiences.
                    </p>
                  </div>
                </li>
                <li>
                  <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
                  <div data-reveal="ssr" className="reveal grid grid-cols-1 gap-y-3 py-7 lg:grid-cols-5 lg:gap-0 lg:py-[30px]">
                    <div className="flex items-baseline gap-4 lg:col-span-2 lg:contents">
                      <span className="text-body text-muted lg:pt-[8px]">
                        05
                      </span>
                      <h3 className="text-subhead-sm font-medium text-ink lg:ml-[calc(100*var(--px)-100%)]">
                        Refinement & Delivery
                      </h3>
                    </div>
                    <p className="text-body text-muted lg:col-span-2 lg:col-start-4 lg:max-w-[495px] lg:pt-[6px]">
                      Testing, refining, and preparing the final design assets for implementation.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>
        <section className="relative pt-24 lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <p data-reveal="ssr" className="reveal mb-8 text-label uppercase text-muted lg:mb-[18px]">
              (Questions)
            </p>
            <FaqAccordion items={FAQ} />
            <div aria-hidden="true" className="h-[1.5px] w-full bg-rule " />
          </div>
        </section>
        <section className="relative pb-24 pt-24 lg:pb-[152px] lg:pt-[152px]">
          <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
            <div data-reveal="ssr" className="reveal flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="text-section font-medium text-ink">
                <span className="block">
                  LET’S WORK
                </span>
                <span className="block">
                  TOGETHER
                </span>
              </p>
              <div className="flex flex-col items-start gap-4">
                <a data-hw="true" className="group/btn items-center gap-3 border px-[calc(15*var(--px))] py-[calc(9*var(--px))] [@media(pointer:coarse)]:min-h-[calc(48*var(--px))] text-body font-medium leading-[1.5] transition-[background-color,color,border-color] duration-300 ease-out-soft inline-flex w-fit border-ink bg-ink text-white [--hw-base:#fff] hover:bg-transparent hover:text-ink  " href="/#start-project">
                  <span className="sr-only">
                    Start Project
                  </span>
                  <span aria-hidden="true">
                    <span className="inline-block whitespace-nowrap">
                      <span data-hw-char="true" data-ch="S" className="inline-block" style={{"--hwi":"0"}} />
                      <span data-hw-char="true" data-ch="t" className="inline-block" style={{"--hwi":"1"}} />
                      <span data-hw-char="true" data-ch="a" className="inline-block" style={{"--hwi":"2"}} />
                      <span data-hw-char="true" data-ch="r" className="inline-block" style={{"--hwi":"3"}} />
                      <span data-hw-char="true" data-ch="t" className="inline-block" style={{"--hwi":"4"}} />
                    </span>
                    {" "}
                    <span className="inline-block whitespace-nowrap">
                      <span data-hw-char="true" data-ch="P" className="inline-block" style={{"--hwi":"5"}} />
                      <span data-hw-char="true" data-ch="r" className="inline-block" style={{"--hwi":"6"}} />
                      <span data-hw-char="true" data-ch="o" className="inline-block" style={{"--hwi":"7"}} />
                      <span data-hw-char="true" data-ch="j" className="inline-block" style={{"--hwi":"8"}} />
                      <span data-hw-char="true" data-ch="e" className="inline-block" style={{"--hwi":"9"}} />
                      <span data-hw-char="true" data-ch="c" className="inline-block" style={{"--hwi":"10"}} />
                      <span data-hw-char="true" data-ch="t" className="inline-block" style={{"--hwi":"11"}} />
                    </span>
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover/btn:-rotate-45">
                    <g transform="rotate(0 8 8) translate(1.9000000000000004 3.0560475611639797) scale(0.40966)">
                      <path d="M23.1099 10.9188C19.5082 8.73064 14.2988 4.0372 13.5814 0.0155222L15.9065 3.2973e-06C17.9701 4.66018 24.0697 10.0675 29.7806 10.9898L29.759 13.0893C24.3025 14.0138 17.8165 19.4278 15.9857 24.1101L13.6701 24.1367C13.9005 20.39 19.7218 15.2819 23.0571 13.1913L0.00959874 13.1691L5.90407e-07 10.9388L23.1099 10.9188Z" />
                    </g>
                  </svg>
                </a>
                <a href="mailto:dor@pamidordesign.co" className="text-body text-muted underline underline-offset-4 hover:text-ink">
                  dor@pamidordesign.co
                </a>
              </div>
            </div>
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
