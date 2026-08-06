import { Link } from 'react-router'
import { ArrowRight, Check, ChevronRight, Minus } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import {
  CorkBoard,
  PushPin,
  Stamp,
  TornCard,
  WashiTape,
  TearOffTabs,
} from '@/components/BoardElements'

const ACHIEVEMENTS = [
  {
    title: 'Increase Online Donations',
    desc: 'Reach high-intent donors actively searching for animal causes to support',
  },
  {
    title: 'Recruit More Volunteers',
    desc: 'Connect with passionate people ready to sign up and take action today',
  },
  {
    title: 'Promote Adoption Events',
    desc: 'Drive attendance, registrations, and awareness for every event and campaign',
  },
  {
    title: 'Raise Awareness of Your Mission',
    desc: 'Amplify your message to the communities and supporters who matter most',
  },
  {
    title: 'Help More Animals Find Homes',
    desc: 'Ensure the people who want to adopt can find your animals immediately on Google',
  },
]

const INCLUDED = [
  'Google Ad Grant eligibility review',
  'Google for Nonprofits & Goodstack verification',
  'Website compliance review & recommendations',
  'Google Ads account setup',
  'Campaign strategy & ad creation',
  'Conversion tracking — donations, volunteers, forms & events',
  'Monthly optimization & compliance monitoring',
  'Plain-English performance reporting',
]

const STEPS = [
  {
    num: '01',
    title: 'Free Eligibility Review',
    desc: 'We determine if your organization qualifies — no obligation, no complexity',
  },
  {
    num: '02',
    title: 'Website Compliance',
    desc: 'We prepare your website to meet Google\'s requirements — fixing structure, trust signals, and conversion paths',
  },
  {
    num: '03',
    title: 'Application & Verification',
    desc: 'We complete the Google for Nonprofits and Goodstack verification process on your behalf',
  },
  {
    num: '04',
    title: 'Campaign Launch',
    desc: 'Your Google Ads go live and begin reaching people actively searching for your mission',
  },
  {
    num: '05',
    title: 'Ongoing Management',
    desc: 'We continuously optimize your campaigns, monitor compliance, and send you monthly performance reports',
  },
]

const WARNINGS = [
  'Website compliance issues',
  'Incorrect Google setup',
  'Missing conversion tracking',
  'Poorly managed ad campaigns',
  'Failure to meet Google\'s ongoing performance requirements',
]

