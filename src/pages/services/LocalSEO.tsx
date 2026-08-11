import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { ServicePageTemplate } from '@/sections/services/ServicePageTemplate'

export default function LocalSEO() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <SiteHeader />
      <ServicePageTemplate
        c={{
          eyebrow: 'Local Search & Paid Search',
          breadcrumb: 'Local Search',
          h1a: 'A family nearby searched "adopt a dog" tonight.',
          h1b: 'Did they find you — or the breeder?',
          sub: `When someone in your community searches for a pet, Google shows a short list — and increasingly, AI assistants like ChatGPT answer with a single recommendation. Your rescue needs to be in both answers, or that adoption goes somewhere else. We make sure it's you, in plain English.`,
          priceNote: '$295/month. Live in 14 days.',
          heroImage: '/images/photos/golden-sit.jpg',
          heroImagePosition: 'center 12%',
          heroImageAlt: 'Golden retriever sitting patiently on a wooden dock in front of green hedges',
          trustPoints: ['Done-for-you — no logins to learn', 'Built for 501(c)(3) rescues', 'Plain-English reports'],
          stats: [
            { value: '46%', label: 'of Google searches are people looking for something nearby' },
            { value: '76%', label: 'of nearby searchers act within 24 hours' },
            { value: '14 days', label: 'until your optimizations go live' },
            { value: '$0', label: 'extra charge for AI-search visibility — it is the same work' },
          ],
          problemEyebrow: 'The shift',
          problemTitle: 'How families find a pet to adopt just changed.',
          problemBody: [
            `A family decides they're ready for a dog. They used to type "adopt a dog near me" into Google and pick from the map. They still do that. But now they also open ChatGPT and ask, "What are the best animal rescues near me for families with kids?"`,
            `Google answers from your business profile, your reviews, and your website. AI assistants answer from the same signals. If your profile hasn't been touched in years, or your name and address don't match across the internet, both skip you — and the family never knows you existed.`,
            `Some agencies sell "AI search optimization" as a pricey add-on. It isn't a separate service. It's the same local visibility work, done right.`,
          ],
          imagine: `It's Sunday afternoon. A family asks their phone where they can adopt a dog this weekend. Google shows them a list. Their AI assistant names one rescue out loud. Both answers are you — because fourteen days after we start, the signals they read all point to your front door.`,
          featuresEyebrow: 'What we do for you',
          featuresTitle: 'Everything that makes your rescue the obvious answer nearby.',
          featuresNote: 'Every feature below ships at $295/mo. No AI surcharge. No tiers.',
          features: [
            { title: 'Google Business Profile Care', desc: 'Your public listing — the first thing searchers see — kept complete, current, and full of fresh animal photos and posts.' },
            { title: 'Consistent Listings Everywhere', desc: 'Your name, address, and phone number accurate and matching across 25+ directories, so Google and AI assistants trust what they read about you.' },
            { title: 'Review Guidance', desc: 'A simple, comfortable system your team can use to turn happy adopters into the kind of reviews that make the next family choose you.' },
            { title: 'The Right Search Phrases', desc: 'We focus on the searches that signal real intent in your area — "adopt a dog near me," "foster kittens," "animal shelter" plus your city.' },
            { title: 'Website Tune-Up for Search', desc: 'Behind-the-scenes improvements that help search engines and AI understand who you are, where you are, and how people can adopt from you.' },
            { title: 'AI Visibility Monitoring', desc: 'We check whether ChatGPT and similar tools recommend your rescue — and keep adjusting until they do.' },
            { title: 'Paid Search for Urgent Moments', desc: 'When something cannot wait — an urgent transport push, a capital campaign — we layer a small paid budget on top of your free grant, always explained before a dollar is spent.' },
            { title: 'Event Visibility', desc: 'Your weekend adoption events posted where searchers actually look, so turnout stops depending on luck.' },
            { title: 'Plain-English Monthly Reports', desc: 'What improved, what we did, what happens next. No dashboards, no jargon.' },
          ],
          testimonial: {
            quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
            name: '[Name withheld]',
            org: '[Rescue name withheld until confirmed]',
            metric: '[REAL RESULT — PENDING CONFIRMATION]',
          },
          pricingEyebrow: 'Pricing',
          pricingTitle: 'One service. One price. No AI upsell.',
          plans: [
            {
              name: 'Local Search & Visibility',
              price: '$295/month',
              setup: '$900 one-time setup fee, waived with 12-month commitment',
              popular: true,
              timeline: 'Live in 14 days. Honest expectation: real movement in about 90 days.',
              items: [
                'Google Business Profile optimization',
                '25+ consistent directory listings',
                'Review guidance for your team',
                'High-intent local search phrases',
                'Website search tune-up',
                'AI visibility monitoring',
                'Monthly plain-English reports',
                'Ongoing profile management',
                'A dedicated person who knows your rescue',
              ],
              cta: 'See What You Qualify For',
            },
          ],
          processTitle: 'Three steps. Then families start finding you.',
          steps: [
            { n: '01', title: 'Visibility check (free)', desc: 'We scan how you appear across Google, AI assistants, and 25+ directories, and show you plainly where you are visible, where you are missing, and what is broken. Free whether you sign up or not.' },
            { n: '02', title: 'Build (days 4-14)', desc: 'We fix your listings, tune your website, polish your profile, and set up your review system. You approve the plan. We do the work.' },
            { n: '03', title: 'Grow (ongoing)', desc: 'Monthly attention, fresh profile content, review momentum, and honest reports. Your visibility gets stronger every month — we will never oversell the speed.' },
          ],
          faqs: [
            { q: 'Is "AI search" a separate service from regular search work?', a: 'No. AI assistants read the same signals as Google: accurate listings, good reviews, a well-built website. Anyone selling it as a separate premium product is charging twice for the same work.' },
            { q: 'Will this work for a small foster-based rescue?', a: 'Often better than for big organizations. You are competing in a smaller area with fewer competitors — a foster network in a mid-size town can become the obvious local answer surprisingly fast.' },
            { q: 'How long until we see results?', a: 'Honestly: optimizations go live in 14 days, Google typically reflects changes in 4-6 weeks, and most organizations see real movement around 90 days. We report monthly so you can watch it happen.' },
            { q: 'Do we need a website from you for this to work?', a: 'No. We improve your visibility regardless of who built your site. That said, if your site also needs work, our $390/mo Foundation package is the most cost-effective path.' },
            { q: 'What if we want to cancel?', a: 'The 12-month commitment waives your $900 setup fee. After 12 months you are month-to-month — cancel anytime with 30 days notice, no penalties.' },
            { q: 'Do you guarantee first-page rankings?', a: 'No honest provider does — Google and AI assistants control their own answers. What we guarantee is the work: accurate listings, an active profile, real reviews, and a website search engines can read. Those are the inputs that drive the outcomes.' },
            { q: 'Can this help recruit fosters too, not just adopters?', a: 'Yes. We aim at foster-intent searches too — "foster kittens near me," "become a dog foster" — and make sure your foster page is what those searchers find.' },
          ],
          ctaTitle: 'While you were reading this, someone nearby searched for a pet.',
          ctaSub: 'Google showed a list. An AI assistant named one rescue. $295/mo, live in 14 days — let\'s make both answers you.',
        }}
      />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
