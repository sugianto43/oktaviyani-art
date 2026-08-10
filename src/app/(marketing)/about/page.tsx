import type { Metadata } from 'next'
import Link from 'next/link'
import { artistService } from '@/features/artist/services/artistService'
import { Container } from '@/components/layout'
import { ArtistBio, ArtistStatement } from '@/components/artist'
import { buildMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/lib/seo/JsonLd'
import { siteUrl } from '@/lib/seo/site'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const artist = await artistService.get()
  return buildMetadata({
    title: 'About',
    description: 'Biography and artist statement of Oktaviyani.',
    path: '/about',
    image: artist.portrait,
  })
}

export default async function AboutPage() {
  const artist = await artistService.get()

  return (
    <section className="py-16 md:py-24">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: artist.name,
          description: artist.biography,
          image: artist.portrait,
          url: `${siteUrl}/about`,
          jobTitle: 'Painter',
          address: artist.location,
          email: artist.email,
          sameAs: [artist.instagram],
        }}
      />
      <Container>
        <ArtistBio artist={artist} />

        <div className="mt-16 border-t border-[var(--color-border-default)] pt-16 md:mt-24 md:pt-24">
          <ArtistStatement artist={artist} />
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-border-default)] pt-10 font-sans text-xs tracking-widest uppercase">
          <Link
            href="/exhibitions"
            className="border-b border-[var(--color-muted-fg)] pb-0.5 text-[var(--color-muted-fg)] transition-colors hover:border-[var(--color-fg)] hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            Exhibition History
          </Link>
          <Link
            href="/contact"
            className="border-b border-[var(--color-muted-fg)] pb-0.5 text-[var(--color-muted-fg)] transition-colors hover:border-[var(--color-fg)] hover:text-[var(--color-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            Get in Touch
          </Link>
        </div>
      </Container>
    </section>
  )
}
