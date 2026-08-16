/**
 * Privacy Policy + Terms of Service.
 *
 * NOTE FOR WHOEVER EDITS NEXT: this is a thorough starting draft written to
 * match what the site actually does (see the subprocessor list — it is real,
 * not boilerplate). It has NOT been reviewed by an attorney. Have counsel
 * review before relying on it, and re-check it whenever the forms, analytics,
 * or third-party tools change.
 */
import { PageMeta } from '@/components/PageMeta'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/sections/Footer'
import {
  CorkBoard,
  TornCard,
  WashiTape,
  PushPin,
} from '@/components/BoardElements'

const LAST_UPDATED = 'August 2026'

/** A paragraph, or a bullet list. */
type Block = string | { list: string[] }
type Section = { h: string; body: Block[] }

const PRIVACY: Section[] = [
  {
    h: 'Who we are',
    body: [
      'SecondChance Media is a division of click2.ai. We provide digital marketing services — Google Ad Grant management, local and AI search visibility, website design, and social media support and training — to animal welfare nonprofits in the United States.',
      'This policy explains what we collect through this website, what we do with it, and the choices you have. You can reach us any time at mel@click2-ai.com, 305-709-1382, or 7420 Wisteria Ave, Parkland, Florida 33076.',
    ],
  },
  {
    h: 'Information you give us',
    body: [
      'We only ask for what we need to answer your question or assess your eligibility. Depending on which form you use, that includes:',
      {
        list: [
          'Your name, email address, and phone number',
          'Your organization\'s legal name, website, and EIN (Employer Identification Number)',
          'Your role, and what you are hoping to accomplish',
          'For onboarding: details about your existing website, platforms, analytics, and account access',
          'Anything else you choose to write in a message field',
        ],
      },
      'We ask for an EIN only to verify 501(c)(3) status against Google\'s grant requirements. An EIN is a public business identifier, not a personal tax ID, and we do not use it for any other purpose.',
    ],
  },
  {
    h: 'Information collected automatically',
    body: [
      'Our hosting provider keeps standard server logs — IP address, browser type, pages requested, and timestamps — for security and reliability. These are retained for a short period and are not used to build a profile of you.',
      'We do not run advertising trackers, marketing pixels, or third-party analytics on this site, and we do not set cookies for advertising or cross-site tracking. If that ever changes, we will update this policy and, where required, ask for your consent first.',
    ],
  },
  {
    h: 'How we use your information',
    body: [
      'We use what you send us to:',
      {
        list: [
          'Review your eligibility and prepare your free grant assessment',
          'Answer your question and follow up about your inquiry',
          'Deliver, support, and report on services you have engaged us for',
          'Keep records required for tax, accounting, and legal compliance',
        ],
      },
      'If you become a client, we will email you about your account and the work in progress. We will only send you general marketing email if you ask for it, and every such message has a one-click unsubscribe.',
    ],
  },
  {
    h: 'What we never do',
    body: [
      'We do not sell, rent, or trade your personal information. We do not share it with third parties for their own marketing. We do not use your submissions to train third-party AI models. And we do not disclose that your organization spoke with us without your permission.',
    ],
  },
  {
    h: 'Service providers we rely on',
    body: [
      'A small number of vendors process data on our behalf, under their own terms, solely to provide their service to us:',
      {
        list: [
          'Google Workspace — form submissions are saved to Google Sheets via Google Apps Script, and we use Gmail for correspondence',
          'Google Calendar — appointment scheduling, if you book a call',
          'Google Fonts — serving typefaces; your browser requests these from Google, which receives your IP address',
          'Vercel — website hosting and server logs',
        ],
      },
      'If we ever engage a new provider that handles your personal information, we will add it to this list.',
    ],
  },
  {
    h: 'Client account access',
    body: [
      'To do the work, clients often grant us administrative access to systems such as Google Ads, Google Analytics, Search Console, a website CMS, or social media accounts. We treat that access as confidential and use it only to perform the agreed services.',
      'We ask that you grant access through each platform\'s own delegated-access feature rather than sharing passwords. When an engagement ends, you can revoke our access immediately, and we will confirm removal on request.',
    ],
  },
  {
    h: 'How long we keep it',
    body: [
      'Inquiries and eligibility submissions that do not become engagements are kept for up to 24 months so we can pick the conversation back up if you return, then deleted. Client records are kept for the length of the engagement and for as long as tax and legal obligations require. You can ask us to delete your information sooner at any time.',
    ],
  },
  {
    h: 'Security',
    body: [
      'Data is transmitted over encrypted connections and stored in access-controlled accounts protected by strong authentication, limited to the people doing your work. No method of transmission or storage is perfectly secure, and we cannot guarantee absolute security — but if a breach ever affected your information, we would tell you promptly and directly.',
    ],
  },
  {
    h: 'Your rights and choices',
    body: [
      'You can ask us to give you a copy of the personal information we hold about you, correct anything inaccurate, delete it, or stop using it for a particular purpose. Email mel@click2-ai.com and we will respond within 30 days. We will not charge you or treat you differently for exercising these rights.',
      'Depending on where you live — including California, other US states with privacy laws, the EU, or the UK — you may have additional rights, such as data portability or the right to lodge a complaint with a regulator. We honor these requests regardless of where you are.',
    ],
  },
  {
    h: 'Children\'s privacy',
    body: [
      'This site is intended for the adults who run animal welfare organizations. It is not directed to children under 13, and we do not knowingly collect their information. If you believe a child has sent us personal information, contact us and we will delete it.',
    ],
  },
  {
    h: 'Visitors outside the United States',
    body: [
      'We operate in the United States, and information you send us is processed and stored here. Privacy laws in the US may differ from those where you live. By using this site or contacting us, you understand that your information will be handled as described in this policy.',
    ],
  },
  {
    h: 'Changes to this policy',
    body: [
      'If we update this policy we will revise the date at the top of this page. If a change materially affects how we use information you already gave us, we will make a reasonable effort to notify you directly.',
    ],
  },
]

