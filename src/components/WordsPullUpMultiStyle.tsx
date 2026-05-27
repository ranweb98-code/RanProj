import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WORD_CLASS =
  'inline-block min-h-[1.2em] align-baseline pb-[0.15em] mr-[0.2em] last:mr-0'

export interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  let wordIndex = 0

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center gap-x-[0.2em] ${className}`}
      style={{ color: '#E1E0CC' }}
    >
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ')
        return words.map((word, wIdx) => {
          const delay = wordIndex * 0.08
          wordIndex += 1
          return (
            <motion.span
              key={`${segIdx}-${wIdx}-${word}`}
              className={`${WORD_CLASS} ${segment.className ?? ''}`}
              initial={{ opacity: 0, y: '0.35em' }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: '0.35em' }}
              transition={{
                delay,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          )
        })
      })}
    </div>
  )
}
