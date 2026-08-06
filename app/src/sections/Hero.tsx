import { Link } from 'react-router'
import { ArrowRight, Info } from 'lucide-react'
import { CorkBoard, TornCard, PushPin, Polaroid, Stamp, TearOffTabs, WashiTape } from '@/components/BoardElements'

export function Hero() {
  return (
    <section id="top" className="relative">
      <CorkBoard className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Main poster */}
            <div className="lg:col-span-7 xl:col-span-6">
              <TornCard className="p-8 sm:p-10 lg:p-12 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <PushPin className="h-7 w-7" />
                </div>              <WashiTape color="kraft" className="absolute -top-2 left-8 rotate-[-3deg]" />                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <Stamp variant="red">501(c)(3) Only</Stamp>
                  <Stamp variant="green">$10,000/mo</Stamp>
                  <a
                    href="#not-eligible"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-ink/60 underline decoration-ink/20 underline-offset-2 hover:text-stamp-red hover:decoration-stamp-red"
                  >
                    <Info className="h-3 w-3" />
                    Government-run shelter? Read this.
                  </a>
                </div>
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink/50">
                  Found: money your rescue is already eligible for
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-serif leading-[1.1]">
                  Google gives eligible animal nonprofits{' '}
                  <span className="text-stamp-red">$120,000 a year</span> in free search ads.
                </h1>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/75 leading-relaxed">
                  It is called the Google Ad Grant — up to $10,000/month in in-kind advertising credit for approved 501(c)(3) animal organizations. Most have never heard of it. Others applied and lost it. We handle the application, the rules, and the ongoing management — so your animals show up when people search "adopt a dog near me."
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link
                    to="/audit#audit-form"
                    className="inline-flex items-center gap-2 rounded-md bg-stamp-red px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
                  >
                    Free Eligibility Check
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-stamp-red/40 underline-offset-4 hover:decoration-stamp-red"
                  >
                    See everything we do
                  </Link>
                </div>
              </TornCard>

              <TearOffTabs
                className="mt-4 max-w-md"
                items={[
                  { label: 'Book a call', to: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true' },
                  { label: 'See pricing', to: '/pricing' },
                ]}
              />
            </div>

            {/* Side cluster */}
            <div className="lg:col-span-5 xl:col-span-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <TornCard className="p-6 relative rotate-[-1deg]">
                <div className="absolute -top-3 left-6">
                  <PushPin className="h-6 w-6" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink/50">Real client note</p>
                <p className="mt-3 font-serif text-lg italic text-ink/90 leading-relaxed">
                  "We thought the grant was too good to be true. Melanie walked us through it in fifteen minutes."
                </p>
                <p className="mt-3 text-xs text-ink/60">— Director, foster-based rescue in Florida</p>
              </TornCard>

              <div className="flex justify-center xl:justify-start">
                <Polaroid
                  src="/images/photos/two-on-floor.jpg"
                  alt="Golden retriever and Bernese mountain dog lying together"
                  caption="The reason behind all of it"
                  rotation={2}
                />
              </div>

              <TornCard className="p-6 relative rotate-[1deg] sm:col-span-2 xl:col-span-1 bg-kraft/60">
                <div className="absolute -top-3 right-6">
                  <PushPin className="h-6 w-6" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-stamp-red font-serif">$120K</span>
                  <span className="text-sm font-bold text-ink/80">per year, per eligible nonprofit</span>
                </div>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  That is the Google Ad Grant ceiling. Most animal rescues qualify. Most never claim it.
                </p>
              </TornCard>

              <TornCard className="p-5 relative rotate-[-1deg] border-2 border-dashed border-forest/30 bg-paper">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <PushPin className="h-6 w-6" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-forest">What we do</p>
                <ul className="mt-3 space-y-2 text-sm text-ink/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                    Google Ad Grant application & compliance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                    Local SEO & mobile-first web design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                    Conversion tracking & volunteer training
                  </li>
                </ul>
              </TornCard>
            </div>
          </div>
        </div>
      </CorkBoard>
    </section>
  )
}
