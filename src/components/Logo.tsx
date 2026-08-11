import { cn } from '@/lib/utils'

/**
 * The brand lockup from the logo kit (public/logo). Sizes are set by height —
 * the 2x source is 967x145, so it stays crisp well past the sizes used here.
 *
 * variant "color" for light backgrounds, "white" for dark ones.
 */
export function Logo({
  className,
  variant = 'color',
}: {
  className?: string
  variant?: 'color' | 'white' | 'dark'
}) {
  return (
    <img
      src={`/logo/horizontal-${variant}.png`}
      alt="SecondChance Media — get found online"
      width={967}
      height={145}
      className={cn('w-auto', className)}
    />
  )
}

/** Just the paw mark, for tight spots where the wordmark will not fit. */
export function LogoMark({
  className,
  variant = 'red',
}: {
  className?: string
  variant?: 'red' | 'white' | 'dark'
}) {
  return (
    <img
      src={`/logo/icon-${variant}.svg`}
      alt=""
      aria-hidden="true"
      className={cn('h-6 w-6', className)}
    />
  )
}
