import { useState } from 'react'

/**
 * Shows a pulsing skeleton until the image fires onLoad (and onError clears loading state).
 */
export function SkeletonImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectClass = 'aspect-[4/3]',
  roundedClass = 'rounded-2xl',
}) {
  const [status, setStatus] = useState('loading')

  return (
    <div
      className={`relative isolate overflow-hidden bg-slate-200/80 ${aspectClass} ${roundedClass} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 transition-opacity duration-500 ease-out ${
          status === 'loaded' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden
      >
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-all duration-500 ease-out ${
          status === 'loaded' ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0'
        } ${imgClassName}`}
      />
      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 p-4 text-center text-sm text-slate-500">
          Image unavailable
        </div>
      )}
    </div>
  )
}
