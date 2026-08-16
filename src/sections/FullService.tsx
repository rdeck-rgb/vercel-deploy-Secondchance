import { Link } from 'react-router'
import { ArrowRight, Search, Sparkles, MessageSquare, MousePointerClick, Share2, Globe } from 'lucide-react'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

/**
 * The acronyms are the point of this section — most boards have heard SEO and
 * none of the rest — so each card leads with the term and then says it again in
 * plain English, the same way the Primer decodes grant jargon.
 */
const DISCIPLINES = [
  {
    icon: Search,
    abbr: 'SEO',
    name: 'Search Engine Optimization',
    body: 'Showing up when someone nearby searches "adopt a dog near me" — the map pack, the directory listings, and the reviews that decide who gets the click.',
    rotate: 'rotate-[-0.5deg]',
  },
  {
    icon: Sparkles,
    abbr: 'GEO',
    name: 'Generative Engine Optimization',
    body: 'Getting your organization named inside AI answers. When someone asks ChatGPT or Gemini where to adopt locally, that answer is built from sources — we work to make you one of them.',
    rotate: 'rotate-[0.4deg]',
  },
  {
    icon: MessageSquare,
    abbr: 'AEO',
    name: 'Answer Engine Optimization',
    body: 'Structuring your pages so they can be quoted directly — the box at the top of Google, the voice assistant reply, the one-line answer that never needs a second click.',
    rotate: 'rotate-[-0.3deg]',
  },
  {
    icon: MousePointerClick,
    abbr: 'PPC',
    name: 'Pay-Per-Click Advertising',
    body: 'Paid search run out of the same account as your grant ads, so the free budget and any paid budget stop competing with each other and start working together.',
    rotate: 'rotate-[0.5deg]',
  },
  {
    icon: Share2,
    abbr: 'Social',
    name: 'Social Media Management',
    body: 'The pet spotlights, reels, and captions that keep your feed alive every week — written in your voice, scheduled ahead, approved by you once a month.',
    rotate: 'rotate-[-0.4deg]',
  },
  {
    icon: Globe,
    abbr: 'Web',
    name: 'Website Design & Build',
    body: 'The mobile-first site everything above points at, with donation integration and adoption forms built to turn a visit into an application.',
    rotate: 'rotate-[0.3deg]',
  },
]

export function FullService() {
  return (
    <section id="what-we-do" className="bg-paper py-20 sm:py-28 border-b-2 border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Stamp variant="green" className="mb-4">Everything under one roof</Stamp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
            One team for everything that puts your animals{' '}
            <span className="text-stamp-red">in front of people.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70 leading-relaxed">
            SecondChance Media is a full-service digital marketing partner for animal welfare
            nonprofits. Search, AI visibility, paid ads, social media, and the website they all
            point at — managed in one place, by one team, on one invoice. No agency handoffs, no
            three vendors blaming each other.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((d) => (
            <TornCard
              key={d.abbr}
              className={`relative p-6 ${d.rotate} border border-ink/10 bg-white/70`}
              torn="bottom"
            >
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <d.icon className="h-6 w-6 text-forest" strokeWidth={2} />
              <p className="mt-4 font-mono text-lg font-bold uppercase tracking-wider text-ink">
                {d.abbr}
              </p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink/50">
                {d.name}
              </p>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{d.body}</p>
            </TornCard>
          ))}
        </div>

        {/* The grant is the reason the rest of it is affordable, so it gets the
            closing word rather than a seventh card in the grid above. */}
        <TornCard
          className="relative mt-8 flex flex-col gap-6 border-2 border-dashed border-forest/30 bg-forest/5 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
          torn="bottom"
        >
          <div className="absolute -top-3 left-8">
            <PushPin className="h-5 w-5" />
          </div>
          <div className="max-w-2xl">
            <Stamp variant="red" className="mb-4">Our claim to fame</Stamp>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif leading-tight">
              The Google Ad Grant is how the rest of this pays for itself.
            </h3>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Approved 501(c)(3) animal organizations get up to $10,000 a month in free Google
              search ads. Winning it and keeping it compliant is what we are known for — and
              against $10,000 of monthly ad credit, the management fee is a fraction of what the
              grant is putting to work. That is digital transformation your board can do the math
              on.
            </p>
          </div>
          <Link
            to="/audit#audit-form"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-stamp-red px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
          >
            Check if you qualify
            <ArrowRight className="h-5 w-5" />
          </Link>
        </TornCard>
      </div>
    </section>
  )
}
