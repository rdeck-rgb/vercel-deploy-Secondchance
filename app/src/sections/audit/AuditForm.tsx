import { useState } from 'react'
import { ArrowRight, Lock, Check, Loader2, CalendarCheck } from 'lucide-react'
import { PushPin } from '@/components/BoardElements'

type FormData = {
  legalName: string
  ein: string
  website: string
  contactName: string
  phone: string
  email: string
}

const inputCls =
  'w-full px-4 py-3 rounded-lg bg-paper border-2 border-dashed border-ink/15 text-ink placeholder-ink/40 text-sm focus:outline-none focus:border-forest focus:bg-white transition-all'

const labelCls = 'block text-sm font-semibold text-ink mb-1'

function FieldHint({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-ink/50 leading-relaxed">{children}</p>
}

function PrivacyNote() {
  return (
    <div className="flex items-center justify-center gap-2 text-xs text-ink/50 pt-1">
      <Lock className="h-3.5 w-3.5" />
      <span>Your info stays private. No spam, ever.</span>
    </div>
  )
}

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [data, setData] = useState<FormData>({
    legalName: '',
    ein: '',
    website: '',
    contactName: '',
    phone: '',
    email: '',
  })

  const set = (key: keyof FormData, value: string) =>
    setData((d) => ({ ...d, [key]: value }))

  const validate = (): boolean => {
    const e: Record<string, string> = {}
    if (!data.legalName.trim()) e.legalName = 'Enter your legal nonprofit name'
    if (!/^\d{2}-?\d{7}$/.test(data.ein.trim())) e.ein = 'Enter a valid 9-digit EIN'
    if (!data.website.trim()) e.website = 'Enter your organization website'
    if (!data.contactName.trim()) e.contactName = 'Enter a primary contact name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = () => {
    if (!validate()) return
    setSubmitting(true)
    const subject = encodeURIComponent(`[Grant Eligibility Check] ${data.legalName}`)
    const body = encodeURIComponent(
      `Legal Nonprofit Name: ${data.legalName}\nEIN: ${data.ein}\nWebsite: ${data.website}\nPrimary Contact: ${data.contactName}\nPhone: ${data.phone}\nEmail: ${data.email}`
    )
    window.location.href = `mailto:mdeck@adgrantconsultant.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs font-medium text-stamp-red">{errors[k]}</p> : null

  if (submitted) {
    return (
      <div className="rounded-lg bg-paper border-2 border-dashed border-ink/10 shadow-[0_8px_0_rgba(42,31,22,0.08)] p-8 sm:p-10">
        <div className="flex justify-center -mt-3 mb-4">
          <PushPin className="h-6 w-6" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-forest/10 border border-forest/20 px-3 py-1.5 mb-5">
          <Check className="h-4 w-4 text-forest" />
          <span className="text-xs font-semibold text-forest">Your eligibility check is in</span>
        </div>
        <h2 className="font-serif text-2xl font-bold text-ink mb-2">
          Thanks, {data.contactName.split(' ')[0]}. Your request is in — Melanie will review it personally.
        </h2>
        <p className="text-sm text-ink/60 mb-6 leading-relaxed">
          She'll verify your 501(c)(3) status, EIN, and website against Google's requirements,
          then reach out with a plain answer on whether the grant fits — and what to do next,
          either way. No sales call, no pressure. That's the whole deal.
        </p>
        <div className="flex items-center justify-center gap-2 rounded-lg bg-kraft px-6 py-4 text-sm font-semibold text-ink">
          <CalendarCheck className="h-5 w-5 text-forest" />
          Keep an eye on your inbox — a real person is on it.
        </div>
        <PrivacyNote />
      </div>
    )
  }

  return (
    <div className="rounded-lg bg-paper border-2 border-dashed border-ink/10 shadow-[0_8px_0_rgba(42,31,22,0.08)] p-6 sm:p-8">
      <div className="flex justify-center -mt-3 mb-4">
        <PushPin className="h-6 w-6" />
      </div>

      <div className="space-y-5">
        <div>
          <h2 className="font-serif text-xl font-bold text-ink mb-1">Book your free eligibility check</h2>
          <p className="text-sm text-ink/60">
            A few details are all we need to confirm your Google Ad Grant eligibility.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-ink/50 font-semibold pt-1">
            Your Organization
          </h3>

          <div>
            <label htmlFor="legalName" className={labelCls}>Legal Nonprofit Name *</label>
            <input
              id="legalName"
              type="text"
              value={data.legalName}
              onChange={(e) => set('legalName', e.target.value)}
              placeholder="River City Animal Rescue, Inc."
              maxLength={200}
              className={inputCls}
            />
            <FieldHint>Any mismatch with IRS records delays Google's approval.</FieldHint>
            {err('legalName')}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ein" className={labelCls}>EIN (Employer Identification Number) *</label>
              <input
                id="ein"
                type="text"
                inputMode="numeric"
                value={data.ein}
                onChange={(e) => set('ein', e.target.value)}
                placeholder="12-3456789"
                maxLength={10}
                className={inputCls}
              />
              {err('ein')}
            </div>
            <div>
              <label htmlFor="website" className={labelCls}>Organization Website URL *</label>
              <input
                id="website"
                type="url"
                value={data.website}
                onChange={(e) => set('website', e.target.value)}
                placeholder="https://yourrescue.org"
                maxLength={255}
                className={inputCls}
              />
              <FieldHint>Must be live — Google verifies your site during approval.</FieldHint>
              {err('website')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactName" className={labelCls}>Primary Contact Name *</label>
              <input
                id="contactName"
                type="text"
                value={data.contactName}
                onChange={(e) => set('contactName', e.target.value)}
                placeholder="Jordan Smith"
                maxLength={100}
                className={inputCls}
              />
              {err('contactName')}
            </div>
            <div>
              <label htmlFor="phone" className={labelCls}>Phone</label>
              <input
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="(555) 123-4567"
                maxLength={30}
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelCls}>Contact Email *</label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="you@yourrescue.org"
              maxLength={255}
              className={inputCls}
            />
            <FieldHint>Used for Google Account access and ongoing coordination.</FieldHint>
            {err('email')}
          </div>

        </div>

        <button
          type="button"
          onClick={submit}
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stamp-red px-6 py-4 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit My Eligibility Check
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <PrivacyNote />
      </div>

      <div className="mt-5 pt-5 border-t-2 border-dashed border-ink/10 text-center">
        <p className="text-xs text-ink/50">
          Every check is reviewed by a real person, by hand — never an automated score.
        </p>
      </div>
    </div>
  )
}
