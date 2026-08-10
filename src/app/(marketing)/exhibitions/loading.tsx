import { Container } from '@/components/layout'
import { Skeleton } from '@/components/ui'

export default function ExhibitionsLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Skeleton className="mb-12 h-12 w-56" />

        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border-b border-[var(--color-border-default)] py-8 md:flex-row md:gap-10"
            >
              <Skeleton className="h-8 w-16 md:w-24" />
              <div className="flex-1 space-y-3">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
