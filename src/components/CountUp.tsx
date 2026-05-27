import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface CountUpProps {
  value: number
  suffix?: string
  label: string
}

export default function CountUp({ value, suffix = '', label }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const spring = useSpring(0, { duration: 1.8, bounce: 0 })
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <div ref={ref} className="text-center">
      <motion.span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-primary">
        {display}
      </motion.span>
      <span className="mt-1 block text-[10px] sm:text-xs text-gray-500">{label}</span>
    </div>
  )
}
