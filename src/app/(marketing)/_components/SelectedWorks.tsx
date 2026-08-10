import Link from 'next/link'
import { ArtworkCard } from '@/components/artwork'
import { Container } from '@/components/layout'
import type { Artwork } from '@/types'

interface SelectedWorksProps {
  artworks: Artwork[]
}

export function SelectedWorks({ artworks }: SelectedWorksProps) {
  return (
    <section aria-labelledby="selected-works-heading" className="py-24 md:py-32">
      <Container>
        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <h2
            id="selected-works-heading"
            className="font-serif text-4xl md:text-5xl font-light tracking-tight"
          >
            Selected Works
          </h2>
          <Link
            href="/works"
            className="hidden md:inline font-sans text-xs tracking-widest uppercase border-b border-[var(--color-muted-fg)] pb-0.5 text-[var(--color-muted-fg)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            View All
          </Link>
        </div>

        {/* Asymmetric editorial grid — big/small alternates sides for a zigzag rhythm */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-12">
          {artworks[0] && (
            <div className="md:col-span-8">
              <ArtworkCard
                artwork={artworks[0]}
                sizes="(min-width: 1200px) 66vw, (min-width: 768px) 66vw, 100vw"
              />
            </div>
          )}
          {artworks[1] && (
            <div className="md:col-span-4 md:pt-28">
              <ArtworkCard
                artwork={artworks[1]}
                sizes="(min-width: 1200px) 33vw, (min-width: 768px) 33vw, 100vw"
              />
            </div>
          )}
          {artworks[2] && (
            <div className="md:col-span-4 md:col-start-2 md:pt-12">
              <ArtworkCard
                artwork={artworks[2]}
                sizes="(min-width: 1200px) 33vw, (min-width: 768px) 33vw, 100vw"
              />
            </div>
          )}
          {artworks[3] && (
            <div className="md:col-span-7 md:col-start-6 md:pt-36">
              <ArtworkCard
                artwork={artworks[3]}
                sizes="(min-width: 1200px) 58vw, (min-width: 768px) 58vw, 100vw"
              />
            </div>
          )}
        </div>

        {/* Mobile CTA */}
        <div className="mt-14 flex justify-center md:hidden">
          <Link
            href="/works"
            className="font-sans text-xs tracking-widest uppercase border-b border-[var(--color-fg)] pb-0.5 hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            View All Works
          </Link>
        </div>
      </Container>
    </section>
  )
}
