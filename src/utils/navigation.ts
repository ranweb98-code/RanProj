import { SITE } from '../config/site'

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

export function hasWhatsAppNumber() {
  return SITE.whatsappNumber.replace(/\D/g, '').length >= 10
}

export function openWhatsApp(message?: string) {
  const phone = SITE.whatsappNumber.replace(/\D/g, '')
  if (phone.length < 10) {
    scrollToSection('contact')
    return
  }
  const text = encodeURIComponent(message ?? SITE.whatsappDefaultMessage)
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer')
}

export function openEmail(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body })
  window.location.href = `mailto:${SITE.contactEmail}?${params.toString()}`
}

export type InquiryForm = {
  name: string
  contact: string
  project: string
}

export function buildInquiryMessage(form: InquiryForm) {
  return [
    `Hi, I'm ${form.name}.`,
    '',
    `How to reach me: ${form.contact}`,
    '',
    'Project details:',
    form.project,
  ].join('\n')
}

export function sendInquiry(form: InquiryForm) {
  const message = buildInquiryMessage(form)
  if (hasWhatsAppNumber()) {
    openWhatsApp(message)
    return
  }
  openEmail('New project inquiry from wb.dev', message)
}

export function openProjectInquiry(projectTitle: string) {
  const message = `Hi! I'm interested in your "${projectTitle}" project. I'd like to discuss something similar for my business.`
  if (hasWhatsAppNumber()) {
    openWhatsApp(message)
    return
  }
  scrollToSection('contact')
}
