import { HomeHeartIcon, SearchPawIcon, GiftIcon, MegaphonePawIcon } from '@/components/AnimalIcons'
import { TornCard } from '@/components/BoardElements'

const CARDS = [
  {
    icon: GiftIcon,
    title: '$10,000/month in free ads — sitting unclaimed',
    body: `Google offers every registered 501(c)(3) up to $10,000/month in free Google Search advertising through the Ad Grants program. Most animal nonprofits have never heard of it. The ones who tried often got tangled in Google's compliance rules — the real requirements that keep the account active — and gave up.`,
  },
  {
    icon: SearchPawIcon,
    title: 'Invisible when it matters most',
    body: `When someone searches "adopt a dog near me" or "foster kittens," your rescue should be the answer. Without the grant and proper SEO (showing up in local search results), the breeder down the road shows up instead.`,
  },
  {
    icon: HomeHeartIcon,
    title: 'The website that costs you adoptions',
    body: `A family finds your dog on Petfinder, taps through to apply — and the form breaks on their phone. They don't call to tell you. They just adopt somewhere else.`,
  },
  {
    icon: MegaphonePawIcon,
    title: 'Running on weekend events and hope',
    body: 'Another Saturday adoption event, another folding table in a parking lot. Exhausting — and it only reaches whoever happens to drive by. The grant creates a pipeline that works while you sleep.',
  },
]

export function Problem() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg text-paper/60 leading-relaxed italic font-serif">
          It's 9pm. The last kennel check is done, the meds are given, and you finally sit down —
          to a laptop full of things that have nothing to do with animals.
        </p>
        <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-paper font-serif leading-tight">
          You're doing the work of ten people.{' '}
          <span className="text-stamp-red">The internet isn't doing its one job.</span>
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CARDS.map((c) => (
            <TornCard
              key={c.title}
              className="p-8 relative bg-paper/95"
              torn="bottom"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink font-serif">{c.title}</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{c.body}</p>
            </TornCard>
          ))}
        </div>
      </div>
    </section>
  )
}
