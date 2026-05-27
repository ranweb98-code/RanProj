import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'

interface ServiceCardPremiumProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function ServiceCardPremium({
  title,
  description,
  icon: Icon,
  index,
}: ServiceCardPremiumProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      className="about-service-card group relative overflow-hidden rounded-2xl border border-gold/15 p-7 sm:p-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, y: 24 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="about-service-shine pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <motion.div
        className="mb-5 inline-flex rounded-xl border border-gold/25 bg-gold/10 p-3 text-gold"
        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </motion.div>

      <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-gold-light sm:text-2xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#B8B0A0] sm:text-base">{description}</p>

      <span className="mt-6 block h-0.5 w-0 bg-gradient-to-r from-gold via-gold/60 to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}
