import { test, expect } from '@playwright/test'

test('homepage: hero loads, featured artwork visible, navigates to Works', async ({ page }) => {
  await page.goto('/')

  const heroImage = page.locator('section[aria-label="Featured artwork"] img').first()
  await expect(heroImage).toBeVisible()

  const heroTitle = page.locator('section[aria-label="Featured artwork"] h1')
  await expect(heroTitle).toBeVisible()
  await expect(heroTitle).not.toBeEmpty()

  await page.getByRole('heading', { name: 'Selected Works' }).scrollIntoViewIfNeeded()
  await expect(page.getByRole('heading', { name: 'Selected Works' })).toBeVisible()

  await page.getByRole('link', { name: 'View All Works' }).first().click()
  await expect(page).toHaveURL(/\/works$/)
  await expect(page.getByRole('heading', { name: 'Works', exact: true })).toBeVisible()
})
