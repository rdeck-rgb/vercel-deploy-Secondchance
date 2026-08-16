import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { PawPrint, ArrowRight, ArrowLeft, Check, Mail, Calendar } from 'lucide-react'
import { PushPin } from '@/components/BoardElements'
import { submitLead, honeypotWrapCls } from '@/lib/leads'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/sections/Footer'
import { PageMeta } from '@/components/PageMeta'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'

const STEPS = [
  {
    id: 1,
    label: 'GOOGLE AD GRANTS',
    title: 'YOUR ORGANIZATION',
    subtitle: 'Legal info must match your IRS documentation exactly — any mismatch delays Google\'s approval.',
  },
  {
    id: 2,
    label: 'DOCUMENTATION STATUS',
    title: 'DOCUMENTATION STATUS',
    subtitle: 'Google requires specific documents before granting access. Let\'s see where you stand.',
  },
  {
    id: 3,
    label: 'WEBSITE + ACCESS',
    title: 'WEBSITE + ACCESS',
    subtitle: 'We need site access to optimize for approval. We handle setup — you just need to grant it.',
  },
  {
    id: 4,
    label: 'WEBSITE HEALTH',
    title: 'WEBSITE HEALTH',
    subtitle: 'We fix these gaps automatically — this just helps us know where to start and how fast we can move.',
  },
  {
    id: 5,
    label: 'GOALS + TIMELINE',
    title: 'GOALS + TIMELINE',
    subtitle: 'Last step. What does success look like for your organization?',
  },
]

type FormData = {
  legalName: string
  ein: string
  website: string
  contactName: string
  phone: string
  email: string
  goodstack: string
  determinationLetter: string
  goodstackStatus: string
  googleNonprofits: string
  websiteAccess: string
  platforms: string[]
  ga4: string
  searchConsole: string
  currentPages: string[]
  websiteHealth: string
  goals: string[]
  audience: string
  audiencePreset: string
  geography: string
  geographyPreset: string
  timeline: string
  notes: string
}

const INITIAL_DATA: FormData = {
  legalName: '',
  ein: '',
  website: '',
  contactName: '',
  phone: '',
  email: '',
  goodstack: '',
  determinationLetter: '',
  goodstackStatus: '',
  googleNonprofits: '',
  websiteAccess: '',
  platforms: [],
  ga4: '',
  searchConsole: '',
  currentPages: [],
  websiteHealth: '',
  goals: [],
  audience: '',
  audiencePreset: '',
  geography: '',
  geographyPreset: '',
  timeline: '',
  notes: '',
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest">
      <span className="text-stamp-red">{STEPS[step - 1].label}</span>
      <span className="text-ink/50">0{step} / 0{STEPS.length}</span>
    </div>
  )
}

function OptionButton({
  label,
  sublabel,
  selected,
  onClick,
}: {
  label: string
  sublabel?: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
        selected
          ? 'border-forest bg-forest/5 ring-1 ring-forest'
          : 'border-ink/10 bg-paper hover:border-forest/40'
      }`}
    >
      <span className="block text-sm font-bold text-ink">{label}</span>
      {sublabel && <span className="mt-1 block text-xs text-ink/60">{sublabel}</span>}
    </button>
  )
}

function MultiButton({
  options,
  selected,
  onChange,
}: {
  options: { value: string; label: string; sublabel?: string }[]
  selected: string
  onChange: (value: string) => void
}) {
  return (
    <div className="grid gap-3">
      {options.map((opt) => (
        <OptionButton
          key={opt.value}
          label={opt.label}
          sublabel={opt.sublabel}
          selected={selected === opt.value}
          onClick={() => onChange(opt.value)}
        />
      ))}
    </div>
  )
}

function MultiCheckbox({
  options,
  selected,
  onChange,
}: {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => {
        const isSelected = selected.includes(opt.value)
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-md border-2 px-4 py-2.5 text-sm font-bold transition-all ${
              isSelected
                ? 'border-forest bg-forest text-white'
                : 'border-ink/10 bg-paper text-ink hover:border-forest/40'
            }`}
          >
            {isSelected && <Check className="mr-1.5 inline h-3.5 w-3.5" strokeWidth={3} />}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-2 block text-sm font-bold text-ink">
      {children}
      {required && <span className="ml-1 text-stamp-red">*</span>}
    </label>
  )
}

