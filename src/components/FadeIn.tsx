import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  y?: number
  duration?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  y = 30,
  duration = 0.7,
  className = '',
}: FadeInProps) {
  const motionProps: MotionProps = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '50px', amount: 0 },
    transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}
