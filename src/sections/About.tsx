import {
  Globe,
  Target,
  Zap,
  TrendingUp,
  Search,
  Smartphone,
  Rocket,
  RefreshCw,
} from 'lucide-react'
import AboutTitle from '../components/about/AboutTitle'
import ScrollRevealWords from '../components/about/ScrollRevealWords'
import ServicesCarousel3d from '../components/about/ServicesCarousel3d'
import { ABOUT_SCROLL_TEXT } from '../data/projects'

const SERVICES = [
  {
    title: 'Business websites',
    description:
      'Brochure and brand sites that load fast, read well, and guide visitors toward contact or purchase.',
    icon: Globe,
  },
  {
    title: 'High-converting landing pages',
    description:
      'Structure, headlines, and forms tuned for leads—so clicks turn into conversations.',
    icon: Target,
  },
  {
    title: 'Automations & leads',
    description:
      'Connect forms to WhatsApp, email, and your tools so every lead lands where you work.',
    icon: Zap,
  },
  {
    title: 'Marketing alignment',
    description:
      'Offer, audience, and on-page story—so the site supports how you actually sell.',
    icon: TrendingUp,
  },
  {
    title: 'SEO & performance',
    description:
      'Technical SEO, meta tags, and speed tuning so pages load fast and rank cleaner.',
    icon: Search,
  },
  {
    title: 'Mobile-first UI',
    description:
      'Layouts that feel natural on phones—where most visitors actually land.',
    icon: Smartphone,
  },
  {
    title: 'Launch & handoff',
    description:
      'Domain, hosting setup, and a clear handoff so you are not stuck after go-live.',
    icon: Rocket,
  },
  {
    title: 'Ongoing updates',
    description:
      'Content tweaks, new sections, and fix rounds when your business evolves.',
    icon: RefreshCw,
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-black px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div
        id="why"
        className="about-panel relative mx-auto max-w-6xl overflow-visible rounded-[2rem] border border-gold/20 px-6 py-14 sm:rounded-[2.5rem] sm:px-10 sm:py-20 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          aria-hidden
        >
          <div className="about-orb about-orb-a absolute -left-24 top-0 h-64 w-64 rounded-full blur-[100px]" />
          <div className="about-orb about-orb-b absolute -right-16 bottom-1/4 h-72 w-72 rounded-full blur-[120px]" />
          <div className="bg-noise absolute inset-0 opacity-[0.08]" />
        </div>

        <div className="relative z-10">
          <AboutTitle
            eyebrow="wb.dev"
            title="About me"
            subtitle="Web builds with a sales mindset — outcomes first, pixels second."
          />

          <ScrollRevealWords
            text={ABOUT_SCROLL_TEXT}
            className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-[1.4]"
          />

          <div className="mt-20 md:mt-28">
            <AboutTitle
              eyebrow="What I deliver"
              title="Services"
              subtitle="Focused offerings for businesses that need clarity, speed, and conversion."
            />

            <div className="relative -mx-6 sm:-mx-10">
              <ServicesCarousel3d items={SERVICES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
