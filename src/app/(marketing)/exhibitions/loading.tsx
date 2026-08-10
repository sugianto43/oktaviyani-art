import { Container } from '@/components/layout'

export default function ExhibitionsLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 h-12 w-56 animate-pulse rounded bg-[var(--color-border-default)]" />

        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-b border-[var(--color-border-default)] py-8 md:flex-row md:gap-10"
            >
              <div className="h-8 w-16 animate-pulse rounded bg-[var(--color-border-default)] md:w-24" />
              <div className="flex-1 space-y-3">
                <div className="h-6 w-1/3 animate-pulse rounded bg-[var(--color-border-default)]" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-[var(--color-border-default)]" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
