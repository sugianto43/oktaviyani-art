import { test, expect } from '@playwright/test'

test('works gallery: filter by category, open artwork, metadata visible', async ({ page }) => {
  await page.goto('/works')
  await expect(page.getByRole('heading', { name: 'Works', exact: true })).toBeVisible()

  await page.getByRole('navigation', { name: 'Filter artworks' }).getByText('Abstract').click()
  await expect(page).toHaveURL(/category=abstract/)

  await page.goto('/works')
  const firstCard = page.locator('a[href^="/works/"]').first()
  const artworkHref = await firstCard.getAttribute('href')
  await firstCard.click()

  await expect(page).toHaveURL(new RegExp(artworkHref!.replace(/\//g, '\\/')))
  await expect(page.getByText('Dimensions')).toBeVisible()
  await expect(page.getByText('Category')).toBeVisible()
  await expect(page.getByText('Status')).toBeVisible()
})
