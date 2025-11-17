import { test, expect } from '@playwright/test';

test('buscar test runner en playwright.dev', async ({ page }) => {
  // Ir a la página principal
  await page.goto('https://playwright.dev/');

  // Esperar que el botón de búsqueda aparezca y hacer clic
  const searchButton = page.locator('button.DocSearch-Button');
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  // Escribir "test runner" en el campo de búsqueda
  const searchInput = page.locator('input.DocSearch-Input');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('test runner');

  // Esperar a que aparezcan resultados
  const results = page.locator('.DocSearch-Hit a');
  await expect(results.first()).toBeVisible();

  // Hacer clic en el primer resultado
  await results.first().click();

  // Verificar que la URL contenga "test"
  await expect(page).toHaveURL(/test/);
});
