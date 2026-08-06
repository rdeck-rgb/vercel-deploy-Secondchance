import { Link } from 'react-router'
import { Menu, X, Phone, ArrowRight, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { PushPin } from '@/components/BoardElements'
import type { ComponentType } from 'react'
import { HomeHeartIcon, SearchPawIcon, MegaphonePawIcon, GradCapPawIcon } from '@/components/AnimalIcons'

type MenuIcon = ComponentType<{ className?: string }>

const SERVICES_MENU: { icon: MenuIcon; title: string; desc: string; to: string }[] = [
  {
    icon: MegaphonePawIcon,
    title: 'Google Ad Grant',
    desc: '$10K/mo in free ads — application, compliance, and management.',
    to: '/services/google-ad-grant',
  },
  {
    icon: SearchPawIcon,
    title: 'Local SEO & Search',
    desc: 'Show up when people search "adopt a dog near me."',
    to: '/services/local-seo',
  },
  {
    icon: HomeHeartIcon,
    title: 'Web Design',
    desc: 'Mobile-first sites that turn visits into adoptions.',
    to: '/services/web-design',
  },
  {
    icon: GradCapPawIcon,
    title: 'Social & Training',
    desc: 'Content your animals already give you, plus training that sticks.',
    to: '/services/social-media',
  },
]

const NAV_LINKS = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 py-2 text-sm font-medium text-ink/80 hover:text-stamp-red transition-colors"
      >
        Services
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div
          className="w-[34rem] rounded-lg bg-paper border-2 border-ink/10 shadow-[0_8px_0_rgba(42,31,22,0.1)] p-3 grid gap-1 grid-cols-2"
          role="menu"
        >
          {SERVICES_MENU.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-md p-3 hover:bg-kraft/50 transition-colors"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white transition-colors">
                  <item.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-sm font-bold text-ink">{item.title}</span>
              </div>
              <p className="mt-2 text-xs text-ink/60 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-stamp-red focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b-2 border-ink/10 shadow-[0_2px_0_rgba(42,31,22,0.06)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-stamp-red text-white shadow-[0_3px_0_rgba(42,31,22,0.15)]">
              <PushPin className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-ink font-serif">
              SecondChance <span className="text-stamp-red">Media</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <ServicesMenu />
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-ink/80 hover:text-stamp-red transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+13057091382"
              className="flex items-center gap-1.5 text-sm font-medium text-ink/70 hover:text-stamp-red transition-colors"
            >
              <Phone className="h-4 w-4" />
              305-709-1382
            </a>
            <Link
              to="/audit#audit-form"
              className="inline-flex flex-col items-center rounded-md bg-stamp-red px-5 py-2 text-sm font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors leading-tight"
            >
              <span className="flex items-center gap-1.5">
                Free Eligibility Check
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-normal opacity-90">Takes about 2 minutes</span>
            </Link>
          </div>

          <button
            className="lg:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1">
            <p className="px-3 pt-2 text-xs font-mono font-semibold uppercase tracking-wider text-ink/50">Services</p>
            {SERVICES_MENU.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-kraft/50"
              >
                {s.title}
              </Link>
            ))}
            <div className="border-t border-ink/10 my-2" />
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-kraft/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/audit#audit-form"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-stamp-red px-3 py-2.5 text-center text-sm font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.15)] leading-tight"
            >
              <span>Free Eligibility Check</span>
              <span className="block text-[10px] font-normal opacity-90">Takes about 2 minutes</span>
            </Link>
            <a
              href="tel:+13057091382"
              className="mt-2 flex items-center justify-center gap-2 rounded-md border-2 border-ink/10 px-3 py-2.5 text-sm font-medium text-ink"
            >
              <Phone className="h-4 w-4 text-forest" />
              305-709-1382
            </a>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
