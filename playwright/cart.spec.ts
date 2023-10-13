import { expect, test } from '@playwright/test';

test('cart test', async ({ page }) => {
  await page.goto('http://localhost:3000/products/5');

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('1')).toBeVisible();

  // change quantity in single product page test
  await page.getByTestId('product-quantity').click();
  await page.getByTestId('product-quantity').fill('3');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('4')).toBeVisible();

  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count').getByText('7')).toBeVisible();

  // go to cart page
  await page.getByTestId('cart-link').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // check for the remove button
  await expect(
    page.locator('[data-test-id^="cart-product-remove-"]'),
  ).toHaveCount(1);

  // remove one item from cart
  await page
    .getByTestId('cart-product-<product id>')
    .locator('div')
    .filter({ hasText: 'womensweater' })
    .locator('button[name="remove-button"]');
  await expect(page.getByTestId('cart-count')).toContainText('');
});
