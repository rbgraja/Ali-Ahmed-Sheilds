import { useState } from 'react'
import { PRODUCTS } from '../data/siteContent'
import { SkeletonImage } from './SkeletonImage'
import { ProductModal } from './ProductModal'

export function ProductSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="products" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
      <div className="w-full px-3 sm:px-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Catalog</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Featured products
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Shields for every counter, key rings for every brand moment—tap a card for full details.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white text-left shadow-sm ring-0 transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-xl hover:shadow-sky-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                <div className="relative overflow-hidden">
                  <SkeletonImage
                    src={product.image}
                    alt={product.name}
                    aspectClass="aspect-[5/4]"
                    roundedClass="rounded-none"
                    className="rounded-t-3xl"
                    imgClassName="object-cover bg-slate-100 transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-sky-700">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-600">{product.tagline}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-sky-600">
                    View details
                    <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProductModal product={selected} open={Boolean(selected)} onClose={() => setSelected(null)} />
    </section>
  )
}
