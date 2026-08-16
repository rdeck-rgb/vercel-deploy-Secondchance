import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { PageMeta } from '@/components/PageMeta'
import { Footer } from '@/sections/Footer'
import { TornCard, PushPin, Stamp, CorkBoard } from '@/components/BoardElements'
import { SERVICES, BUNDLES, bundleComponents, type Service, type Bundle } from '@/lib/pricing'

/**
 * Everything included is listed on the card itself — no toggle — with the price
 * and a single way through to the service's own page.
 */
function ServiceCard({ s }: { s: Service }) {
  return (
    <TornCard className="p-7 sm:p-8 relative" torn="bottom">
      <div className="absolute -top-3 left-8">
        <PushPin className="h-5 w-5" />
      </div>
      <div className="grid gap-7 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <h3 className="text-xl font-bold text-ink font-serif">{s.name}</h3>
          <p className="mt-3 text-sm text-ink/60 leading-relaxed">{s.desc}</p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {s.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-lg border-2 border-ink/10 bg-kraft/50 p-6">
            {s.from && (
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink/55">From</p>
            )}
            <p className="font-mono text-4xl font-bold text-forest">
              {s.price}
              <span className="text-xl">/mo</span>
            </p>
            {s.plans && <p className="mt-1 text-xs text-ink/60">{s.plans}</p>}
            <p className="mt-2 text-xs text-ink/60">{s.setup}</p>
            <Link
              to={s.to}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-stamp-red px-5 py-3 text-sm font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] transition-colors hover:bg-stamp-red-dark"
            >
              {s.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </TornCard>
  )
}

const FEATURED_BUNDLE = BUNDLES.find((b) => b.popular) ?? BUNDLES[0]
const OTHER_BUNDLES = BUNDLES.filter((b) => b !== FEATURED_BUNDLE)

/**
 * Stacked by default so the cards line up in a grid. The featured bundle leads
 * the section at full width, where a stacked price would strand the CTA a
 * screen below the name, so there it sits in a panel beside the details.
 */
function BundleCard({ b, featured = false }: { b: Bundle; featured?: boolean }) {
  const price = (
    <>
      <p className="font-mono text-3xl font-bold text-forest">
        {b.price}
        <span className="text-lg">/mo</span>
      </p>
      {b.save && <p className="mt-1 text-sm font-bold text-stamp-red">{b.save}</p>}
      <p className="mt-1 text-xs text-ink/60">Setup fees waived with a 12-month agreement</p>
    </>
  )
  const cta = (
    <Link
      to={`/order/${b.slug}`}
      className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-colors shadow-[0_4px_0_rgba(42,31,22,0.15)] ${
        b.popular ? 'bg-stamp-red text-white hover:bg-stamp-red-dark' : 'bg-ink text-paper hover:bg-ink/90'
      }`}
    >
      Get Started
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
  const details = (
    <>
      <p className="mt-4 text-sm text-ink/65 leading-relaxed">{b.desc}</p>
      <ul className={`mt-5 space-y-2.5 ${featured ? '' : 'flex-1'}`}>
        {b.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t-2 border-dashed border-ink/10 pt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/60">
        {bundleComponents(b)}
      </p>
    </>
  )

  return (
    <TornCard className="relative flex flex-col p-7 sm:p-8" torn="bottom">
      <div className="absolute -top-3 left-8">
        <PushPin className="h-5 w-5" />
      </div>
      {b.popular && (
        <div className="mb-3">
          <Stamp variant="red">Most Popular</Stamp>
        </div>
      )}
      {featured ? (
        <div className="grid gap-7 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-ink font-serif">{b.name}</h3>
            <p className="mt-1 text-sm text-ink/60">{b.tag}</p>
            {details}
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-lg border-2 border-ink/10 bg-kraft/50 p-6">
              {price}
              {cta}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-bold text-ink font-serif">{b.name}</h3>
          <p className="mt-1 text-sm text-ink/60">{b.tag}</p>
          <div className="mt-3">{price}</div>
          {details}
          {cta}
        </>
      )}
    </TornCard>
  )
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="Pricing — SecondChance Media" description="Every price on one page. Web design $95/mo, Local SEO $295/mo, Google Ad Grant management $395/mo, social media from $495/mo. Bundles from $395/mo." />
      <SiteHeader />
      <main>
        {/* Hero — pinned to the corkboard, matching the service pages. The copy
            sits on paper rather than bare cork, which would fail contrast. */}
        <CorkBoard className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <TornCard className="relative p-8 text-center sm:p-10 lg:p-12">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-7 w-7" />
              </div>
              <Stamp variant="green" className="mb-4">Transparent Pricing</Stamp>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
                Here&apos;s what it costs.
              </h1>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                Google gives you $10,000/month in free ads. Our job is to make sure every dollar
                actually reaches adopters, donors, and volunteers. Here&apos;s what that costs.
              </p>
            </TornCard>
          </div>
        </CorkBoard>

        {/* Detailed services */}
        <section id="services" className="scroll-mt-24 bg-kraft/40 border-y-2 border-ink/10 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Stamp variant="outline">The Services</Stamp>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink font-serif">Five services. Straight prices.</h2>
            <p className="mt-3 text-ink/65">Every service stands on its own. Start where the need is biggest, add more whenever you want.</p>
            <p className="mt-4 text-sm text-ink/55 leading-relaxed">
              Two more prices, so this page really does have all of them: additional shelter
              locations on Local SEO are $250/mo each, and a fully custom website is quoted per
              project and starts with a deposit.
            </p>
            <div className="mt-10 grid gap-6">
              {SERVICES.map((s) => (
                <div key={s.key} id={`service-${s.key}`} className="scroll-mt-24">
                  <ServiceCard s={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundles — everything listed up front, no toggles, then straight to the
            per-bundle order page. */}
        <section className="bg-kraft/40 border-y-2 border-ink/10 py-20">
          {/* max-w-5xl, not 7xl — at full width the two-up cards run past a
              comfortable reading measure for the description lines. */}
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Stamp variant="green">Combine Services</Stamp>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink font-serif">Need more than one?</h2>
              <p className="mt-3 text-ink/65">Most growing organizations run two or three of these together. One team, one invoice, one strategy instead of three vendors pointing fingers.</p>
            </div>
            <div className="mt-10">
              <BundleCard b={FEATURED_BUNDLE} featured />
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OTHER_BUNDLES.map((b) => (
                <BundleCard key={b.slug} b={b} />
              ))}
            </div>

            {/* Custom bundle — full width under the fixed combinations, since it
                has no price to line up against the others. */}
            <TornCard className="relative mt-6 flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8" torn="bottom">
              <div className="absolute -top-3 left-8">
                <PushPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-ink font-serif">Custom Bundle</h3>
                <p className="mt-1 text-sm text-ink/60">Built around your organization</p>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                  Want social media in the mix? Grant management without a website? Tell us what
                  you need and we&apos;ll price it on the spot.
                </p>
                <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/60">
                  Any combination of services
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-bold text-paper shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-ink/90 transition-colors"
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </TornCard>
          </div>
        </section>

        {/* Bottom CTA — same treatment as the About page sign-off. No top
            border: the bundles band above already closes with its own rule, so
            the two kraft tones read as one continuous region. */}
        <section className="bg-kraft/40 py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <TornCard className="p-8 sm:p-10 relative inline-block w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                Still deciding? Let us tell you where to start.
              </h2>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                Takes about five minutes. No obligation.
              </p>
              <Link
                to="/get-started"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
              >
                Start Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="mt-6 text-sm text-ink/60">
                Prefer to talk it through with a person?{' '}
                <Link to="/contact" className="font-bold text-stamp-red hover:underline">
                  Contact us
                </Link>{' '}
                and we&apos;ll set up a call.
              </p>
            </TornCard>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
