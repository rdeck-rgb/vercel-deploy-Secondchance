import { Link } from 'react-router'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { PushPin, Stamp } from '@/components/BoardElements'

const COLS = [
  {
    title: 'Services',
    items: [
      { label: 'Google Ad Grant', to: '/services/google-ad-grant' },
      { label: 'Local SEO & Search', to: '/services/local-seo' },
      { label: 'Animal Welfare Web Design', to: '/services/web-design' },
      { label: 'Social Media & Training', to: '/services/social-media' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Get Started', to: '/get-started' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-cork bg-cork-texture py-16 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-paper/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stamp-red text-white shadow-[0_3px_0_rgba(42,31,22,0.2)]">
                <PushPin className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-ink font-serif">
                SecondChance <span className="text-stamp-red">Media</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed max-w-sm">
              Digital marketing for animal welfare nonprofits — so more animals
              find homes, fosters, volunteers, and donors.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Stamp variant="green">501(c)(3) Focused</Stamp>
              <Stamp variant="red">Google Ad Grant Experts</Stamp>
            </div>
            <address className="mt-6 not-italic text-sm text-ink/70 space-y-2.5">
              <p className="font-semibold text-ink">Melanie Deck</p>
              <a href="tel:+13057091382" className="flex items-center gap-2.5 hover:text-ink transition-colors">
                <Phone className="h-4 w-4 text-forest-dark shrink-0" />
                305-709-1382
              </a>
              <a href="mailto:mdeck@adgrantconsultant.com" className="flex items-center gap-2.5 hover:text-ink transition-colors">
                <Mail className="h-4 w-4 text-forest-dark shrink-0" />
                mdeck@adgrantconsultant.com
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-forest-dark shrink-0 mt-0.5" />
                <span>7420 Wisteria Ave<br />Parkland, Florida 33076</span>
              </div>
            </address>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com/secondchancemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-ink/5 border border-ink/10 text-ink/70 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Follow SecondChance Media on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/secondchancemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-ink/5 border border-ink/10 text-ink/70 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Follow SecondChance Media on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@secondchancemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-ink/5 border border-ink/10 text-ink/70 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Follow SecondChance Media on TikTok"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@secondchancemedia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-ink/5 border border-ink/10 text-ink/70 hover:bg-forest hover:border-forest hover:text-white transition-all"
                aria-label="Follow SecondChance Media on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-ink/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-ink/70 hover:text-ink transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-ink/10 pt-8 text-center text-sm text-ink/50">
          © {new Date().getFullYear()} SecondChance Media, a division of{' '}
          <a href="https://click2.ai" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">click2.ai</a>. Every animal deserves to be seen.
        </div>
      </div>
    </footer>
  )
}
