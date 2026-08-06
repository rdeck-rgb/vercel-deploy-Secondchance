import { Link } from 'react-router'
import { ArrowRight, Check, Quote, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import {
  CorkBoard,
  PushPin,
  Stamp,
  TornCard,
  WashiTape,
  Polaroid,
} from '@/components/BoardElements'

export type ServiceConfig = {
  eyebrow: string
  breadcrumb: string
  h1a: string
  h1b: string
  sub: string
  priceNote: string
  heroImage?: string
  heroImageAlt?: string
  trustPoints: string[]
  stats: { value: string; label: string }[]
  problemEyebrow: string
  problemTitle: string
  problemBody: string[]
  imagine: string
  featuresEyebrow: string
  featuresTitle: string
  featuresNote: string
  features: { title: string; desc: string }[]
  testimonial: { quote: string; name: string; org: string; metric: string }
  pricingEyebrow: string
  pricingTitle: string
  plans: {
    name: string
    price: string
    setup: string
    items: string[]
    cta: string
    popular?: boolean
    timeline?: string
  }[]
  processTitle: string
  steps: { n: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaSub: string
}

export function ServicePageTemplate({ c }: { c: ServiceConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      {/* Breadcrumb + Hero on corkboard */}
      <CorkBoard className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-ink/60 mb-8 font-mono uppercase tracking-wider">
            <Link to="/" className="hover:text-forest">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-forest">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink">{c.breadcrumb}</span>
          </nav>

          <div className={`grid gap-10 items-start ${c.heroImage ? 'lg:grid-cols-2' : 'max-w-5xl'}`}>
            <TornCard className="p-6 sm:p-10">
              <div className="flex justify-center">
                <PushPin className="h-7 w-7" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <WashiTape color="green" className="w-20" />
                <Stamp variant="green">{c.eyebrow}</Stamp>
              </div>
              <h1 className="mt-5 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                {c.h1a} <span className="text-forest">{c.h1b}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-ink/75 leading-relaxed">{c.sub}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/audit#audit-form"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-stamp-red px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all"
                >
                  Check My Eligibility
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <span className="self-center text-sm font-medium text-ink/60">{c.priceNote}</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {c.trustPoints.map((t) => (
                  <span key={t} className="flex items-center gap-2 text-sm text-ink/70">
                    <Check className="h-4 w-4 text-forest" strokeWidth={3} />
                    {t}
                  </span>
                ))}
              </div>
            </TornCard>

            {c.heroImage && (
              <div className="flex justify-center lg:justify-end">
                <Polaroid
                  src={c.heroImage}
                  alt={c.heroImageAlt ?? c.breadcrumb}
                  caption={c.heroImageAlt ?? c.breadcrumb}
                  rotation={2}
                />
              </div>
            )}
          </div>
        </div>
      </CorkBoard>

      {/* Stats bar */}
      <section className="border-y-2 border-dashed border-ink/10 bg-paper py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {c.stats.map((s) => (
            <div key={s.label} className="relative">
              <Stamp variant={s.value === '$0' ? 'red' : 'green'} className="absolute -top-3 left-1/2 -translate-x-1/2">
                {s.value}
              </Stamp>
              <p className="mt-5 font-mono text-sm text-ink/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <WashiTape color="red" />
            <Stamp variant="red">{c.problemEyebrow}</Stamp>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight">{c.problemTitle}</h2>
          {c.problemBody.map((p, i) => (
            <p key={i} className="mt-5 text-lg text-ink/70 leading-relaxed">{p}</p>
          ))}
          <TornCard torn="bottom" className="mt-8 bg-kraft p-6">
            <p className="text-base font-medium italic text-ink/80 leading-relaxed">Imagine this: {c.imagine}</p>
          </TornCard>
        </div>
      </section>

      {/* Features */}
      <CorkBoard className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="green" />
              <Stamp variant="green">{c.featuresEyebrow}</Stamp>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-paper">{c.featuresTitle}</h2>
            <p className="mt-4 text-lg text-paper/80">{c.featuresNote}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f) => (
              <TornCard key={f.title} className="p-6 hover:-translate-y-1 transition-transform">
                <div className="flex justify-center -mt-3 mb-2">
                  <PushPin className="h-5 w-5" />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10">
                  <Check className="h-4.5 w-4.5 text-forest" strokeWidth={3} />
                </span>
                <h3 className="mt-4 font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{f.desc}</p>
              </TornCard>
            ))}
          </div>
        </div>
      </CorkBoard>

      {/* Testimonial — only shown when a real quote exists */}
      {!c.testimonial.quote.startsWith('[') && (
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto h-10 w-10 text-stamp-red fill-stamp-red" />
          <blockquote className="mt-6 text-xl sm:text-2xl font-serif font-medium text-ink leading-relaxed">
            "{c.testimonial.quote}"
          </blockquote>
          <p className="mt-4 font-bold text-ink">{c.testimonial.name}</p>
          <p className="text-sm text-ink/60 font-mono uppercase tracking-wider">{c.testimonial.org}</p>
          <Stamp variant="red" className="mt-4">{c.testimonial.metric}</Stamp>
        </div>
      </section>
      )}

      {/* Pricing */}
      <section className="bg-kraft py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">{c.pricingTitle}</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <WashiTape color="red" />
              <Stamp variant="red">{c.pricingEyebrow}</Stamp>
            </div>
          </div>
          <div className={`mt-12 grid gap-6 ${c.plans.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'}`}>
            {c.plans.map((p) => (
              <TornCard
                key={p.name}
                className="relative flex flex-col p-8"
              >
                <div className="flex justify-center mb-3">
                  <PushPin className="h-5 w-5" />
                </div>
                {p.popular && (
                  <div className="flex justify-center mb-3">
                    <Stamp variant="red">Most Popular</Stamp>
                  </div>
                )}
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-3 font-mono text-4xl font-bold text-forest">{p.price}</p>
                <p className="mt-2 text-xs text-ink/50 font-mono uppercase tracking-wider">{p.setup}</p>
                {p.timeline && <p className="mt-3 text-sm text-ink/60 font-serif italic text-center leading-relaxed">{p.timeline}</p>}
                <ul className="mt-5 flex-1 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/audit#audit-form"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all ${
                    p.popular
                      ? 'bg-stamp-red text-white'
                      : 'bg-ink text-paper'
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </TornCard>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/60">
            Want more than one service?{' '}
            <Link to="/pricing" className="font-semibold text-forest hover:underline">
              See bundle pricing and save →
            </Link>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-ink">{c.processTitle}</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <div key={s.n} className="relative text-center">
                {i < c.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[62%] w-[76%] border-t-2 border-dashed border-ink/15" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest text-xl font-mono font-bold text-paper shadow-[0_4px_0_rgba(42,31,22,0.12)]">
                  {s.n}
                </div>
                <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <CorkBoard className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-paper mb-12">
            Still have questions? Good.
          </h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <TornCard key={i} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-ink hover:text-forest transition-colors"
                >
                  <span className="pr-8">{f.q}</span>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition-transform duration-300 text-lg leading-none ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t-2 border-dashed border-ink/10 px-6 pb-6 pt-4 text-sm text-ink/65 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </TornCard>
            ))}
          </div>
        </div>
      </CorkBoard>

      {/* Bottom CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-paper leading-tight">{c.ctaTitle}</h2>
          <p className="mt-6 text-lg text-paper/70 leading-relaxed">{c.ctaSub}</p>
          <Link
            to="/audit#audit-form"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(255,255,255,0.12)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all"
          >
            Check My Eligibility
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-6 text-sm text-paper/50 font-mono uppercase tracking-wider">Google Ad Grants onboarding • Done with you • Start today</p>
        </div>
      </section>
    </main>
  )
}
