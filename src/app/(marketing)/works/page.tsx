import type { Metadata } from 'next'
import type { ArtworkCategory } from '@/types'
import { artworkService } from '@/features/artworks/services/artworkService'
import { Container } from '@/components/layout'
import { GalleryFilter } from './_components/GalleryFilter'
import { ArtworkGrid } from './_components/ArtworkGrid'
import { buildMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/lib/seo/JsonLd'
import { siteUrl } from '@/lib/seo/site'

export const dynamic = 'force-dynamic'

const VALID_CATEGORIES: ArtworkCategory[] = ['painting', 'portrait', 'abstract', 'landscape']

function parseCategory(raw: unknown): ArtworkCategory | 'all' {
  if (typeof raw === 'string' && VALID_CATEGORIES.includes(raw as ArtworkCategory)) {
    return raw as ArtworkCategory
  }
  return 'all'
}

interface WorksPageProps {
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({ searchParams }: WorksPageProps): Promise<Metadata> {
  const { category } = await searchParams
  const current = parseCategory(category)
  const title =
    current === 'all' ? 'Works' : `${current.charAt(0).toUpperCase()}${current.slice(1)}`
  return buildMetadata({
    title,
    description: `Browse ${current === 'all' ? 'all artworks' : `${current} works`} by Oktaviyani.`,
    path: current === 'all' ? '/works' : `/works?category=${current}`,
  })
}

export default async function WorksPage({ searchParams }: WorksPageProps) {
  const { category } = await searchParams
  const current = parseCategory(category)

  const artworks = await artworkService.list(current === 'all' ? undefined : current)

  return (
    <section aria-labelledby="works-heading" className="py-16 md:py-24">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Works',
          description: `Browse ${current === 'all' ? 'all artworks' : `${current} works`} by Oktaviyani.`,
          url: `${siteUrl}/works`,
        }}
      />
      <Container>
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h1
            id="works-heading"
            className="font-serif text-4xl font-light tracking-tight md:text-5xl"
          >
            Works
          </h1>
          <GalleryFilter current={current} />
        </div>

        <ArtworkGrid artworks={artworks} />
      </Container>
    </section>
  )
}
