import { Check, X, HelpCircle } from 'lucide-react'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

const FIT_ITEMS = [
  { label: 'You are a 501(c)(3) animal welfare organization', fit: true },
  { label: 'You want help with the Google Ad Grant application or compliance', fit: true },
  { label: 'You need marketing written in plain English, not agency jargon', fit: true },
  { label: 'You value training so your team can eventually run things itself', fit: true },
]

const NOT_FIT_ITEMS = [
  { label: 'You are a government-run animal control shelter (no grant eligibility)', fit: false },
  { label: 'You want a generic agency that works with any industry', fit: false },
  { label: 'You need instant guaranteed donation numbers without a runway', fit: false },
]

export function Comparison() {
  return (
    <section className="bg-kraft/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Stamp variant="outline" className="mb-4">Fit Check</Stamp>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
            Built for rescues. <span className="text-forest">Honest about when we are not.</span>
          </h2>
          <p className="mt-4 text-lg text-ink/65 leading-relaxed">
            This is not a scorecard. It is a quick way to check whether the problems we solve are the problems you actually have.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <TornCard className="p-8 relative" torn="bottom">
            <div className="absolute -top-3 left-8">
              <PushPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-ink font-serif">This tends to be a fit when…</h3>
            <ul className="mt-6 space-y-4">
              {FIT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/15">
                    <Check className="h-4 w-4 text-forest" strokeWidth={3} />
                  </span>
                  <span className="text-ink/80 leading-relaxed">{item.label}</span>
                </li>
              ))}
            </ul>
          </TornCard>

          <TornCard className="p-8 relative bg-paper" torn="bottom">
            <div className="absolute -top-3 right-8">
              <PushPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-ink font-serif">We may not be the right choice if…</h3>
            <ul className="mt-6 space-y-4">
              {NOT_FIT_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stamp-red/10">
                    <X className="h-4 w-4 text-stamp-red" strokeWidth={3} />
                  </span>
                  <span className="text-ink/80 leading-relaxed">{item.label}</span>
                </li>
              ))}
            </ul>
          </TornCard>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-lg bg-paper/70 p-4 border-2 border-dashed border-ink/10">
          <HelpCircle className="h-5 w-5 text-ink/40 shrink-0 mt-0.5" />
          <p className="text-sm text-ink/60 leading-relaxed">
            Not sure? If you are an animal nonprofit, the free eligibility check will tell you exactly what you qualify for — and point you toward the right path if the grant is not an option.
          </p>
        </div>
      </div>
    </section>
  )
}
