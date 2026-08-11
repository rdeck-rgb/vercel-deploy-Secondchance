import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { AuditForm } from '@/sections/audit/AuditForm'
import { Footer } from '@/sections/Footer'
import { PageMeta } from '@/components/PageMeta'
import {
  CorkBoard,
  Stamp,
  TornCard,
  PushPin,
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
    // scroll-mt clears the sticky header so the top of the form is visible
    <section id="audit-form" className="scroll-mt-20">
      <CorkBoard className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            {/* On paper, not bare on the cork — cream text on tan cork sits
                near 2:1 contrast, well under the 4.5:1 minimum. */}
            <TornCard className="relative p-6 sm:p-8">
              <div className="absolute -top-3 left-8">
                <PushPin className="h-6 w-6" />
              </div>
              <Stamp variant="green" className="mb-4">Free Grant Eligibility Check</Stamp>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
                Find out if Google owes your rescue{' '}
                <span className="text-stamp-red">$10,000 a month.</span>
              </h1>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Most 501(c)(3) animal organizations qualify — rescues, shelters, humane societies,
                wildlife sanctuaries, zoos, veterinary nonprofits, TNR programs, and more — and most
                have never heard of it. This check tells you where you stand, in plain English,
                before you spend a penny on anything.
              </p>
              <div className="mt-8 border-t-2 border-dashed border-ink/10 pt-6">
                <p className="text-sm font-bold uppercase tracking-widest text-ink/50 font-mono">
                  Exactly what happens after you submit
                </p>
                <div className="mt-4 space-y-3">
                  {WHAT_HAPPENS.map((b, i) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-xs font-bold text-paper font-mono">
                        {i + 1}
                      </span>
                      <span className="text-sm text-ink/70 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
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
