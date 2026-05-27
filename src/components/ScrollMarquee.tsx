import { useEffect, useRef, useState } from 'react'
import { MARQUEE_ROW1_IMAGES, MARQUEE_ROW2_IMAGES } from '../data/projects'

const TILE_WIDTH = 420
const TILE_HEIGHT = 270

function tripleImages(images: { src: string; alt: string }[]) {
  return [...images, ...images, ...images]
}

const ROW1_IMAGES = tripleImages(MARQUEE_ROW1_IMAGES)
const ROW2_IMAGES = tripleImages(MARQUEE_ROW2_IMAGES)

export default function ScrollMarquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset1, setOffset1] = useState(-200)
  const [offset2, setOffset2] = useState(200)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

      setOffset1(scrollOffset - 200)
      setOffset2(-(scrollOffset - 200))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const row1 = ROW1_IMAGES
  const row2 = ROW2_IMAGES

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Project gallery marquee"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset1}px)`,
            willChange: 'transform',
          }}
        >
          {row1.map((img, i) => (
            <img
              key={`r1-${i}`}
              src={img.src}
              alt={img.alt}
              width={TILE_WIDTH}
              height={TILE_HEIGHT}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset2}px)`,
            willChange: 'transform',
          }}
        >
          {row2.map((img, i) => (
            <img
              key={`r2-${i}`}
              src={img.src}
              alt={img.alt}
              width={TILE_WIDTH}
              height={TILE_HEIGHT}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
