import { useEffect, useRef, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Mail,
  Calendar,
  Lock,
  Loader2,
  Quote,
} from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { PageMeta } from '@/components/PageMeta'
import { Footer } from '@/sections/Footer'
import { SocialProof } from '@/sections/SocialProof'
import {
  CorkBoard,
  TornCard,
  PushPin,
  Stamp,
  WashiTape,
  Polaroid,
} from '@/components/BoardElements'
import { submitLead, honeypotWrapCls } from '@/lib/leads'
import { BUNDLE_BY_SLUG, SERVICE_BY_KEY, bundleComponents } from '@/lib/pricing'

// Real client words only — same rule as the service pages. Swap this
// placeholder for a real quote (with written permission) and the "What people
// are saying" section appears on every order page.
const TESTIMONIAL = {
  quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
  name: '[Name withheld]',
  org: '[Rescue name withheld until confirmed]',
}

type FormData = {
  orgName: string
  contactName: string
  email: string
  phone: string
  website: string
  notes: string
}

const INITIAL_DATA: FormData = {
  orgName: '',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  notes: '',
}

// Same field dress as the audit form: dashed borders that focus to forest.
const inputCls =
  'w-full px-4 py-3 rounded-lg bg-paper border-2 border-dashed border-ink/15 text-ink placeholder-ink/40 text-sm focus:outline-none focus:border-forest focus:bg-white transition-all'

const labelCls = 'block text-sm font-semibold text-ink mb-1'

function PrivacyNote() {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-ink/50 pt-1">
      <Lock className="h-3.5 w-3.5" />
      <span>Your info stays private. No spam, ever.</span>
    </div>
  )
}

