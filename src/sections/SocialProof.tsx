import { PawPrint } from 'lucide-react'

const ORG_TYPES = [
  'Dog Rescues',
  'Wildlife Sanctuaries',
  'Humane Societies',
  'Bird Rehabilitation Centers',
  'Horse Rescues',
  'Foster Networks',
  'Zoo Education Programs',
  'Cat Colony & TNR Programs',
  'Marine Mammal Rescue',
  'Exotic Animal Sanctuaries',
  'Small Animal Rescues',
  'Raptor Rehabilitation',
]

export function SocialProof() {
  return (
    <section className="bg-kraft/60 py-14 border-b-2 border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-ink/60">
          Every kind of animal welfare 501(c)(3) can qualify for the $10K/month Google Ad Grant
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-kraft/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-kraft/60 to-transparent" />
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...ORG_TYPES, ...ORG_TYPES].map((name, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2 text-base font-bold text-ink/60"
            >
              <PawPrint className="h-4 w-4 text-forest" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
