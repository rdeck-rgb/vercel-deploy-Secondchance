// Custom hand-drawn-style animal icons (friendly, warm, brand-matched).
// Stroke-based, rounded caps/joins, single currentColor so they inherit text color.

type IconProps = { className?: string }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function DogIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* floppy ears */}
      <path d="M7.5 8.5C5.8 8 4.8 6.6 5.1 5.2c.2-1.1 1.5-1.5 2.5-.8 1 .8 1.5 2.2 1.2 3.4" />
      <path d="M16.5 8.5c1.7-.5 2.7-1.9 2.4-3.3-.2-1.1-1.5-1.5-2.5-.8-1 .8-1.5 2.2-1.2 3.4" />
      {/* head */}
      <path d="M7.2 12.5c0-3.2 2.1-5.5 4.8-5.5s4.8 2.3 4.8 5.5c0 3-2 5.3-4.8 5.3s-4.8-2.3-4.8-5.3Z" />
      {/* eyes */}
      <circle cx="10.2" cy="11.3" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="13.8" cy="11.3" r="0.4" fill="currentColor" stroke="none" />
      {/* snout, nose, tongue */}
      <path d="M10.4 13.4c.4 1.9.9 2.8 1.6 2.8s1.2-.9 1.6-2.8" />
      <path d="M11.2 12.9h1.6c0 .5-.4.9-.8.9s-.8-.4-.8-.9Z" fill="currentColor" stroke="none" />
      <path d="M12 16.2v1.4c0 .6.5 1 1 1 .4 0 .8-.3.9-.7" />
    </svg>
  )
}

export function CatIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* pointy ears */}
      <path d="M7.7 8.8 6.6 4.9c-.1-.5.4-.9.8-.6l2.6 2" />
      <path d="M16.3 8.8l1.1-3.9c.1-.5-.4-.9-.8-.6l-2.6 2" />
      {/* head */}
      <path d="M7.2 13c0-3.2 2.1-5.3 4.8-5.3s4.8 2.1 4.8 5.3c0 3-2 5.2-4.8 5.2S7.2 16 7.2 13Z" />
      {/* eyes */}
      <circle cx="10.2" cy="11.8" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="13.8" cy="11.8" r="0.4" fill="currentColor" stroke="none" />
      {/* nose + mouth */}
      <path d="M11.3 13.6h1.4l-.7.9z" fill="currentColor" stroke="none" />
      <path d="M12 14.5c-.3.5-1 .7-1.5.4M12 14.5c.3.5 1 .7 1.5.4" />
      {/* whiskers */}
      <path d="M6.3 12.6l-2-.6M6.4 14l-2 .2M17.7 12.6l2-.6M17.6 14l2 .2" />
    </svg>
  )
}

export function BirdIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* body */}
      <path d="M6 14c0-3.9 2.9-6.5 6-6.5 2.6 0 4.5 1.6 5 4l2.5 1-2.2 1.4c-.9 2.5-3 4.1-5.8 4.1H6l2-2.5C6.7 15 6 14.6 6 14Z" />
      {/* wing */}
      <path d="M10.5 12.5c1.6.4 2.8 1.4 3.4 2.8" />
      {/* eye + legs */}
      <circle cx="14.6" cy="10.4" r="0.4" fill="currentColor" stroke="none" />
      <path d="M10 18v2M12.5 18v2" />
    </svg>
  )
}

export function HorseIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* horse head in profile, facing left */}
      <path d="M8 3.8c2.2-.6 4.5.4 5.6 2.3l2.3 3.9c.4.7.1 1.6-.6 2l-1.4.8c.1.3.1.7.1 1 0 3.2-2.6 5.7-5.8 5.7-1 0-2-.2-2.8-.7l-1.7-1c-.8-.5-1-1.6-.5-2.4l4-6.9c.2-.4.3-.9.2-1.4L8 3.8Z" />
      {/* ear */}
      <path d="M8.6 4.2 7.4 2.6l2.1.4" />
      {/* mane */}
      <path d="M9.5 7.5c-1.8 1-3 2.9-3.2 5.1" />
      {/* eye + nostril */}
      <circle cx="10.9" cy="7.3" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="11.6" r="0.35" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function RabbitIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* ears */}
      <path d="M10.3 10.3C9.3 7.8 8.9 4.9 9.9 3.3c.5-.8 1.7-.8 2.2.1.8 1.4.6 4.1-.1 6.4" />
      <path d="M13.7 10.3c1-2.5 1.4-5.4.4-7-.5-.8-1.7-.8-2.2.1" />
      {/* head */}
      <path d="M8.3 14.8c0-2.9 1.7-4.8 3.7-4.8s3.7 1.9 3.7 4.8c0 2.3-1.5 4-3.7 4s-3.7-1.7-3.7-4Z" />
      {/* eyes + nose + teeth */}
      <circle cx="10.7" cy="13.6" r="0.35" fill="currentColor" stroke="none" />
      <circle cx="13.3" cy="13.6" r="0.35" fill="currentColor" stroke="none" />
      <path d="M11.4 14.9h1.2l-.6.8z" fill="currentColor" stroke="none" />
      <path d="M11.6 15.7v1M12.4 15.7v1" />
    </svg>
  )
}

