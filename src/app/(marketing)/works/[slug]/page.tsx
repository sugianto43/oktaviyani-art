import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { artworkService } from '@/features/artworks/services/artworkService'
import { Container } from '@/components/layout'
import { ArtworkImage, ArtworkLightbox, ArtworkMetadata } from '@/components/artwork'
import { Button } from '@/components/ui'
import { buildMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/lib/seo/JsonLd'
import { siteUrl } from '@/lib/seo/site'

export const dynamic = 'force-dynamic'

interface ArtworkPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)
  if (!artwork) return { title: 'Not Found' }
  return buildMetadata({
    title: artwork.title,
    description: artwork.description,
    path: `/works/${artwork.slug}`,
    image: artwork.image.src,
  })
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)

  if (!artwork) notFound()

  const AVAILABILITY_SCHEMA: Partial<Record<typeof artwork.status, string>> = {
    available: 'https://schema.org/InStock',
    sold: 'https://schema.org/SoldOut',
  }
  const availability = AVAILABILITY_SCHEMA[artwork.status]

  return (
    <section className="py-16 md:py-24">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'VisualArtwork',
          name: artwork.title,
          image: artwork.image.src,
          description: artwork.description,
          dateCreated: String(artwork.year),
          artMedium: artwork.medium,
          artform: artwork.category,
          creator: { '@type': 'Person', name: 'Oktaviyani' },
          url: `${siteUrl}/works/${artwork.slug}`,
          ...(availability
            ? {
                offers: { '@type': 'Offer', availability, url: `${siteUrl}/works/${artwork.slug}` },
              }
            : {}),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'Works', item: `${siteUrl}/works` },
            {
              '@type': 'ListItem',
              position: 3,
              name: artwork.title,
              item: `${siteUrl}/works/${artwork.slug}`,
            },
          ],
        }}
      />
      <Container>
        <Link
          href="/works"
          className="mb-8 inline-block font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
        >
          &larr; Works
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ArtworkLightbox image={artwork.image} alt={artwork.title}>
            <ArtworkImage
              image={artwork.image}
              alt={artwork.title}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </ArtworkLightbox>

          <div className="max-w-md">
            <h1 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
              {artwork.title}
            </h1>
            <p className="mt-2 font-sans text-sm text-[var(--color-muted-fg)]">
              {artwork.medium}, {artwork.year}
            </p>

            <ArtworkMetadata artwork={artwork} />

            <p className="mt-8 font-sans text-sm leading-relaxed text-[var(--color-muted-fg)]">
              {artwork.description}
            </p>

            <Button href={`/contact?artwork=${artwork.slug}`} className="mt-10 inline-block">
              Inquire
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
