import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Carpeta donde están los test
  timeout: 30 * 1000, // 30 segundos máximo por test
  expect: {
    timeout: 5000, // Espera hasta 5s para los expect()
  },
  workers: 3, // Número de workers (ejecución paralela)
  fullyParallel: true, // Permite correr pruebas simultáneamente
  reporter: [['list'], ['html', { open: 'never' }]], // Reporte en terminal + HTML
  use: {
    headless: true, // Corre sin abrir el navegador
    screenshot: 'only-on-failure', // Guarda capturas si falla
    video: 'retain-on-failure', // Guarda video si falla
    trace: 'on-first-retry', // Guarda trazas al primer fallo
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
