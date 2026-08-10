import type { Metadata } from 'next'
import { exhibitionService } from '@/features/exhibitions/services/exhibitionService'
import { Container } from '@/components/layout'
import { ExhibitionItem } from '@/components/exhibition'
import { buildMetadata } from '@/lib/seo/metadata'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  title: 'Exhibitions',
  description: 'Solo and group exhibition history by Oktaviyani.',
  path: '/exhibitions',
})

export default async function ExhibitionsPage() {
  const exhibitions = await exhibitionService.list()

  return (
    <section aria-labelledby="exhibitions-heading" className="py-16 md:py-24">
      <Container>
        <h1
          id="exhibitions-heading"
          className="mb-12 font-serif text-5xl font-light tracking-tight md:text-7xl"
        >
          Exhibitions
        </h1>

        {exhibitions.length === 0 ? (
          <p className="font-sans text-sm text-[var(--color-muted-fg)]">
            No exhibitions to show yet.
          </p>
        ) : (
          <ul>
            {exhibitions.map((exhibition) => (
              <ExhibitionItem key={exhibition.id} exhibition={exhibition} />
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
