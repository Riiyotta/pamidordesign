import { useRef } from 'react';
import PinSection from './PinSection';
import useAutoplayVideo from '../../lib/home/useAutoplayVideo';

// Studio intro, wrapped in PinSection (module 5820, mobile pinning). The scroll-lit character
// wave on the copy (module 66707, data-wave/data-lit) is driven globally by TextFX (src/lib/text/wave.js).
// The showreel uses the media-video autoplay behaviour (module 64462).
export default function HomeMain2Studio() {
  const reelRef = useRef(null);
  const reelControls = useAutoplayVideo(reelRef);
  return (
    <PinSection>
    <section id="studio" className="relative flex min-h-[100svh] w-full flex-col justify-center bg-canvas py-16 lg:block lg:min-h-0 lg:py-0">
      <div className="relative mx-auto w-full max-w-canvas px-6 sm:px-10 lg:px-margin ">
        <div className="lg:[height:calc(100vh+var(--travel))]" style={{"--travel":"135vh"}}>
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center">
            <div className="[height:calc(100svh+var(--travel))] lg:h-auto">
              <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center lg:static lg:block lg:min-h-0">
                <p className="mt-6 max-w-[calc(1129*var(--px))] text-lead font-medium text-ink lg:mt-[calc(56*var(--px))]">
                  <span aria-hidden="true" className="mb-6 block w-[38%] sm:float-right sm:mb-0 sm:ml-8 sm:mt-2 sm:w-[26%] sm:max-w-[calc(206*var(--px))] sm:[shape-margin:18px] lg:ml-10 lg:w-[19%]">
                    <span className="pointer-events-none relative block aspect-square -rotate-[6deg] overflow-hidden [box-shadow:0_calc(18*var(--px))_calc(40*var(--px))_calc(-12*var(--px))_rgba(10,10,10,0.28)]">
                      <img alt="" loading="lazy" width="661" height="900" decoding="async" data-nimg="1" className="absolute max-w-none" style={{"color":"transparent","left":"0%","top":"-15.93%","width":"104.96%","height":"131.49%"}} sizes="(min-width: 1729px) 11.93vw, 206px" srcSet="/_img/images/about-float-32.webp 32w, /_img/images/about-float-48.webp 48w, /_img/images/about-float-64.webp 64w, /_img/images/about-float-96.webp 96w, /_img/images/about-float-128.webp 128w, /_img/images/about-float-256.webp 256w, /_img/images/about-float-384.webp 384w, /_img/images/about-float-640.webp 640w, /_img/images/about-float-828.webp 828w, /_img/images/about-float-1200.webp 1200w, /_img/images/about-float-1920.webp 1920w, /_img/images/about-float-2560.webp 2560w, /_img/images/about-float-3840.webp 3840w" src="/_img/images/about-float-3840.webp" />
                    </span>
                  </span>
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      H
                    </span>
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      ,
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      I
                    </span>
                    <span data-char="true">
                      '
                    </span>
                    <span data-char="true">
                      m
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      D
                    </span>
                    <span data-char="true">
                      o
                    </span>
                    <span data-char="true">
                      r
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      -
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      a
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      b
                    </span>
                    <span data-char="true">
                      r
                    </span>
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
                      &
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
                      d
                    </span>
                    <span data-char="true">
                      u
                    </span>
                    <span data-char="true">
                      c
                    </span>
                    <span data-char="true">
                      t
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
                      e
                    </span>
                    <span data-char="true">
                      r
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      w
                    </span>
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      t
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
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      a
                    </span>
                    <span data-char="true">
                      m
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
                      a
                    </span>
                    <span data-char="true">
                      t
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
                      u
                    </span>
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      s
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      l
                    </span>
                    <span data-char="true">
                      i
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
                      a
                    </span>
                    <span data-char="true">
                      n
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
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
                      r
                    </span>
                    <span data-char="true">
                      a
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
                      b
                    </span>
                    <span data-char="true">
                      u
                    </span>
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      l
                    </span>
                    <span data-char="true">
                      d
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      b
                    </span>
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      a
                    </span>
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      d
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
                      a
                    </span>
                    <span data-char="true">
                      t
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
                      r
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      m
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      m
                    </span>
                    <span data-char="true">
                      b
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      r
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
                      p
                    </span>
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      o
                    </span>
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      u
                    </span>
                    <span data-char="true">
                      c
                    </span>
                    <span data-char="true">
                      t
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
                      e
                    </span>
                    <span data-char="true">
                      y
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      o
                    </span>
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      '
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
                      a
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
                      o
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
                    <span data-char="true">
                      .
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      I
                    </span>
                    <span data-char="true">
                      d
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
                      t
                    </span>
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      s
                    </span>
                    <span data-char="true">
                      ,
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
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      s
                    </span>
                    <span data-char="true">
                      y
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
                      m
                    </span>
                    <span data-char="true">
                      s
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
                      t
                    </span>
                    <span data-char="true">
                      h
                    </span>
                    <span data-char="true">
                      e
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      t
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      f
                    </span>
                    <span data-char="true">
                      a
                    </span>
                    <span data-char="true">
                      c
                    </span>
                    <span data-char="true">
                      e
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
                      e
                    </span>
                    <span data-char="true">
                      y
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      u
                    </span>
                    <span data-char="true">
                      n
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
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
                      -
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
                      w
                    </span>
                    <span data-char="true">
                      h
                    </span>
                    <span data-char="true">
                      e
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
                      h
                    </span>
                    <span data-char="true">
                      e
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
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      n
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      s
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      a
                    </span>
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      t
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      i
                    </span>
                    <span data-char="true">
                      r
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      c
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
                    <span data-char="true">
                      ,
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      m
                    </span>
                    <span data-char="true">
                      o
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
                      o
                    </span>
                    <span data-char="true">
                      r
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      3
                    </span>
                    <span data-char="true">
                      D
                    </span>
                    <span data-char="true">
                      ,
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
                      a
                    </span>
                    <span data-char="true">
                      t
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      g
                    </span>
                    <span data-char="true">
                      e
                    </span>
                    <span data-char="true">
                      t
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
                      a
                    </span>
                    <span data-char="true">
                      d
                    </span>
                    <span data-char="true">
                      e
                    </span>
                  </span>
                  {" "}
                  <span data-word="true" className="inline-block">
                    <span data-char="true">
                      h
                    </span>
                    <span data-char="true">
                      e
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
                      t
                    </span>
                    <span data-char="true">
                      o
                    </span>
                    <span data-char="true">
                      o
                    </span>
                    <span data-char="true">
                      .
                    </span>
                  </span>
                </p>
                <div aria-hidden="true" className="h-[1.5px] w-full bg-rule mt-12 lg:mt-[calc(64*var(--px))]" />
                <div className="pt-8 lg:flex lg:gap-x-[calc(45*var(--px))] lg:pt-[calc(15*var(--px))]">
                  <div data-reveal="ssr" className="reveal hidden lg:block lg:w-[calc(305*var(--px))] lg:shrink-0">
                    <video ref={reelRef} poster="/images/studio-showreel-poster.webp" width="640" height="372" muted loop playsInline preload="none" controls={reelControls} aria-label="Studio showreel" className="bg-canvas h-auto w-full rounded-[2px]">
                      <source src="/videos/studio-showreel.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="min-w-0 lg:flex-1 lg:pt-[calc(35*var(--px))]">
                    <p className="text-label text-muted">
                      (CLIENTS & COLLABORATIONS)
                    </p>
                    <div className="relative mt-6 lg:mt-[calc(18*var(--px))]">
                      <div className="flex flex-col gap-6 lg:gap-[calc(24*var(--px))]">
                        <div className="marquee-wrapper h-[calc(32*var(--px))]">
                          <div className="marquee-track h-[calc(32*var(--px))] items-center" style={{"animationDuration":"38s","animationDirection":"normal"}}>
                            <div className="flex h-[calc(32*var(--px))] shrink-0 items-center gap-[calc(52*var(--px))] pr-[calc(52*var(--px))]" aria-hidden="false">
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(67.714 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-02.svg" alt="Rise" width="67.714" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-03.png" alt="Gloog" width="107" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(63 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <div className="absolute inset-0 overflow-hidden">
                                  <img src="/logos/c1-04.png" alt="Pretty Damn Quick" loading="lazy" decoding="async" className="absolute max-w-none" style={{"left":"2.23%","top":"0.99%","width":"141.46%","height":"150.49%"}} />
                                </div>
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(100 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-05.png" alt="Kornit Digital" width="100" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(102 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-06.png" alt="Samlat" width="102" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(93.767 * var(--px))","height":"calc(24.066 * var(--px))"}}>
                                <img src="/logos/c1-07.svg" alt="Gardi" width="93.767" height="24.066" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(81 * var(--px))","height":"calc(16 * var(--px))"}}>
                                <img src="/logos/c1-08.svg" alt="Rimonim" width="81" height="16" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(86.824 * var(--px))","height":"calc(24.142 * var(--px))"}}>
                                <img src="/logos/c1-09.svg" alt="Getin" width="86.824" height="24.142" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(73.895 * var(--px))","height":"calc(23.895 * var(--px))"}}>
                                <img src="/logos/c1-10.svg" alt="Santé" width="73.895" height="23.895" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(90 * var(--px))","height":"calc(14.931 * var(--px))"}}>
                                <img src="/logos/c1-11.svg" alt="Links" width="90" height="14.931" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(87.333 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <img src="/logos/c1-12.svg" alt="Shenkar" width="87.333" height="28" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(38.97 * var(--px))","height":"calc(32 * var(--px))"}}>
                                <img src="/logos/c1-13.svg" alt="Israel Border Police" width="38.97" height="32" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                            </div>
                            <div className="flex h-[calc(32*var(--px))] shrink-0 items-center gap-[calc(52*var(--px))] pr-[calc(52*var(--px))]" aria-hidden="true">
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(67.714 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-02.svg" alt="" width="67.714" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-03.png" alt="" width="107" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(63 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <div className="absolute inset-0 overflow-hidden">
                                  <img src="/logos/c1-04.png" alt="" loading="lazy" decoding="async" className="absolute max-w-none" style={{"left":"2.23%","top":"0.99%","width":"141.46%","height":"150.49%"}} />
                                </div>
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(100 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-05.png" alt="" width="100" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(102 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c1-06.png" alt="" width="102" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(93.767 * var(--px))","height":"calc(24.066 * var(--px))"}}>
                                <img src="/logos/c1-07.svg" alt="" width="93.767" height="24.066" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(81 * var(--px))","height":"calc(16 * var(--px))"}}>
                                <img src="/logos/c1-08.svg" alt="" width="81" height="16" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(86.824 * var(--px))","height":"calc(24.142 * var(--px))"}}>
                                <img src="/logos/c1-09.svg" alt="" width="86.824" height="24.142" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(73.895 * var(--px))","height":"calc(23.895 * var(--px))"}}>
                                <img src="/logos/c1-10.svg" alt="" width="73.895" height="23.895" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(90 * var(--px))","height":"calc(14.931 * var(--px))"}}>
                                <img src="/logos/c1-11.svg" alt="" width="90" height="14.931" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(87.333 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <img src="/logos/c1-12.svg" alt="" width="87.333" height="28" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(38.97 * var(--px))","height":"calc(32 * var(--px))"}}>
                                <img src="/logos/c1-13.svg" alt="" width="38.97" height="32" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="marquee-wrapper h-[calc(32*var(--px))]">
                          <div className="marquee-track h-[calc(32*var(--px))] items-center" style={{"animationDuration":"46s","animationDirection":"reverse"}}>
                            <div className="flex h-[calc(32*var(--px))] shrink-0 items-center gap-[calc(52*var(--px))] pr-[calc(52*var(--px))]" aria-hidden="false">
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107.917 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-01.svg" alt="Twintera" width="107.917" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(92.028 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-02.svg" alt="Client logo" width="92.028" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(55.68 * var(--px))","height":"calc(23.732 * var(--px))"}}>
                                <img src="/logos/c2-03.svg" alt="Wipe & Go" width="55.68" height="23.732" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(103.141 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-04.svg" alt="iMotion" width="103.141" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(108.06 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-05.svg" alt="Figcoms" width="108.06" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107.917 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-01.svg" alt="Twintera" width="107.917" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(152 * var(--px))","height":"calc(16 * var(--px))"}}>
                                <img src="/logos/c2-07.svg" alt="Beerbazaar" width="152" height="16" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(79.467 * var(--px))","height":"calc(23.737 * var(--px))"}}>
                                <img src="/logos/c2-08.svg" alt="Strongful" width="79.467" height="23.737" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(34.036 * var(--px))","height":"calc(23.803 * var(--px))"}}>
                                <img src="/logos/c2-09.svg" alt="Drama" width="34.036" height="23.803" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(116.031 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-10a.svg" alt="Tea Lovers" width="116.031" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(40.36 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <img src="/logos/c2-11.svg" alt="Malka" width="40.36" height="28" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(34.972 * var(--px))","height":"calc(32 * var(--px))"}}>
                                <img src="/logos/c2-12.svg" alt="Israel Police" width="34.972" height="32" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                            </div>
                            <div className="flex h-[calc(32*var(--px))] shrink-0 items-center gap-[calc(52*var(--px))] pr-[calc(52*var(--px))]" aria-hidden="true">
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107.917 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-01.svg" alt="" width="107.917" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(92.028 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-02.svg" alt="" width="92.028" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(55.68 * var(--px))","height":"calc(23.732 * var(--px))"}}>
                                <img src="/logos/c2-03.svg" alt="" width="55.68" height="23.732" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(103.141 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-04.svg" alt="" width="103.141" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(108.06 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-05.svg" alt="" width="108.06" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(107.917 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-01.svg" alt="" width="107.917" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(152 * var(--px))","height":"calc(16 * var(--px))"}}>
                                <img src="/logos/c2-07.svg" alt="" width="152" height="16" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(79.467 * var(--px))","height":"calc(23.737 * var(--px))"}}>
                                <img src="/logos/c2-08.svg" alt="" width="79.467" height="23.737" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(34.036 * var(--px))","height":"calc(23.803 * var(--px))"}}>
                                <img src="/logos/c2-09.svg" alt="" width="34.036" height="23.803" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(116.031 * var(--px))","height":"calc(24 * var(--px))"}}>
                                <img src="/logos/c2-10a.svg" alt="" width="116.031" height="24" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(40.36 * var(--px))","height":"calc(28 * var(--px))"}}>
                                <img src="/logos/c2-11.svg" alt="" width="40.36" height="28" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                              <div className="relative shrink-0 opacity-55" style={{"width":"calc(34.972 * var(--px))","height":"calc(32 * var(--px))"}}>
                                <img src="/logos/c2-12.svg" alt="" width="34.972" height="32" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 top-0 w-[calc(120*var(--px))] bg-gradient-to-r from-transparent to-canvas" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </PinSection>
  );
}
