import type { MouseEvent, ReactNode } from 'react'
import { scrollToSection, scrollToTop } from '../utils/navigation'
import { SECTIONS } from '../config/site'

type SectionTarget = (typeof SECTIONS)[keyof typeof SECTIONS] | 'top'

type SectionLinkProps = {
  target: SectionTarget
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function SectionLink({
  target,
  children,
  className = '',
  onClick,
}: SectionLinkProps) {
  const href = target === 'top' ? '#' : `#${target}`

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick?.()
    if (target === 'top') scrollToTop()
    else scrollToSection(target)
    window.history.replaceState(null, '', href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
