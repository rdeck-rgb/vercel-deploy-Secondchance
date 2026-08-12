/**
 * Single source of truth for every price on the site.
 *
 * Both the pricing page and the per-bundle order pages read from here, so a
 * price only ever has to change in one place. Bundle cards show `highlights`
 * (a short, readable set); the order page expands the same bundle into the full
 * per-service breakdown under "What you're getting".
 */

export type ServiceKey = 'web' | 'seo' | 'grant' | 'social' | 'email'

export type Service = {
  key: ServiceKey
  /** Short label used by the at-a-glance notes in the pricing hero. */
  short: string
  name: string
  desc: string
  price: string
  /** Renders the small "FROM" kicker above the figure for tiered services. */
  from?: boolean
  /** Tier breakdown, shown under the figure when a service has plans. */
  plans?: string
  setup: string
  items: string[]
  /** Dedicated page for this service. */
  to: string
  cta: string
}

export const SERVICES: Service[] = [
  {
    key: 'web',
    short: 'Web Design',
    name: 'Animal Welfare Web Design',
    desc: `Built for phones first, because that's where 70%+ of your adopters are. Looks great, loads fast, turns clicks into applications and donations.`,
    price: '$97',
    setup: '$2,000 setup, waived with a 12-month commitment',
    items: [
      'Custom responsive design',
      'Mobile-first build',
      'Online donation integration',
      'Adoption & foster forms',
      'Petfinder / Adopt-a-Pet sync',
      'SSL & hosting included',
      'Training & support',
    ],
    to: '/services/web-design',
    cta: `See what's included`,
  },
  {
    key: 'seo',
    short: 'Local SEO',
    name: 'AI Search & Local SEO',
    desc: `When someone Googles "adopt a dog near me," you need to show up. We get you into the map pack — and into AI recommendations — and keep you there.`,
    price: '$297',
    setup: '$1,500 setup, waived with a 12-month commitment',
    items: [
      'Google Business Profile optimization',
      '25+ directory citations',
      'Review management strategy',
      '"Near me" keyword targeting',
      'Schema markup & AI visibility',
      'Monthly ranking reports',
      'Additional locations $250/mo each',
    ],
    to: '/services/local-seo',
    cta: `See what's included`,
  },
  {
    key: 'grant',
    short: 'Ad Grant',
    name: 'Google Ad Grant Management',
    desc: `$10,000/month in free Google Ads for qualifying 501(c)(3) animal organizations. We handle the application, compliance, and campaigns so every free dollar drives adoptions.`,
    price: '$397',
    setup: '$2,000 setup, waived with a 12-month commitment',
    items: [
      'Full grant application',
      '95%+ approval rate',
      'Adoption, foster & donation campaigns',
      'Keyword strategy & research',
      'Compliance management',
      'Conversion tracking',
      'Monthly optimization & reports',
    ],
    to: '/services/google-ad-grant',
    cta: `See what's included`,
  },
  {
    key: 'social',
    short: 'Social Media',
    name: 'Social Media Management',
    desc: 'Done-for-you social media. We create and post the pet spotlights, graphics, carousels, and captions every week. You approve one plan a month.',
    price: '$497',
    from: true,
    plans: 'Starter $497 · Plus $797 · Premium $997',
    setup: '$2,000 setup, waived with a 12-month commitment',
    items: [
      'Starter: 2 platforms (Facebook + Instagram)',
      'Plus: 4 platforms (Facebook, Instagram + 2 more)',
      'Premium: 6 platforms (Facebook, Instagram + 4 more)',
      'Short-form pet videos',
      'Branded graphics & carousels',
      'Captions in your voice',
      'Monthly content calendar',
      'Posts shared to stories',
    ],
    to: '/services/social-media',
    cta: 'See the three plans',
  },
  {
    key: 'email',
    short: 'Donor Email',
    name: 'Donor Email Nurture',
    desc: 'Turn one-time visitors into recurring donors, fosters, and volunteers with automated emails that actually get opened.',
    price: '$397',
    setup: '$1,500 setup, waived with a 12-month commitment',
    items: [
      'Automated new-donor welcome sequence',
      'Monthly donation appeal',
      'Foster & volunteer recruitment emails',
      'Event and fundraising blasts',
      'List cleanup & segmentation',
      'Plain-English performance report',
    ],
    to: '/services/donor-email',
    cta: `See what's included`,
  },
]

