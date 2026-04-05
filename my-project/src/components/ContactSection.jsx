import { useState } from 'react'
import { MdPhone, MdWhatsapp } from 'react-icons/md'
import { CONTACT_FORM_ENDPOINT, SITE } from '../data/siteContent'

const initial = { name: '', email: '', phone: '', message: '' }

export function ContactSection() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')

  const busy = status === 'sending'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          _subject: `${SITE.name} — Website contact form`,
          _template: 'table',
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.message || 'Try again.')
      }

      setStatus('success')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  function onChange(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }))
      if (status === 'success' || status === 'error') setStatus('idle')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-100 bg-slate-50 py-16 sm:py-24">
      <div className="w-full px-3 sm:px-4">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Get in touch</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact us</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Call or WhatsApp us, or use the form — we will get back to you as soon as we can.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneTel.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-sky-200 hover:shadow-md"
                >
                  <MdPhone className="h-6 w-6 shrink-0 text-sky-600" aria-hidden />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.phoneTel.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
                >
                  <MdWhatsapp className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange('name')}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-300 focus:bg-white focus:ring-4"
                    placeholder="Your name"
                    disabled={busy}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Your email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange('email')}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-300 focus:bg-white focus:ring-4"
                    placeholder="you@example.com"
                    disabled={busy}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Phone (optional)</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={onChange('phone')}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-300 focus:bg-white focus:ring-4"
                    placeholder="0300 1234567"
                    disabled={busy}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange('message')}
                    className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-300 focus:bg-white focus:ring-4"
                    placeholder="What do you need? Sizes, quantities, timeline…"
                    disabled={busy}
                  />
                </label>
              </div>

              {status === 'sending' && (
                <p className="mt-5 text-center text-sm font-medium text-slate-600" role="status" aria-live="polite">
                  Form is submitting…
                </p>
              )}

              {status === 'success' && (
                <p className="mt-5 text-center text-sm font-medium text-emerald-700" role="status" aria-live="polite">
                  Thanks for submitting!
                </p>
              )}

              {status === 'error' && (
                <p className="mt-5 text-center text-sm font-medium text-red-700" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {busy ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
