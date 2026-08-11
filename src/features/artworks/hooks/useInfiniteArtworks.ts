'use client'

import { useState } from 'react'
import type { Artwork, ArtworkCategory } from '@/types'
import { fetchArtworksPage } from '@/lib/api/artworks'

interface UseInfiniteArtworksOptions {
  initialArtworks: Artwork[]
  total: number
  pageSize: number
  category?: ArtworkCategory
}

export function useInfiniteArtworks({
  initialArtworks,
  total,
  pageSize,
  category,
}: UseInfiniteArtworksOptions) {
  const [artworks, setArtworks] = useState(initialArtworks)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const hasMore = artworks.length < total

  async function loadMore() {
    if (isLoading || !hasMore) return
    setIsLoading(true)
    setError(false)

    try {
      const nextPage = page + 1
      const result = await fetchArtworksPage({ page: nextPage, pageSize, category })
      setArtworks((current) => [...current, ...result.artworks])
      setPage(nextPage)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return { artworks, hasMore, isLoading, error, loadMore }
}
