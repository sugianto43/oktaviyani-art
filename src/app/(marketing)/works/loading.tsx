import { Container } from '@/components/layout'

export default function WorksLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="h-12 w-32 animate-pulse rounded bg-[var(--color-border-default)]" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-20 animate-pulse rounded bg-[var(--color-border-default)]"
              />
            ))}
          </div>
        </div>

        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="mb-8 break-inside-avoid">
              <div
                className="animate-pulse rounded bg-[var(--color-border-default)]"
                style={{ aspectRatio: i % 2 === 0 ? '3/4' : '4/5' }}
              />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-3/4 animate-pulse rounded bg-[var(--color-border-default)]" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-[var(--color-border-default)]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
