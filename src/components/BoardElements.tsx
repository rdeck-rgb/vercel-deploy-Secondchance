import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PushPin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-5 w-5', className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="10" r="7" fill="#D94A2E" />
      <circle cx="16" cy="10" r="7" fill="url(#pin-shine)" />
      <path d="M16 17v10" stroke="#8B2E1A" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 30h10" stroke="#8B2E1A" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <radialGradient id="pin-shine" cx="0" cy="0" r="1" gradientTransform="translate(13 7) rotate(45) scale(10)">
          <stop stopColor="#FF7A62" />
          <stop offset="1" stopColor="#D94A2E" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function WashiTape({
  className,
  color = 'kraft',
}: {
  className?: string
  color?: 'kraft' | 'green' | 'red'
}) {
  const colorClass = {
    kraft: 'bg-[#E8DCC4]/85',
    green: 'bg-forest/20',
    red: 'bg-stamp-red/20',
  }[color]
  return (
    <div
      className={cn(
        'h-5 w-24 rotate-[-2deg] rounded-sm shadow-sm',
        colorClass,
        className
      )}
      aria-hidden="true"
    />
  )
}

export function Stamp({
  children,
  className,
  variant = 'red',
}: {
  children: ReactNode
  className?: string
  variant?: 'red' | 'green' | 'outline'
}) {
  const variantClass = {
    red: 'border-stamp-red text-stamp-red',
    green: 'border-forest text-forest',
    outline: 'border-ink text-ink',
  }[variant]
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-sm border-2 border-dashed px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider rotate-[-2deg]',
        variantClass,
        className
      )}
    >
      {children}
    </span>
  )
}

export function TornCard({
  children,
  className,
  torn = 'bottom',
}: {
  children: ReactNode
  className?: string
  torn?: 'bottom' | 'top' | 'none'
}) {
  const clip = {
    bottom: 'polygon(0 0, 100% 0, 100% 92%, 95% 100%, 90% 93%, 85% 100%, 80% 94%, 75% 100%, 70% 93%, 65% 100%, 60% 94%, 55% 100%, 50% 92%, 45% 100%, 40% 93%, 35% 100%, 30% 94%, 25% 100%, 20% 93%, 15% 100%, 10% 94%, 5% 100%, 0 92%)',
    top: 'polygon(0 8%, 5% 0, 10% 7%, 15% 0, 20% 6%, 25% 0, 30% 7%, 35% 0, 40% 6%, 45% 0, 50% 8%, 55% 0, 60% 7%, 65% 0, 70% 6%, 75% 0, 80% 7%, 85% 0, 90% 6%, 95% 0, 100% 8%, 100% 100%, 0 100%)',
    none: undefined,
  }[torn]
  const tornPadding = {
    bottom: 'pb-12',
    top: 'pt-12',
    none: '',
  }[torn]
  return (
    <div
      className={cn(
        'relative rounded-lg bg-paper shadow-[0_6px_0_rgba(42,31,22,0.08)] transition-transform hover:-translate-y-1',
        tornPadding,
        className
      )}
      style={clip ? { clipPath: clip } : undefined}
    >
      {children}
    </div>
  )
}

export function Polaroid({
  src,
  alt,
  caption,
  className,
  rotation = 0,
  objectPosition = 'center',
  size = 'md',
  aspect = 'landscape',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  rotation?: number
  objectPosition?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  aspect?: 'landscape' | 'portrait' | 'square'
}) {
  const width = {
    sm: 'w-40',
    md: 'w-52',
    lg: 'w-64',
    xl: 'w-80',
  }[size]
  const aspectClass = {
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
  }[aspect]
  const captionWidth = {
    sm: 'max-w-[160px]',
    md: 'max-w-[208px]',
    lg: 'max-w-[256px]',
    xl: 'max-w-[320px]',
  }[size]
  return (
    <figure
      className={cn(
        'inline-flex flex-col items-center rounded bg-paper p-2.5 pb-4 shadow-[0_8px_0_rgba(42,31,22,0.1)]',
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          'object-cover rounded-sm border border-kraft',
          width,
          aspectClass
        )}
        style={{ objectPosition }}
      />
      {caption && (
        <figcaption className={cn('mt-2.5 text-center font-serif text-xs italic text-ink/80', captionWidth)}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function CorkBoard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative bg-cork bg-cork-texture',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(42,31,22,0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  )
}

export function TearOffTabs({
  items,
  className,
}: {
  items: { label: string; to: string }[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-1 border-t-2 border-dashed border-ink/20 pt-3',
        className
      )}
    >
      {items.map((item) => {
        const isExternal = /^https?:\/\//.test(item.to)
        return (
          <a
            key={item.to}
            href={item.to}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center gap-1 rounded bg-stamp-red px-2 py-2 text-center text-xs font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.15)] transition-transform active:translate-y-0.5 active:shadow-none hover:-translate-y-0.5"
          >
            <span className="h-1.5 w-full border-b border-dashed border-white/40" />
            <span className="inline-flex items-center gap-1">
              {item.label}
              {isExternal && (
                <ExternalLink className="h-3 w-3 opacity-80" aria-hidden="true" />
              )}
            </span>
          </a>
        )
      })}
    </div>
  )
}
