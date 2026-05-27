import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { PROJECTS, type Project, type ProjectMedia } from '../data/projects'
import { openProjectInquiry } from '../utils/navigation'

const TOTAL_CARDS = PROJECTS.length

function ProjectVisual({ media, className }: { media: ProjectMedia; className?: string }) {
  if (media.type === 'video') {
    return (
      <div className={`overflow-hidden rounded-2xl ${className ?? ''}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label={media.alt}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <img
      src={media.src}
      alt={media.alt}
      loading="lazy"
      className={`h-full w-full rounded-2xl object-cover ${className ?? ''}`}
    />
  )
}

function StickyProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03
  const stickyTopRem = 24 + index * 8

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [index / TOTAL_CARDS, (index + 1) / TOTAL_CARDS],
    [1, targetScale],
  )

  const secondarySrc =
    project.secondaryImage ??
    (project.media.type === 'image' ? project.media.src : '')

  return (
    <div
      ref={cardRef}
      className="relative h-[85vh]"
      style={{ top: index * 28 }}
    >
      <motion.article
        style={{
          scale,
          position: 'sticky',
          top: `${stickyTopRem}rem`,
          willChange: 'transform',
        }}
        className="mx-auto flex h-[85vh] max-w-6xl flex-col overflow-hidden rounded-[40px] border border-white/10 bg-[#212121] sm:rounded-[50px] md:rounded-[60px] lg:flex-row"
      >
        <div className="flex h-[45%] w-full shrink-0 lg:h-full lg:w-[40%]">
          <div className="h-full w-full p-4 sm:p-6">
            <ProjectVisual media={project.media} className="h-full min-h-[200px]" />
          </div>
        </div>

        <div className="flex h-[55%] w-full flex-col justify-between p-6 sm:p-8 lg:h-full lg:w-[60%] lg:p-10">
          <div className="mb-4 hidden h-32 overflow-hidden rounded-2xl lg:block lg:h-40">
            {secondarySrc && (
              <img
                src={secondarySrc}
                alt={`${project.title} secondary preview`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div>
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <h3 className="text-2xl font-medium text-primary md:text-3xl">{project.title}</h3>
              <span className="text-sm text-gray-500">{project.number}</span>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={() => openProjectInquiry(project.title)}
              aria-label={`Discuss ${project.title} project`}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-primary transition-colors hover:border-primary/40 hover:bg-white/5"
            >
              <ArrowRight className="h-5 w-5 -rotate-45" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 bg-black px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn className="mb-6 text-center md:mb-10">
          <h2 className="hero-heading text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
            Projects
          </h2>
          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Selected work · 03 Projects
          </p>
        </FadeIn>

        <div className="relative space-y-6 pb-[20vh]">
          {PROJECTS.map((project, i) => (
            <StickyProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
