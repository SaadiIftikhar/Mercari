const { expect } = require('@playwright/test');

class screenshotPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  // Method to navigate to the Expo website and wait for the page to load
  async navigateToExpo() {
    // Set custom viewport resolution for consistent testing (1920x1080)
    await this.page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to the Expo website
    await this.page.goto('https://expo.dev/');

    // Wait for the page to load completely
    await this.page.waitForLoadState('load');
  }

  // Method to compare the current page screenshot with a baseline image
  async compareScreenshot() {
    // Compare the current page screenshot with the baseline image
    await expect(this.page).toHaveScreenshot();
  }
}

module.exports = screenshotPage;
