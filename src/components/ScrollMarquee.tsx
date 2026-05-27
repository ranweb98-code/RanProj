import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MARQUEE_ROW1_IMAGES, MARQUEE_ROW2_IMAGES } from '../data/projects'

const TILE_WIDTH = 420
const TILE_HEIGHT = 270

/** How far rows travel while the section scrolls through the viewport */
const TRAVEL_PX = 520
const START_OFFSET = 220

function tripleImages(images: { src: string; alt: string }[]) {
  return [...images, ...images, ...images]
}

const ROW1_IMAGES = tripleImages(MARQUEE_ROW1_IMAGES)
const ROW2_IMAGES = tripleImages(MARQUEE_ROW2_IMAGES)

export default function ScrollMarquee() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.25,
    restDelta: 0.001,
  })

  const row1X = useTransform(
    smoothProgress,
    [0, 1],
    [-START_OFFSET, TRAVEL_PX - START_OFFSET],
  )
  const row2X = useTransform(
    smoothProgress,
    [0, 1],
    [START_OFFSET, -(TRAVEL_PX - START_OFFSET)],
  )

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Project gallery marquee"
    >
      <div className="flex flex-col gap-3">
        <motion.div style={{ x: row1X }} className="marquee-row flex gap-3">
          {ROW1_IMAGES.map((img, i) => (
            <img
              key={`r1-${i}`}
              src={img.src}
              alt={img.alt}
              width={TILE_WIDTH}
              height={TILE_HEIGHT}
              loading="lazy"
              decoding="async"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
        <motion.div style={{ x: row2X }} className="marquee-row flex gap-3">
          {ROW2_IMAGES.map((img, i) => (
            <img
              key={`r2-${i}`}
              src={img.src}
              alt={img.alt}
              width={TILE_WIDTH}
              height={TILE_HEIGHT}
              loading="lazy"
              decoding="async"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
