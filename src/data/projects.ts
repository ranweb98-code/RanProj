export type ProjectMedia =
  | { type: 'video'; src: string; alt: string }
  | { type: 'image'; src: string; alt: string }

export interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  media: ProjectMedia
  secondaryImage?: string
}

const LIA_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85'

const DREAM_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85'

const KUBE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

export const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Kube Eliyahu',
    description:
      'Home-kitchen brand site with dynamic menu, testimonials, and warm storytelling.',
    tags: ['React', 'Vite', 'Tailwind'],
    media: {
      type: 'video',
      src: KUBE_VIDEO,
      alt: 'Kube Eliyahu home-kitchen brand website preview',
    },
    secondaryImage: LIA_IMAGE,
  },
  {
    number: '02',
    title: 'LIA Estate',
    description:
      'Property showcase with clean layout, smooth UX, and emphasis on visuals.',
    tags: ['React', 'Responsive', 'UI'],
    media: {
      type: 'image',
      src: LIA_IMAGE,
      alt: 'LIA Estate property showcase website screenshot',
    },
    secondaryImage: DREAM_IMAGE,
  },
  {
    number: '03',
    title: 'Dream Build Homes',
    description:
      'Construction and investment site with clear services and CTAs pointing to next step.',
    tags: ['Landing', 'CTA', 'Performance'],
    media: {
      type: 'image',
      src: DREAM_IMAGE,
      alt: 'Dream Build Homes construction website screenshot',
    },
    secondaryImage: LIA_IMAGE,
  },
]

/** Base marquee tiles (tripled in ScrollMarquee for seamless loop) */
export const MARQUEE_IMAGES: { src: string; alt: string }[] = [
  { src: LIA_IMAGE, alt: 'LIA Estate project screenshot' },
  { src: DREAM_IMAGE, alt: 'Dream Build Homes project screenshot' },
  { src: LIA_IMAGE, alt: 'LIA Estate layout preview' },
  { src: DREAM_IMAGE, alt: 'Dream Build Homes landing page' },
  {
    src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=640&q=80',
    alt: 'Kube Eliyahu brand site preview',
  },
  {
    src: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=640&q=80',
    alt: 'Portfolio web design preview',
  },
  { src: LIA_IMAGE, alt: 'Property showcase UI' },
  { src: DREAM_IMAGE, alt: 'Construction site CTA design' },
]

export const ABOUT_SCROLL_TEXT =
  'Code with a sales mindset. I build fast, credible sites with clear messaging and strong calls to action—so visitors understand what you offer and feel confident reaching out.'
