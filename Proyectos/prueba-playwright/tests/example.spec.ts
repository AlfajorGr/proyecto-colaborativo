import { test, expect } from '@playwright/test';

test('verificar título y tomar captura en example.com', async ({ page }) => {
  // Visitar el sitio
  await page.goto('https://example.com');

  // Verificar que el título contenga "Example"
  await expect(page).toHaveTitle(/Example/);

  // Tomar una captura de pantalla
  await page.screenshot({ path: 'example-screenshot.png' });
});
