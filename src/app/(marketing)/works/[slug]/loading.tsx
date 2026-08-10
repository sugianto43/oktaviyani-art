import { Container } from '@/components/layout'
import { Skeleton } from '@/components/ui'

export default function ArtworkLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Skeleton className="mb-8 h-4 w-16" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Skeleton className="aspect-[4/5] w-full" />

          <div className="max-w-md">
            <Skeleton className="h-10 w-3/4 md:h-14" />
            <Skeleton className="mt-3 h-4 w-1/2" />

            <div className="mt-8 space-y-3 border-t border-[var(--color-border-default)] pt-6">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>

            <Skeleton className="mt-10 h-12 w-32" />
          </div>
        </div>
      </Container>
    </section>
  )
}
