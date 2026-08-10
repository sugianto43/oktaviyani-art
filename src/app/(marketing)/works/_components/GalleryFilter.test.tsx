import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { GalleryFilter } from './GalleryFilter'

const push = vi.fn()

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  usePathname: () => '/works',
}))

describe('GalleryFilter', () => {
  it('marks the current category as active', () => {
    render(<GalleryFilter current="landscape" />)
    expect(screen.getByRole('button', { name: 'Landscape' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'All' })).not.toHaveAttribute('aria-current')
  })

  it('navigates to the plain path when All is selected', () => {
    render(<GalleryFilter current="landscape" />)
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(push).toHaveBeenCalledWith('/works')
  })

  it('navigates with a category query param when a filter is selected', () => {
    render(<GalleryFilter current="all" />)
    fireEvent.click(screen.getByRole('button', { name: 'Abstract' }))
    expect(push).toHaveBeenCalledWith('/works?category=abstract')
  })
})
