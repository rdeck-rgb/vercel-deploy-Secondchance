import { Link } from 'react-router'
import { ArrowRight, Check, Minus, Plus } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { PageMeta } from '@/components/PageMeta'
import { Footer } from '@/sections/Footer'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

const SERVICES = [
  {
    name: 'Animal Welfare Web Design',
    desc: `Built for phones first, because that's where 70%+ of your adopters are. Looks great, loads fast, turns clicks into applications and donations.`,
    price: '$95',
    setup: 'Setup fee waived with 12-month commitment',
    items: ['Custom responsive design', 'Mobile-first build', 'Online donation integration', 'Adoption & foster forms', 'Petfinder / Adopt-a-Pet sync', 'SSL & hosting included', 'Training & support'],
    to: '/services/web-design',
    cta: 'See what\'s included',
  },
  {
    name: 'AI Search & Local SEO',
    desc: `When someone Googles "adopt a dog near me," you need to show up. We get you into the map pack — and into AI recommendations — and keep you there.`,
    price: '$295',
    setup: 'Setup fee waived with 12-month commitment',
    items: ['Google Business Profile optimization', '25+ directory citations', 'Review management strategy', '"Near me" keyword targeting', 'Schema markup & AI visibility', 'Monthly ranking reports'],
    to: '/services/local-seo',
    cta: 'See what\'s included',
  },
  {
    name: 'Google Ad Grant Management',
    desc: `$10,000/month in free Google Ads for qualifying 501(c)(3) animal organizations. We handle the application, compliance, and campaigns so every free dollar drives adoptions.`,
    price: '$395',
    setup: 'Setup fee waived with 12-month commitment',
    items: ['Full grant application', '95%+ approval rate', 'Adoption, foster & donation campaigns', 'Compliance management', 'Conversion tracking', 'Monthly optimization & reports'],
    to: '/services/google-ad-grant',
    cta: 'See what\'s included',
  },
  {
    name: 'Social Media Management',
    desc: 'Done-for-you social media. We create and post the pet spotlights, graphics, carousels, and captions every week. You approve one plan a month.',
    price: 'from $495',
    setup: 'Setup fee waived with 12-month commitment',
    plans: 'Starter $495 · Plus $795 · Premium $995',
    items: [
      'Starter: 2 platforms (Facebook + Instagram)',
      'Plus: 4 platforms (Facebook, Instagram + 2 more)',
      'Premium: 6 platforms (Facebook, Instagram + 4 more)',
      'Short-form pet videos',
      'Branded graphics & carousels',
      'Captions in your voice',
      'Monthly content calendar',
      'Posts shared to stories',
    ],
    to: '/services/social-media',
    cta: 'See the three plans',
  },
  {
    name: 'Donor Email Nurture',
    desc: 'Turn one-time visitors into recurring donors, fosters, and volunteers with automated emails that actually get opened.',
    price: '$395',
    setup: 'Setup fee waived with 12-month commitment',
    items: ['Automated new-donor welcome sequence', 'Monthly donation appeal', 'Foster & volunteer recruitment emails', 'Event and fundraising blasts', 'List cleanup & segmentation', 'Plain-English performance report'],
    to: '/services/social-media',
    cta: 'See what\'s included',
  },
]

const BUNDLES = [
  {
    name: 'Foundation',
    tag: 'Starter',
    price: '$350/mo',
    save: 'Save $40/mo vs. à la carte',
    desc: 'The two things every animal organization needs first: a website built to turn visits into applications, and the local visibility that puts you in front of nearby adopters.',
    includes: ['Animal Welfare Web Design', 'AI Search & Local SEO'],
    popular: false,
  },
  {
    name: 'Growth',
    tag: 'Most Popular',
    price: '$695/mo',
    save: 'Save $90/mo vs. à la carte',
    desc: 'Everything in Foundation plus up to $10,000/month in free Google Ads. Your site, your map pack presence, and your grant campaigns all pull in the same direction.',
    includes: ['Animal Welfare Web Design', 'AI Search & Local SEO', 'Google Ad Grant Management'],
    popular: true,
  },
  {
    name: 'Full Service',
    tag: 'Done-For-You',
    price: '$1,280/mo',
    save: 'Save $395/mo vs. à la carte',
    desc: 'The complete package: site, search, free ads, social media, and donor emails that turn visitors into long-term supporters.',
    includes: ['Animal Welfare Web Design', 'AI Search & Local SEO', 'Google Ad Grant Management', 'Social Media Starter', 'Donor Email Nurture'],
    popular: false,
  },
]

const FAQS = [
  { q: 'How does billing work?', a: 'Monthly. Simple as that. Each service has a one-time setup fee that is waived with a 12-month commitment. Most organizations go with the 12-month option because it saves money from day one.' },
  { q: 'Can we start with one service and add more later?', a: 'Yes. Plenty of organizations start with just a website or Local SEO and add services down the road. You can upgrade from Foundation to Growth or Full Service anytime, and we will adjust your billing on the spot.' },
  { q: 'What payment methods do you accept?', a: 'Credit cards, ACH bank transfers, and invoices for organizations that need to route payments through their board or accounting system. Whatever is easiest for you.' },
  { q: 'Is there a setup fee?', a: 'Every service has a one-time setup fee. It is waived if you commit for 12 months. Most organizations go this route.' },
  { q: 'What if we do not see results?', a: 'We adjust strategy until you do. That is not a platitude — our client retention rate backs it up. Organizations stay because it works.' },
  { q: 'We are a tiny organization with almost no budget. What should we do?', a: 'Start with the Google Ad Grants onboarding form. Many of the highest-impact fixes — claiming your Google Business Profile, applying for the Ad Grant — cost nothing but time, and we will show you exactly which ones matter most for you.' },
]

