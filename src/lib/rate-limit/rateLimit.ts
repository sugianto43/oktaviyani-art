// In-memory fixed-window rate limiter. Resets on server restart and does
// not share state across instances — sufficient for a single-instance
// deploy; swap for a shared store (e.g. Redis) if scaling horizontally.
const hits = new Map<string, { count: number; resetAt: number }>()

interface RateLimitResult {
  success: boolean
  remaining: number
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const entry = hits.get(key)

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs })
    return { success: true, remaining: limit - 1 }
  }

  if (entry.count >= limit) {
    return { success: false, remaining: 0 }
  }

  entry.count += 1
  return { success: true, remaining: limit - entry.count }
}
