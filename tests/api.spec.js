const { test, expect } = require('@playwright/test');
const ApiPage = require('../pages/apiPage');

test('API Verification', async ({ page }) => {
  const apiPage = new ApiPage(page);

  // Navigate to Expo website and verify the title
  await apiPage.navigateToExpo();

  // Capture the API response when the link is clicked
  const apiResponsePromise = apiPage.captureApiResponse();

  // Click on the "Docs" link and verify the heading on the Docs page
  await apiPage.clickDocsLink();
  await apiPage.verifyHeading();

  // Wait for and retrieve the API response details
  const { title, statusCode } = await apiResponsePromise;

  // Verify that the API response status code is 200
  expect(statusCode).toBe(200);

  // Verify that the title in the API response matches the expected value
  expect(title).toBe('Tools for development');
});
