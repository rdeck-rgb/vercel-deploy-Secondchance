import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/sections/Footer'
import {
  CorkBoard,
  TornCard,
  WashiTape,
  PushPin,
} from '@/components/BoardElements'

const PRIVACY = [
  { h: 'Information we collect', p: 'When you request a grant eligibility check or contact us, we collect your name, email address, phone number, organization name, and website URL. We also collect standard analytics data (pages visited, referral source) to improve our website.' },
  { h: 'How we use it', p: 'We use your information to prepare and deliver your audit, respond to your inquiries, and — only if you ask — follow up about our services. We do not sell, rent, or share your personal information with third parties for their marketing purposes.' },
  { h: 'Service providers', p: 'We use trusted tools for scheduling, email, and analytics. These providers process data on our behalf under their own privacy terms and are not permitted to use your data for any other purpose.' },
  { h: 'Your choices', p: 'You can request a copy, correction, or deletion of your personal data at any time by emailing mdeck@adgrantconsultant.com. You can opt out of any marketing email with one click.' },
  { h: 'Data security', p: 'We use industry-standard encryption and access controls to protect your information. Audit submissions are stored securely and access is limited to the team members preparing your review.' },
  { h: 'Changes to this policy', p: 'If we update this policy, we will post the new version on this page with the revision date. Continued use of the site after changes means you accept the updated policy.' },
]

const TERMS = [
  { h: 'Services', p: 'SecondChance Media provides website design, search engine optimization, Google Ad Grant management, and social media services to animal welfare nonprofits — including rescues, shelters, humane societies, wildlife sanctuaries, zoos, veterinary services, and specialty animal organizations. Specific deliverables, timelines, and pricing are defined in each client agreement.' },
  { h: 'Free Grant Eligibility Check', p: 'The grant eligibility check is provided free of charge with no obligation. Audits are assessments and recommendations, not guarantees of specific outcomes. Capacity is limited and offered first-come, first-served.' },
  { h: 'Google Ad Grant', p: 'Grant approval is determined solely by Google. While we maintain a high approval rate, we cannot guarantee approval or continued account standing. We manage compliance in good faith according to Google\'s published policies.' },
  { h: 'Billing & cancellation', p: 'Services are billed monthly. Setup fees are waived with a 12-month commitment. After the initial term, services continue month-to-month and may be cancelled with 30 days notice. You retain ownership of all your content and data; we provide a full export on request.' },
  { h: 'Results', p: 'We commit to delivering the work described in your agreement and to transparent monthly reporting. Search rankings, ad performance, and adoption outcomes depend on factors outside any agency\'s control, and specific results cannot be guaranteed.' },
  { h: 'Contact', p: 'Questions about these terms? Email mdeck@adgrantconsultant.com or call 305-709-1382.' },
]

export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy'
  const sections = isPrivacy ? PRIVACY : TERMS
  return (
    <div className="min-h-screen bg-paper antialiased">
      <SiteHeader />
      <main>
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <TornCard className="p-6 sm:p-10">
              <div className="flex justify-center mb-4">
                <PushPin className="h-6 w-6" />
              </div>
              <nav className="flex items-center gap-1.5 text-xs text-ink/50 mb-8 font-mono uppercase tracking-wider">
                <Link to="/" className="hover:text-forest">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-ink/70">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</span>
              </nav>
              <div className="flex items-center gap-3 mb-4">
                <WashiTape color="red" className="w-16" />
                <span className="font-mono text-xs uppercase tracking-widest text-ink/50">Last updated: July 2026</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h1>
              <div className="mt-10 space-y-6">
                {sections.map((s) => (
                  <div key={s.h} className="border-b-2 border-dashed border-ink/10 pb-6 last:border-0 last:pb-0">
                    <h2 className="text-lg font-bold text-ink">{s.h}</h2>
                    <p className="mt-2 text-ink/70 leading-relaxed">{s.p}</p>
                  </div>
                ))}
              </div>
            </TornCard>
          </div>
        </CorkBoard>
      </main>
      <Footer />
    </div>
  )
}
