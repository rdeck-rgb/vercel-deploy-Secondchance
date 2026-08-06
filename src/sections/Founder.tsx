import { Signature } from 'lucide-react'
import { CorkBoard, TornCard, PushPin, Polaroid } from '@/components/BoardElements'

export function Founder() {
  return (
    <section className="relative">
      <CorkBoard className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="flex justify-center lg:justify-start">
              <Polaroid
                src="/images/photos/melanie.jpg"
                alt="Melanie Deck smiling on the couch with her two dogs — a Bernese mountain dog and a golden retriever"
                caption="Melanie & the welcoming committee"
                rotation={-2}
                className="scale-110"
              />
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
              <div className="mt-8 flex items-center gap-3 border-t-2 border-dashed border-ink/10 pt-6">
                <Signature className="h-5 w-5 text-forest shrink-0" />
                <div className="flex flex-col">
                  <div className="font-bold text-ink font-serif text-lg leading-tight">Melanie Deck</div>
                  <div className="text-sm text-ink/60 leading-tight mt-0.5">Founder, SecondChance Media — a division of{' '}<a href="https://click2.ai" target="_blank" rel="noopener noreferrer" className="hover:text-stamp-red transition-colors underline underline-offset-2">click2.ai</a></div>
                </div>
              </div>
            </TornCard>
          </div>
        </div>
      </CorkBoard>
    </section>
  )
}
