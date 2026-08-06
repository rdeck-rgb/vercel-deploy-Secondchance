import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { GiftIcon, MegaphonePawIcon, SearchPawIcon, GradCapPawIcon } from '@/components/AnimalIcons'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'
import { AlertCircle } from 'lucide-react'

const SERVICES = [
  {
    icon: GiftIcon,
    title: 'Grant Acquisition',
    body: `Applying for and winning the $10,000/month Google Ad Grant — many organizations don't know it exists, or assume they won't qualify. Most rescues do.`,
    tag: 'Free $10K/mo in ads',
    warning: '501(c)(3) only',
    to: '/services/google-ad-grant',
  },
  {
    icon: MegaphonePawIcon,
    title: 'Grant Management & Compliance',
    body: 'Keeping your account healthy against Google’s real rules, explained in plain English. Compliance means doing what Google asks each month so your free $10,000 keeps running.',
    tag: null,
    warning: '501(c)(3) only',
    to: '/services/google-ad-grant',
  },
  {
    icon: SearchPawIcon,
    title: 'Local Search & Website Redesign',
    body: 'Making sure the people searching for a pet find you first — and that the pages they land on actually turn visits into adoptions, fosters, and donations.',
    tag: null,
    warning: null,
    to: '/services/local-seo',
  },
  {
    icon: GradCapPawIcon,
    title: 'Training & Social Content',
    body: 'Teaching your staff and volunteers to understand their own account, and keeping your feed alive with the stories your animals are already giving you.',
    tag: null,
    warning: null,
    to: '/services/social-media',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-lg italic text-ink/60 leading-relaxed font-serif">
            Here's what I know after years around shelters: nobody has time to learn marketing
            between feeding rounds.
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
            So here's what we take off your plate.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <TornCard
              key={s.title}
              className="group flex flex-col p-7 transition-all hover:-translate-y-1"
            >
              <Link to={s.to} className="flex flex-col h-full">
                <div className="flex justify-center -mt-3 mb-2">
                  <PushPin className="h-5 w-5" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest text-paper">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                {s.tag && (
                  <Stamp variant="red" className="mt-4 w-fit">{s.tag}</Stamp>
                )}
                {s.warning && (
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink/50">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {s.warning}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </TornCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-forest hover:text-ink transition-colors"
          >
            See everything we do, explained in plain English
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
