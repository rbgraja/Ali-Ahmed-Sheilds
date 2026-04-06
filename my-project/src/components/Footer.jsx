import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { MdPhone, MdWhatsapp, MdLocationOn } from 'react-icons/md'
import { SITE } from '../data/siteContent'

const social = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/share/1AyzeeYZ7Z/', label: 'Facebook' },
  // { Icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  // { Icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  // { Icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="grid w-full gap-8 px-3 py-12 sm:px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{SITE.name}</p>
          <p className="text-sm leading-relaxed text-slate-400">
            Acrylic shields and custom key rings crafted for clarity, durability, and brand presence.
          </p>
          <div className="flex gap-3">
            {social.map((item) => {
              const IconComponent = item.Icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-sky-500/60 hover:bg-sky-500/10 hover:text-sky-300"
                >
                  <IconComponent className="h-4 w-4" aria-hidden />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${SITE.phoneTel.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                <MdPhone className="h-5 w-5 shrink-0 text-sky-400" aria-hidden />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${SITE.phoneTel.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
              >
                <MdWhatsapp className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
                WhatsApp
              </a>
            </li>
            <li className="group">
  <a
    href="https://www.google.com/maps/place/32%C2%B024'11.3%22N+74%C2%B007'47.7%22E/@32.4031365,74.1273483,17z"
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-3 text-slate-400 transition-all duration-300 hover:text-white"
  >
    <MdLocationOn className="h-5 w-5 text-sky-400 transition-transform duration-300 group-hover:scale-110" />

    <span className="leading-relaxed">
      {SITE.address}
    </span>
  </a>
</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#products" className="text-slate-300 transition hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="text-slate-300 transition hover:text-white">
                About us
              </a>
            </li>

            <li>
              <a href="#top" className="text-slate-300 transition hover:text-white">
                Back to top
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Hours</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Monday–Friday, 9:00–17:00
            <br />
            Weekend: contact WhatsApp.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="flex w-full flex-col items-center justify-between gap-3 px-3 py-5 text-xs text-slate-500 sm:flex-row sm:px-4">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="text-slate-600">Privacy · Terms · Accessibility</p>
        </div>
      </div>
    </footer>
  )
}
