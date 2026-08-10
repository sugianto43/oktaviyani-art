import { test, expect } from '@playwright/test'

test('contact: fill form, submit, success message appears', async ({ page }) => {
  await page.goto('/contact')

  await page.getByLabel('Name').fill('Playwright Test User')
  await page.getByLabel('Email').fill(`playwright-${Date.now()}@example.com`)
  await page.getByLabel('Subject').fill('E2E test inquiry')
  await page.getByLabel('Message').fill('This is an automated end-to-end test submission.')

  await page.getByRole('button', { name: 'Send an Inquiry' }).click()

  await expect(page.getByRole('status')).toContainText('Thank you')
})
