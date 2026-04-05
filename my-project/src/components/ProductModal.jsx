import { useEffect, useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { SkeletonImage } from './SkeletonImage'

export function ProductModal({ product, open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const t = window.setTimeout(() => closeRef.current?.focus(), 50)

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
    }
  }, [open, onClose])

  if (!open || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-2"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="animate-backdrop-in absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="animate-modal-panel relative z-10 flex max-h-[min(92vh,860px)] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-slate-200/80 bg-white shadow-2xl sm:max-h-[85vh] sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-3 py-3 sm:px-4 sm:py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Featured product</p>
            <h2 id="product-modal-title" className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {product.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{product.tagline}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <IoClose className="h-6 w-6" aria-hidden />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-3 py-4 sm:flex-row sm:gap-5 sm:px-4 sm:py-5">
          <div className="shrink-0 sm:w-[42%]">
            <SkeletonImage
              src={product.image}
              alt={product.name}
              aspectClass="aspect-square sm:aspect-[4/5]"
              roundedClass="rounded-2xl"
              imgClassName="object-cover bg-slate-100"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-4 text-sm leading-relaxed text-slate-600">
            <p className="text-base text-slate-700">{product.description}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Highlights</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 marker:text-sky-500">
                {product.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 text-sky-950">
              <p className="text-sm font-medium">Need a custom size or bulk quote?</p>
              <p className="mt-1 text-sm text-sky-900/80">
                Share your drawings or photos—we will match thickness, finish, and timeline to your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
