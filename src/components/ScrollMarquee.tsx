import { useEffect, useRef } from 'react'
import { MARQUEE_ROW1_IMAGES, MARQUEE_ROW2_IMAGES } from '../data/projects'

const TILE_WIDTH = 420
const TILE_HEIGHT = 270
const INITIAL_OFFSET = 200

function tripleImages(images: { src: string; alt: string }[]) {
  return [...images, ...images, ...images]
}

const ROW1_IMAGES = tripleImages(MARQUEE_ROW1_IMAGES)
const ROW2_IMAGES = tripleImages(MARQUEE_ROW2_IMAGES)

export default function ScrollMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      rafId.current = null
      const el = sectionRef.current
      const row1 = row1Ref.current
      const row2 = row2Ref.current
      if (!el || !row1 || !row2) return

      const rect = el.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const x1 = scrollOffset - INITIAL_OFFSET
      const x2 = -(scrollOffset - INITIAL_OFFSET)

      row1.style.transform = `translate3d(${x1}px, 0, 0)`
      row2.style.transform = `translate3d(${x2}px, 0, 0)`
    }

    const schedule = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(update)
      }
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Project gallery marquee"
    >
      <div className="flex flex-col gap-3">
        <div
          ref={row1Ref}
          className="marquee-row flex gap-3"
          style={{ transform: `translate3d(-${INITIAL_OFFSET}px, 0, 0)` }}
        >
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
        </div>
        <div
          ref={row2Ref}
          className="marquee-row flex gap-3"
          style={{ transform: `translate3d(${INITIAL_OFFSET}px, 0, 0)` }}
        >
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
        </div>
      </div>
    </section>
  )
}
