/** Override with VITE_* in `.env` (see `.env.example`). */
export const SITE = {
  /** Israeli mobile 05… → use 9725… in env, or rely on default below */
  whatsappNumber:
    import.meta.env.VITE_WHATSAPP_NUMBER ?? '972503610061',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL ?? 'ranweb98@gmail.com',
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '',
  whatsappDefaultMessage:
    'Hi! I saw wb.dev and would like to discuss a new website project.',
} as const

export const SECTIONS = {
  home: 'home',
  about: 'about',
  why: 'why',
  services: 'services',
  projects: 'projects',
  contact: 'contact',
} as const
