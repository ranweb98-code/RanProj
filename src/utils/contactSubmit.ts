import { SITE } from '../config/site'
import type { InquiryForm } from './navigation'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

function looksLikeEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())
}

export async function submitContactToWeb3Forms(form: InquiryForm): Promise<{ ok: true } | { ok: false; message: string }> {
  const accessKey = SITE.web3formsAccessKey.trim()
  if (!accessKey) {
    return { ok: false, message: 'Missing Web3Forms key. Add VITE_WEB3FORMS_ACCESS_KEY to .env' }
  }

  const contact = form.contact.trim()
  const visitorEmail = looksLikeEmail(contact) ? contact : SITE.contactEmail
  const message = [
    `Contact / reply: ${contact}`,
    '',
    'Project:',
    form.project.trim(),
  ].join('\n')

  const payload: Record<string, string> = {
    access_key: accessKey,
    subject: `New inquiry — wb.dev (${form.name.trim()})`,
    name: form.name.trim(),
    email: visitorEmail,
    message,
    from_name: 'wb.dev',
  }
  if (looksLikeEmail(contact)) {
    payload.replyto = contact
  }

  const res = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = (await res.json()) as { success?: boolean; message?: string }

  if (res.ok && data.success) {
    return { ok: true }
  }

  return {
    ok: false,
    message: data.message ?? `Request failed (${res.status})`,
  }
}
