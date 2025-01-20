const { expect } = require('@playwright/test');

class secondTabPage {
  constructor(page) {
    this.page = page;
    // Locators for elements on the page
    this.stickyElement = page.locator('.sticky');
    this.searchInput = page.locator('input[placeholder="Search…"]');
    this.linkText = page.locator('text=ing configuration for Expo Router');
    this.headingElement = page.locator('h1.text-default');
  }

  // Navigate to the Expo website
  async navigateToExpo() {
    await this.page.goto('https://expo.dev/');
  }

  // Verify the page title matches expected pattern
  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/Expo/);
  }

  // Verify if the sticky element is visible on the page
  async verifyStickyElementVisible() {
    await expect(this.stickyElement).toBeVisible();
  }

  // Open the search input field using keyboard shortcut
  async openSearchInput() {
    await this.page.keyboard.press('Control+k');
    await expect(this.searchInput).toBeVisible();
  }

  // Fill the search input with the given text
  async fillSearchInput(text) {
    await this.searchInput.fill(text);
  }

  // Click the link and open it in a new tab
  async clickLinkAndOpenNewTab(context) {
    const [newTab] = await Promise.all([
      context.waitForEvent('page'), // Wait for the new tab to open
      this.linkText.click(),        // Trigger the click action
    ]);
    return newTab; // Return the new tab
  }

  // Verify if the new tab's URL matches the expected URL
  async verifyNewTabURL(newTab, url) {
    await expect(newTab).toHaveURL(url);
  }

  // Verify if the heading text on the new tab matches the expected text
  async verifyHeadingText(newTab, expectedText) {
    await expect(this.headingElement).toBeVisible();
    const headingText = await this.headingElement.textContent();
    await expect(headingText).toBe(expectedText);
  }

  // Close the specified tab
  async closeTab(tab) {
    await tab.close();
  }
}

module.exports = secondTabPage;
