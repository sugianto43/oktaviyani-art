import { Container } from '@/components/layout'
import { Skeleton } from '@/components/ui'

export default function WorksLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Skeleton className="h-12 w-32" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>

        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="mb-8 break-inside-avoid">
              <Skeleton style={{ aspectRatio: i % 2 === 0 ? '3/4' : '4/5' }} />
              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
