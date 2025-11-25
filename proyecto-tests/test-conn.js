const { chromium } = require('@playwright/test');

(async () => {
  const username = process.env.SAUCE_USERNAME;
  const accessKey = process.env.SAUCE_ACCESS_KEY;
  const region = "us-east-1"; // Cambia si tu cuenta está en otra región

  const wsEndpoint = `wss://${username}:${accessKey}@${region}.playwright.saucelabs.com/playwright/v1`;

  try {
    const browser = await chromium.connectOverCDP(wsEndpoint);
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log("Conexión exitosa a Sauce Labs!");
    await browser.close();
  } catch (err) {
    console.error("Error al conectarse:", err.message);
  }
})();
