import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import {
  CorkBoard,
  PushPin,
  Stamp,
  TornCard,
  WashiTape,
  Polaroid,
} from '@/components/BoardElements'

export default function Results() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <SiteHeader />
      <main>
        {/* Hero */}
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <WashiTape color="green" className="w-16" />
              <Stamp variant="green">Stories with proof</Stamp>
              <WashiTape color="green" className="w-16" />
            </div>
            <p className="text-lg italic text-paper/80 leading-relaxed font-serif">
              The update that starts with "you're not going to believe it" is the best part of my
              week. This page is where those stories live.
            </p>
            <h1 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper">
              Real wins, told as stories —{' '}
              <span className="text-kraft">with the number as evidence, not the headline.</span>
            </h1>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed">
              Every story here follows the same shape: the moment before we started, what changed
              in plain language, and one number that proved it. Nothing invented, ever — which is
              why some of these spaces are still waiting.
            </p>
          </div>
        </CorkBoard>

        {/* Story slots */}
        <section className="bg-paper border-y-2 border-dashed border-ink/10 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr,280px] gap-10 items-center">
              <TornCard className="p-8 sm:p-10">
                <div className="flex justify-center mb-3">
                  <PushPin className="h-6 w-6" />
                </div>
                <p className="text-base text-ink/70 leading-relaxed">
                  We're in the early days. Every result gets documented — with real numbers, real
                  names, and written permission — before it goes on this page. The first stories are
                  being written now.
                </p>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  If you'd like to talk to Melanie directly about what she's seen work, start the
                  Google Ad Grants onboarding and we'll reach out to schedule a call.
                </p>
                <Link
                  to="/audit#audit-form"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-ink transition-colors"
                >
                  Start eligibility check
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </TornCard>
              <div className="hidden lg:flex justify-center">
                <Polaroid
                  src="/images/photos/golden-puppy-closeup.jpg"
                  alt="Golden retriever puppy"
                  caption="Your story starts here"
                  rotation={3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-ink py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-paper leading-tight">
              Your rescue's story could be the next one on this page.
            </h2>
            <p className="mt-6 text-lg text-paper/70 leading-relaxed">
              It starts with the Google Ad Grants eligibility check — and a real conversation.
            </p>
            <Link
              to="/audit#audit-form"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(255,255,255,0.12)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all"
            >
              Check My Eligibility
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
