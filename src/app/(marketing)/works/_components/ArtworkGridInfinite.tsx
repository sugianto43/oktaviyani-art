'use client'

import { useEffect, useRef } from 'react'
import type { Artwork, ArtworkCategory } from '@/types'
import { useInfiniteArtworks } from '@/features/artworks/hooks/useInfiniteArtworks'
import { ArtworkGrid } from './ArtworkGrid'

interface ArtworkGridInfiniteProps {
  initialArtworks: Artwork[]
  total: number
  pageSize: number
  category?: ArtworkCategory
}

export function ArtworkGridInfinite({
  initialArtworks,
  total,
  pageSize,
  category,
}: ArtworkGridInfiniteProps) {
  const { artworks, hasMore, isLoading, error, loadMore } = useInfiniteArtworks({
    initialArtworks,
    total,
    pageSize,
    category,
  })

  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasMore) return

    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore()
      },
      { rootMargin: '400px' },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, artworks.length])

  return (
    <>
      <ArtworkGrid artworks={artworks} />

      <div ref={sentinelRef} className="mt-12 flex flex-col items-center gap-4">
        <p aria-live="polite" className="sr-only">
          {isLoading ? 'Loading more artworks' : `Showing ${artworks.length} of ${total} artworks`}
        </p>

        {error && (
          <p className="font-sans text-sm text-[var(--color-muted-fg)]">
            Couldn&apos;t load more artworks.
          </p>
        )}

        {hasMore && (
          <button
            type="button"
            onClick={loadMore}
            disabled={isLoading}
            className="font-sans text-xs tracking-widest uppercase text-[var(--color-muted-fg)] transition-colors hover:text-[var(--color-fg)] disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-fg)]"
          >
            {isLoading ? 'Loading…' : 'Load More'}
          </button>
        )}
      </div>
    </>
  )
}
