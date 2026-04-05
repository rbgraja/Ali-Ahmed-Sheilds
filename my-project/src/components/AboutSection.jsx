import { useState } from 'react'
import { ABOUT_COPY, ABOUT_POSTER_SRC, ABOUT_VIDEO_SRC } from '../data/siteContent'

export function AboutSection() {
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="w-full px-3 sm:px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl ring-1 ring-slate-900/5">
            {!videoFailed ? (
              <video
                className="aspect-video w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={ABOUT_POSTER_SRC}
                onError={() => setVideoFailed(true)}
              >
                <source src={ABOUT_VIDEO_SRC} type="video/mp4" />
              </video>
            ) : (
              <div className="relative aspect-video w-full">
                <img
                  src={ABOUT_POSTER_SRC}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950/70 p-6 text-center text-sm text-white">
                  <p className="font-medium">Video could not be played</p>
                  <p className="max-w-sm text-white/80">
                    Replace or re-encode <code className="rounded bg-white/10 px-1.5 py-0.5">016.mp4</code> in{' '}
                    <code className="rounded bg-white/10 px-1.5 py-0.5">src/assets</code> if the file is
                    corrupt or uses an unsupported codec.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">{ABOUT_COPY.title}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              People, precision, and acrylic done right
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {ABOUT_COPY.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="https://wa.me/923056170385"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
