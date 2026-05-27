import { useEffect } from 'react'
import Hero from './sections/Hero'
import ScrollMarquee from './components/ScrollMarquee'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import CtaFaqFooter from './sections/CtaFaqFooter'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
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
