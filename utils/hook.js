const { test } = require('@playwright/test');

test.afterEach(async ({ page }, testInfo) => {
  // Check if the test failed
  if (testInfo.status === 'failed') {
    // Generate a unique filename using the test title and timestamp (failed)
    const screenshotPath = `./screenshots/${testInfo.title.replace(/\s+/g, '_')}-${Date.now()}-failure.png`;
    // Capture a full-page screenshot
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot captured: ${screenshotPath}`);
  } else if (testInfo.status === 'passed') {
    // Generate a unique filename using the test title and timestamp (success)
    const screenshotPath = `./screenshots/${testInfo.title.replace(/\s+/g, '_')}-${Date.now()}-success.png`;
    // Capture a full-page screenshot
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot captured: ${screenshotPath}`);
  }
});
