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
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif leading-tight">
                Animal advocate first. Teacher always. Marketer when it helps the animals.
              </h2>
              <p className="mt-6 text-lg text-ink/75 leading-relaxed">
                I've stood in a full kennel row at the end of a long day and felt the weight of it —
                every pair of eyes, every story that brought them there. I know what it costs you to
                keep showing up.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                SecondChance Media exists because I got tired of watching good rescues lose adopters
                to whoever showed up first on Google. Not because their work was lesser — because
                nobody had taught them the rules of a game they never asked to play. So I teach it,
                and I run it for you until you're ready to run it yourself.
              </p>
              <p className="mt-4 text-lg text-ink/75 leading-relaxed">
                We don't work with plumbers or dentists. Only the people who spend their mornings
                with the animals everyone else gave up on. When I say I understand your day, it's
                because pieces of it are my day too.
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
