const { expect } = require('@playwright/test');

class visitWebsitePage {
  constructor(page) {
    this.page = page;
    // Locators
    this.stickyElement = page.locator('.sticky');
  }

  // Set custom viewport resolution for consistent testing
  async setViewport() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  // Navigate to the Expo website
  async navigate() {
    await this.page.goto('https://expo.dev/');
  }

  // Verify the page title contains the word "Expo"
  async verifyTitle() {
    await expect(this.page).toHaveTitle(/Expo/);
  }

  // Verify the visibility of the sticky element
  async verifyStickyElementVisible() {
    await expect(this.stickyElement).toBeVisible();
  }
}

module.exports = visitWebsitePage;
