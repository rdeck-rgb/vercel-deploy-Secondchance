import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { CorkBoard, TornCard, PushPin, Polaroid, Stamp } from '@/components/BoardElements'
import { DogIcon, HorseIcon, BirdIcon, PawHeartIcon } from '@/components/AnimalIcons'

const WHO = [
  { role: 'The executive director wearing ten hats', scene: 'You read grant guidelines at 11pm because that is the only quiet hour you get.' },
  { role: 'The ops director who is also the "marketing team"', scene: 'Your job description says operations. Your reality says everything else too.' },
  { role: 'The foster coordinator who can\'t say no', scene: 'One more litter, one more transport run — and somehow the Facebook page is also yours.' },
  { role: 'The TNR volunteer out before sunrise', scene: 'The cats don\'t wait, and neither does the trapping schedule. Marketing can wait. Except it can\'t.' },
]

const IN_SCOPE = [
  { icon: DogIcon, label: 'Rescues & Shelters', sub: 'Independent rescues, shelters, humane societies, SPCAs, breed-specific networks, transport networks' },
  { icon: HorseIcon, label: 'Sanctuaries & Wildlife', sub: 'Wildlife sanctuaries and refuges, bird preserves, endangered-species programs, fisheries' },
  { icon: BirdIcon, label: 'Zoos & Veterinary Services', sub: 'Zoological societies, nonprofit veterinary clinics and services' },
  { icon: PawHeartIcon, label: 'Specialty & Other Animal Nonprofits', sub: 'Animal training and behavior organizations, therapy and service animal programs, TNR, and every other animal-related 501(c)(3) in between' },
]

const SERVICES = [
  {
    title: 'Grant Acquisition',
    story: 'Most rescue directors I meet have never heard of the Google Ad Grant — or assumed they wouldn\'t qualify and moved on.',
    desc: 'Applying for and winning the $10,000/month Google Ad Grant. Most 501(c)(3) animal welfare organizations qualify. The application is fussy; we handle all of it.',
    to: '/services/google-ad-grant',
  },
  {
    title: 'Grant Management & Compliance',
    story: 'The grant comes with a rulebook written for advertising people. Break the rules — usually without knowing — and Google pauses the account. Often nobody notices for months.',
    desc: 'Keeping your account healthy against Google\'s real rules, explained in plain English. Google requires ads people actually click, search phrases specific enough to match what you do, and tracking on the actions that matter. We watch what Google watches, so you never lose the light.',
    to: '/services/google-ad-grant',
  },
  {
    title: 'Paid Search',
    story: 'Some moments can\'t wait for the free grant to ramp up — an urgent transport push, a capital campaign, a hoarding case that fills every kennel overnight.',
    desc: 'Layering a small paid budget on top of the free grant for the moments that need it. Targeted, temporary, and always explained before a dollar is spent.',
    to: '/services/local-seo',
  },
  {
    title: 'Website Redesign',
    story: 'A family falls in love with a dog online, taps through to apply — and the form breaks on their phone. That adoption goes somewhere else, and nobody ever tells you.',
    desc: 'Making sure the pages your traffic lands on actually convert — adoption inquiries, foster applications, donations. Fast, mobile-first, built for people mid-decision.',
    to: '/services/web-design',
  },
  {
    title: 'Training',
    story: 'Too many rescues are held hostage by a website nobody on staff knows how to touch. That ends here.',
    desc: 'Teaching staff and volunteers to understand their own account — the grant, the website, the reports — so the knowledge doesn\'t leave when we do.',
    to: '/services/social-media',
  },
  {
    title: 'Conversion Tracking',
    story: '"How many people visited" doesn\'t tell you much. "How many applied to adopt" tells you everything.',
    desc: 'Tracking every meaningful action — adoption inquiries, foster applications, volunteer signups, donations — so you know which stories and pets are actually moving people to act, not just how many people stopped by.',
    to: '/services/local-seo',
  },
]

const FAQS = [
  {
    q: 'Is the $10,000/month Google Ad Grant real?',
    a: 'Yes — Google has offered it to registered nonprofits since 2003. The catch is the rulebook: your ads must be ones people actually click, your search phrases must be specific to what you do, and you must track real actions like adoptions and donations. Accounts that drift out of line get paused. That rulebook is what we manage for you.',
  },
  {
    q: 'We are a tiny foster-based rescue. Is this for us?',
    a: 'Especially you. A foster network with no building and no foot traffic lives or dies on being findable online. The grant does not care how big you are — it cares that you are a registered 501(c)(3) doing real work.',
  },
  {
    q: 'What does your help cost?',
    a: 'Every price is on the pricing page — no hidden fees. The eligibility check is free, so you can find out where you stand before spending anything.',
  },
  {
    q: 'We are government-run animal control. Can you help?',
    a: 'Honestly, the grant excludes government entities, so I would not want to take your money for something you cannot use. If you are a municipal shelter, your best path is partnering with a friends-of nonprofit. I am happy to point you in the right direction either way.',
  },
]