export function TurtleIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* shell */}
      <path d="M5.5 14.5c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6H5.5Z" />
      {/* shell pattern */}
      <path d="M9.2 9.6c-1.1 1.4-1.7 3.1-1.6 4.9M14.8 9.6c1.1 1.4 1.7 3.1 1.6 4.9M12 8.5v6" />
      {/* head */}
      <path d="M18.5 12.3c1.4-.4 2.6.3 2.6 1.4 0 1-1.1 1.7-2.4 1.4" />
      <circle cx="19.9" cy="13" r="0.3" fill="currentColor" stroke="none" />
      {/* legs + tail */}
      <path d="M8 14.5v2.2M16 14.5v2.2M5.5 14.8l-1.8 1.2" />
    </svg>
  )
}

export function FishIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* body + tail */}
      <path d="M8 12c1.7-2.6 4-4 6.5-4 3 0 5.3 1.7 6.5 4-1.2 2.3-3.5 4-6.5 4-2.5 0-4.8-1.4-6.5-4Z" />
      <path d="M8 12 4.5 9c.4 2 .4 4 0 6L8 12Z" />
      {/* eye + gill */}
      <circle cx="16.8" cy="11" r="0.4" fill="currentColor" stroke="none" />
      <path d="M12.5 9.7c1 1.4 1 3.2 0 4.6" />
    </svg>
  )
}

export function PawHeartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* paw pad */}
      <path d="M12 19.5c-2.5 0-4.2-1.7-4.2-3.7 0-1.6 1-2.6 2.1-3.4.8-.6 1.4-1.1 2.1-1.1s1.3.5 2.1 1.1c1.1.8 2.1 1.8 2.1 3.4 0 2-1.7 3.7-4.2 3.7Z" />
      {/* toes */}
      <ellipse cx="7.6" cy="9.8" rx="1.2" ry="1.6" />
      <ellipse cx="10.6" cy="7.6" rx="1.2" ry="1.7" />
      <ellipse cx="13.8" cy="7.6" rx="1.2" ry="1.7" />
      <ellipse cx="16.6" cy="9.8" rx="1.2" ry="1.6" />
    </svg>
  )
}

export function BoneIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* classic bone, diagonal */}
      <path d="M17.2 6.8a2.2 2.2 0 0 1 3.1-.3 2.2 2.2 0 0 1 .3 3.1 2.2 2.2 0 0 1-.3 3.1 2.2 2.2 0 0 1-3.1.3L6.8 17.2a2.2 2.2 0 0 1-3.1.3 2.2 2.2 0 0 1-.3-3.1 2.2 2.2 0 0 1 .3-3.1 2.2 2.2 0 0 1 3.1-.3l10.4-4.2Z" />
    </svg>
  )
}

export function HomeHeartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* house with a heart — forever home */}
      <path d="M4.5 11 12 4.5 19.5 11" />
      <path d="M6.5 9.5V18c0 .8.7 1.5 1.5 1.5h8c.8 0 1.5-.7 1.5-1.5V9.5" />
      <path d="M12 16.3s-2.2-1.4-2.2-2.9c0-.9.7-1.5 1.4-1.5.4 0 .7.2.8.4.1-.2.4-.4.8-.4.7 0 1.4.6 1.4 1.5 0 1.5-2.2 2.9-2.2 2.9Z" />
    </svg>
  )
}

