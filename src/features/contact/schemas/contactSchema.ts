import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(100),
  email: z.email('Enter a valid email address').max(200),
  subject: z.string().trim().min(2, 'Subject is too short').max(150),
  message: z.string().trim().min(10, 'Message is too short').max(2000),
  artworkReference: z.string().trim().max(150).optional().or(z.literal('')),
  // Honeypot: real users leave this empty. Checked (not validated) server-side
  // so a filled value fails silently instead of tipping bots off via a 400.
  company: z.string().optional().or(z.literal('')),
})

export type ContactFormValues = z.infer<typeof contactSchema>
