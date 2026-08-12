import { CorkBoard, TornCard, PushPin, Polaroid, WashiTape } from '@/components/BoardElements'

export function Founder() {
  return (
    <section className="relative">
      <CorkBoard className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Photo cluster: a big pinned portrait with a smaller snapshot of
                the dogs tucked under its corner, like a real board collage */}
            <div className="flex justify-center">
              <div className="relative mt-8 lg:mt-0">
                <Polaroid
                  src="/images/photos/melanie.jpg"
                  alt="Melanie Deck smiling on the couch with her two dogs — a Bernese mountain dog and a golden retriever"
                  caption="Melanie & the welcoming committee"
                  rotation={-2}
                  size="xl"
                  aspect="portrait"
                />
                <div className="absolute -top-4 left-8 z-10">
                  <PushPin className="h-7 w-7" />
                </div>
                <div className="absolute -top-10 -right-2 sm:-right-12">
                  <WashiTape color="kraft" className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-20 rotate-[-4deg]" />
                  <Polaroid
                    src="/images/photos/two-on-rug.jpg"
                    alt="Archie and Georgie sitting side by side, looking up"
                    caption="Archie & Georgie"
                    rotation={4}
                    size="sm"
                    aspect="portrait"
                  />
                </div>
              </div>
            </div>

            <TornCard className="p-8 sm:p-10 relative">
              <div className="absolute -top-3 left-8">
                <PushPin className="h-6 w-6" />
              </div>
              <p className="text-xs font-mono font-semibold uppercase tracking-widest text-stamp-red">
                A note from Melanie
              </p>
              <p className="mt-4 text-lg italic text-ink/60 leading-relaxed font-serif">
                I got into helping nonprofits because there is so much need for resources —
                volunteers, donations, and the steady funding it takes to make the work actually
                work.
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                I'm Melanie. A middle school Science teacher, animal advocate,{' '}
                <span className="text-stamp-red">and the person who reads Google's rulebook so you don't have to.</span>
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                Getting $10,000 per month in free Google Ads is a big deal. It helps animal welfare
                organizations reach more adopters, find more donors, and actually attain the goals
                they set out to achieve.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                I am an animal lover who would love for every animal to get a loving home like my
                pets. I would like more than anything for every single animal to be loved like mine.
                Besides being a teacher for 27 years, I volunteer with my dogs at local assisted
                living facilities and also volunteer at hospitals, and mental health facilities for
                children. The love for this started when my city experienced a tragedy at our local
                high school in Parkland, Florida and the Therapy dogs came in and seemed to heal
                each of us with their unconditional love.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                Somewhere along the way I fell down the rabbit hole of how Google works — and
                discovered that Google has quietly offered registered nonprofits $10,000 a month in
                free advertising since 2003. The local animal shelters I loved were drowning while
                that money sat unclaimed, because the application is fussy and the rules are
                written for advertising people, not animal people.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                So I became the person who translates. SecondChance Media exists for one reason: to
                put that free visibility in the hands of every kind of animal organization —
                rescues and shelters, humane societies and SPCAs, wildlife sanctuaries and bird
                preserves, zoos, veterinary nonprofits, and specialty animal programs — and to
                teach their teams enough that the knowledge stays long after I'm gone.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                Advocacy is the thread through everything I've done — the animals first, always,
                and the people who fight for them. When you work with me, you get the teacher, the
                advocate, and the person who will celebrate your adoption numbers like they're my
                own. Because in a way, they are.
              </p>
              <div className="mt-8 border-t-2 border-dashed border-ink/10 pt-5">
                <div className="font-signature text-4xl sm:text-[2.75rem] leading-none text-ink/85 rotate-[-2deg] origin-left w-fit" aria-hidden="true">
                  Melanie Deck
                </div>
                <div className="text-sm text-ink/60 leading-tight mt-3">
                  Melanie Deck — Founder, SecondChance Media, a division of{' '}
                  <a href="https://click2.ai" target="_blank" rel="noopener noreferrer" className="hover:text-stamp-red transition-colors underline underline-offset-2">click2.ai</a>
                </div>
              </div>
            </TornCard>
          </div>
        </div>
      </CorkBoard>
    </section>
  )
}
