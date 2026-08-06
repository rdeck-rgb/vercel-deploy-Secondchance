import { SearchPawIcon, ClipboardPawIcon, MegaphonePawIcon, GradCapPawIcon } from '@/components/AnimalIcons'
import { TornCard, PushPin, Stamp } from '@/components/BoardElements'

const STEPS = [
  {
    icon: SearchPawIcon,
    title: 'Free eligibility check',
    body: 'A short, human conversation — not a sales call. We look at your 501(c)(3) status and your current online presence, and tell you plainly whether the grant fits.',
  },
  {
    icon: ClipboardPawIcon,
    title: 'Application & setup',
    body: 'We handle the paperwork with Google for Nonprofits and build your campaigns. One honest note: Google’s approval isn’t instant — it usually takes a few weeks, and we’ll tell you where things stand the whole way.',
  },
  {
    icon: MegaphonePawIcon,
    title: 'Launch & optimization',
    body: 'Your ads go live — adoptions, fosters, donations, each pointed at the page built to convert that searcher. Then we keep tuning, every month, so more of the free budget reaches real people. Conversion tracking tells us which searches turn into real actions.',
  },
  {
    icon: GradCapPawIcon,
    title: 'Ongoing management & training',
    body: 'We watch what Google watches so your account stays healthy — and we teach your team to understand it too, so the knowledge doesn’t leave when we do.',
  },
]

export function Process() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stamp variant="outline" className="mb-4">How it works</Stamp>
        <p className="max-w-3xl text-lg italic text-ink/60 leading-relaxed font-serif">
          From "I didn't know this existed" to $10,000/month in free ads — here's exactly
          what happens.
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
          Four steps to your Google Ad Grant. <span className="text-forest">No mystery. No surprises.</span>
        </h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <TornCard key={s.title} className="p-6 relative" torn="bottom">
              <div className="absolute -top-3 left-6">
                <PushPin className="h-5 w-5" />
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-[0_4px_0_rgba(42,31,22,0.12)]">
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-stamp-red text-xs font-bold text-white font-mono">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink font-serif">{s.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{s.body}</p>
            </TornCard>
          ))}
        </div>
      </div>
    </section>
  )
}