function ServiceCard({ s, expanded, onToggle }: { s: typeof SERVICES[0]; expanded: boolean; onToggle: () => void }) {
  return (
    <TornCard className="p-7 sm:p-8 relative" torn="bottom">
      <div className="absolute -top-3 left-8">
        <PushPin className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-ink font-serif">{s.name}</h3>
          <p className="mt-3 text-sm text-ink/60 leading-relaxed">{s.desc}</p>
        </div>
        <div className="shrink-0 text-left sm:text-right">
          <p className="text-3xl font-bold text-forest font-serif">{s.price}<span className="text-lg font-bold text-forest">/mo</span></p>
          {'plans' in s && s.plans && (
            <p className="text-xs text-ink/50">{s.plans}</p>
          )}
          <p className="text-xs text-ink/50">{s.setup}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-stamp-red hover:text-stamp-red-dark transition-colors"
      >
        {expanded ? (
          <>
            <Minus className="h-4 w-4" /> Hide what&apos;s included
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" /> {s.cta}
          </>
        )}
      </button>
      {expanded && (
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {s.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 border-t-2 border-dashed border-ink/10 pt-5">
        <Link to={s.to} className="inline-flex items-center gap-1.5 text-sm font-bold text-stamp-red hover:gap-2.5 transition-all">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </TornCard>
  )
}

export default function Pricing() {
  const [openService, setOpenService] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="Pricing — SecondChance Media" description="Transparent pricing for animal welfare nonprofits. Web design from $95/mo, Local SEO $295/mo, Google Ad Grant management $395/mo. Bundles save up to $395/mo." />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Stamp variant="outline" className="mb-4">Transparent Pricing</Stamp>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              No surprises. Just results.
            </h1>
            <p className="mt-6 text-lg text-ink/65 leading-relaxed max-w-2xl mx-auto">
              Google gives you $10,000/month in free ads. Our job is to make sure every dollar
              actually reaches adopters, donors, and volunteers. Here's what that costs.
            </p>
          </div>
        </section>

        {/* Bundles */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Stamp variant="green">Packages</Stamp>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink font-serif">Most organizations start here.</h2>
              <p className="mt-3 text-ink/65">Bundles built for the way animal welfare organizations actually grow. One team, one invoice, one strategy — and you save money every month.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BUNDLES.map((b) => (
                <TornCard
                  key={b.name}
                  className={`relative flex flex-col p-7 pt-10 border ${
                    b.popular
                      ? 'bg-kraft/50 border-stamp-red/25 lg:-translate-y-3'
                      : 'bg-white border-ink/10'
                  }`}
                  torn="bottom"
                >
                  {b.popular && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 -rotate-1">
                      <div className="rounded-sm bg-stamp-red px-4 py-1.5 text-xs font-bold text-white font-mono uppercase tracking-wider shadow-[0_2px_0_rgba(42,31,22,0.15)]">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <p className={`text-xs font-mono font-semibold uppercase tracking-widest text-ink/50 ${b.popular ? 'mt-5' : ''}`}>{b.tag}</p>
                  <h3 className="mt-2 text-lg font-bold text-ink font-serif">{b.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-forest font-serif">{b.price}</p>
                  <p className="mt-1 text-sm font-bold text-stamp-red">{b.save}</p>
                  <p className="mt-1 text-xs text-ink/50">Setup fee waived with 12-month agreement</p>
                  <p className="mt-3 flex-1 text-sm text-ink/65 leading-relaxed">{b.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {b.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/get-started"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-colors shadow-[0_3px_0_rgba(42,31,22,0.12)] ${
                      b.popular ? 'bg-stamp-red text-white hover:bg-stamp-red-dark hover:shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:-translate-y-0.5' : 'bg-ink text-paper hover:bg-ink/90'
                    }`}
                  >
                    Start Today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </TornCard>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed services */}
        <section className="bg-kraft/40 border-y-2 border-ink/10 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Stamp variant="outline">À La Carte</Stamp>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink font-serif">Five services. Straight prices.</h2>
            <p className="mt-3 text-ink/65">Every service stands on its own. Start where the need is biggest, or add one to your package later.</p>
            <div className="mt-10 grid gap-6">
              {SERVICES.map((s, i) => (
                <ServiceCard
                  key={s.name}
                  s={s}
                  expanded={openService === i}
                  onToggle={() => setOpenService(openService === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — same treatment as the home page FAQ */}
        <section className="bg-kraft/40 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Stamp variant="outline" className="mb-4">Pricing FAQ</Stamp>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif">
                Still deciding?
              </h2>
            </div>
            <div className="mt-12 bg-paper rounded-lg border-2 border-ink/10 p-2 shadow-[0_6px_0_rgba(42,31,22,0.08)]">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-ink/10">
                    <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-ink hover:text-stamp-red px-4 py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-ink/70 leading-relaxed px-4 pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Bottom CTA — same treatment as the About page sign-off. Kraft tone
            matches the FAQ band above so the two read as one region split by
            the rule, rather than two near-identical bands. */}
        <section className="bg-kraft/40 py-20 border-t-2 border-ink/10">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <TornCard className="p-8 sm:p-10 relative inline-block w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                Not sure which package fits? Start with the free eligibility check.
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
            </TornCard>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
