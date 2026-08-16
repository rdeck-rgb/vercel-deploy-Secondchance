import { Link } from 'react-router'
import { ArrowRight, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  CorkBoard,
  TornCard,
  PushPin,
  Polaroid,
  Stamp,
  TearOffTabs,
  WashiTape,
  useReveal,
} from '@/components/BoardElements'

/**
 * Six file tabs standing in for the whole offering. The gloss under each
 * acronym is the point — a rescue director knows SEO and almost certainly does
 * not know GEO or AEO, and "full service" is a claim until you can see the
 * pieces. The section below the fold explains each one properly.
 */
const DISCIPLINES = [
  { abbr: 'SEO', gloss: 'Local search' },
  { abbr: 'GEO', gloss: 'AI answers' },
  { abbr: 'AEO', gloss: 'Answer boxes' },
  { abbr: 'PPC', gloss: 'Paid ads' },
  { abbr: 'Social', gloss: 'Facebook + IG' },
  { abbr: 'Web', gloss: 'Your website' },
]

/**
 * Decorative by design: the grant figures beside it already carry the meaning,
 * so a screen reader announcing "approved" here would imply a status this
 * visitor has not been granted yet.
 */
function ApprovedStamp({ className }: { className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none rounded-md border-[3px] border-double border-stamp-red/60 px-3.5 py-1.5 text-center',
        shown ? 'stamp-shown' : 'stamp-hidden',
        className
      )}
    >
      <p className="font-mono text-lg font-bold uppercase leading-none tracking-[0.2em] text-stamp-red/85">
        Approved
      </p>
      <p className="mt-1 font-mono text-[7px] font-semibold uppercase leading-none tracking-[0.3em] text-stamp-red/60">
        Google Ad Grants
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative">
      <CorkBoard className="py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
            {/* The poster: identity, promise, scope, action — in that order */}
            <div className="lg:col-span-7">
              <TornCard className="relative p-8 sm:p-10 lg:p-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <PushPin className="h-7 w-7" />
                </div>

                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                  Full-service digital marketing
                  <span className="text-ink/40"> · </span>
                  <span className="text-ink/55">Animal welfare nonprofits only</span>
                </p>

                {/* Balanced wrapping, or the second sentence strands "ads." on a
                    line by itself at the wider breakpoints. */}
                <h1 className="mt-4 font-serif text-[2.5rem] sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem] font-bold tracking-tight text-ink leading-[1.05] [text-wrap:balance]">
                  We get your animals found.
                  <span className="mt-1 block text-stamp-red">Google pays for the ads.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base sm:text-lg text-ink/75 leading-relaxed">
                  Search, AI visibility, paid ads, social, and the website they all point at —
                  one team running every piece. And because we win you the Google Ad Grant, up to
                  $10,000 a month of it runs on Google&apos;s budget instead of yours.
                </p>

                {/* Scope, made visible rather than claimed */}
                <div className="mt-8 border-b-2 border-ink/15">
                  <ul className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                    {DISCIPLINES.map((d) => (
                      <li
                        key={d.abbr}
                        className="rounded-t-md border-x border-t border-ink/15 bg-kraft/70 px-2 pb-1.5 pt-2 text-center"
                      >
                        <span className="block font-mono text-xs font-bold uppercase tracking-wider text-ink">
                          {d.abbr}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-tight text-ink/55">
                          {d.gloss}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    to="/audit#audit-form"
                    className="inline-flex items-center gap-2 rounded-md bg-stamp-red px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] transition-colors hover:bg-stamp-red-dark"
                  >
                    Free Eligibility Check
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 py-1.5 text-sm font-semibold text-ink underline decoration-stamp-red/40 underline-offset-4 hover:decoration-stamp-red"
                  >
                    See everything we do
                  </Link>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t-2 border-dashed border-ink/10 pt-5">
                  <Stamp variant="red">501(c)(3) only</Stamp>
                  <Stamp variant="green">95%+ approval rate</Stamp>
                  <a
                    href="#not-eligible"
                    className="inline-flex items-center gap-1 py-1 text-xs font-semibold text-ink/60 underline decoration-ink/20 underline-offset-2 hover:text-stamp-red hover:decoration-stamp-red"
                  >
                    <Info className="h-3 w-3" />
                    Government-run shelter? Read this.
                  </a>
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

            {/* The artifact cluster: the grant notice is the object every rescue
                wishes it had, so it leads and the proof pins in underneath. */}
            <div className="lg:col-span-5">
              {/* The deep bottom padding is the stamping area — it keeps
                  APPROVED on the paper instead of across the torn edge. */}
              <TornCard className="relative rotate-[0.6deg] bg-white/85 p-7 pb-16 sm:p-8 sm:pb-16">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <WashiTape color="kraft" className="w-28 rotate-[1.5deg]" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                  The Google Ad Grant
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold leading-none text-forest">
                    $10,000
                  </span>
                  <span className="text-base font-bold text-ink/70">/month</span>
                </div>
                <p className="mt-4 text-sm text-ink/75 leading-relaxed">
                  In free Google search ads for approved 501(c)(3) animal organizations —
                  $120,000 a year, renewed every month the account stays compliant. Staying
                  compliant is the part we handle.
                </p>
                <ApprovedStamp className="absolute bottom-7 right-6 rotate-[-13deg]" />
              </TornCard>

              <div className="mt-5 flex flex-wrap items-start justify-center gap-5 sm:justify-start">
                <Polaroid
                  src="/images/photos/two-closeup.jpg"
                  alt="A golden retriever and a Bernese mountain dog sitting side by side, looking at the camera"
                  caption="The reason behind all of it"
                  rotation={-2}
                  size="md"
                  aspect="portrait"
                  objectPosition="center 20%"
                  priority
                />

                <TornCard className="relative min-w-[210px] flex-1 rotate-[1deg] p-5">
                  <div className="absolute -top-3 left-6">
                    <PushPin className="h-5 w-5" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink/50">
                    Real client note
                  </p>
                  <p className="mt-3 font-serif text-base italic leading-relaxed text-ink/90">
                    &ldquo;We thought the grant was too good to be true. Melanie walked us through
                    it in fifteen minutes.&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-ink/60">
                    — Director, foster-based rescue in Florida
                  </p>
                </TornCard>
              </div>
            </div>
          </div>
        </div>
      </CorkBoard>
    </section>
  )
}
