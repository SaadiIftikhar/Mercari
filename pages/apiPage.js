const { expect } = require('@playwright/test');

class apiPage {
  constructor(page) {
    this.page = page;
    // Locators for elements on the page
    this.docsLink = page.getByRole('link', { name: 'Docs' }).first();
    this.heading = page.getByRole('heading', { name: 'Create amazing apps that run' });
  }

  // Navigate to the Expo website and verify the page title
  async navigateToExpo() {
    await this.page.goto('https://expo.dev/');
    await expect(this.page).toHaveTitle(/Expo/);
  }

  // Click on the "Docs" link
  async clickDocsLink() {
    await this.docsLink.click();
  }

  // Verify if the heading on the Docs page is visible and matches expected text
  async verifyHeading() {
    await expect(this.heading).toBeVisible();
    await expect(this.heading).toHaveText('Create amazing apps that run everywhere');
  }

  // Capture the API response when it matches certain conditions (tools.json)
  async captureApiResponse() {
    const apiResponsePromise = new Promise((resolve) => {
      this.page.on('response', async (response) => {
        const url = response.url();
        // Check if the API response is related to tools.json
        if (url.includes('tools.json')) {
          const statusCode = response.status();
          const responseBody = await response.json();
          const title = responseBody.pageProps.meta.title;
          resolve({ title, statusCode });
        }
      });
    });
    return apiResponsePromise;
  }
}

module.exports = apiPage;
