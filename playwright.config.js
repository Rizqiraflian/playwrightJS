// playwright.config.js
module.exports = {
    workers: 3,
    reporter: [['html', { outputFolder: 'reports', open: 'on-failure' }]],  // HTML reporter
    screenshots: 'on',  // Ensure screenshots are captured on failure
    videos: 'on-first-retry',  // Optionally, capture videos on the first retry
    use: {
        headless: false
      },
    testDir: 'tests', // Location of your test files
    projects: [
      {
        name: 'firefox',
        use: { browserName: 'firefox' }, // Use Firefox
      },
      {
        name: 'webkit',
        use: { browserName: 'webkit' }, // Use WebKit
      },
      {
        name: 'chromium',
        use: { browserName: 'chromium' }, // Use Chromium
      },
    ],
  };
