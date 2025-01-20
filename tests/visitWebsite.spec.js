import { test, expect } from '@playwright/test';
const VisitWebsitePage = require('../pages/visitWebsitePage');

test('Landing Page Verification', async ({ page }) => {
  const visitWebsitePage = new VisitWebsitePage(page);

  // Set custom viewport resolution for testing consistency
  await visitWebsitePage.setViewport();

  // Navigate to the Expo website
  await visitWebsitePage.navigate();

  // Verify that the page title contains the word "Expo"
  await visitWebsitePage.verifyTitle();

  // Verify the sticky element is visible
  await visitWebsitePage.verifyStickyElementVisible();
});
