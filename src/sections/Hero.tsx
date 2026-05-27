import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'
import Marquee from '../components/Marquee'
import FadeIn from '../components/FadeIn'
import SectionLink from '../components/SectionLink'
import { SECTIONS } from '../config/site'

const NAV_LINKS: { label: string; target: (typeof SECTIONS)[keyof typeof SECTIONS] }[] = [
  { label: 'About', target: SECTIONS.about },
  { label: 'Projects', target: SECTIONS.projects },
  { label: 'Why me', target: SECTIONS.why },
  { label: 'Contact', target: SECTIONS.contact },
]

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full p-4 md:p-6">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Cinematic background video for wb.dev portfolio"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        <FadeIn delay={0} y={-20} className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <nav>
            <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8">
              {NAV_LINKS.map(({ label, target }) => (
                <SectionLink
                  key={label}
                  target={target}
                  className="cursor-pointer text-[10px] text-[rgba(225,224,204,0.8)] no-underline transition-colors hover:text-[#E1E0CC] sm:text-xs md:text-sm"
                >
                  {label}
                </SectionLink>
              ))}
              <SectionLink
                target={SECTIONS.contact}
                className="ml-1 cursor-pointer whitespace-nowrap text-[10px] font-medium text-primary no-underline transition-opacity hover:opacity-80 sm:text-xs md:text-sm"
              >
                Start a project
              </SectionLink>
            </div>
          </nav>
        </FadeIn>

        <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end p-4 pb-0 sm:p-6 md:p-8">
          <div className="grid grid-cols-12 items-end gap-6 md:gap-4">
            <div className="col-span-12 lg:col-span-8">
              <FadeIn delay={0.15} y={40}>
                <WordsPullUp
                  as="h1"
                  text="Websites that bring clients."
                  showAsterisk
                  className="font-sharpie text-[9vw] font-extrabold leading-[0.92] tracking-[-0.02em] text-[#E1E0CC] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]"
                />
              </FadeIn>
            </div>

            <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
              <FadeIn delay={0.35} y={20}>
                <p className="text-xs text-primary/70">
                  Web Developer & Conversion-focused builds
                </p>
                <p
                  className="mt-2 text-xs text-primary/70 sm:text-sm md:text-base"
                  style={{ lineHeight: 1.2 }}
                >
                  Landing pages, brochure sites, and light automations for businesses
                  that want to grow with clarity and conversions.
                </p>
              </FadeIn>

              <FadeIn delay={0.5} y={20}>
                <div className="flex flex-col gap-3">
                  <SectionLink
                    target={SECTIONS.contact}
                    className="group inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-primary pl-5 pr-1.5 py-1.5 text-sm font-medium text-black no-underline transition-all duration-300 hover:gap-4"
                  >
                    <span>Let&apos;s build your site</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-primary transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </SectionLink>
                  <div className="flex items-center gap-2 text-[10px] text-primary/60 sm:text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Open for new projects
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <Marquee />
        </div>
      </div>
    </section>
  )
}
