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

/** Marquee row 1 — first 11 preview GIFs (tripled in ScrollMarquee) */
export const MARQUEE_ROW1_IMAGES: { src: string; alt: string }[] = [
  { src: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif', alt: 'Space Voyage website preview' },
  { src: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif', alt: 'CodeNest website preview' },
  { src: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif', alt: 'Vex Ventures website preview' },
  { src: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif', alt: 'Stellar AI v2 website preview' },
  { src: 'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif', alt: 'ASME website preview' },
  { src: 'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif', alt: 'Transform Data website preview' },
  { src: 'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif', alt: 'Vitara website preview' },
  { src: 'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif', alt: 'Terra website preview' },
  { src: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif', alt: 'SkyElite website preview' },
  { src: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif', alt: 'Aethera website preview' },
  { src: 'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif', alt: 'DesignPro website preview' },
]

/** Marquee row 2 — remaining 10 preview GIFs (tripled in ScrollMarquee) */
export const MARQUEE_ROW2_IMAGES: { src: string; alt: string }[] = [
  { src: 'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif', alt: 'Stellar AI website preview' },
  { src: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif', alt: 'X Portfolio website preview' },
  { src: 'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif', alt: 'Orbit Web3 website preview' },
  { src: 'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif', alt: 'Nexora website preview' },
  { src: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif', alt: 'EVR Ventures website preview' },
  { src: 'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif', alt: 'Planet Orbit website preview' },
  { src: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif', alt: 'New Era website preview' },
  { src: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif', alt: 'Wealth website preview' },
  { src: 'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif', alt: 'Luminex website preview' },
  { src: 'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif', alt: 'Celestia website preview' },
]

export const ABOUT_SCROLL_TEXT =
  'Code with a sales mindset. I build fast, credible sites with clear messaging and strong calls to action—so visitors understand what you offer and feel confident reaching out.'