const TERMS: Section[] = [
  {
    h: 'These terms',
    body: [
      'These Terms of Service govern your use of this website and any services you engage us to perform. SecondChance Media is a division of click2.ai. By using this site or engaging our services, you agree to these terms.',
      'If we sign a separate written agreement, proposal, or statement of work with you, that document controls wherever it conflicts with these terms.',
    ],
  },
  {
    h: 'What we do',
    body: [
      'We provide digital marketing services to animal welfare nonprofits — including rescues, shelters, humane societies, wildlife sanctuaries, zoos, veterinary nonprofits, and specialty animal programs. Our services include Google Ad Grant applications and management, local and AI search visibility, website design and development, and social media content and training.',
      'The specific deliverables, timeline, and price for your organization are set out in your service agreement.',
    ],
  },
  {
    h: 'The free eligibility check',
    body: [
      'The grant eligibility check is offered free of charge, with no obligation and no purchase required. It is an assessment and a set of recommendations based on the information you provide and what is publicly visible about your organization — it is not a guarantee of grant approval, and it is not legal, tax, or accounting advice.',
      'We review each submission by hand, so capacity is limited and requests are handled in the order received.',
    ],
  },
  {
    h: 'Your responsibilities',
    body: [
      'To do the work well, we rely on you to:',
      {
        list: [
          'Give us accurate information about your organization, including your legal name and EIN',
          'Provide the account access we need, and revoke it when the engagement ends',
          'Hold the rights to any photos, logos, text, or other content you give us to publish',
          'Review and approve work when we ask, so timelines can hold',
          'Keep your own account credentials secure',
        ],
      },
      'You are responsible for the accuracy and legality of the content you supply, and for making sure your organization\'s use of our deliverables complies with the rules that apply to it.',
    ],
  },
  {
    h: 'The Google Ad Grant',
    body: [
      'The Google Ad Grant is a program run by Google, not by us. Google alone decides whether your organization is approved, how much of the grant you can use, and whether an account stays in good standing. Google can change its rules or suspend an account at any time.',
      'We manage your account in good faith according to Google\'s published policies and monitor compliance on an ongoing basis. We cannot guarantee approval, reinstatement, or uninterrupted service, and we are not responsible for decisions Google makes.',
    ],
  },
  {
    h: 'Fees, billing, and cancellation',
    body: [
      'Services are billed monthly in advance unless your agreement says otherwise. One-time setup fees are waived with a 12-month commitment. After any initial term, services continue month to month.',
      'Either of us may cancel with 30 days written notice. Fees already paid for a completed period are non-refundable, and work performed up to the cancellation date remains payable. There is no charge to leave beyond that — no exit fee, no penalty.',
      'The advertising budget provided by the Google Ad Grant is free credit from Google. Our fee covers management and is entirely separate; you never pay Google for the granted ad spend.',
    ],
  },
  {
    h: 'Ownership of your work',
    body: [
      'Your content stays yours. Website copy, images, campaign assets, and data we produce specifically for you become yours once paid for, and your accounts remain in your name throughout.',
      'We keep ownership of our own underlying methods, templates, internal tools, and know-how, along with any general skills or experience we gain. If you leave, we will export and hand over your data and assets on request — that is a commitment, not a courtesy.',
    ],
  },
  {
    h: 'Third-party platforms',
    body: [
      'Our work runs on platforms we do not control — Google Ads, Google Analytics, Search Console, website hosts, and social media networks among them. Your use of those platforms is governed by their terms, and they can change their rules, pricing, or availability at any time. We are not responsible for their outages, policy changes, or decisions.',
    ],
  },
  {
    h: 'Results',
    body: [
      'We commit to performing the work described in your agreement and to reporting on it honestly, in plain English, every month.',
      'We do not guarantee specific outcomes. Search rankings, ad performance, donation totals, and adoption numbers depend on factors no agency controls, including competition, seasonality, platform algorithm changes, and your own capacity. Any figures we discuss are illustrations, not promises. We will not invent numbers to make a case.',
    ],
  },
  {
    h: 'Confidentiality',
    body: [
      'Each of us may learn non-public information about the other. We will each keep it confidential, use it only for the engagement, and protect it with reasonable care. This does not apply to information that is already public, was already known, or must be disclosed by law.',
      'We will not name your organization as a client, quote you, or publish results about your account without your written permission.',
    ],
  },
  {
    h: 'Disclaimer of warranties',
    body: [
      'This website and its content are provided "as is," without warranties of any kind, express or implied, including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the site will be uninterrupted or error free. Nothing on this site is legal, tax, accounting, or financial advice.',
    ],
  },
  {
    h: 'Limitation of liability',
    body: [
      'To the fullest extent permitted by law, neither SecondChance Media nor click2.ai is liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, lost donations, lost data, or lost goodwill, arising out of your use of this site or our services.',
      'Our total liability for any claim relating to our services is limited to the fees you paid us in the three months before the claim arose. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
    ],
  },
  {
    h: 'Indemnification',
    body: [
      'You agree to indemnify and hold harmless SecondChance Media and click2.ai from claims arising out of content you supply, your use of our deliverables, or your breach of these terms — including claims that your content infringes someone else\'s rights.',
    ],
  },
  {
    h: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws rules. Any dispute will be brought in the state or federal courts located in Broward County, Florida, and both of us consent to that jurisdiction.',
      'Before filing anything, we ask that you contact us directly. Nearly everything is faster to fix with a phone call.',
    ],
  },
  {
    h: 'Changes to these terms',
    body: [
      'We may update these terms from time to time. The revision date at the top of this page shows when. If a change materially affects an active engagement, we will notify you directly. Continuing to use the site or our services after a change means you accept the updated terms.',
    ],
  },
  {
    h: 'Contact',
    body: [
      'Questions about these terms? Email mel@click2-ai.com, call 305-709-1382, or write to SecondChance Media, 7420 Wisteria Ave, Parkland, Florida 33076.',
    ],
  },
]

