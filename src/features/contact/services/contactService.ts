import type { ContactFormValues } from '../schemas/contactSchema'

export const contactService = {
  async submit(values: ContactFormValues): Promise<void> {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      const body = await response.json().catch(() => null)
      throw new Error(body?.error ?? 'Failed to send message.')
    }
  },
}
