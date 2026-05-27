import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'How long does a typical website project take?',
    answer:
      'A focused landing page often ships in 1–2 weeks. Brochure or multi-page sites usually take 2–4 weeks, depending on content, revisions, and integrations.',
  },
  {
    question: 'Do you build sites for businesses outside Israel?',
    answer:
      'Yes. I work remotely with Hebrew and English projects. Calls, briefs, and handoffs can be done over WhatsApp, email, or video.',
  },
  {
    question: 'Can you connect my forms to WhatsApp or email?',
    answer:
      'Absolutely. I set up lead flows so inquiries land where you already work—WhatsApp, email, CRM, or Google Sheets—so no lead gets lost.',
  },
  {
    question: "What's included in a landing page package?",
    answer:
      'Clear structure, mobile-first UI, fast performance, on-page messaging tuned for conversion, contact or lead forms, and basic SEO setup (titles, meta, speed).',
  },
  {
    question: 'Do you handle hosting, domain, and updates after launch?',
    answer:
      'I can guide or set up hosting and domain on your preferred provider. After launch, I offer light update blocks or hand you a simple stack you can maintain.',
  },
]

const NAV_LINKS = ['About', 'Projects', 'Services', 'Contact']
const PAGE_LINKS = ['Home', 'Portfolio', 'Contact']

export default function CtaFaqFooter() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [ctaShadow, setCtaShadow] = useState('0 12px 32px rgba(0, 0, 0, 0.5), 0 0 40px rgba(232, 200, 114, 0.15)')

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="relative bg-black text-[#E1E0CC]">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06]" />

      <main className="relative py-20 max-[900px]:py-[60px]">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <div className="grid grid-cols-[1.6fr_1fr] items-stretch gap-[30px] max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
            <div
              className="c5-animated-gradient relative flex flex-col items-center justify-center overflow-hidden rounded-[24px] border border-gold/20 px-10 py-20 text-center"
              style={{
                boxShadow:
                  '0 16px 48px rgba(0, 0, 0, 0.6), 0 0 80px -20px rgba(232, 200, 114, 0.12)',
              }}
            >
              <h2
                className="mb-[15px] font-medium leading-[1.1] text-[#F2EBD8] max-[600px]:text-[2.25rem]"
                style={{ fontSize: '3.5rem', letterSpacing: '-0.03em' }}
              >
                Ready to launch
                <br />
                <span className="font-serif italic text-primary">a site that converts?</span>
              </h2>
              <p className="mb-[30px] max-w-md text-[0.9rem] font-normal text-primary/70">
                Landing pages & business sites built for clarity, speed, and real leads.
              </p>
              <button
                type="button"
                className="cursor-pointer border-none bg-primary font-semibold text-black transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  boxShadow: ctaShadow,
                }}
                onMouseEnter={() =>
                  setCtaShadow(
                    '0 16px 40px rgba(0, 0, 0, 0.55), 0 0 56px rgba(232, 200, 114, 0.28)',
                  )
                }
                onMouseLeave={() =>
                  setCtaShadow(
                    '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 40px rgba(232, 200, 114, 0.15)',
                  )
                }
              >
                Start your project
              </button>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {FAQ_ITEMS.map((item, index) => {
                const isActive = activeIndex === index
                return (
                  <div
                    key={item.question}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleFaq(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleFaq(index)
                      }
                    }}
                    className={`cursor-pointer rounded-[10px] border bg-[#212121] px-5 py-[18px] transition-all duration-200 ${
                      isActive
                        ? 'border-gold/35 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                        : 'border-white/8 shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:border-gold/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[0.9rem] font-medium text-[#E1E0CC]">
                      <span className="pr-3 text-left">{item.question}</span>
                      {isActive ? (
                        <ChevronUp size={20} className="shrink-0 text-gold" />
                      ) : (
                        <ChevronDown size={20} className="shrink-0 text-gray-500" />
                      )}
                    </div>
                    {isActive && (
                      <p className="mt-3 text-[0.9rem] leading-[1.6] text-gray-400">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-white/5 bg-[#101010] pb-5 pt-20 max-[900px]:pt-[60px]">
        <div className="mx-auto w-full max-w-[1100px] px-5">
          <div className="mb-[50px] grid grid-cols-[2fr_1fr_1fr_2fr] gap-10 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            <div>
              <p className="about-premium-title mb-[15px] font-display text-xl font-extrabold tracking-tight">
                wb.dev
              </p>
              <p className="max-w-[220px] text-[0.85rem] leading-[1.6] text-gray-500">
                Conversion-focused web builds—landing pages and business sites that turn
                visitors into conversations.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-[0.95rem] font-semibold text-primary">Navigation</h4>
              <ul>
                {NAV_LINKS.map((label) => (
                  <li key={label} className="mb-3">
                    <a
                      href="#"
                      className="text-[0.85rem] text-gray-500 no-underline transition-colors duration-200 hover:text-[#E1E0CC]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.95rem] font-semibold text-primary">Pages</h4>
              <ul>
                {PAGE_LINKS.map((label) => (
                  <li key={label} className="mb-3">
                    <a
                      href="#"
                      className="text-[0.85rem] text-gray-500 no-underline transition-colors duration-200 hover:text-[#E1E0CC]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[0.95rem] font-semibold text-primary">Newsletter</h4>
              <p className="mb-[15px] text-[0.85rem] text-gray-500">
                Tips on conversion-focused sites—no spam, just practical notes.
              </p>
              <div className="flex gap-[10px] max-[480px]:flex-col">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-grow rounded-[10px] border border-white/10 bg-[#212121] text-[0.9rem] text-[#E1E0CC] outline-none transition-colors duration-200 placeholder:text-gray-600 focus:border-gold/40"
                  style={{
                    padding: '12px 16px',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                  }}
                />
                <button
                  type="button"
                  className="cursor-pointer rounded-[10px] border-none bg-primary font-semibold text-black transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: '12px 28px',
                    fontSize: '0.9rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.45), 0 0 24px rgba(232,200,114,0.12)',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between border-t border-white/5 pb-[10px] pt-[25px] text-[0.85rem] text-gray-500 max-[480px]:flex-col max-[480px]:items-center max-[480px]:gap-[15px]">
            <span>All rights reserved. © 2026 wb.dev</span>
            <span>Web builds & landing pages — performance, clarity, on time.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
