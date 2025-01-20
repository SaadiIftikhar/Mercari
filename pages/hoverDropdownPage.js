const { expect } = require('@playwright/test');

class hoverDropdownPage {
  constructor(page) {
    this.page = page;
    // Locators for the "Tools" and "Orbit" links
    this.toolsLink = page.getByRole('link', { name: 'Tools', exact: true });
    this.orbitLink = page.getByRole('link', { name: 'Orbit Desktop app to simplify' });
  }

  // Set the viewport size for consistent testing
  async setViewportSize(width, height) {
    await this.page.setViewportSize({ width, height });
  }

  // Navigate to a specific URL
  async navigateToPage(url) {
    await this.page.goto(url);
  }

  // Hover over the "Tools" link to trigger the dropdown menu
  async hoverOverToolsLink() {
    await this.toolsLink.hover();
  }

  // Verify the visibility of the "Orbit" link after hovering over "Tools"
  async verifyOrbitLinkVisibility() {
    await expect(this.orbitLink).toBeVisible();
  }

  // Verify the text content of the "Orbit" link
  async verifyOrbitLinkText(expectedText) {
    await expect(this.orbitLink).toHaveText(expectedText);
  }
}

module.exports = hoverDropdownPage;