function Input({
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border-2 border-ink/10 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
    />
  )
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-ink/60">{children}</p>
}

function FormField({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-6 ${className}`}>{children}</div>
}

export default function GetStarted() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [hp, setHp] = useState('')
  const startedAt = useRef(Date.now())

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const toggleArray = <K extends keyof FormData>(key: K, value: string) => {
    setData((prev) => {
      const current = prev[key] as string[]
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
      return { ...prev, [key]: next }
    })
  }

  const canProceed = () => {
    if (step === 1) return data.legalName && data.ein && data.website && data.contactName && data.email
    if (step === 2) return data.determinationLetter && data.goodstackStatus && data.googleNonprofits
    if (step === 3) return data.websiteAccess && data.platforms.length > 0 && data.ga4 && data.searchConsole
    if (step === 4) return data.currentPages.length > 0 && data.websiteHealth
    if (step === 5) return data.goals.length > 0 && (data.audience || data.audiencePreset) && (data.geography || data.geographyPreset) && data.timeline
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError(false)
    const result = await submitLead(
      'onboarding',
      {
        ...data,
        // the free-text box wins over the preset chip when both are set
        audience: data.audience || data.audiencePreset,
        geography: data.geography || data.geographyPreset,
      },
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
        <SiteHeader />
        <main className="pt-12 pb-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border-2 border-ink/10 bg-paper p-8 text-center shadow-[0_8px_0_rgba(42,31,22,0.08)] sm:p-12 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 border-2 border-forest/20">
                <Check className="h-5 w-5 text-forest" strokeWidth={3} />
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink font-serif">
                Your onboarding info is on its way.
              </h1>
              <p className="mt-3 text-ink/60">
                We\'ll review your details and reach out within one business day to confirm next steps.
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href="mailto:mel@click2-ai.com"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-stamp-red px-6 py-3 text-sm font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.12)] hover:bg-stamp-red-dark transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Email us directly
                </a>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-ink/10 bg-paper px-6 py-3 text-sm font-bold text-ink hover:border-forest hover:text-forest transition-colors"
                >
                  <Calendar className="h-4 w-4" />
                  Book a strategy call
                </a>
              </div>
              <Link
                to="/"
                className="mt-6 inline-block text-sm font-bold text-forest hover:text-stamp-red"
              >
                ← Back to home
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
      <PageMeta title="Get Started — Google Ad Grants Onboarding | SecondChance Media" description="Start your Google Ad Grant onboarding. Answer a few questions so we can prepare your animal welfare organization for Google\u2019s approval process." />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-ink py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-white">
                <PawPrint className="h-5 w-5" />
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-stamp-red">
                Google Ad Grants Onboarding
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-paper font-serif leading-tight">
              Let's get your Google Ad Grant up and running.
            </h1>
            <p className="mt-4 text-lg text-paper/80 max-w-2xl">
              Answer a few questions so we can prepare your organization for Google\'s approval process — and start turning $10,000/month in free ads into real impact for animals.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border-2 border-ink/10 bg-paper p-6 shadow-[0_8px_0_rgba(42,31,22,0.08)] sm:p-10 relative">
              <div className="absolute -top-4 left-8">
                <PushPin className="h-6 w-6" />
              </div>
              <StepIndicator step={step} />
              <div className="mt-4 flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-stamp-red">[0{step}]</span>
                <h2 className="text-xl font-bold tracking-tight text-ink font-serif">
                  {STEPS[step - 1].title}
                </h2>
              </div>
              <p className="mt-2 text-sm text-ink/60">{STEPS[step - 1].subtitle}</p>

              <form onSubmit={handleSubmit} className="mt-8">
                {step === 1 && (
                  <>
                    <FormField>
                      <Label required>Legal Nonprofit Name</Label>
                      <Input
                        value={data.legalName}
                        onChange={(v) => update('legalName', v)}
                        placeholder="Exact name as shown on IRS determination letter"
                        required
                      />
                      <FieldHint>Any mismatch with IRS records delays Google\'s approval.</FieldHint>
                    </FormField>

                    <FormField>
                      <Label required>EIN (Employer Identification Number)</Label>
                      <Input
                        value={data.ein}
                        onChange={(v) => update('ein', v)}
                        placeholder="XX-XXXXXXX"
                        required
                      />
                      <FieldHint>9 digits · found on your IRS letter or Form 990</FieldHint>
                    </FormField>

                    <FormField>
                      <Label required>Organization Website URL</Label>
                      <Input
                        value={data.website}
                        onChange={(v) => update('website', v)}
                        placeholder="https://yournonprofit.org"
                        required
                      />
                      <FieldHint>Must be live — Google verifies your site during approval.</FieldHint>
                    </FormField>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField>
                        <Label required>Primary Contact Name</Label>
                        <Input
                          value={data.contactName}
                          onChange={(v) => update('contactName', v)}
                          placeholder="First and last name"
                          required
                        />
                      </FormField>
                      <FormField>
                        <Label>Phone</Label>
                        <Input
                          value={data.phone}
                          onChange={(v) => update('phone', v)}
                          placeholder="(555) 000-0000"
                          type="tel"
                        />
                      </FormField>
                    </div>

                    <FormField>
                      <Label required>Contact Email</Label>
                      <Input
                        value={data.email}
                        onChange={(v) => update('email', v)}
                        placeholder="director@yournonprofit.org"
                        type="email"
                        required
                      />
                      <FieldHint>Used for Google Account access and ongoing coordination.</FieldHint>
                    </FormField>

                    <FormField>
                      <Label>Goodstack Verification Status</Label>
                      <p className="mb-3 text-sm text-ink/60">
                        Google now uses{' '}
                        <a href="https://goodstack.org" target="_blank" rel="noopener noreferrer" className="font-bold text-forest hover:underline">
                          Goodstack
                        </a>{' '}
                        (formerly TechSoup) to confirm nonprofit status.
                      </p>
                      <MultiButton
                        options={[
                          { value: 'verified', label: 'Already verified on Goodstack' },
                          { value: 'not-yet', label: 'Not yet' },
                          { value: 'not-sure', label: 'Not sure what that is' },
                        ]}
                        selected={data.goodstack}
                        onChange={(v) => update('goodstack', v)}
                      />
                    </FormField>
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField>
                      <Label>IRS 501(c)(3) Determination Letter</Label>
                      <MultiButton
                        options={[
                          { value: 'ready', label: 'Yes — ready to share', sublabel: 'I can email or upload it now' },
                          { value: 'progress', label: 'Getting it — in progress', sublabel: 'Waiting on IRS or locating records' },
                          { value: 'help', label: 'Not yet — we\'ll figure it out together', sublabel: 'We can guide you through the process' },
                        ]}
                        selected={data.determinationLetter}
                        onChange={(v) => update('determinationLetter', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Goodstack Verification</Label>
                      <p className="mb-3 text-sm text-ink/60">
                        Google now uses{' '}
                        <a href="https://goodstack.org" target="_blank" rel="noopener noreferrer" className="font-bold text-forest hover:underline">
                          Goodstack
                        </a>{' '}
                        (replaced TechSoup) to confirm your nonprofit status. They contact you at verifications@mail.goodstack.org — reviews take 3–5 business days.
                      </p>
                      <MultiButton
                        options={[
                          { value: 'verified', label: 'Already verified on Goodstack' },
                          { value: 'started', label: 'Started the process' },
                          { value: 'not-started', label: 'Haven\'t started yet' },
                          { value: 'not-sure', label: 'Not sure what Goodstack is' },
                        ]}
                        selected={data.goodstackStatus}
                        onChange={(v) => update('goodstackStatus', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Google for Nonprofits Account</Label>
                      <MultiButton
                        options={[
                          { value: 'active', label: 'Yes — account is active' },
                          { value: 'no', label: 'No account yet' },
                          { value: 'not-sure', label: 'Not sure' },
                        ]}
                        selected={data.googleNonprofits}
                        onChange={(v) => update('googleNonprofits', v)}
                      />
                    </FormField>
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField>
                      <Label>Admin Access to Your Website</Label>
                      <MultiButton
                        options={[
                          { value: 'full', label: 'Full admin access', sublabel: 'Can add pages, install plugins, edit everything' },
                          { value: 'partial', label: 'Partial access', sublabel: 'Can edit some things, limited elsewhere' },
                          { value: 'none', label: 'No current access', sublabel: 'Need to get credentials from our web team' },
                          { value: 'help', label: 'Need help getting access', sublabel: 'Not sure how — can you guide me?' },
                        ]}
                        selected={data.websiteAccess}
                        onChange={(v) => update('websiteAccess', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Website Platform (select all that apply)</Label>
                      <MultiCheckbox
                        options={[
                          { value: 'wordpress', label: 'WordPress' },
                          { value: 'squarespace', label: 'Squarespace' },
                          { value: 'wix', label: 'Wix' },
                          { value: 'webflow', label: 'Webflow' },
                          { value: 'custom', label: 'Custom / Dev Built' },
                          { value: 'other', label: 'Other' },
                        ]}
                        selected={data.platforms}
                        onChange={(v) => toggleArray('platforms', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Google Analytics 4 (GA4)</Label>
                      <MultiButton
                        options={[
                          { value: 'yes', label: 'Yes, installed' },
                          { value: 'no', label: 'No' },
                          { value: 'not-sure', label: 'Not sure' },
                        ]}
                        selected={data.ga4}
                        onChange={(v) => update('ga4', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Google Search Console</Label>
                      <MultiButton
                        options={[
                          { value: 'yes', label: 'Yes, verified' },
                          { value: 'no', label: 'No' },
                          { value: 'not-sure', label: 'Not sure' },
                        ]}
                        selected={data.searchConsole}
                        onChange={(v) => update('searchConsole', v)}
                      />
                    </FormField>
                  </>
                )}

                {step === 4 && (
                  <>
                    <FormField>
                      <Label>Which Pages Does Your Site Currently Have?</Label>
                      <FieldHint>Select all that exist, even if they need improvement. We build or fix what\'s missing.</FieldHint>
                      <div className="mt-3">
                        <MultiCheckbox
                          options={[
                            { value: 'about', label: 'About Us' },
                            { value: 'contact', label: 'Contact' },
                            { value: 'services', label: 'Services / Programs' },
                            { value: 'privacy', label: 'Privacy Policy' },
                            { value: 'donation', label: 'Donation / CTA Page' },
                            { value: 'blog', label: 'Blog / News' },
                          ]}
                          selected={data.currentPages}
                          onChange={(v) => toggleArray('currentPages', v)}
                        />
                      </div>
                    </FormField>

                    <FormField>
                      <Label>How Would You Describe Your Current Website?</Label>
                      <MultiButton
                        options={[
                          { value: 'significant', label: 'Needs significant work', sublabel: 'Missing key pages, weak messaging, or outdated' },
                          { value: 'decent', label: 'Decent — needs targeted fixes', sublabel: 'Functional but missing some compliance elements' },
                          { value: 'solid', label: 'Solid — just needs Grant optimization', sublabel: 'Strong foundation, ready to fine-tune for approval' },
                        ]}
                        selected={data.websiteHealth}
                        onChange={(v) => update('websiteHealth', v)}
                      />
                    </FormField>
                  </>
                )}

                {step === 5 && (
                  <>
                    <FormField>
                      <Label>What Should Ad Grants Help You Accomplish?</Label>
                      <FieldHint>Select everything that applies — we\'ll build campaigns around each goal.</FieldHint>
                      <div className="mt-3">
                        <MultiCheckbox
                          options={[
                            { value: 'donations', label: 'Drive Donations' },
                            { value: 'volunteers', label: 'Recruit Volunteers' },
                            { value: 'events', label: 'Promote Events' },
                            { value: 'email', label: 'Build Email List' },
                            { value: 'awareness', label: 'Raise Awareness' },
                            { value: 'other', label: 'Other' },
                          ]}
                          selected={data.goals}
                          onChange={(v) => toggleArray('goals', v)}
                        />
                      </div>
                    </FormField>

                    <FormField>
                      <Label>Primary Audience You\'re Trying to Reach</Label>
                      <Input
                        value={data.audience}
                        onChange={(v) => update('audience', v)}
                        placeholder="E.g. Local families seeking food assistance"
                      />
                      <div className="mt-3">
                        <MultiCheckbox
                          options={[
                            { value: 'local', label: 'Local community members' },
                            { value: 'corporate', label: 'Corporate donors + sponsors' },
                            { value: 'volunteers-25-45', label: 'Volunteers aged 25–45' },
                          ]}
                          selected={data.audiencePreset ? [data.audiencePreset] : []}
                          onChange={(v) => update('audiencePreset', v === data.audiencePreset ? '' : v)}
                        />
                      </div>
                    </FormField>

                    <FormField>
                      <Label>Geographic Focus</Label>
                      <Input
                        value={data.geography}
                        onChange={(v) => update('geography', v)}
                        placeholder="E.g. Miami-Dade County, FL"
                      />
                      <div className="mt-3">
                        <MultiCheckbox
                          options={[
                            { value: 'local', label: 'Local — City / County' },
                            { value: 'statewide', label: 'Statewide' },
                            { value: 'national', label: 'National' },
                          ]}
                          selected={data.geographyPreset ? [data.geographyPreset] : []}
                          onChange={(v) => update('geographyPreset', v === data.geographyPreset ? '' : v)}
                        />
                      </div>
                    </FormField>

                    <FormField>
                      <Label>Desired Approval Timeline</Label>
                      <MultiButton
                        options={[
                          { value: 'asap', label: 'As soon as possible', sublabel: 'Full steam ahead — we\'re ready to move fast' },
                          { value: '30', label: 'Within 30 days' },
                          { value: '60', label: 'Within 60 days' },
                          { value: 'no-rush', label: 'No rush — just do it right', sublabel: 'Quality and compliance over speed' },
                        ]}
                        selected={data.timeline}
                        onChange={(v) => update('timeline', v)}
                      />
                    </FormField>

                    <FormField>
                      <Label>Additional Notes (optional)</Label>
                      <textarea
                        value={data.notes}
                        onChange={(e) => update('notes', e.target.value)}
                        placeholder="Anything else we should know before we start..."
                        rows={4}
                        className="w-full rounded-lg border-2 border-ink/10 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
                      />
                    </FormField>
                  </>
                )}

                {/* Honeypot — off-screen so bots fill it, skipped by people and AT. */}
                <div className={honeypotWrapCls} aria-hidden="true">
                  <label htmlFor="gs-company-website">Company website</label>
                  <input
                    id="gs-company-website"
                    name="gs-company-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                </div>

                {sendError && (
                  <p className="mt-6 text-sm font-medium text-stamp-red" role="alert">
                    Something went wrong sending that. Please try again, or email{' '}
                    <a className="underline" href="mailto:mel@click2-ai.com">
                      mel@click2-ai.com
                    </a>
                    .
                  </p>
                )}

                <div className="mt-8 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="inline-flex items-center gap-2 rounded-md border-2 border-ink/10 bg-paper px-6 py-3 text-sm font-bold text-ink hover:border-forest hover:text-forest transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 rounded-md border-2 border-ink/10 bg-paper px-6 py-3 text-sm font-bold text-ink hover:border-forest hover:text-forest transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Home
                    </Link>
                  )}

                  {step < STEPS.length ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canProceed()}
                      className="inline-flex items-center gap-2 rounded-md bg-stamp-red px-6 py-3 text-sm font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.12)] hover:bg-stamp-red-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canProceed() || sending}
                      className="inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3 text-sm font-bold text-white shadow-[0_3px_0_rgba(42,31,22,0.12)] hover:bg-forest-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {sending ? 'Sending…' : 'Submit'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
