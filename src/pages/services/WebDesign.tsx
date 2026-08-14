import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { ServicePageTemplate } from '@/sections/services/ServicePageTemplate'

export default function WebDesign() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta
        title="Animal Welfare Web Design — $95/mo | SecondChance Media"
        description="Mobile-first websites for animal rescues and shelters. Online donation integration, adoption and foster forms, and Petfinder sync. $95/month, ready in 1–2 weeks."
      />
      <SiteHeader />
      <ServicePageTemplate
        c={{
          eyebrow: 'Website Redesign',
          breadcrumb: 'Web Design',
          h1a: 'A family fell in love with your dog tonight.',
          h1b: 'Did your website let them apply?',
          sub: `Most adopters meet your animals on a phone screen before they ever meet them in person. If the site is slow or the form is broken, that connection ends there — quietly, and nobody ever tells you. We build rescue websites that turn those moments into adoption inquiries, foster applications, and donations.`,
          priceNote: 'Starting at $95/month. Ready in 1-2 weeks.',
          heroImage: '/images/photos/golden-puppy-closeup.jpg',
          heroImageAlt: 'Golden retriever puppy resting her chin on the floor, looking up with big brown eyes',
          trustPoints: ['Built for rescues only', 'Ready in 1-2 weeks', 'Hosting & support included'],
          stats: [
            { value: '70%+', label: 'of your visitors are on a phone' },
            { value: '<2s', label: 'mobile load time, every site' },
            { value: '1-2 wks', label: 'from kickoff to live site' },
            { value: '100%', label: 'built for rescues, nothing else' },
          ],
          problemEyebrow: 'The quiet loss',
          problemTitle: 'Your website is either making introductions — or ending them.',
          problemBody: [
            `Here's the moment nobody sees: a couple on their couch, phone in hand, looking at a dog your team photographed that afternoon. They tap "Apply." The form doesn't work on mobile. They close the tab, and by morning they've adopted from somewhere else. You never know it happened.`,
            `More than half of mobile visitors leave a site that takes over 3 seconds to load. When someone finds your rescue, they decide in seconds — not about your mission, but about whether your site feels trustworthy enough to adopt from.`,
          ],
          imagine: `It's Saturday morning. A couple searches "adopt a dog near me," finds your rescue, and taps your site. In seconds they see available dogs with real photos, and an "Apply to Adopt" button that just works on their phone. By Sunday, your adoption coordinator is scheduling their meet-and-greet — because your website did the one job it exists to do.`,
          featuresEyebrow: "What's included",
          featuresTitle: 'Everything your rescue needs. Nothing it doesn\'t.',
          featuresNote: 'All 9 features included at $95/mo. No paywalls, no "premium" add-ons, no surprises.',
          features: [
            { title: 'Mobile-First Design', desc: 'Built for phones first, because that is where most of your adopters are. Every page, button, and form works on a phone screen.' },
            { title: 'Adoption Applications', desc: 'Forms that actually get completed — simple on mobile, and sent straight to your adoption coordinator.' },
            { title: 'SEO Foundation', desc: 'On-page SEO built into every page from day one — title tags, meta descriptions, heading structure, schema markup, and a sitemap submitted to Google so adopters can actually find you.' },
            { title: 'AEO & AI Search Visibility', desc: 'Answer Engine Optimization so your rescue shows up when someone asks ChatGPT, Perplexity, or Google\'s AI Overview "where can I adopt a dog near me." Structured data and content tuned for the way AI reads a page.' },
            { title: 'Events & Volunteer Sign-Up', desc: 'Adoption events, orientations, fundraisers — sign-ups without phone calls or spreadsheets.' },
            { title: 'Hosting, Security & Speed', desc: 'SSL, daily backups, and load times under 2 seconds on mobile. Every update handled for you.' },
            { title: 'Content Migration', desc: 'We move your pages, photos, and content from your old site. You don\'t lift a finger.' },
            { title: 'Photo & Animal Galleries', desc: 'Real photos of real animals build more trust than any headline. Galleries designed to make people fall in love.' },
            { title: 'Training & Ongoing Support', desc: 'We teach your team to update animals and events themselves — and when you need help, you reach a person, not a ticket queue.' },
          ],
          testimonial: {
            quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
            name: '[Name withheld]',
            org: '[Rescue name withheld until confirmed]',
            metric: '[REAL RESULT — PENDING CONFIRMATION]',
          },
          pricingEyebrow: 'Pricing',
          pricingTitle: 'Two options. One goal: more adoptions.',
          plans: [
            {
              name: 'Tailored Website',
              price: '$95/month',
              setup: 'Setup fee waived with a 12-month commitment',
              popular: true,
              timeline: 'Ready in 1-2 weeks',
              items: [
                'Choose from 6 rescue-specific designs',
                'Customized with your logo, colors & animals',
                'Mobile-first responsive design',
                'Adoption & foster application forms',
                'SEO foundation (schema, sitemap, meta)',
                'AEO & AI search visibility setup',
                'SSL, hosting & daily backups',
                'Main page content migration',
                'Analytics setup',
                'Training & ongoing support',
              ],
              cta: 'See What You Qualify For',
            },
            {
              name: 'Custom Website',
              price: 'Custom',
              setup: 'Starts with a deposit applied to your final project price',
              timeline: '8-12 weeks from kickoff to launch',
              items: [
                'Everything in Tailored, plus:',
                'Planning session: we map every page before anything is built',
                'Fully custom design, built from scratch',
                'Dedicated designer assigned to your rescue',
                'Multi-location & chapter architecture',
                'Advanced integrations (shelter software, CRMs)',
                'Custom functionality (animal search, foster portal)',
                'Extended content migration',
                'Priority support & dedicated account manager',
              ],
              cta: 'Talk It Through First',
            },
          ],
          processTitle: 'Three steps. From idea to live website.',
          steps: [
            { n: '01', title: 'A real conversation (30 min)', desc: 'We learn about your rescue, your capacity, and your goals — and review your current site honestly, whether you hire us or not.' },
            { n: '02', title: 'Design & build', desc: 'Tailored sites are customized to your brand and live in 1-2 weeks. Custom sites start with a planning session, then build over 8-12 weeks.' },
            { n: '03', title: 'Review & launch', desc: 'We test on a dozen devices and check load speed before anything goes live. Then we launch, submit your sitemap to Google, and train your team.' },
          ],
          faqs: [
            { q: 'How long does it take?', a: 'Tailored websites are ready in 1-2 weeks. Custom websites typically take 8-12 weeks. Either way, we handle everything: design, content migration, testing, and launch.' },
            { q: 'Can we update the animals and events ourselves?', a: 'Yes — and we teach you how. Your team can add animals, post events, and update pages anytime.' },
            { q: 'Do you move our existing content?', a: 'Yes. We migrate all content from your main pages at no extra cost, and clean up content that has gotten messy over the years.' },
            { q: 'How is this different from Wix or Squarespace?', a: 'Three things: it is built specifically for rescues (adoption forms, SEO and AEO baked in from day one), a dedicated team handles everything instead of you wrestling a template, and it is designed around one goal — turning visitors into adopters and donors.' },
            { q: 'Do we own the website?', a: 'You own all your content, images, and data. If you ever cancel, we provide a full export so you are never locked in.' },
            { q: 'How does billing work?', a: 'Tailored websites are billed monthly at $95/mo with a one-time setup fee. Commit to 12 months and the setup fee is waived — the option most rescues choose.' },
            { q: 'We are a tiny foster-based rescue. Is this overkill?', a: 'Not at all. Small rescues benefit the most — you have no building and no foot traffic, so your website IS your front door. The $95/mo plan was built for organizations exactly your size.' },
            { q: 'Can the site take monthly recurring donations?', a: 'Donation integration can be added as a custom line item — ask us about it during your free eligibility check.' },
          ],
          ctaTitle: 'Tonight, another family will look at your animals online.',
          ctaSub: 'Will they find a site that lets them say yes? Starting at $95/month, ready in 1-2 weeks.',
        }}
      />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