export const SERVICE_BY_KEY: Record<ServiceKey, Service> = Object.fromEntries(
  SERVICES.map((s) => [s.key, s])
) as Record<ServiceKey, Service>

export type Bundle = {
  slug: string
  name: string
  tag: string
  price: string
  /** Only set where the bundle is genuinely cheaper than buying the parts. */
  save?: string
  desc: string
  /** Services this bundle is built from; drives the order page breakdown. */
  includes: ServiceKey[]
  /** Condensed selling points for the pricing card. */
  highlights: string[]
  popular?: boolean
}

export const BUNDLES: Bundle[] = [
  {
    slug: 'website-local-seo',
    name: 'Website + Local SEO',
    tag: 'Where most rescues start',
    price: '$397',
    desc: 'A site that turns visits into adoption applications, plus the local search presence that makes sure nearby adopters find it in the first place.',
    includes: ['web', 'seo'],
    highlights: [
      'Custom mobile-first site with donation integration',
      'Adoption & foster forms built to convert',
      'Google Business Profile optimization',
      '25+ directory citations & review strategy',
      'Monthly ranking reports',
    ],
  },
  {
    slug: 'website-ad-grant',
    name: 'Website + Ad Grant',
    tag: 'A site, and traffic to fill it',
    price: '$497',
    desc: `A site built to convert, with up to $10,000 a month in free Google Ads pointed straight at it. Skip this one if local search is your bigger gap.`,
    includes: ['web', 'grant'],
    highlights: [
      'Custom mobile-first site with donation integration',
      'Adoption & foster forms built to convert',
      'Full Google Ad Grant application handled for you',
      'Up to $10,000/mo in free Google Ads, managed',
      'Conversion tracking & monthly reports',
    ],
  },
  {
    slug: 'local-seo-ad-grant',
    name: 'Local SEO + Ad Grant',
    tag: 'Own the whole search page',
    price: '$697',
    desc: 'The map pack and the ads above it, both working for you. Built for organizations whose website is already doing its job.',
    includes: ['seo', 'grant'],
    highlights: [
      'Google Business Profile optimization',
      '25+ directory citations & review strategy',
      'Full Google Ad Grant application handled for you',
      'Up to $10,000/mo in free Google Ads, managed',
      'Monthly ranking & performance reports',
    ],
  },
  {
    slug: 'website-seo-ad-grant',
    name: 'Website + SEO + Ad Grant',
    tag: 'The full adoption engine',
    price: '$595',
    save: 'Save $196/mo vs. buying separately',
    desc: 'Your site, your map pack presence, and $10,000 a month in free Google Ads, all pulling in the same direction.',
    includes: ['web', 'seo', 'grant'],
    highlights: [
      'Custom mobile-first site with donation integration',
      'Adoption & foster forms built to convert',
      'Google Business Profile optimization & 25+ citations',
      'Full Google Ad Grant application handled for you',
      'Up to $10,000/mo in free Google Ads, managed',
      'One team on the site, the rankings, and the ads',
    ],
    popular: true,
  },
]

export const BUNDLE_BY_SLUG: Record<string, Bundle> = Object.fromEntries(
  BUNDLES.map((b) => [b.slug, b])
)

/**
 * Mono caps line naming a bundle's component services. Uses the short labels —
 * the full names run to three wrapped lines in a card footer.
 */
export function bundleComponents(b: Bundle): string {
  return b.includes.map((k) => SERVICE_BY_KEY[k].short).join(' + ')
}
