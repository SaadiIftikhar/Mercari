import { test } from '@playwright/test';
const ScreenshotPage = require('../pages/screenshotPage');

test('Comparing Screenshots', async ({ page }) => {
  const screenshotPage = new ScreenshotPage(page);

  // Navigate to the Expo website and wait for the page to load
  await screenshotPage.navigateToExpo();

  // Perform the screenshot comparison
  await screenshotPage.compareScreenshot();
});
