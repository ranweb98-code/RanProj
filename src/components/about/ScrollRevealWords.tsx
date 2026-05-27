import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const HIGHLIGHT_WORDS = new Set([
  'sales',
  'fast',
  'credible',
  'messaging',
  'strong',
  'confident',
  'reaching',
])

interface ScrollRevealWordsProps {
  text: string
  className?: string
}

export default function ScrollRevealWords({ text, className = '' }: ScrollRevealWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.88', 'end 0.25'],
  })

  const words = text.split(/\s+/).filter(Boolean)

  return (
    <p
      ref={ref}
      className={`mx-auto max-w-4xl text-center font-medium leading-[1.35] tracking-[-0.02em] ${className}`}
    >
      {words.map((word, i) => (
        <RevealWord
          key={`${word}-${i}`}
          word={word}
          index={i}
          total={words.length}
          progress={scrollYProgress}
          highlight={HIGHLIGHT_WORDS.has(word.replace(/[.,—!?]/g, ''))}
        />
      ))}
    </p>
  )
}

function RevealWord({
  word,
  index,
  total,
  progress,
  highlight,
}: {
  word: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  highlight: boolean
}) {
  const start = index / Math.max(total, 1)
  const end = Math.min((index + 1.2) / Math.max(total, 1), 1)
  const opacity = useTransform(progress, [start, end], [0.12, 1])
  const y = useTransform(progress, [start, end], [18, 0])
  const scale = useTransform(progress, [start, end], [0.96, 1])

  const isHighlight = highlight

  return (
    <motion.span
      className="mr-[0.32em] inline-block origin-bottom"
      style={{ opacity, y, scale }}
    >
      <span
        className={
          isHighlight
            ? 'font-serif italic text-gold-light'
            : 'text-[#F2EBD8]'
        }
      >
        {word}
      </span>
    </motion.span>
  )
}
