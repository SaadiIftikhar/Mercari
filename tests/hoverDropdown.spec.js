const { test } = require('@playwright/test');
const HoverDropdownPage = require('../pages/hoverDropdownPage');

test('Hover and Drop Down', async ({ page }) => {
  const hoverDropdownPage = new HoverDropdownPage(page);

  // Set a custom viewport size for consistent testing
  await hoverDropdownPage.setViewportSize(1920, 1080);

  // Navigate to the Expo website
  await hoverDropdownPage.navigateToPage('https://expo.dev/');

  // Hover over the "Tools" link to reveal the dropdown menu
  await hoverDropdownPage.hoverOverToolsLink();

  // Wait for the "Orbit Desktop app to simplify" link to become visible in the dropdown menu
  await hoverDropdownPage.verifyOrbitLinkVisibility();

  // Verify the correct text of the "Orbit" link in the dropdown
  await hoverDropdownPage.verifyOrbitLinkText('OrbitDesktop app to simplify installing and running mobile apps on macOS');
});
