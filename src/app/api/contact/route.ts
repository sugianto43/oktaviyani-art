import { NextResponse } from 'next/server'
import { contactSchema } from '@/features/contact/schemas/contactSchema'
import { rateLimit } from '@/lib/rate-limit/rateLimit'

const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  const { success } = rateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS)

  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  const body = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 })
  }

  // Honeypot tripped: silently report success so bots don't learn to adapt.
  if (parsed.data.company) {
    return NextResponse.json({ success: true })
  }

  // TODO: wire up to an email/CRM provider. For now, log server-side only.
  console.info('[contact] new inquiry', {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
  })

  return NextResponse.json({ success: true })
}
