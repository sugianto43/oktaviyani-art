import type { Metadata } from 'next'
import { exhibitionService } from '@/features/exhibitions/services/exhibitionService'
import { Container } from '@/components/layout'
import { ExhibitionItem } from '@/components/exhibition'

export const metadata: Metadata = {
  title: 'Exhibitions',
  description: 'Solo and group exhibition history by Oktaviyani.',
}

export default async function ExhibitionsPage() {
  const exhibitions = await exhibitionService.list()

  return (
    <section aria-labelledby="exhibitions-heading" className="py-16 md:py-24">
      <Container>
        <h1
          id="exhibitions-heading"
          className="mb-12 font-serif text-4xl font-light tracking-tight md:text-5xl"
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