export function MegaphonePawIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* megaphone */}
      <path d="M4 10.5v3c0 .6.4 1 1 1h1.6L15 18V6L6.6 9.5H5c-.6 0-1 .4-1 1Z" />
      <path d="M7.6 14.7l.9 3.6c.1.6.7 1 1.3.9l.6-.2" />
      {/* sound arcs */}
      <path d="M17.5 8.5c1.3.6 2.2 1.8 2.2 3.5s-.9 2.9-2.2 3.5" />
    </svg>
  )
}

export function ClipboardPawIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* clipboard */}
      <rect x="6" y="4.5" width="12" height="16" rx="2" />
      <path d="M9.5 4.5V3.8c0-.7.6-1.3 1.3-1.3h2.4c.7 0 1.3.6 1.3 1.3v.7" />
      {/* paw on the form */}
      <path d="M12 15.8c-1.3 0-2.2-.9-2.2-2 0-.8.6-1.4 1.1-1.8.4-.3.7-.6 1.1-.6s.7.3 1.1.6c.5.4 1.1 1 1.1 1.8 0 1.1-.9 2-2.2 2Z" />
      <circle cx="9.3" cy="10.6" r="0.55" />
      <circle cx="10.9" cy="9.3" r="0.55" />
      <circle cx="13.1" cy="9.3" r="0.55" />
      <circle cx="14.7" cy="10.6" r="0.55" />
      <path d="M9 17.8h6" />
    </svg>
  )
}

export function GradCapPawIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* graduation cap */}
      <path d="m3 9.5 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.5v3.5c0 1.7 2.2 3 5 3s5-1.3 5-3v-3.5M19 10v4" />
      {/* tiny paw under the cap */}
      <circle cx="10.6" cy="13.2" r="0.4" />
      <circle cx="13.4" cy="13.2" r="0.4" />
      <path d="M12 15.4c-.8 0-1.4-.6-1.4-1.3 0-.5.4-.9.7-1.1.3-.2.4-.3.7-.3s.4.1.7.3c.3.2.7.6.7 1.1 0 .7-.6 1.3-1.4 1.3Z" />
    </svg>
  )
}

export function ChartPawIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* rising chart */}
      <path d="M4 20V4M4 20h16" />
      <path d="m7 15 3.5-4 3 2.5L18 8" />
      <path d="M18 8h-2.5M18 8v2.5" />
    </svg>
  )
}

export function SearchPawIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* magnifier with paw inside */}
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15.2 15.2 4.3 4.3" />
      <path d="M10.5 12.7c-1.1 0-1.9-.8-1.9-1.7 0-.7.5-1.2 1-1.5.3-.3.6-.5.9-.5s.6.2.9.5c.5.3 1 .8 1 1.5 0 .9-.8 1.7-1.9 1.7Z" />
      <circle cx="8.3" cy="8.2" r="0.45" />
      <circle cx="9.7" cy="7.1" r="0.45" />
      <circle cx="11.4" cy="7.1" r="0.45" />
      <circle cx="12.8" cy="8.2" r="0.45" />
    </svg>
  )
}

export function GiftIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* gift box — free grant */}
      <rect x="4.5" y="9" width="15" height="4" rx="1" />
      <path d="M6 13v6c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-6M12 9v11" />
      <path d="M12 9s-3.5.3-4.7-1.3c-.9-1.2-.2-2.9 1.2-3.1C10.3 4.3 12 7 12 9Zm0 0s3.5.3 4.7-1.3c.9-1.2.2-2.9-1.2-3.1C13.7 4.3 12 7 12 9Z" />
    </svg>
  )
}

export function HandHeartIcon({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
      {/* open hand */}
      <path d="M3.5 17.5c1.2-2.2 3-3.5 5-3.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H9.5" />
      <path d="M13 15.5l4.8-1.9c.9-.3 1.8.1 2.1 1 .3.8-.1 1.7-.9 2l-5.7 2.3c-1.5.6-3.2.6-4.7 0l-2.4-1" />
      {/* heart above */}
      <path d="M15.5 10s-2.7-1.7-2.7-3.4c0-1 .8-1.8 1.7-1.8.5 0 .9.2 1 .5.1-.3.5-.5 1-.5.9 0 1.7.8 1.7 1.8 0 1.7-2.7 3.4-2.7 3.4Z" />
    </svg>
  )
}
