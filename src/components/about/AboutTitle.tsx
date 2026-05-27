import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AboutTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
}

export default function AboutTitle({ eyebrow, title, subtitle }: AboutTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.header
      ref={ref}
      className="relative mb-10 text-center md:mb-14"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <motion.p
          className="about-eyebrow mb-4 font-display text-[11px] font-bold uppercase tracking-[0.45em] text-gold sm:text-xs"
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={isInView ? { opacity: 1, letterSpacing: '0.45em' } : {}}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        className="about-premium-title font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {title.includes(' ') ? (
          <>
            <span className="font-serif font-normal italic text-gold-light">
              {title.split(' ')[0]}
            </span>
            <span className="ml-[0.12em]">{title.split(' ').slice(1).join(' ')}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mx-auto mt-5 max-w-md text-sm text-gold-dim/90 sm:text-base"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className="about-title-line mx-auto mt-8 h-px w-24"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.header>
  )
}
