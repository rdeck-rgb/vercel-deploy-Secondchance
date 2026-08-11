import { Link } from 'react-router'
import { ArrowRight, PawPrint } from 'lucide-react'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { PageMeta } from '@/components/PageMeta'
import { CorkBoard, TornCard, PushPin, Polaroid, Stamp } from '@/components/BoardElements'

export default function About() {
  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="About Melanie Deck — SecondChance Media" description="Teacher, animal advocate, and the person who reads Google’s rulebook so you don’t have to. Learn why SecondChance Media exists and who’s behind it." />
      <SiteHeader />
      <main>
        {/* Hero — first person */}
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <TornCard className="p-8 sm:p-10 relative">
                <div className="absolute -top-3 left-8">
                  <PushPin className="h-6 w-6" />
                </div>
                <Stamp variant="outline" className="mb-4">A note from the founder</Stamp>
                <p className="text-lg italic text-ink/60 leading-relaxed font-serif">
                  I got into helping nonprofits because there is so much need for resources — volunteers, donations, and the steady funding it takes to make the work actually work.
                </p>
                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif leading-tight">
                  I'm Melanie. Teacher, animal advocate,{' '}
                  <span className="text-stamp-red">and the person who reads Google's rulebook so you don't have to.</span>
                </h1>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Getting $10,000 per month in free Google Ads is a big deal. It helps animal welfare organizations reach more adopters, find more donors, and actually attain the goals they set out to achieve.
                </p>
              </TornCard>
              <div className="flex flex-wrap justify-center lg:justify-end gap-5">
                <Polaroid
                  src="/images/photos/melanie.jpg"
                  alt="Melanie on the couch with Archie and Georgie"
                  caption="Melanie & the crew"
                  rotation={2}
                  size="xl"
                  objectPosition="center 35%"
                />
                <Polaroid
                  src="/images/photos/archie-therapy.jpg"
                  alt="Archie in his canine therapy bandana, visiting residents at a care facility"
                  caption="Archie on the job"
                  rotation={-2}
                  size="md"
                  aspect="portrait"
                />
              </div>
            </div>
          </div>
        </CorkBoard>

        {/* Story */}
        <section className="bg-paper border-y-2 border-ink/10 py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-ink/75 leading-relaxed">
            <p>
              I didn't come to this through marketing. I came through a kennel door — volunteering
              at shelters, fostering the ones nobody picked, learning that the hardest part of
              rescue work is rarely the animals. It's the math. Too many of them, not enough of
              you, and a community that would help if only they knew you were there.
            </p>
            <p>
              Somewhere along the way I fell down the rabbit hole of how Google works — and
              discovered that Google has quietly offered registered nonprofits $10,000 a month in
              free advertising since 2003. The shelters I loved were drowning while that money sat
              unclaimed, because the application is fussy and the rules are written for advertising
              people, not animal people.
            </p>
            <p>
              So I became the person who translates. SecondChance Media exists for one reason: to
              put that free visibility in the hands of every kind of animal organization —
              rescues and shelters, humane societies and SPCAs, wildlife sanctuaries and bird
              preserves, zoos, veterinary nonprofits, and specialty animal programs — and to
              teach their teams enough that the knowledge stays long after I'm gone.
            </p>
            <p>
              Advocacy is the thread through everything I've done — the animals first, always, and
              the people who fight for them. When you work with me, you get the teacher, the
              advocate, and the person who will celebrate your adoption numbers like they're my
              own. Because in a way, they are.
            </p>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-kraft/40 border-y-2 border-ink/10 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Stamp variant="green" className="mb-4">The welcoming committee</Stamp>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif">
                The faces behind the mission.
              </h2>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-10">
              <Polaroid
                src="/images/photos/IMG_4236.JPEG"
                alt="Melanie on the couch with Archie and Georgie"
                caption="Melanie & the crew"
                rotation={-1}
                size="xl"
                aspect="landscape"
                objectPosition="center 20%"
              />
              <div className="flex flex-wrap justify-center items-start gap-6 md:gap-10">
                <Polaroid
                  src="/images/photos/IMG_4235.JPEG"
                  alt="Archie and Georgie lying together in their bed"
                  caption="Archie and Georgie"
                  rotation={2}
                  size="lg"
                  aspect="landscape"
                  objectPosition="center 10%"
                />
                <Polaroid
                  src="/images/photos/IMG_8331.JPEG"
                  alt="Georgie in his service vest, visiting a resident in a wheelchair"
                  caption="Georgie on the job"
                  rotation={-2}
                  size="lg"
                  aspect="portrait"
                />
              </div>
              <div className="flex flex-wrap justify-center items-start gap-6 md:gap-10">
                <Polaroid
                  src="/images/photos/IMG_8329.JPEG"
                  alt="George the therapy dog"
                  caption="George, spreading calm"
                  rotation={1}
                  size="md"
                  aspect="portrait"
                  objectPosition="center 20%"
                />
                <Polaroid
                  src="/images/photos/IMG_7070.JPEG"
                  alt="Bear the cat stretched out on a bed"
                  caption="Bear, 18 years young"
                  rotation={-1}
                  size="md"
                  aspect="portrait"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/photos/bowties.jpg"
                  alt="Two rescue dogs in bow ties"
                  className="rounded-lg border-2 border-ink/10 object-cover shadow-[0_6px_0_rgba(42,31,22,0.08)] rotate-[-1deg]"
                />
                <img
                  src="/images/photos/three-on-bed.jpg"
                  alt="Dogs and cat sharing a bed"
                  className="rounded-lg border-2 border-ink/10 object-cover shadow-[0_6px_0_rgba(42,31,22,0.08)] rotate-[1deg]"
                />
              </div>
              <TornCard className="p-8 relative bg-white border border-ink/10" torn="bottom">
                <div className="absolute -top-3 left-8">
                  <PushPin className="h-5 w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif">
                  What I believe about this work
                </h2>
                <ul className="mt-8 space-y-6">
                  {[
                    { t: 'Animals first, always.', d: 'Every decision starts with one question: does this help more animals get home?' },
                    { t: 'You should understand your own account.', d: 'I teach as I go. If a partner ever leaves you confused, they were protecting their job, not yours.' },
                    { t: 'No invented numbers.', d: 'If I can\'t stand behind a figure, it doesn\'t go on this site. Your board should be able to read every word here closely.' },
                    { t: 'Plain English or nothing.', d: 'The rules of this game are learnable. Anyone who makes them sound like magic is selling you fog.' },
                  ].map((v) => (
                    <li key={v.t} className="flex gap-4">
                      <PawPrint className="mt-1 h-5 w-5 shrink-0 text-forest" />
                      <div>
                        <p className="font-bold text-ink font-serif">{v.t}</p>
                        <p className="mt-1 text-sm text-ink/60 leading-relaxed">{v.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </TornCard>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-kraft/50 py-20 border-t-2 border-ink/10">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <TornCard className="p-8 sm:p-10 relative inline-block w-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                Let's find out what your rescue qualifies for.
              </h2>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                A free eligibility check — a real conversation with me, not a sales funnel.
              </p>
              <Link
                to="/audit#audit-form"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-stamp-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
              >
                Free Eligibility Check
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
