import { Container } from '@/components/layout'

export default function AboutLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="aspect-[3/4] w-full animate-pulse rounded bg-[var(--color-border-default)]" />
          <div className="max-w-md space-y-4">
            <div className="h-10 w-2/3 animate-pulse rounded bg-[var(--color-border-default)]" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-[var(--color-border-default)]" />
            <div className="mt-6 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-[var(--color-border-default)]" />
              <div className="h-4 w-full animate-pulse rounded bg-[var(--color-border-default)]" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-[var(--color-border-default)]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