export default function Benefits() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <SiteHeader />
      <main>
        {/* Hero */}
        <CorkBoard className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-1.5 text-xs text-paper/60 mb-8 font-mono uppercase tracking-wider">
              <Link to="/" className="hover:text-forest">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-paper">Benefits</span>
            </nav>
            <div className="inline-flex items-center gap-2 mb-6">
              <WashiTape color="red" className="w-16" />
              <Stamp variant="red">Google Ad Grants</Stamp>
              <WashiTape color="red" className="w-16" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper leading-tight">
              Google gives eligible animal nonprofits up to{' '}
              <span className="text-kraft">$120,000 per year</span> in free advertising.
            </h1>
            <p className="mt-6 text-lg text-paper/80 leading-relaxed max-w-2xl mx-auto">
              Most organizations never use it. We make sure yours does — from eligibility to ongoing management, all done for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 rounded-lg bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all"
              >
                Get Your Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-kraft hover:text-paper transition-colors"
              >
                Or book a call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </CorkBoard>

        {/* Stats */}
        <section className="py-12 -mt-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <TornCard className="p-6 bg-forest text-paper text-center">
                <div className="flex justify-center mb-2">
                  <PushPin className="h-5 w-5" />
                </div>
                <p className="font-mono text-4xl font-bold tracking-tight">$10K</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-paper/70">Free Monthly Ad Budget</p>
              </TornCard>
              <TornCard className="p-6 bg-stamp-red text-paper text-center">
                <div className="flex justify-center mb-2">
                  <PushPin className="h-5 w-5" />
                </div>
                <p className="font-mono text-4xl font-bold tracking-tight">$120K</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-paper/70">Free Advertising Per Year</p>
              </TornCard>
              <TornCard className="p-6 bg-ink text-paper text-center">
                <div className="flex justify-center mb-2">
                  <PushPin className="h-5 w-5" />
                </div>
                <p className="font-mono text-4xl font-bold tracking-tight">$0</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-paper/70">What You Pay Google</p>
              </TornCard>
            </div>
          </div>
        </section>

        {/* What it achieves */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="green" />
              <Stamp variant="green">The Opportunity</Stamp>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">
              What can the Google Ad Grant help you achieve?
            </h2>
            <p className="mt-4 text-lg text-ink/70 leading-relaxed">
              Google\'s Ad Grant Program provides eligible 501(c)(3) animal organizations with up to{' '}
              <strong>$10,000 every month</strong> in free Google Search advertising. When people search for ways to adopt,
              volunteer, or donate, your organization appears at the top.
            </p>
            <TornCard className="mt-10 p-2">
              {ACHIEVEMENTS.map((a, i) => (
                <div
                  key={a.title}
                  className={`flex items-start gap-4 p-5 ${i !== ACHIEVEMENTS.length - 1 ? 'border-b-2 border-dashed border-ink/10' : ''}`}
                >
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-forest" />
                  <div>
                    <h3 className="font-bold text-ink">{a.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{a.desc}</p>
                  </div>
                </div>
              ))}
            </TornCard>
          </div>
        </section>

        {/* Why most miss out */}
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="red" />
              <Stamp variant="red">Why Most Nonprofits Miss Out</Stamp>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-paper">
              Google has strict eligibility and compliance requirements.
            </h2>
            <p className="mt-4 text-lg text-paper/80 leading-relaxed">
              Many organizations are rejected — or lose the grant they already have — because of:
            </p>
            <TornCard torn="bottom" className="mt-8 p-6 sm:p-8 bg-kraft">
              <div className="grid gap-3 sm:grid-cols-2">
                {WARNINGS.map((w) => (
                  <div key={w} className="flex items-start gap-3">
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 text-stamp-red" />
                    <span className="text-sm font-medium text-ink">{w}</span>
                  </div>
                ))}
              </div>
            </TornCard>
            <TornCard className="mt-6 p-6 bg-paper">
              <p className="text-sm font-medium text-ink leading-relaxed">
                <strong>That\'s where we come in.</strong> We handle the entire process — from eligibility to ongoing management — so your team can stay focused on the animals.
              </p>
            </TornCard>
          </div>
        </CorkBoard>

        {/* What's included */}
        <section className="py-16 sm:py-20 bg-kraft">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="green" />
              <Stamp variant="green">Our Complete Service</Stamp>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">
              Everything included — nothing left to chance.
            </h2>
            <TornCard className="mt-8 p-2">
              {INCLUDED.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-start gap-4 p-5 ${i !== INCLUDED.length - 1 ? 'border-b-2 border-dashed border-ink/10' : ''}`}
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest" strokeWidth={3} />
                  <span className="text-ink font-medium">{item}</span>
                </div>
              ))}
            </TornCard>
          </div>
        </section>

        {/* 5-step process */}
        <section className="bg-paper py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="green" />
              <Stamp variant="green">Our Simple 5-Step Process</Stamp>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">
              Your path to live ads.
            </h2>
            <TornCard className="mt-10">
              {STEPS.map((s, i) => (
                <div
                  key={s.num}
                  className={`flex gap-5 p-6 ${i !== STEPS.length - 1 ? 'border-b-2 border-dashed border-ink/10' : ''}`}
                >
                  <span className={`font-mono text-4xl font-bold tracking-tight ${s.num === '05' ? 'text-forest/40' : 'text-ink/10'}`}>
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">
                      {s.title}
                      {s.num === '05' && (
                        <Stamp variant="green" className="ml-2 align-middle">Included</Stamp>
                      )}
                    </h3>
                    <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </TornCard>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-paper">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <WashiTape color="red" />
              <Stamp variant="red">Benefits</Stamp>
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-ink">
              Turn Google\'s free advertising into greater impact for animals.
            </h2>
            <p className="mt-4 text-lg text-ink/70 leading-relaxed">
              Schedule your <strong>Complimentary Google Ad Grant Assessment</strong> today. We\'ll walk you through exactly what\'s possible for your organization.
            </p>
            <TornCard className="mt-8 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/50 mb-5 font-mono">We\'ll show you:</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span className="text-ink">Whether your nonprofit qualifies</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span className="text-ink">What\'s preventing approval (if anything)</span>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  <span className="text-ink">How to maximize the full $120,000 annual advertising grant</span>
                </div>
              </div>
            </TornCard>
            <div className="mt-10 text-center">
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 rounded-lg bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.18)] hover:translate-y-0.5 hover:shadow-none active:translate-y-1 active:shadow-none transition-all"
              >
                Get Your Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 max-w-sm mx-auto">
              <TearOffTabs
                items={[
                  { label: 'Free Eligibility Check', to: '/audit#audit-form' },
                  { label: 'Book a Call', to: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0p85pv4d9cJHJhGL49J0_NtvsGTmMGW3obb9_I5cMsanZCmabHSwoqw2TeZAbShBO4Dv-jNcyE?gv=true' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-ink py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-paper/50 font-mono">
                  Google Ad Grant Activation · Compliance · Ongoing Management
                </p>
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-paper leading-tight">
                  Helping animal welfare organizations grow their impact —{' '}
                  <span className="text-forest">not their advertising budget.</span>
                </h3>
              </div>
              <div className="shrink-0 text-left lg:text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-paper/50 font-mono">Contact Us</p>
                <a
                  href="mailto:mdeck@adgrantconsultant.com"
                  className="mt-2 block text-base font-medium text-paper hover:text-forest transition-colors"
                >
                  mdeck@adgrantconsultant.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
