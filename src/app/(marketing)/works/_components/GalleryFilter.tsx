'use client'

import { useRouter, usePathname } from 'next/navigation'
import type { ArtworkCategory } from '@/types'

const FILTERS: { label: string; value: ArtworkCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Painting', value: 'painting' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Abstract', value: 'abstract' },
  { label: 'Landscape', value: 'landscape' },
]

interface GalleryFilterProps {
  current: ArtworkCategory | 'all'
}

export function GalleryFilter({ current }: GalleryFilterProps) {
  const router = useRouter()
  const pathname = usePathname()

  function handleFilter(value: ArtworkCategory | 'all') {
    const params = new URLSearchParams()
    if (value !== 'all') params.set('category', value)
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <nav aria-label="Filter artworks">
      <ul className="flex flex-wrap gap-1">
        {FILTERS.map(({ label, value }) => {
          const active = current === value
          return (
            <li key={value}>
              <button
                onClick={() => handleFilter(value)}
                aria-current={active ? 'true' : undefined}
                className={[
                  'px-4 py-2 font-sans text-xs tracking-widest uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-fg)]',
                  active
                    ? 'text-[var(--color-fg)] border-b border-[var(--color-fg)]'
                    : 'text-[var(--color-muted-fg)] hover:text-[var(--color-fg)]',
                ].join(' ')}
              >
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
