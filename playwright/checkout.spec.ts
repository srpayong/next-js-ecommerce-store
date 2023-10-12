import { expect, test } from '@playwright/test';

test('checkout test', async ({ page }) => {
  await page.goto('http://localhost:3000/cart/checkout');

  await page.getByTestId('checkout-first-name').fill('Jane');
  await page.getByTestId('checkout-last-name').fill('Doe');
  await page.getByTestId('checkout-email').fill('hello@email.com');
  await page.getByTestId('checkout-address').fill('1a Sturzgasse');
  await page.getByTestId('checkout-city').fill('Vienna');
  await page.getByTestId('checkout-postal-code').fill('1234');
  await page.getByTestId('checkout-country').fill('Austria');
  await page.getByPlaceholder('Credit Card Number').fill('1234 5678 9001 1213');
  await page.getByPlaceholder('MM').fill('01');
  await page.getByPlaceholder('YY').fill('23');
  await page.getByPlaceholder('CVC').fill('456');

  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();

  await page.getByTestId('checkout-confirm-order').click();
  await expect(page).toHaveURL('http://localhost:3000/cart/checkout/thankYou');
});

// e2e checkout flow
