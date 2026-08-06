import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Stamp } from '@/components/BoardElements'

const FAQS = [
  {
    q: 'Is the $10,000 a month real? What is the catch?',
    a: 'Real — Google has offered free advertising to registered nonprofits since 2003. The catch is not the money; it is the rulebook. Google requires that your ads are ones people actually click, that you track real actions like adoptions and donations, and that you only bid on search phrases specific enough to match what you do. Accounts that drift out of line get paused. Managing those rules is exactly what we do.',
  },
  {
    q: 'We are a tiny, foster-based rescue. Is this for us?',
    a: 'Yes — especially you. A foster network with no building and no foot traffic lives or dies on being findable online. The grant does not care how big you are; it cares that you are a registered 501(c)(3) doing real work.',
  },
  {
    q: 'How much does your help cost?',
    a: 'Every price is on our pricing page — no hidden fees, no surprises. Many rescues find the increased donations and the free ad budget more than cover it. And the eligibility check is free, so you can find out where you stand before spending anything.',
  },
  {
    q: 'Do we need any technical skills?',
    a: 'None. You save the animals; we handle the applications, the campaigns, the tracking, and the rulebook. And when you are ready, we teach your team to understand it too — so the knowledge stays even if we go.',
  },
  {
    q: 'We are government-run animal control. Can you help?',
    a: 'Honestly, the Google Ad Grant excludes government entities — so we would not want to take your money for something you cannot use. If you are a municipal shelter, your best path is a friends-of nonprofit partner. Happy to point you in the right direction either way.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-kraft/40 py-20 sm:py-28">
      <div id="not-eligible" className="scroll-mt-28" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Stamp variant="outline" className="mb-4">Questions & Answers</Stamp>
          <p className="text-lg italic text-ink/60 leading-relaxed font-serif">
            The questions I hear at every shelter visit — answered the way I'd answer them
            across your intake desk.
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif">
            Fair questions. Straight answers.
          </h2>
        </div>
        <div className="mt-12 bg-paper rounded-lg border-2 border-ink/10 p-2 shadow-[0_6px_0_rgba(42,31,22,0.08)]">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-ink/10">
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-ink hover:text-stamp-red px-4 py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-ink/70 leading-relaxed px-4 pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
