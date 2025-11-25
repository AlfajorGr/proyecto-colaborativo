const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  reporter: [['html', { open: 'never' }]],
  use: {
    browserName: 'chromium',
    headless: true,
    connectOptions: {
      wsEndpoint: `wss://playwright.saucelabs.com/playwright?token=${process.env.SAUCE_ACCESS_KEY}`
    }
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ]
};
