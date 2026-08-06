import { HelpCircle } from 'lucide-react'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

export function Primer() {
  return (
    <section id="primer" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Stamp variant="outline" className="mb-4">The Basics</Stamp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
              What is the Google Ad Grant?
            </h2>
            <p className="mt-4 text-lg text-ink/65 leading-relaxed">
              Google gives approved nonprofits up to $10,000 per month in free search advertising.
              Not cash — advertising credit that shows your animals, volunteer signups, and donation
              pages to people already searching for them.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            <TornCard className="p-6 relative" torn="bottom">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <p className="text-sm font-mono font-semibold uppercase tracking-wider text-ink/50">Who qualifies</p>
              <p className="mt-3 text-ink/80 leading-relaxed">
                Registered 501(c)(3) animal-welfare organizations in the U.S. Government-run animal
                control is excluded, but a friends-of nonprofit partner may qualify.
              </p>
            </TornCard>

            <TornCard className="p-6 relative bg-kraft/60" torn="bottom">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <p className="text-sm font-mono font-semibold uppercase tracking-wider text-ink/50">The catch</p>
              <p className="mt-3 text-ink/80 leading-relaxed">
                Google has real rules. Your ads must stay relevant, your account must track real
                actions, and you must keep logging in. Slip and Google pauses the grant.
              </p>
            </TornCard>

            <TornCard className="p-6 relative" torn="bottom">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <p className="text-sm font-mono font-semibold uppercase tracking-wider text-ink/50">Jargon decoder</p>
              <dl className="mt-3 space-y-2 text-sm text-ink/80 leading-relaxed">
                <div>
                  <dt className="font-bold text-ink">Compliance</dt>
                  <dd>Following Google's rules so you don't lose the grant.</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Conversion tracking</dt>
                  <dd>Seeing which searches turn into adoptions, foster apps, or donations.</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Funnel optimization</dt>
                  <dd>Making each page better at turning a visitor into a real action.</dd>
                </div>
              </dl>
            </TornCard>

            <TornCard className="p-6 relative sm:col-span-2" torn="bottom">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-stamp-red shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-ink font-serif text-lg">Municipal or government-run shelter?</p>
                  <p className="mt-2 text-ink/70 leading-relaxed">
                    You cannot receive the Google Ad Grant directly, but you are not out of options.
                    Scroll to the FAQ or book a free call and we will point you toward a friends-of
                    structure that may work.
                  </p>
                </div>
              </div>
            </TornCard>
          </div>
        </div>
      </div>
    </section>
  )
}
