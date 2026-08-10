import { describe, expect, it } from 'vitest'
import { rateLimit } from './rateLimit'

describe('rateLimit', () => {
  it('allows requests under the limit', () => {
    const key = `test-${Math.random()}`
    const first = rateLimit(key, 3, 60_000)
    const second = rateLimit(key, 3, 60_000)
    expect(first.success).toBe(true)
    expect(second.success).toBe(true)
    expect(second.remaining).toBe(1)
  })

  it('blocks requests once the limit is reached', () => {
    const key = `test-${Math.random()}`
    rateLimit(key, 2, 60_000)
    rateLimit(key, 2, 60_000)
    const third = rateLimit(key, 2, 60_000)
    expect(third.success).toBe(false)
    expect(third.remaining).toBe(0)
  })

  it('tracks separate keys independently', () => {
    const keyA = `test-a-${Math.random()}`
    const keyB = `test-b-${Math.random()}`
    rateLimit(keyA, 1, 60_000)
    const resultB = rateLimit(keyB, 1, 60_000)
    expect(resultB.success).toBe(true)
  })
})
