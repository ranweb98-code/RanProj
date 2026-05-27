import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedLetterProps {
  text: string
  className?: string
}

export default function AnimatedLetter({ text, className = '' }: AnimatedLetterProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const totalChars = text.length

  return (
    <p
      ref={ref}
      className={`mx-auto flex max-w-[560px] flex-wrap justify-center font-medium ${className}`}
      style={{ color: '#D7E2EA' }}
    >
      {text.split('').map((char, i) => (
        <AnimatedChar
          key={`${char}-${i}`}
          char={char}
          index={i}
          totalChars={totalChars}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}

function AnimatedChar({
  char,
  index,
  totalChars,
  progress,
}: {
  char: string
  index: number
  totalChars: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const charProgress = index / Math.max(totalChars, 1)
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1],
  )

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>
  }

  if (char === '\n') {
    return <br />
  }

  return (
    <motion.span className="inline-block whitespace-pre" style={{ opacity }}>
      {char}
    </motion.span>
  )
}
