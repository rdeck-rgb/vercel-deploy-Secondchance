import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { ServicePageTemplate } from '@/sections/services/ServicePageTemplate'

export default function DonorEmail() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta
        title="Donor Email Nurture for Animal Rescues — $397/mo | SecondChance Media"
        description="Automated donor emails that turn one-time visitors into recurring donors, fosters, and volunteers. Welcome sequences, appeals, and recruitment. $397/month."
      />
      <SiteHeader />
      <ServicePageTemplate
        c={{
          eyebrow: 'Donor Email Nurture',
          breadcrumb: 'Donor Email',
          h1a: 'Most people who visit your site leave and never come back.',
          h1b: 'Email is how you get them back.',
          sub: `Someone reads a happy-tails story, thinks "what a good dog," and closes the tab. That's the end of it — unless you have a way to keep talking to them. We build the automated emails that turn a one-time visitor into a monthly donor, a foster, or a volunteer, and we keep them running.`,
          priceNote: '$397/month. $1,500 setup, waived with a 12-month commitment.',
          trustPoints: ['Written and built for you', 'Runs on its own once live', 'One plain-English report a month'],
          stats: [
            { value: '5', label: 'sequence types we build — welcome, monthly appeal, foster and volunteer recruitment, events, re-engagement' },
            { value: '0', label: 'emails you have to write yourself' },
            { value: '1', label: 'plain-English report each month — no dashboard to learn' },
            { value: '100%', label: 'animal welfare focus — all we do' },
          ],
          problemEyebrow: 'Where the support leaks out',
          problemTitle: 'You worked hard for that visitor. Then you let them walk.',
          problemBody: [
            `Your site did its job. Someone found you, read about a dog, maybe even donated once. And then nothing — no follow-up, no second ask, no reason to come back. The relationship ended the moment they closed the tab.`,
            `Meanwhile the people most likely to give again are the ones who already gave once. They already trust you. They just need to hear from you at a moment when giving feels easy, and most rescues never send that message because nobody has time to write it.`,
            `The list is usually sitting right there — donation receipts, event signups, adoption inquiries, a spreadsheet somebody started in 2021. Unused, ungrouped, and never emailed.`,
          ],
          imagine: `A woman donates $25 after seeing a foster appeal. She gets a thank-you that same hour, a story about the dog she helped three days later, and a gentle monthly-giving invitation two weeks after that. She says yes to $15 a month. You didn't write a word of it, and you didn't know it happened until the report showed up.`,
          featuresEyebrow: 'What we build',
          featuresTitle: 'The emails that should already be running, written in your voice.',
          featuresNote: 'Set up once, then working quietly in the background — welcoming, thanking, asking, and recruiting while you get on with the animals.',
          features: [
            { title: 'New-Donor Welcome Sequence', desc: 'The first emails someone gets after they give. Thanks them properly, shows the impact, and makes the second gift feel natural instead of pushy.' },
            { title: 'Monthly Donation Appeal', desc: 'One well-written ask a month, tied to a real animal or a real need, so giving has a face and a reason rather than a generic plea.' },
            { title: 'Foster & Volunteer Recruitment', desc: 'Steady recruitment emails that keep the foster pipeline filling, so you stop firing off emergency pleas at capacity.' },
            { title: 'Event & Fundraising Blasts', desc: 'Adoption days, matching campaigns, and year-end giving sent to the right segment at the right time.' },
            { title: 'Re-Engagement Sequence', desc: 'A last, warm attempt at the people who have gone quiet — often the cheapest supporters you will ever win back.' },
            { title: 'List Cleanup & Segmentation', desc: 'We sort the pile you already have into donors, fosters, volunteers, and lapsed supporters, and drop the dead addresses that hurt your deliverability.' },
            { title: 'Written In Your Voice', desc: 'Your rescue, your animals, your tone. Nothing that reads like it came out of a template pack.' },
            { title: 'Plain-English Reporting', desc: 'What went out, who opened, what it raised. One page a month, in words, with no dashboard to log into.' },
          ],
          testimonial: {
            quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
            name: '[Name withheld]',
            org: '[Rescue name withheld until confirmed]',
            metric: '[REAL RESULT — PENDING CONFIRMATION]',
          },
          pricingEyebrow: 'Pricing',
          pricingTitle: 'One price. Every sequence.',
          plans: [
            {
              name: 'Donor Email Nurture',
              price: '$397/mo',
              setup: '$1,500 setup, waived with a 12-month commitment',
              items: [
                'Automated new-donor welcome sequence',
                'Monthly donation appeal',
                'Foster & volunteer recruitment emails',
                'Event and fundraising blasts',
                'List cleanup & segmentation',
                'Plain-English performance report',
              ],
              cta: 'See What You Qualify For',
            },
          ],
          processTitle: 'We build it. It runs itself.',
          steps: [
            { n: '01', title: 'We take stock of your list', desc: 'Wherever your contacts live now — donation platform, spreadsheets, event signups — we gather them, clean them, and sort them into groups worth emailing differently.' },
            { n: '02', title: 'We write the sequences', desc: 'Welcome, appeal, recruitment, events, re-engagement. Written around your animals and your voice, and sent to you for approval before anything goes out.' },
            { n: '03', title: 'It runs, and you get a report', desc: 'The automations run on their own from then on. Once a month you get a short plain-English summary of what went out and what it brought in.' },
          ],
          faqs: [
            { q: 'How much does it cost?', a: 'It is $397 a month, plus a one-time $1,500 setup fee that is waived if you commit for 12 months. Most organizations take the 12-month option because it saves money from day one.' },
            { q: 'We barely have an email list. Is this worth it?', a: 'Often yes, but not always first. If almost nobody is reaching your site yet, your money usually does more in Local SEO or the Ad Grant, and email pays off once traffic exists. Tell us your numbers and we will say honestly which one to do first.' },
            { q: 'Do we have to write any of it?', a: 'No. We write everything and send it to you for approval before it goes live. You know your animals and your community, so your edits make it better — but the drafting is on us.' },
            { q: 'Which email platform do you use?', a: 'We work with what you already have where we can — Mailchimp, Constant Contact, Kit, and the built-in tools in most donation platforms. If you have nothing yet, we will set you up on something that fits your list size and budget.' },
            { q: 'Will this annoy our supporters?', a: 'Only if it is done badly. We segment the list so people get messages relevant to them, keep the sending rhythm reasonable, and make unsubscribing easy. A monthly note about animals someone already cares about is welcome; the same untargeted blast every week is not.' },
            { q: 'What happens to the emails if we stop?', a: 'The sequences and the list are yours. They live in your platform under your account, and they stay there if you leave.' },
            { q: 'What results should we honestly expect?', a: 'Steady compounding rather than a spike. Repeat giving and foster signups tend to improve as the sequences mature and the list grows. What we can promise is that the follow-up finally happens at all, which for most rescues is the actual gap.' },
          ],
          ctaTitle: 'Your next donor already visited once.',
          ctaSub: 'They just never heard from you again. Let us fix the follow-up, and let the list you already have start doing some work.',
        }}
      />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
