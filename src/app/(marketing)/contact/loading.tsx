import { Container } from '@/components/layout'

export default function ContactLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="space-y-4">
            <div className="h-10 w-2/3 animate-pulse rounded bg-[var(--color-border-default)]" />
            <div className="h-4 w-full animate-pulse rounded bg-[var(--color-border-default)]" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-[var(--color-border-default)]" />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-full animate-pulse rounded bg-[var(--color-border-default)]"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
