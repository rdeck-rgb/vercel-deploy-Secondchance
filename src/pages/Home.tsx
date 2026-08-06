import { SiteHeader } from '@/components/SiteHeader'
import { StickyMobileCTA } from '@/components/StickyMobileCTA'
import { PageMeta } from '@/components/PageMeta'
import { Hero } from '@/sections/Hero'
import { SocialProof } from '@/sections/SocialProof'
import { PhotoStrip } from '@/sections/PhotoStrip'
import { Problem } from '@/sections/Problem'
import { Services } from '@/sections/Services'
import { Results } from '@/sections/Results'
import { Process } from '@/sections/Process'
import { Primer } from '@/sections/Primer'
import { Founder } from '@/sections/Founder'
import { Comparison } from '@/sections/Comparison'
import { FAQ } from '@/sections/FAQ'
import { BottomCTA } from '@/sections/BottomCTA'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper antialiased scroll-smooth">
      <PageMeta title="SecondChance Media — Digital Marketing for Animal Welfare Nonprofits" description="The digital marketing partner built for animal welfare 501(c)(3) nonprofits. Google Ad Grants, local SEO, web design, and social media — so more animals find homes." />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <PhotoStrip />
        <Primer />
        <Problem />
        <Services />
        <Results />
        <Process />
        <Founder />
        <Comparison />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
