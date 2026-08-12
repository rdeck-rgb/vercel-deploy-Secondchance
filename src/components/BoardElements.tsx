import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * One-shot scroll reveal: returns a ref plus the class to apply. The element
 * fades up (reveal-rise in index.css) the first time ~15% of it enters the
 * viewport. Items already on screen at load reveal immediately, giving pages a
 * soft entrance for free. Reduced-motion users see everything instantly — both
 * here and via the CSS overrides.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, revealCls: shown ? 'reveal-shown' : 'reveal-hidden' }
}

// A classic spool-shaped plastic push pin seen at a slight angle: glossy domed
// head, waist, base flange, steel needle disappearing into the board, soft cast
// shadow. Gradient ids come from useId so the many pins on a page don't collide.
export function PushPin({ className }: { className?: string }) {
  const uid = useId()
  const head = `${uid}-head`
  const neck = `${uid}-neck`
  const flange = `${uid}-flange`
  const needle = `${uid}-needle`
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('relative z-10 h-5 w-5', className)}
      aria-hidden="true"
    >
      <g transform="rotate(-8 16 16)">
        {/* shadow cast on the board */}
        <ellipse cx="17.4" cy="28" rx="5.6" ry="1.7" fill="#2A1F16" opacity="0.25" />
        {/* steel needle */}
        <path d="M15.4 19.4 L16.1 28.1 L16.9 19.5 Z" fill={`url(#${needle})`} />
        {/* waist between head and flange */}
        <path
          d="M12.3 9.8 C13.3 11.8 13.55 13.3 13.5 15.4 L18.5 15.4 C18.45 13.3 18.7 11.8 19.7 9.8 Z"
          fill={`url(#${neck})`}
        />
        {/* contact shadow under the head */}
        <rect x="9.6" y="9.8" width="12.8" height="1.2" rx="0.6" fill="#5E1A0C" opacity="0.4" />
        {/* base flange */}
        <rect x="10.3" y="15.1" width="11.4" height="4.5" rx="2" fill={`url(#${flange})`} />
        {/* domed head */}
        <rect
          x="7.2"
          y="2.8"
          width="17.6"
          height="7.4"
          rx="3.4"
          fill={`url(#${head})`}
          stroke="#7E2712"
          strokeOpacity="0.55"
          strokeWidth="0.75"
        />
        {/* top plane of the head */}
        <ellipse cx="16" cy="4.3" rx="8" ry="1.55" fill="#FFAB92" opacity="0.95" />
        {/* specular highlight */}
        <ellipse
          cx="11.9"
          cy="5.8"
          rx="2.4"
          ry="1"
          fill="#FFFFFF"
          opacity="0.65"
          transform="rotate(-14 11.9 5.8)"
        />
      </g>
      <defs>
        <linearGradient id={head} x1="16" y1="2.8" x2="16" y2="10.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F76A4C" />
          <stop offset="1" stopColor="#BC3A20" />
        </linearGradient>
        <linearGradient id={neck} x1="16" y1="9.8" x2="16" y2="15.4" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A83318" />
          <stop offset="1" stopColor="#7C2611" />
        </linearGradient>
        <linearGradient id={flange} x1="16" y1="15.1" x2="16" y2="19.6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E85A3D" />
          <stop offset="1" stopColor="#922C17" />
        </linearGradient>
        <linearGradient id={needle} x1="16" y1="19.4" x2="16" y2="28.1" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D3CDC2" />
          <stop offset="0.5" stopColor="#97917F" />
          <stop offset="1" stopColor="#6A6459" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function WashiTape({
  className,
  color = 'kraft',
}: {
  className?: string
  color?: 'kraft' | 'green' | 'red' | 'ink'
}) {
  const colorClass = {
    kraft: 'bg-[#E8DCC4]/85',
    green: 'bg-forest/20',
    red: 'bg-stamp-red/20',
    ink: 'bg-ink/15',
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
  // Tear depths are fixed pixels rather than percentages so the notch bites the
  // same amount out of a short card and a tall one — a percentage tear on a tall
  // card ate well past the padding and cut into the content.
  const clip = {
    bottom:
      'polygon(0 0, 100% 0, 100% calc(100% - 22px), 95% 100%, 90% calc(100% - 19px), 85% 100%, 80% calc(100% - 16px), 75% 100%, 70% calc(100% - 19px), 65% 100%, 60% calc(100% - 16px), 55% 100%, 50% calc(100% - 22px), 45% 100%, 40% calc(100% - 19px), 35% 100%, 30% calc(100% - 16px), 25% 100%, 20% calc(100% - 19px), 15% 100%, 10% calc(100% - 16px), 5% 100%, 0 calc(100% - 22px))',
    top: 'polygon(0 22px, 5% 0, 10% 19px, 15% 0, 20% 16px, 25% 0, 30% 19px, 35% 0, 40% 16px, 45% 0, 50% 22px, 55% 0, 60% 19px, 65% 0, 70% 16px, 75% 0, 80% 19px, 85% 0, 90% 16px, 95% 0, 100% 22px, 100% 100%, 0 100%)',
    none: undefined,
  }[torn]
  const { ref, revealCls } = useReveal()
  // Reserved as a spacer, not a pb-*/pt-* class: every caller passes its own p-*,
  // which tailwind-merge resolves last and would silently drop the clearance.
  const tearClearance =
    torn === 'none' ? null : <div className="h-8 shrink-0" aria-hidden="true" />
  // The clip-path lives on a background layer, not the wrapper: clipping the
  // wrapper also beheaded the push pins and washi tape pinned at -top-*, which
  // must overflow onto the cork. Surface-painting classes from the caller (bg,
  // border, shadow, rounded) move to that layer; layout classes stay outside.
  const surface: string[] = []
  const layout: string[] = []
  for (const token of (className ?? '').split(/\s+/)) {
    if (!token) continue
    if (/^(?:[a-z-]+:)*(?:bg-|border|shadow|rounded)/.test(token)) surface.push(token)
    else layout.push(token)
  }
  return (
    <div
      ref={ref}
      className={cn(
        'relative isolate rounded-lg transition-transform hover:-translate-y-1',
        revealCls,
        layout
      )}
    >
      <div
        className={cn(
          'absolute inset-0 -z-10 rounded-lg bg-paper shadow-[0_6px_0_rgba(42,31,22,0.08)]',
          surface
        )}
        style={clip ? { clipPath: clip } : undefined}
        aria-hidden="true"
      />
      {torn === 'top' && tearClearance}
      {children}
      {torn === 'bottom' && tearClearance}
    </div>
  )
}

// A ruled index card — the kind that actually gets pinned to corkboards.
// Straight-cut edges (unlike the torn cards), near-white stock, a red header
// rule and faint kraft ruled lines, all drawn from the site palette. Pair the
// ruled spacing with leading-[26px] content so the text sits on the lines.
export function IndexCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { ref, revealCls } = useReveal()
  return (
    <div
      ref={ref}
      className={cn(
        'relative isolate rounded-md border border-ink/10 bg-[#FFFDF7] shadow-[0_6px_0_rgba(42,31,22,0.08)] transition-transform hover:-translate-y-1',
        revealCls,
        className
      )}
      style={{
        backgroundImage:
          'linear-gradient(hsl(9 63% 44% / 0.4) 0 0), repeating-linear-gradient(to bottom, transparent 0 24.5px, hsl(36 38% 63% / 0.4) 24.5px 26px)',
        backgroundSize: '100% 2px, 100% calc(100% - 58px)',
        backgroundPosition: '0 44px, 0 52px',
        backgroundRepeat: 'no-repeat',
      }}
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
  const { ref, revealCls } = useReveal<HTMLElement>()
  return (
    <figure
      ref={ref}
      className={cn(
        'inline-flex flex-col items-center rounded bg-paper p-2.5 pb-4 shadow-[0_8px_0_rgba(42,31,22,0.1)]',
        revealCls,
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
