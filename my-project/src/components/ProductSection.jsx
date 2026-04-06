import { PRODUCTS } from '../data/siteContent'
import { SkeletonImage } from './SkeletonImage'

export function ProductSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="w-full px-3 sm:px-4">
        <div className="border-b border-slate-200/90 pb-6 sm:pb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-[1.75rem] md:leading-snug">
            Layout &amp; Design
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <li key={product.id} className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm">
              <SkeletonImage
                src={product.image}
                alt=""
                aspectClass="aspect-square"
                roundedClass="rounded-none"
                className="rounded-none"
                imgClassName="object-cover bg-slate-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
