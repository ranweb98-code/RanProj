import type { LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'

export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

interface ServicesCarousel3dProps {
  items: ServiceItem[]
}

export default function ServicesCarousel3d({ items }: ServicesCarousel3dProps) {
  const n = items.length

  return (
    <div
      className="services-carousel-scene"
      aria-label="Services carousel"
      style={{ '--n': n } as CSSProperties}
    >
      <div className="services-carousel-a3d">
        {items.map((item, i) => {
          const Icon = item.icon
          return (
            <article
              key={item.title}
              className="services-carousel-card"
              style={{ '--i': i } as CSSProperties}
            >
              <div className="services-carousel-card-icon">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="services-carousel-card-title">{item.title}</h3>
              <p className="services-carousel-card-desc">{item.description}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
