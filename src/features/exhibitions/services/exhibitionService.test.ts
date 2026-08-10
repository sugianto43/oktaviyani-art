import { describe, expect, it } from 'vitest'
import { exhibitionService } from './exhibitionService'
import { mockExhibitions } from '@/lib/data/exhibitions'

describe('exhibitionService.list', () => {
  it('returns all exhibitions', async () => {
    const result = await exhibitionService.list()
    expect(result).toHaveLength(mockExhibitions.length)
  })

  it('sorts exhibitions by year descending', async () => {
    const result = await exhibitionService.list()
    const years = result.map((exhibition) => exhibition.year)
    expect(years).toEqual([...years].sort((a, b) => b - a))
  })

  it('does not mutate the source mock data', async () => {
    const before = mockExhibitions.map((exhibition) => exhibition.year)
    await exhibitionService.list()
    const after = mockExhibitions.map((exhibition) => exhibition.year)
    expect(after).toEqual(before)
  })
})
