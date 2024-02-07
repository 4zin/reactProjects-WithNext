import { test, expect } from '@playwright/test';

const PREFIX_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:3000';

test('app show random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(PREFIX_URL)).toBeTruthy();
});