export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy'
  const sections = isPrivacy ? PRIVACY : TERMS
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service'

  return (
    <div className="min-h-screen bg-paper antialiased">
      <PageMeta
        title={`${title} — SecondChance Media`}
        description={
          isPrivacy
            ? 'How SecondChance Media collects, uses, and protects information from animal welfare nonprofits — in plain English.'
            : 'The terms that govern SecondChance Media services for animal welfare nonprofits — billing, ownership, and what we do and do not promise.'
        }
      />
      <SiteHeader />
      <main>
        <CorkBoard className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <TornCard className="relative p-6 sm:p-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <PushPin className="h-6 w-6" />
              </div>
              <WashiTape color="red" className="absolute -top-2 left-8 w-24 rotate-[-3deg]" />
              <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
                Last updated: {LAST_UPDATED}
              </span>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                {title}
              </h1>
              <p className="mt-4 text-ink/70 leading-relaxed">
                SecondChance Media is a division of click2.ai. We wrote this to be read, not
                skimmed past — if anything here is unclear, email us and a person will explain it.
              </p>
              <div className="mt-10 space-y-8">
                {sections.map((s) => (
                  <section key={s.h} className="border-b-2 border-dashed border-ink/10 pb-8 last:border-0 last:pb-0">
                    <h2 className="text-lg font-bold text-ink font-serif">{s.h}</h2>
                    {s.body.map((block, i) =>
                      typeof block === 'string' ? (
                        <p key={i} className="mt-3 text-ink/70 leading-relaxed">{block}</p>
                      ) : (
                        <ul key={i} className="mt-3 space-y-2">
                          {block.list.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-ink/70 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </section>
                ))}
              </div>
            </TornCard>
          </div>
        </CorkBoard>
      </main>
      <Footer />
    </div>
  )
}
