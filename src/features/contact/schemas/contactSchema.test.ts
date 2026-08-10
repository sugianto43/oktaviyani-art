import { describe, expect, it } from 'vitest'
import { contactSchema } from './contactSchema'

const validPayload = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  subject: 'Commission inquiry',
  message: 'I would like to commission a piece, could we discuss details?',
  artworkReference: '',
  company: '',
}

describe('contactSchema', () => {
  it('accepts a valid payload', () => {
    const result = contactSchema.safeParse(validPayload)
    expect(result.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const result = contactSchema.safeParse({ ...validPayload, email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects a too-short message', () => {
    const result = contactSchema.safeParse({ ...validPayload, message: 'hi' })
    expect(result.success).toBe(false)
  })

  it('rejects a too-short name', () => {
    const result = contactSchema.safeParse({ ...validPayload, name: 'J' })
    expect(result.success).toBe(false)
  })

  it('parses successfully even when the honeypot field is filled (checked separately by the route)', () => {
    const result = contactSchema.safeParse({ ...validPayload, company: 'Acme Corp' })
    expect(result.success).toBe(true)
  })

  it('allows an optional artwork reference', () => {
    const result = contactSchema.safeParse({ ...validPayload, artworkReference: 'the-silence' })
    expect(result.success).toBe(true)
  })
})
