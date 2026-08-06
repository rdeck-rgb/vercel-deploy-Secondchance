import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { AuditForm } from '@/sections/audit/AuditForm'
import { Footer } from '@/sections/Footer'
import { PageMeta } from '@/components/PageMeta'
import {
  CorkBoard,
  Stamp,
  TornCard,
  WashiTape,
  Polaroid,
} from '@/components/BoardElements'

/* ---------- Hero: one line of value + what happens after submit ---------- */
const WHAT_HAPPENS = [
  'You submit — it takes about two minutes.',
  'A real person (Melanie, not software) reviews your 501(c)(3) status and your current online presence.',
  'You get a plain answer on whether the $10,000/month Google Ad Grant fits your organization — and what to do next, either way.',
]

function AuditHero() {
  return (
    <section id="audit-form">
      <CorkBoard className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="green" />
              <Stamp variant="green">Free Grant Eligibility Check</Stamp>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper leading-tight">
              Find out if Google owes your rescue{' '}
              <span className="text-kraft">$10,000 a month.</span>
            </h1>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed max-w-lg">
              Most 501(c)(3) animal organizations qualify — rescues, shelters, humane societies,
              wildlife sanctuaries, zoos, veterinary nonprofits, TNR programs, and more — and most
              have never heard of it. This check tells you where you stand, in plain English,
              before you spend a penny on anything.
            </p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-kraft font-mono">
              Exactly what happens after you submit
            </p>
            <TornCard className="mt-4 p-5">
              {WHAT_HAPPENS.map((b, i) => (
                <div key={b} className={`flex items-start gap-3 ${i !== WHAT_HAPPENS.length - 1 ? 'mb-3' : ''}`}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-paper font-mono">
                    {i + 1}
                  </span>
                  <span className="text-sm text-ink/70 leading-relaxed">{b}</span>
                </div>
              ))}
            </TornCard>
            <TornCard className="mt-5 p-4 bg-kraft">
              <p className="text-sm text-ink/70 leading-relaxed">
                One honest note: Google reviews applications on their own schedule, not ours. We'll
                never promise instant approval — but you'll always know exactly where things stand.
              </p>
            </TornCard>
            <div className="mt-8 hidden lg:block">
              <Polaroid
                src="/images/photos/two-closeup.jpg"
                alt="Golden retriever and Bernese mountain dog lying cheek to cheek on the living room floor"
                caption="Best friends waiting for answers"
                rotation={-2}
              />
            </div>
          </div>
          <AuditForm />
        </div>
      </div>
    </CorkBoard>
    </section>
  )
}

export default function Audit() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="Free Grant Eligibility Check — SecondChance Media" description="Find out if your animal welfare nonprofit qualifies for $10,000/month in free Google advertising. Free, no obligation, reviewed by a real person." />
      <SiteHeader />
      <main>
        <AuditHero />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
