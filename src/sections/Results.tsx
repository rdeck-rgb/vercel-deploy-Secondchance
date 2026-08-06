import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

export function Results() {
  return (
    <section id="results" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stamp variant="outline" className="mb-4">Results</Stamp>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
          Real wins, told the way they actually happened.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/65 leading-relaxed">
          Not stat blocks. Stories — the moment before we started, what changed, and the number
          that proved it, once, as evidence.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 max-w-4xl">
          <TornCard className="p-8 relative">
            <div className="absolute -top-3 left-8">
              <PushPin className="h-5 w-5" />
            </div>
            <p className="text-base text-ink/70 leading-relaxed">
              We're in the early days. Every client result gets documented — with real numbers,
              real names, and written permission — before it goes on this page. The first stories
              are being written now.
            </p>
          </TornCard>
          <TornCard className="p-8 relative bg-kraft/60">
            <div className="absolute -top-3 left-8">
              <PushPin className="h-5 w-5" />
            </div>
            <p className="text-sm font-mono font-semibold uppercase tracking-wider text-ink/50">What we bring</p>
            <ul className="mt-3 space-y-2 text-base text-ink/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                Years running Google Ad Grant accounts for nonprofits
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                Training-first approach so your team owns the work
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                Published pricing and a free eligibility check
              </li>
            </ul>
          </TornCard>
        </div>

        <div className="mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-base font-bold text-stamp-red hover:gap-3 transition-all"
          >
            Read more about how we work
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
