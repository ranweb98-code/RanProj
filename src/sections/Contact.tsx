import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import WordsPullUp from '../components/WordsPullUp'
import AnimatedLetter from '../components/AnimatedLetter'

const STEPS = [
  {
    id: 1,
    question: "What's your name?",
    field: 'name' as const,
    placeholder: 'Your name',
    type: 'input' as const,
  },
  {
    id: 2,
    question: 'How can I reach you?',
    field: 'contact' as const,
    placeholder: '+1 555 000 0000',
    type: 'input' as const,
  },
  {
    id: 3,
    question: 'What should we build?',
    field: 'project' as const,
    placeholder: 'Tell me about your project, timeline, and goals…',
    type: 'textarea' as const,
  },
  {
    id: 4,
    question: 'Thank you!',
    field: null,
    placeholder: '',
    type: 'done' as const,
  },
]

type FormData = {
  name: string
  contact: string
  project: string
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    project: '',
  })

  const current = STEPS[step - 1]
  const progress = (step / STEPS.length) * 100
  const isDone = step === 4

  const canContinue =
    step === 1
      ? form.name.trim().length > 0
      : step === 2
        ? form.contact.trim().length > 0
        : step === 3
          ? form.project.trim().length > 0
          : false

  const handleContinue = () => {
    if (step < 3 && canContinue) setStep((s) => s + 1)
    else if (step === 3 && canContinue) setStep(4)
  }

  const handleBack = () => {
    if (step > 1 && step < 4) setStep((s) => s - 1)
  }

  return (
    <section
      id="contact"
      className="bg-black px-4 py-16 text-[#E1E0CC] sm:px-6 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <WordsPullUp
          as="h2"
          text="Let's build together."
          className="text-3xl font-medium sm:text-4xl md:text-5xl"
        />
        <p className="mx-auto mt-4 max-w-lg text-sm text-primary/70 md:text-base">
          Share your business, audience, and what success looks like. I usually
          reply within 24 hours, often faster on WhatsApp.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl bg-[#101010] p-6 sm:p-8">
          <div className="mb-8 h-1 w-full overflow-hidden rounded-full bg-[#212121]">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-h-[200px] text-left"
            >
              <h3 className="mb-6 text-lg font-medium text-primary sm:text-xl">
                {current.question}
              </h3>

              {current.type === 'input' && current.field && (
                <input
                  type="text"
                  value={form[current.field]}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      [current.field!]: e.target.value,
                    }))
                  }
                  placeholder={current.placeholder}
                  className="w-full rounded-xl border border-white/10 bg-[#212121] px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-gray-500 outline-none transition-colors focus:border-primary/50"
                  autoFocus
                />
              )}

              {current.type === 'textarea' && (
                <textarea
                  value={form.project}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, project: e.target.value }))
                  }
                  placeholder={current.placeholder}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#212121] px-4 py-3 text-sm text-[#E1E0CC] placeholder:text-gray-500 outline-none transition-colors focus:border-primary/50"
                  autoFocus
                />
              )}

              {current.type === 'done' && (
                <p className="text-sm text-gray-400 sm:text-base">
                  I&apos;ll get back to you as soon as I can.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {!isDone && (
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-medium text-gray-400 transition-colors hover:text-primary disabled:opacity-30 sm:text-sm"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleContinue}
                disabled={!canContinue}
                className="rounded-full bg-primary px-6 py-2.5 text-xs font-medium text-black transition-opacity hover:opacity-90 disabled:opacity-40 sm:text-sm"
              >
                Continue
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 hidden sm:block">
          <AnimatedLetter
            text="wb.dev"
            className="justify-center text-xs tracking-[0.3em] text-gray-600 uppercase"
          />
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center">
          <span>© 2026 — Web builds & landing pages.</span>
          <span className="text-center sm:text-right">
            Built with care — performance, clarity, and shipping on time.
          </span>
        </footer>
      </div>
    </section>
  )
}

