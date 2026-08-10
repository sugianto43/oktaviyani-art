import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { artworkService } from '@/features/artworks/services/artworkService'
import { Container } from '@/components/layout'
import { ArtworkImage, ArtworkMetadata } from '@/components/artwork'
import { Button } from '@/components/ui'

export const dynamic = 'force-dynamic'

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
