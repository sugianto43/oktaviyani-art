import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { artworkService } from '@/features/artworks/services/artworkService'
import { Container } from '@/components/layout'
import { ArtworkImage } from '@/components/artwork'

interface ArtworkPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)
  if (!artwork) return { title: 'Not Found' }
  return {
    title: artwork.title,
    description: artwork.description,
  }
}

const STATUS_LABEL: Record<string, string> = {
  available: 'Available',
  sold: 'Sold',
  'not-for-sale': 'Not for Sale',
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params
  const artwork = await artworkService.getBySlug(slug)

  if (!artwork) notFound()

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Link
          href="/works"
          className="mb-8 inline-block font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
        >
          &larr; Works
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ArtworkImage
            image={artwork.image}
            alt={artwork.title}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />

          <div className="max-w-md">
            <h1 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
              {artwork.title}
            </h1>
            <p className="mt-2 font-sans text-sm text-[var(--color-muted-fg)]">
              {artwork.medium}, {artwork.year}
            </p>

            <dl className="mt-8 space-y-3 border-t border-[var(--color-border-default)] pt-6 font-sans text-sm">
              <div className="flex justify-between">
                <dt className="text-[var(--color-muted-fg)]">Dimensions</dt>
                <dd>{artwork.dimensions}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-muted-fg)]">Category</dt>
                <dd className="capitalize">{artwork.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-muted-fg)]">Status</dt>
                <dd>{STATUS_LABEL[artwork.status]}</dd>
              </div>
            </dl>

            <p className="mt-8 font-sans text-sm leading-relaxed text-[var(--color-muted-fg)]">
              {artwork.description}
            </p>

            <Link
              href={`/contact?artwork=${artwork.slug}`}
              className="mt-10 inline-block border border-[var(--color-fg)] px-6 py-3 font-sans text-xs tracking-widest uppercase transition-colors hover:bg-[var(--color-fg)] hover:text-[var(--color-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]"
            >
              Inquire
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