export default function Order() {
  const { slug } = useParams()
  const bundle = slug ? BUNDLE_BY_SLUG[slug] : undefined

  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [hp, setHp] = useState('')
  // Stamped on mount rather than during render — Date.now() in a render body is
  // impure. 0 until then, which reads as "plenty of time elapsed" and so errs
  // toward accepting a real submission rather than dropping it as a bot.
  const startedAt = useRef(0)
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  // An unknown slug is a bad link rather than a real page — send it back to
  // pricing instead of rendering an empty shell.
  if (!bundle) return <Navigate to="/pricing" replace />

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError(false)
    const result = await submitLead(
      'order',
      { ...data, bundle: bundle.name, bundlePrice: `${bundle.price}/mo` },
      { hp, startedAt: startedAt.current }
    )
    setSending(false)
    if (result === 'error') {
      setSendError(true)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-paper antialiased">
        <PageMeta title={`Thanks — ${bundle.name} | SecondChance Media`} description="We received your request and will be in touch within one business day." />
        <SiteHeader />
        <main className="pt-16 pb-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* Same dress as the audit form's thank-you card */}
            <div className="relative rounded-lg border-2 border-dashed border-ink/10 bg-paper p-8 text-center shadow-[0_8px_0_rgba(42,31,22,0.08)] sm:p-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/10 px-3 py-1.5">
                <Check className="h-4 w-4 text-forest" />
                <span className="text-xs font-semibold text-forest">Your request is in</span>
              </div>
              <h1 className="mt-5 font-serif text-2xl font-bold tracking-tight text-ink">
                Thanks{data.contactName ? `, ${data.contactName.split(' ')[0]}` : ''}. Melanie will
                review it personally.
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                We got your details for <strong className="text-ink">{bundle.name}</strong> and
                we&apos;ll reach out within one business day to confirm next steps. Nothing is
                charged until you say go.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:mel@click2-ai.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stamp-red px-6 py-3 text-sm font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] transition-all hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none"
                >
                  <Mail className="h-4 w-4" />
                  Email us directly
                </a>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-ink/15 bg-paper px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-forest hover:text-forest"
                >
                  <Calendar className="h-4 w-4" />
                  Book a strategy call
                </a>
              </div>
              <PrivacyNote />
              <Link to="/pricing" className="mt-5 inline-block text-sm font-bold text-forest hover:text-stamp-red">
                ← Back to pricing
              </Link>
            </div>
          </div>
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta
        title={`${bundle.name} — ${bundle.price}/mo | SecondChance Media`}
        description={bundle.desc}
      />
      <SiteHeader />
      <main>
        {/* Hero — pinned to the corkboard like the service pages. */}
        <CorkBoard className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <TornCard className="relative p-7 sm:p-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-7 w-7" />
              </div>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-stamp-red transition-all hover:gap-2.5"
              >
                <ArrowLeft className="h-4 w-4" />
                All pricing
              </Link>
              {bundle.popular && (
                <Stamp variant="red" className="ml-4">Most Popular</Stamp>
              )}
              <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                {bundle.name}
              </h1>
              <p className="mt-2 text-ink/60">{bundle.tag}</p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <p className="font-mono text-4xl font-bold text-forest">
                  {bundle.price}
                  <span className="text-xl">/mo</span>
                </p>
                {bundle.save && <p className="text-sm font-bold text-stamp-red">{bundle.save}</p>}
              </div>
              <p className="mt-1 text-xs text-ink/60">Setup fees waived with a 12-month agreement</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">{bundle.desc}</p>
              <p className="mt-5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink/60">
                {bundleComponents(bundle)}
              </p>
            </TornCard>
          </div>
        </CorkBoard>

        {/* What you're getting — the full per-service breakdown, stacked. */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What you&apos;re getting
            </h2>
            <p className="mt-3 text-ink/65">
              Everything below is included at {bundle.price}/mo. No add-ons required, no
              surprise line items later.
            </p>
            <div className="mt-10 space-y-8">
              {bundle.includes.map((key) => {
                const s = SERVICE_BY_KEY[key]
                return (
                  // Kraft rather than the default paper surface — these sit on
                  // the paper section ground, where a paper card would vanish.
                  <TornCard
                    key={key}
                    className="relative border border-ink/10 bg-kraft/50 p-6 sm:p-8"
                    torn="bottom"
                  >
                    <div className="absolute -top-3 left-8">
                      <PushPin className="h-5 w-5" />
                    </div>
                    <Stamp variant="green" className="absolute -top-3 right-6">
                      {s.short}
                    </Stamp>
                    <h3 className="font-serif text-lg font-bold text-ink">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-ink/70">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TornCard>
                )
              })}
            </div>
          </div>
        </section>

        {/* What people are saying — only ever real client words, so this stays
            hidden until a real quote (and permission) replaces the placeholder. */}
        {!TESTIMONIAL.quote.startsWith('[') && (
          <section className="border-t-2 border-ink/10 bg-paper py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                What people are saying
              </h2>
              <Quote className="mx-auto mt-8 h-10 w-10 fill-stamp-red text-stamp-red" />
              <blockquote className="mt-6 font-serif text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                &quot;{TESTIMONIAL.quote}&quot;
              </blockquote>
              <p className="mt-4 font-bold text-ink">{TESTIMONIAL.name}</p>
              <p className="font-mono text-sm uppercase tracking-wider text-ink/60">{TESTIMONIAL.org}</p>
            </div>
          </section>
        )}

        {/* Who we serve — the honest social proof the site already carries. */}
        <SocialProof />

        {/* Order form — dressed exactly like the audit form: dashed paper card,
            pin + washi tape, dashed inputs, press-down submit. */}
        <section className="bg-kraft/40 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-lg border-2 border-dashed border-ink/10 bg-paper p-6 shadow-[0_8px_0_rgba(42,31,22,0.08)] sm:p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="mb-1 font-serif text-xl font-bold text-ink">
                    Get started with {bundle.name}
                  </h2>
                  <p className="text-sm text-ink/60">
                    Tell us where to reach you. We&apos;ll confirm the details and get you set up —
                    nothing is charged from this form.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="pt-1 font-mono text-xs font-semibold uppercase tracking-wider text-ink/60">
                    Your Organization
                  </h3>

                  <div>
                    <label htmlFor="order-org" className={labelCls}>Organization Name *</label>
                    <input
                      id="order-org"
                      type="text"
                      value={data.orgName}
                      onChange={(e) => update('orgName', e.target.value)}
                      placeholder="River City Animal Sanctuary, Inc."
                      maxLength={200}
                      required
                      className={inputCls}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="order-name" className={labelCls}>Your Name *</label>
                      <input
                        id="order-name"
                        type="text"
                        value={data.contactName}
                        onChange={(e) => update('contactName', e.target.value)}
                        placeholder="Jordan Smith"
                        maxLength={100}
                        required
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="order-phone" className={labelCls}>Phone</label>
                      <input
                        id="order-phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        maxLength={30}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="order-email" className={labelCls}>Contact Email *</label>
                      <input
                        id="order-email"
                        type="email"
                        value={data.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@yourorg.org"
                        maxLength={255}
                        required
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="order-website" className={labelCls}>Current Website</label>
                      <input
                        id="order-website"
                        type="text"
                        value={data.website}
                        onChange={(e) => update('website', e.target.value)}
                        placeholder="https://yourorg.org"
                        maxLength={255}
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="order-notes" className={labelCls}>Anything we should know?</label>
                    <textarea
                      id="order-notes"
                      value={data.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Timing, budget questions, what you've tried already…"
                      rows={3}
                      maxLength={2000}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Honeypot — off-screen so bots fill it, skipped by people and AT. */}
                <div className={honeypotWrapCls} aria-hidden="true">
                  <label htmlFor="order-company-website">Company website</label>
                  <input
                    id="order-company-website"
                    name="order-company-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                </div>

                {sendError && (
                  <p className="text-sm font-medium text-stamp-red" role="alert">
                    Something went wrong sending that. Please try again, or email{' '}
                    <a className="underline" href="mailto:mel@click2-ai.com">
                      mel@click2-ai.com
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stamp-red px-6 py-4 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] transition-all hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <PrivacyNote />
              </form>

              <div className="mt-5 border-t-2 border-dashed border-ink/10 pt-5 text-center">
                <p className="text-xs text-ink/50">
                  No payment details required. We reply within one business day.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-ink/60">
              Need a different mix?{' '}
              <Link to="/contact" className="font-bold text-stamp-red hover:underline">
                Ask for a custom bundle
              </Link>
            </p>
          </div>
        </section>

        {/* A little note from Melanie — condensed from her real founder story. */}
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <TornCard className="relative p-7 sm:p-9">
              <div className="absolute -top-3 left-8">
                <PushPin className="h-6 w-6" />
              </div>
              <WashiTape color="kraft" className="absolute -top-2 right-10 w-20 rotate-[4deg]" />
              <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-start">
                <Polaroid
                  src="/images/photos/melanie.jpg"
                  alt="Melanie Deck smiling on the couch with her two dogs — a Bernese mountain dog and a golden retriever"
                  caption="Melanie & the welcoming committee"
                  rotation={-2}
                  size="sm"
                  aspect="portrait"
                  className="shrink-0"
                />
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-stamp-red">
                    A note from Melanie
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/75">
                    I started SecondChance Media because the local shelters I loved were drowning
                    while $10,000 a month in free Google advertising sat unclaimed — the rules are
                    written for advertising people, not animal people. So I became the person who
                    translates.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/75">
                    Whichever package you pick, you get the teacher, the advocate, and the person
                    who will celebrate your adoption numbers like they&apos;re my own. Because in a
                    way, they are.
                  </p>
                  <div className="mt-6 border-t-2 border-dashed border-ink/10 pt-4">
                    <div className="font-signature w-fit origin-left rotate-[-2deg] text-3xl leading-none text-ink/85 sm:text-4xl" aria-hidden="true">
                      Melanie Deck
                    </div>
                    <p className="mt-2 text-sm leading-tight text-ink/60">
                      Melanie Deck — Founder, SecondChance Media
                    </p>
                  </div>
                </div>
              </div>
            </TornCard>
          </div>
        </CorkBoard>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
