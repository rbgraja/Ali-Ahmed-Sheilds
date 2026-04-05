import { COMPANY_INTRO } from '../data/siteContent'

export function IntroSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-14 sm:py-20" aria-labelledby="intro-heading">
      <div className="w-full px-3 text-center sm:px-4">
        <h2 id="intro-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {COMPANY_INTRO.title}
        </h2>
        <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-slate-600">
          {COMPANY_INTRO.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
