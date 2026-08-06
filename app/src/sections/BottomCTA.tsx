import { Link } from 'react-router'
import { ArrowRight, Search } from 'lucide-react'
import { CorkBoard, TornCard, PushPin } from '@/components/BoardElements'

export function BottomCTA() {
  return (
    <section id="audit" className="relative">
      <CorkBoard className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <TornCard className="p-8 sm:p-12 relative inline-block w-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <PushPin className="h-7 w-7" />
            </div>
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-md bg-forest/10 px-4 py-2 text-sm font-bold text-forest font-mono">
              <Search className="h-4 w-4" />
              "adopt a rescue dog near me"
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
              Someone typed that tonight.{' '}
              <span className="text-stamp-red">Google will pay to show them your animals.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
              The Google Ad Grant gives your nonprofit up to <strong className="text-ink">$10,000 every month</strong> in
              free search advertising. We handle the application, build the campaigns, and keep you
              compliant — so every dollar reaches real adopters, donors, and volunteers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-lg mx-auto">
              <div className="rounded-lg bg-kraft/70 p-4 border-2 border-ink/10">
                <p className="text-2xl font-bold text-stamp-red font-serif">$10K</p>
                <p className="text-xs font-mono uppercase tracking-wider text-ink/60">Free ads / month</p>
              </div>
              <div className="rounded-lg bg-kraft/70 p-4 border-2 border-ink/10">
                <p className="text-2xl font-bold text-stamp-red font-serif">$120K</p>
                <p className="text-xs font-mono uppercase tracking-wider text-ink/60">Free ads / year</p>
              </div>
              <div className="rounded-lg bg-kraft/70 p-4 border-2 border-ink/10">
                <p className="text-2xl font-bold text-stamp-red font-serif">$0</p>
                <p className="text-xs font-mono uppercase tracking-wider text-ink/60">You pay Google</p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center">
              <Link
                to="/audit#audit-form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-stamp-red px-8 py-4 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
              >
                Free Eligibility Check
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-ink/60 font-mono uppercase tracking-wider">
              Free eligibility check • No obligation • Most 501(c)(3) animal orgs qualify
            </p>
          </TornCard>
        </div>
      </CorkBoard>
    </section>
  )
}
