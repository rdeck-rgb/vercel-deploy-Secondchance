import { Link } from 'react-router'
import { useState } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Check, ChevronRight } from 'lucide-react'
import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { Footer } from '@/sections/Footer'
import { GoogleCalendarButton } from '@/components/GoogleCalendarButton'
import { TornCard, PushPin, Stamp, Polaroid } from '@/components/BoardElements'

const inputCls =
  'w-full px-4 py-3 rounded-lg bg-paper border-2 border-ink/10 text-ink placeholder:text-ink/40 text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition-all'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('General question')
  const [msg, setMsg] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${topic}] Message from ${name} — ${org}`)
    const body = encodeURIComponent(`Name: ${name}\nOrganization: ${org}\nEmail: ${email}\nTopic: ${topic}\n\n${msg}`)
    window.location.href = `mailto:mdeck@adgrantconsultant.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta title="Contact — SecondChance Media" description="Questions about pricing, the Google Ad Grant, or whether we’re the right fit? Reach out to Melanie Deck — a real person answers within one business day." />
      <SiteHeader />
      <main>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-ink/50 mb-8">
              <Link to="/" className="hover:text-stamp-red">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-ink/70">Contact</span>
            </nav>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <Stamp variant="outline" className="mb-4">Get in touch</Stamp>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif">
                  Let's talk about your rescue
                </h1>
                <p className="mt-5 text-lg text-ink/65 leading-relaxed">
                  Questions about pricing, the Google Ad Grant, or whether we're the right fit?
                  Reach out — a real person answers, usually within one business day.
                </p>
                <div className="mt-8 space-y-4">
                  <p className="text-xs font-mono font-semibold uppercase tracking-widest text-ink/50">Melanie Deck</p>
                  <a href="tel:+13057091382" className="flex items-center gap-3 text-ink/80 hover:text-stamp-red transition-colors">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                      <Phone className="h-5 w-5" />
                    </span>
                    305-709-1382
                  </a>
                  <a href="mailto:mdeck@adgrantconsultant.com" className="flex items-center gap-3 text-ink/80 hover:text-stamp-red transition-colors">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                      <Mail className="h-5 w-5" />
                    </span>
                    mdeck@adgrantconsultant.com
                  </a>
                  <div className="flex items-center gap-3 text-ink/80">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest/10 text-forest">
                      <MapPin className="h-5 w-5" />
                    </span>
                    7420 Wisteria Ave, Parkland, Florida 33076
                  </div>
                  <p className="text-xs text-ink/50">SecondChance Media is a division of click2.ai</p>
                </div>
                <div className="mt-8">
                  <p className="text-sm font-bold text-ink mb-3">Ready to talk? Pick a time that works:</p>
                  <GoogleCalendarButton />
                </div>
                <div className="mt-8">
                  <Polaroid
                    src="/images/photos/melanie.jpg"
                    alt="Melanie Deck with her dogs"
                    caption="Melanie Deck"
                    rotation={-2}
                  />
                </div>
              </div>

              <TornCard className="p-7 sm:p-8 relative h-fit" torn="none">
                <div className="absolute -top-3 left-8">
                  <PushPin className="h-5 w-5" />
                </div>
                {sent ? (
                  <div className="flex h-full flex-col items-center justify-center text-center py-12">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 border-2 border-forest/20">
                      <Check className="h-7 w-7 text-forest" />
                    </span>
                    <h2 className="mt-5 text-xl font-bold text-ink font-serif">Message received</h2>
                    <p className="mt-2 text-sm text-ink/60 max-w-xs">
                      Thanks for reaching out. A real person on our team will get back to you within
                      one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-xl font-bold text-ink font-serif">Send us a message</h2>
                    <p className="text-sm text-ink/60">This will open your email client to send directly to <a href="mailto:mdeck@adgrantconsultant.com" className="font-bold text-stamp-red hover:underline">mdeck@adgrantconsultant.com</a></p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cname" className="block text-sm font-bold text-ink mb-1.5">Name</label>
                        <input id="cname" required className={inputCls} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div>
                        <label htmlFor="corg" className="block text-sm font-bold text-ink mb-1.5">Rescue / Organization</label>
                        <input id="corg" required className={inputCls} placeholder="River City Animal Rescue" value={org} onChange={(e) => setOrg(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cemail" className="block text-sm font-bold text-ink mb-1.5">Email</label>
                      <input id="cemail" type="email" required className={inputCls} placeholder="you@yourrescue.org" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="ctopic" className="block text-sm font-bold text-ink mb-1.5">What's this about?</label>
                      <select id="ctopic" className={inputCls} value={topic} onChange={(e) => setTopic(e.target.value)}>
                        <option>General question</option>
                        <option>Pricing & bundles</option>
                        <option>Google Ad Grant eligibility</option>
                        <option>Website project</option>
                        <option>Existing client support</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cmsg" className="block text-sm font-bold text-ink mb-1.5">Message</label>
                      <textarea id="cmsg" rows={4} required className={`${inputCls} resize-none`} placeholder="Tell us a little about your rescue and what you need..." value={msg} onChange={(e) => setMsg(e.target.value)} />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-stamp-red px-6 py-4 text-base font-bold text-white shadow-[0_4px_0_rgba(42,31,22,0.15)] hover:bg-stamp-red-dark transition-colors"
                    >
                      Send Message
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </form>
                )}
              </TornCard>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
