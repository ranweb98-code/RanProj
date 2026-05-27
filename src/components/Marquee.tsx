import { motion } from 'framer-motion'

const ITEMS =
  'React · Vite · Tailwind · TypeScript · Landing pages · GSAP · WhatsApp leads · SEO-ready · Responsive UI · Modern design'

export default function Marquee() {
  const content = `${ITEMS} · ${ITEMS}`

  return (
    <div className="relative overflow-hidden border-t border-white/5 py-3">
      <motion.div
        className="flex whitespace-nowrap text-[10px] sm:text-xs text-gray-500"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <span className="px-4">{content}</span>
        <span className="px-4" aria-hidden>
          {content}
        </span>
      </motion.div>
    </div>
  )
}
