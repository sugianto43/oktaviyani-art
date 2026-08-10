'use client'

import { useEffect } from 'react'
import { Container } from '@/components/layout'

export default function ExhibitionsError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
          <p className="font-sans text-sm text-[var(--color-muted-fg)]">
            Something went wrong loading the exhibitions.
          </p>
          <button
            onClick={retry}
            className="border border-[var(--color-fg)] px-6 py-3 font-sans text-xs tracking-widest uppercase transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
          >
            Try again
          </button>
        </div>
      </Container>
    </section>
  )
}
