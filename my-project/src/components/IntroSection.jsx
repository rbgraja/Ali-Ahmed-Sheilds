import { useState } from 'react'
import { INTRO_HEADING, INTRO_PARAGRAPH, INTRO_POSTER_SRC, INTRO_VIDEO_SRC } from '../data/siteContent'

export function IntroSection() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section className="border-b border-slate-100 bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="intro-heading">
      <div className="w-full px-3 sm:px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:gap-x-14">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg ring-1 ring-slate-900/5">
              {!videoFailed ? (
                <video
                  className="aspect-video w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={INTRO_POSTER_SRC}
                  onError={() => setVideoFailed(true)}
                >
                  <source src={INTRO_VIDEO_SRC} type="video/mp4" />
                </video>
              ) : (
                <div className="relative aspect-video w-full">
                  <img src={INTRO_POSTER_SRC} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 p-4 text-center text-sm text-white">
                    Video unavailable
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-2">
            <h2
              id="intro-heading"
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-sky-700 bg-clip-text font-extrabold text-transparent">
                  {INTRO_HEADING}
                </span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-sky-500/80 via-cyan-500/80 to-sky-600/80" />
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:max-w-none">
              {INTRO_PARAGRAPH}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
