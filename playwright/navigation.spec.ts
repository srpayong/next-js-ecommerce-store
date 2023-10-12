import test from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000');
});
