import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Audit from './pages/Audit'
import Services from './pages/Services'
import WebDesign from './pages/services/WebDesign'
import LocalSEO from './pages/services/LocalSEO'
import GoogleAdGrant from './pages/services/GoogleAdGrant'
import SocialMedia from './pages/services/SocialMedia'
import Pricing from './pages/Pricing'
import GetStarted from './pages/GetStarted'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audit" element={<Audit />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/web-design" element={<WebDesign />} />
      <Route path="/services/local-seo" element={<LocalSEO />} />
      <Route path="/services/google-ad-grant" element={<GoogleAdGrant />} />
      <Route path="/services/social-media" element={<SocialMedia />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Legal type="privacy" />} />
      <Route path="/terms" element={<Legal type="terms" />} />
    </Routes>
  )
}