function FAQBlock() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-kraft/50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Stamp variant="outline" className="mb-4">Straight Answers</Stamp>
          <h2 className="text-3xl font-bold tracking-tight text-ink font-serif">Fair questions. Straight answers.</h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <TornCard key={i} className="relative" torn="none">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-ink hover:text-stamp-red transition-colors"
              >
                <span className="pr-8 font-serif text-lg">{f.q}</span>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stamp-red/10 text-stamp-red transition-transform duration-300 text-lg leading-none ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="border-t-2 border-dashed border-ink/10 px-6 pb-6 pt-4 text-sm text-ink/70 leading-relaxed">{f.a}</div>
              )}
            </TornCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="Services — SecondChance Media" description="Web design, local SEO, Google Ad Grant management, social media, and donor email nurture — built exclusively for animal welfare nonprofits." />
      <SiteHeader />
      <main>
        {/* WHO WE HELP — corkboard intro */}
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <TornCard className="p-8 sm:p-10 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <PushPin className="h-7 w-7" />
                  </div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-ink/50">
                    If your morning started before the sun — this page is about you.
                  </p>
                  <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
                    You already know if this is you.
                  </h1>
                  <div className="mt-8 space-y-4">
                    {WHO.map((w) => (
                      <div key={w.role} className="flex gap-4">
                        <div className="mt-1 h-2 w-2 rounded-full bg-stamp-red shrink-0" />
                        <div>
                          <p className="font-bold text-ink">{w.role}</p>
                          <p className="text-sm text-ink/65 leading-relaxed">{w.scene}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TornCard>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex justify-center lg:justify-start">
                  <Polaroid
                    src="/images/photos/golden-couch.jpg"
                    alt="Golden retriever lounging on a couch"
                    caption="Photographed at home, not staged"
                    rotation={-2}
                  />
                </div>
                <TornCard className="p-6 relative rotate-1 bg-kraft/70">
                  <div className="absolute -top-3 right-6">
                    <PushPin className="h-6 w-6" />
                  </div>
                  <Stamp variant="green" className="mb-3">Who we work with</Stamp>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    Running a $500K–$5M independent 501(c)(3)? You're exactly who this is built for.
                    Government-run animal control and for-profit businesses: the grant rules exclude
                    you — but reach out anyway and I'll point you toward what does work for your situation.
                  </p>
                </TornCard>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {IN_SCOPE.map((s) => (
                <TornCard key={s.label} className="p-5 relative" torn="bottom">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <PushPin className="h-5 w-5" />
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <s.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-3 font-serif text-lg font-bold text-ink">{s.label}</p>
                  <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{s.sub}</p>
                </TornCard>
              ))}
            </div>
          </div>
        </CorkBoard>

        {/* Photo band */}
        <section className="bg-paper border-y-2 border-ink/10 py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4">
              <img src="/images/photos/two-on-floor.jpg" alt="Golden retriever and Bernese mountain dog lying side by side on a wooden floor" loading="lazy" className="h-40 sm:h-56 w-full rounded-lg border-2 border-ink/10 object-cover shadow-[0_6px_0_rgba(42,31,22,0.08)] rotate-[-1deg]" />
              <img src="/images/photos/seminoles.jpg" alt="Two dogs in matching Seminoles jerseys sitting at their person's feet, looking up expectantly" loading="lazy" className="h-40 sm:h-56 w-full rounded-lg border-2 border-ink/10 object-cover shadow-[0_6px_0_rgba(42,31,22,0.08)]" />
              <img src="/images/photos/golden-couch.jpg" alt="Golden retriever lounging on a gray couch with a spotted pillow, looking straight at the camera" loading="lazy" className="h-40 sm:h-56 w-full rounded-lg border-2 border-ink/10 object-cover shadow-[0_6px_0_rgba(42,31,22,0.08)] rotate-[1deg]" />
            </div>
            <p className="mt-4 text-center text-sm italic text-ink/50">
              The reason behind all of it — photographed at home, not staged.
            </p>
          </div>
        </section>

        {/* WHAT WE DO — story-first pinned flyers */}
        <section className="bg-paper py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Stamp variant="outline" className="mb-4">The whole ecosystem</Stamp>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                What we do — in plain English.
              </h2>
              <p className="mt-4 text-lg text-ink/65">
                Not just "we run ads." Here's everything, and why each piece matters to a shelter
                before what it technically is.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <TornCard
                  key={s.title}
                  className={`p-7 sm:p-8 relative ${i % 2 === 1 ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]'}`}
                  torn={i % 2 === 0 ? 'bottom' : 'none'}
                >
                  <div className="absolute -top-3 left-8">
                    <PushPin className="h-5 w-5" />
                  </div>
                  <p className="font-serif text-lg italic text-ink/70 leading-relaxed">{s.story}</p>
                  <h3 className="mt-4 text-xl font-bold text-ink font-serif">{s.title}</h3>
                  <p className="mt-2 text-ink/70 leading-relaxed">{s.desc}</p>
                  <Link
                    to={s.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-stamp-red hover:gap-2.5 transition-all"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </TornCard>
              ))}
            </div>
          </div>
        </section>

        <FAQBlock />

        {/* Bottom pinned CTA */}
        <section className="bg-kraft/50 py-20 border-t-2 border-ink/10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <TornCard className="p-8 sm:p-10 relative inline-block w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-7 w-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif">
                Not sure where you stand? Start with the free eligibility check.
              </h2>
              <p className="mt-3 text-ink/70">Takes about five minutes. No pitch unless you want one.</p>
              <Link
                to="/audit#audit-form"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-stamp-red px-6 py-3.5 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
              >
                Check My Eligibility
                <ArrowRight className="h-5 w-5" />
              </Link>
            </TornCard>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
