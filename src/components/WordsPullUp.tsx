import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WORD_CLASS =
  'inline-block min-h-[1.2em] align-baseline pb-[0.15em] mr-[0.2em] last:mr-0'

interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
}

export default function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  as: Tag = 'h2',
}: WordsPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const words = text.split(' ')
  const useGradient = className.includes('hero-heading')

  return (
    <Tag
      ref={ref}
      className={className}
      style={useGradient ? undefined : { color: '#E1E0CC' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={WORD_CLASS}
          initial={{ opacity: 0, y: '0.35em' }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '0.35em' }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
      {showAsterisk && (
        <sup className="ml-0.5 text-[0.35em] font-normal align-super opacity-80">*</sup>
      )}
    </Tag>
  )
}
