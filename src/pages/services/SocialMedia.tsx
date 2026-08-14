import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { ServicePageTemplate } from '@/sections/services/ServicePageTemplate'

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta
        title="Social Media Management for Animal Rescues — from $495/mo | SecondChance Media"
        description="Done-for-you social media for animal welfare nonprofits. Pet spotlights, short-form video, branded graphics, and captions every week. Plans from $495/month."
      />
      <SiteHeader />
      <ServicePageTemplate
        c={{
          eyebrow: 'Social Media & Training',
          breadcrumb: 'Social Media',
          h1a: 'Your animals give you stories every single day.',
          h1b: 'We make sure people actually see them.',
          sub: `A feed that posts every week tells your community you're alive and worth visiting. A feed that stopped in March tells them to keep scrolling. We create and post everything — pet spotlights, foster appeals, happy-tails stories — and teach your team to keep it going, so the knowledge doesn't leave when we do.`,
          priceNote: 'From $495/month. Facebook + Instagram included.',
          heroImage: '/images/photos/golden-shoe.jpg',
          heroImagePosition: 'center 25%',
          heroImageAlt: 'Golden retriever lounging on the couch proudly holding a stolen shoe',
          trustPoints: ['Done-for-you content', 'You approve one plan a month', 'Your team learns as we go'],
          stats: [
            { value: '6', label: 'skill sets on every account — video, design, writing, scheduling, strategy, one person you know' },
            { value: '7', label: 'posts per week on our top plan' },
            { value: '1', label: 'calendar to approve each month — that is your whole time commitment' },
            { value: '100%', label: 'animal welfare focus — all we do' },
          ],
          problemEyebrow: 'Why it never gets done',
          problemTitle: 'Good social media takes six people. Your rescue has a volunteer.',
          problemBody: [
            `You know the scene: it's 10pm, the meds are done, and someone — usually the same someone — remembers nothing has been posted in two weeks. A rushed photo, a caption written with one eye closing, and silence again until the next guilt pang.`,
            `A feed that reaches people needs six skill sets: video editing, graphic design, writing, scheduling, strategy, and someone keeping it all on time. Most rescues pile all six on one stretched-thin volunteer, so it slips. Weeks go quiet. Followers forget you exist.`,
            `And consistency is everything. Before a family ever visits, they pull up your Facebook or Instagram. A feed that posted this week says "come meet our animals." A dead feed says keep scrolling.`,
          ],
          imagine: `It's Tuesday night. A 60-second clip of your longest-stay dog — filmed by your team, edited and posted by ours — lands in the feed of a woman two towns over. She shares it. Thursday morning, her coworker submits an adoption application for that exact dog. You didn't edit, write, or schedule anything. You approved the calendar on the first of the month.`,
          featuresEyebrow: 'The content',
          featuresTitle: 'Every post type your rescue needs — plus training so your team learns the ropes.',
          featuresNote: 'Pet spotlights, foster appeals, happy-tails stories, event promos, and donation content. On brand, every week.',
          features: [
            { title: 'Adoptable Pet Spotlights', desc: 'Your longest-stay and most overlooked animals turned into the photo and video features people actually stop for — and share.' },
            { title: 'Short-Form Video', desc: 'Raw footage from your team becomes edited vertical video — the single most-shared content type in animal welfare.' },
            { title: 'Graphics & Carousels', desc: 'Adoption-process explainers, foster FAQs, and myth-busters in your colors and your voice.' },
            { title: 'Happy-Tails Stories', desc: 'Every adoption becomes content that builds donor trust and shows the community the mission is working.' },
            { title: 'Donation & Fundraising Appeals', desc: 'Matching campaigns, monthly donor drives, year-end giving — written to move followers into donors.' },
            { title: 'Event Promotion', desc: 'Adoption events and fundraisers promoted on a steady rhythm, so turnout stops depending on luck.' },
            { title: 'Foster & Volunteer Recruitment', desc: 'Dedicated recruitment content that keeps your foster pipeline full without the emergency pleas.' },
            { title: 'Monthly Content Calendar', desc: 'Every post for the month ahead, laid out by date and platform. Nothing publishes until you say yes.' },
            { title: 'Team Training', desc: 'We teach your staff and volunteers to understand the accounts, the calendar, and the numbers — so the knowledge doesn\'t leave when we do.' },
          ],
          testimonial: {
            quote: '[CLIENT QUOTE — pending a real client outcome and their written permission. We never publish invented testimonials.]',
            name: '[Name withheld]',
            org: '[Rescue name withheld until confirmed]',
            metric: '[REAL RESULT — PENDING CONFIRMATION]',
          },
          pricingEyebrow: 'Plans & pricing',
          pricingTitle: 'Pick your rhythm. We bring the team.',
          plans: [
            {
              name: 'Starter',
              price: '$495/mo',
              setup: '4 posts/week · $2,000 setup, waived with 12-month plan',
              items: [
                '3 graphics a week',
                '1 carousel a week',
                'Facebook + Instagram',
                'Monthly content calendar',
                'Posts shared to stories',
              ],
              cta: 'See What You Qualify For',
            },
            {
              name: 'Plus',
              price: '$795/mo',
              setup: '6 posts/week · $2,000 setup, waived with 12-month plan',
              popular: true,
              items: [
                '1 short video a week',
                '1 carousel a week',
                '4 graphics a week',
                'Facebook + Instagram',
                'Calendar + monthly report',
                'Posts shared to stories',
              ],
              cta: 'See What You Qualify For',
            },
            {
              name: 'Premium',
              price: '$995/mo',
              setup: '7 posts/week · $2,000 setup, waived with 12-month plan',
              items: [
                '2 short videos a week',
                '1 carousel a week',
                '4 graphics a week',
                'Facebook + Instagram',
                'Calendar + monthly report',
                'Quarterly strategy call',
              ],
              cta: 'See What You Qualify For',
            },
          ],
          processTitle: 'You approve. We do everything else.',
          steps: [
            { n: '01', title: 'We polish your profiles', desc: 'First we fix the things a visitor judges first: your bio, photos, and links on each platform — consistent everywhere.' },
            { n: '02', title: 'We build your plan', desc: 'A monthly calendar mapped to your animals, events, and fundraising seasons. You approve it before anything goes live.' },
            { n: '03', title: 'We create, post, and teach', desc: 'Videos, graphics, and captions go out every week — and your team learns the rhythm as we go, so it never depends on one person again.' },
          ],
          faqs: [
            { q: 'How much does it cost?', a: 'Plans are $495 (Starter), $795 (Plus), and $995 (Premium) per month, plus a one-time $2,000 setup fee that is waived on a 12-month plan.' },
            { q: 'Do you create the content, or do we have to provide it?', a: 'We create everything: the videos, graphics, carousels, and captions. You send raw photos and footage of your animals when you can — the stuff your team is already capturing — and we handle all production and posting.' },
            { q: 'Which platforms do you cover?', a: 'Facebook and Instagram are included on every plan — that is where adopters and donors are. You can add TikTok or YouTube Shorts for $100/mo each. Stories are included at no extra cost.' },
            { q: 'Should we outsource if we already have a volunteer posting?', a: 'The best setup keeps your volunteer capturing in-the-moment content while our team handles production, design, and scheduling. Your volunteer stops burning out, and your feed never goes quiet.' },
            { q: 'What happens after we sign up?', a: 'About two weeks of setup: a kickoff call about your voice and calendar, your brand kit and templates, a full profile rebuild, and account access sorted. Then your first monthly calendar arrives for approval — nothing publishes until you approve it.' },
            { q: 'Is there a contract or setup fee?', a: 'Plans run on a 12-month agreement with a one-time $2,000 setup fee, waived on that plan. After the first year you continue month-to-month and can cancel anytime.' },
            { q: 'What results should we honestly expect?', a: 'Steady visibility and trust, not overnight virality. Done consistently, your rescue looks active and worth supporting, adoption spotlights get shared, and donation appeals reach more people every month. The realistic win: a reliable presence you are no longer scrambling to keep up.' },
          ],
          ctaTitle: 'Stop carrying this alone.',
          ctaSub: 'Consistent social media takes a team you do not have. We are that team — hand it off, and get your evenings back.',
        }}
      />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
