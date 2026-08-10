'use client'

import { useEffect } from 'react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui'

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
          <Button onClick={retry}>Try again</Button>
        </div>
      </Container>
    </section>
  )
}
