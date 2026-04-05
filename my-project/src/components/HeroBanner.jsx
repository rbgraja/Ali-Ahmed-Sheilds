import { BANNER_SRC, SITE } from '../data/siteContent'
import { SkeletonImage } from './SkeletonImage'

export function HeroBanner() {
  return (
    <div className="relative">
      <SkeletonImage
        src={BANNER_SRC}
        alt={`${SITE.name} — acrylic shields and custom key rings`}
        aspectClass="aspect-[21/9] max-h-[min(70vh,520px)] min-h-[200px] sm:min-h-[280px]"
        roundedClass="rounded-none"
        className="w-full"
        imgClassName="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20" />
    </div>
  )
}
