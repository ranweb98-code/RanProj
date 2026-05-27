import { useEffect } from 'react'
import { SECTIONS } from './config/site'
import { scrollToSection } from './utils/navigation'
import Hero from './sections/Hero'
import ScrollMarquee from './components/ScrollMarquee'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import CtaFaqFooter from './sections/CtaFaqFooter'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const hash = window.location.hash.replace('#', '')
    const validSections = new Set(Object.values(SECTIONS))

    if (hash && validSections.has(hash as (typeof SECTIONS)[keyof typeof SECTIONS])) {
      requestAnimationFrame(() => scrollToSection(hash))
      return
    }

    if (window.location.hash === '#') {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      <Hero />
      <ScrollMarquee />
      <About />
      <Projects />
      <Contact />
      <CtaFaqFooter />
      <WhatsAppButton />
    </div>
  )
}
