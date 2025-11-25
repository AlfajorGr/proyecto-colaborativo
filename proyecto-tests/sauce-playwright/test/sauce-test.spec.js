import { test, expect } from '@playwright/test';

test('verifica el título en Sauce Labs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
