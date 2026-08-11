import { NextResponse } from 'next/server'
import type { ArtworkCategory } from '@/types'
import { artworkService } from '@/features/artworks/services/artworkService'

const VALID_CATEGORIES: ArtworkCategory[] = ['painting', 'portrait', 'abstract', 'landscape']
const MAX_PAGE_SIZE = 48

function parseCategory(raw: string | null): ArtworkCategory | undefined {
  return raw && VALID_CATEGORIES.includes(raw as ArtworkCategory)
    ? (raw as ArtworkCategory)
    : undefined
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const category = parseCategory(searchParams.get('category'))
  const page = Math.max(1, Number.parseInt(searchParams.get('page') ?? '1', 10) || 1)
  const pageSize = Math.min(
    MAX_PAGE_SIZE,
    Math.max(1, Number.parseInt(searchParams.get('pageSize') ?? '12', 10) || 12),
  )

  const { artworks, total } = await artworkService.listPage(page, pageSize, category)

  return NextResponse.json({ artworks, total })
}
