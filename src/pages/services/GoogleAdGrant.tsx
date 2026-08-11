import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { ServicePageTemplate } from '@/sections/services/ServicePageTemplate'

export default function GoogleAdGrant() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <SiteHeader />
      <ServicePageTemplate
        c={{
          eyebrow: 'The Grant, Explained',
          breadcrumb: 'Google Ad Grant',
          h1a: 'Is it real? What’s the catch?',
          h1b: 'Do we qualify? Plain answers.',
          sub: `Google has offered registered nonprofits $10,000 a month in free advertising since 2003. It's real. Most 501(c)(3) animal organizations qualify — rescues, humane societies, wildlife sanctuaries, zoos, veterinary nonprofits, and specialty animal programs. The catch is a rulebook written for advertising people — and that's the part we handle, explained here in words a board member can read closely.`,
          priceNote: '$395/month for management. The $10K in ads is free, always.',
          heroImage: '/images/photos/bowties.jpg',
          heroImagePosition: 'center 10%',
          heroImageAlt: 'Two rescue dogs — a Bernese mountain dog and a golden retriever — sitting side by side in matching plaid bow ties',
          trustPoints: ['Free eligibility check first', 'Full compliance handled', 'Plain-English reports'],
          stats: [
            { value: '$10K', label: 'free ad budget every month' },
            { value: '$120K', label: 'per year, if your rescue qualifies and uses it' },
            { value: '2003', label: 'the year Google started offering it' },
            { value: '$0', label: 'what you ever pay Google for the ads' },
          ],
          problemEyebrow: 'The catch',
          problemTitle: 'Free money is not free to manage.',
          problemBody: [
            `Picture a rescue director at 11pm, finally reading the grant guidelines — and hitting a wall of terms like "5% CTR" and "quality score." Most applications stall right there, on page two of the rulebook.`,
            `Google requires that your ads are ones people actually click — if that rate drops too low, the account can be paused. We check this weekly so it's never something you have to think about.`,
            `Google also requires that you only bid on search phrases specific enough that the person searching is really looking for what you do — never generic single words that waste the free budget. And every ad group must be organized by topic, with more than one ad running in each, so we can see which message actually reaches people.`,
            `That's why most grant accounts sit nearly unused, or get suspended quietly. The application is the easy part. Staying healthy inside the rules is the job.`,
          ],
          imagine: `It's the first of the month. While you do morning rounds, your campaigns are already running — "adopt a senior dog," "foster kittens needed," "donate to animal rescue" — each one landing on a page built to turn that searcher into an applicant. Your monthly report arrives in plain English: what was spent (all of it free), what it produced, and what we're tuning next. You never opened a dashboard.`,
          featuresEyebrow: "What's included",
          featuresTitle: 'From application to full spend, done for you — and explained as we go.',
          featuresNote: 'Everything below is included at $395/mo. You never pay Google a dime.',
          features: [
            { title: 'Eligibility Check & Application', desc: 'We verify your 501(c)(3) status, set up your Google for Nonprofits account, and handle the entire grant application — the fussy paperwork that stalls most organizations on page two.' },
            { title: 'Campaign Build-Out', desc: 'Adoption campaigns, foster recruitment campaigns, and donation campaigns — each organized by topic, with more than one ad running in each group, so we can see which message actually reaches people.' },
            { title: 'Compliance Management', desc: 'Google requires ads people actually click — if the rate drops too low, the account can be paused. We check this weekly so it\'s never something you have to think about.' },
            { title: 'Search Phrase Discipline', desc: 'We only bid on search phrases specific enough that the person searching is really looking for what you do — never generic single words that waste the free budget.' },
            { title: 'Conversion Tracking', desc: 'Every meaningful action gets tracked — adoption inquiries, foster applications, volunteer signups, donations — so you know which stories are moving people to act, not just how many people visited.' },
            { title: 'Landing Page Guidance', desc: 'Ads are only half the equation. We tell you plainly which pages need fixes so the free traffic turns into real applications.' },
            { title: 'Monthly Optimization', desc: 'Search phrases, ads, and bids tuned every month so more of the $10,000 reaches people ready to adopt, foster, or give.' },
            { title: 'Plain-English Monthly Reports', desc: 'What was spent (all free), what it produced, what we\'re changing next. No dashboards, no jargon.' },
            { title: 'Suspension Recovery', desc: 'Account already paused? We find the rule that was broken, fix it, and manage the reinstatement conversation with Google.' },
          ],
          testimonial: {
            quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
            name: '[Name withheld]',
            org: '[Rescue name withheld until confirmed]',
            metric: '[REAL RESULT — PENDING CONFIRMATION]',
          },
          pricingEyebrow: 'Pricing',
          pricingTitle: 'One price. $0 in ad spend, forever.',
          plans: [
            {
              name: 'Grant Management',
              price: '$395/month',
              setup: '$900 one-time setup fee, waived with 12-month commitment',
              popular: true,
              timeline: 'Honest timeline: Google approval takes a few weeks — we keep you posted the whole way.',
              items: [
                'Eligibility check & full application',
                'Google for Nonprofits account setup',
                'Adoption, foster & donation campaigns',
                'Weekly compliance checks',
                'Conversion tracking setup',
                'Monthly campaign optimization',
                'Suspension recovery if needed',
                'Plain-English monthly reports',
                'Training for your team',
                '$0 in ad spend — the $10K/mo is 100% free',
              ],
              cta: 'See What You Qualify For',
            },
          ],
          processTitle: 'Three steps to $10K/month in free ads.',
          steps: [
            { n: '01', title: 'Free eligibility check', desc: 'A short, human conversation. We look at your 501(c)(3) status and current online presence and tell you plainly whether the grant fits.' },
            { n: '02', title: 'Application & setup', desc: 'We handle the paperwork and build your campaigns. Honest note: Google’s approval isn’t instant — usually a few weeks — and we’ll tell you where things stand the whole way.' },
            { n: '03', title: 'Launch, optimize, train', desc: 'Ads go live, we tune monthly, reports arrive in plain English — and we teach your team to understand the account, so the knowledge doesn’t leave when we do.' },
          ],
          faqs: [
            { q: 'Is the $10,000 a month real?', a: 'Yes — Google has offered it to registered nonprofits since 2003. The catch is not the money; it is the rulebook. That rulebook is what we manage for you.' },
            { q: 'Do we qualify?', a: 'If you are a registered 501(c)(3) whose mission is animals — a rescue, shelter, humane society, SPCA, wildlife sanctuary, bird preserve, zoo, veterinary nonprofit, training organization, or any other animal-related nonprofit — very likely yes. Government-run animal control is excluded by Google — if that is you, we will tell you honestly and suggest alternatives. The free eligibility check answers this for certain.' },
            { q: 'We already have a grant account but barely use it. Can you take over?', a: 'Yes — that is the most common situation we see. We review the account, rebuild the campaigns, fix whatever rule was quietly being broken, and work the monthly spend back up toward the full amount.' },
            { q: 'Our account got suspended. Can you fix it?', a: 'Usually, yes. We find the rule that was broken, fix the underlying issue, and manage the reinstatement process with Google.' },
            { q: 'Can the ads target just our local area?', a: 'Yes. Campaigns are aimed at your service area, so the free budget reaches people who can actually adopt, foster, volunteer, or donate.' },
            { q: 'What can we advertise?', a: 'Adoptable animals, foster recruitment, donation pages, volunteer sign-ups, and events. Google does not allow ads purely for selling merchandise, but everything mission-related is fair game.' },
            { q: 'How long until the ads are live?', a: 'Honestly: Google’s approval is not instant. Expect a few weeks from application to live campaigns. Anyone who promises same-week approval is overselling — we would rather give you the real timeline.' },
            { q: 'How does billing work?', a: '$395/month for management with a $900 one-time setup fee, waived with a 12-month commitment. The $10,000 in monthly ad spend is completely free — you never pay Google anything.' },
          ],
          ctaTitle: 'Your rescue may be leaving $120,000 a year unclaimed.',
          ctaSub: 'The free eligibility check answers the only question that matters first: do you qualify?',
        }}
      />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
