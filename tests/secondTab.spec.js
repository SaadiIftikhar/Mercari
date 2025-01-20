const { test, expect } = require('@playwright/test');
const SecondTabPage = require('../pages/secondTabPage');

test.beforeEach(async ({ page }) => {
  // Set viewport size for each test
  await page.setViewportSize({ width: 1920, height: 1080 });
});

test('Landing Page Verification', async ({ page }) => {
  const secondTabPage = new SecondTabPage(page);
  // Navigate to Expo website and verify the page title and sticky element
  await secondTabPage.navigateToExpo();
  await secondTabPage.verifyPageTitle();
  await secondTabPage.verifyStickyElementVisible();
});

test('Second Tab Verification', async ({ page, context }) => {
  const secondTabPage = new SecondTabPage(page);
  // Navigate to Expo website, open search, and fill search input
  await secondTabPage.navigateToExpo();
  await secondTabPage.openSearchInput();
  await secondTabPage.fillSearchInput('test');
  
  // Click the link and verify the new tab URL and heading text
  const newTab = await secondTabPage.clickLinkAndOpenNewTab(context);
  await secondTabPage.verifyNewTabURL(newTab, 'https://docs.expo.dev/router/reference/testing/');
  await secondTabPage.verifyHeadingText(newTab, 'Expo and EAS arean ecosystem of tools that help you  develop  review& deploy');
  
  // Close the new tab and verify the main page's URL and sticky element
  await secondTabPage.closeTab(newTab);
  await expect(page).toHaveURL('https://expo.dev/');
  await secondTabPage.verifyStickyElementVisible();
});
