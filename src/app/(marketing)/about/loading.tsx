import { Container } from '@/components/layout'
import { Skeleton } from '@/components/ui'

export default function AboutLoading() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Skeleton className="aspect-[3/4] w-full" />
          <div className="max-w-md space-y-4">
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <div className="mt-6 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
