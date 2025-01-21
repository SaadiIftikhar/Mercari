const { expect } = require('@playwright/test');

class signupPage {
  constructor(page) {
    this.page = page;
    // Locators for various elements on the signup page
    this.signupButton = page.locator('role=link[name="Sign Up"]').first();
    this.signupLink = page.locator('[data-testid="signup-button"]');
    this.acceptTermsCheckbox = page.locator('[data-testid="acceptTerms"]');
    this.emailInput = page.locator('[data-testid="email"]');
    this.usernameInput = page.locator('[data-testid="username"]');
    this.passwordInput = page.locator('[data-testid="password"]');
    this.confirmPasswordInput = page.locator('[data-testid="confirmPassword"]');
  }

  // Navigate to the signup page
  async navigateToSignupPage() {
    await this.signupButton.click();
  }

  // Enable the terms and conditions checkbox
  async enableAcceptTerms() {
    await this.acceptTermsCheckbox.click();
  }

  // Fill the signup form with provided details
  async fillForm(email, username, password, confirmPassword) {
    await this.emailInput.fill(email);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  // Submit the signup form
  async submitForm() {
    await this.signupLink.click();
  }

  // Assertions
  // Check if the signup button is disabled
  async verifySignupButtonDisabled() {
    await expect(this.signupLink).toBeVisible(); // Ensure it's visible before checking the state
    await expect(this.signupLink).toBeDisabled();
  }

  // Check if the signup button is enabled
  async verifySignupButtonEnabled() {
    await expect(this.signupLink).toBeVisible(); // Ensure it's visible before checking the state
    await expect(this.signupLink).toBeEnabled();
  }

   // Verify error messages for missing required fields
  async verifyErrorMessagesForMissingFields() {
    await expect(this.page.getByText('Email is a required field.', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Username is a required field.', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Password is a required field.', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Confirm password is a ')).toBeVisible();
  }

  // Verify email validation error
  async verifyEmailValidationError() {
    await expect(this.page.getByText('Email must be a valid email.', { exact: true })).toBeVisible();
  }

  // Verify password length validation error
  async verifyPasswordLengthError() {
    await expect(this.page.getByText('Password must be at least 8 characters.', { exact: true })).toBeVisible();
  }

  // Verify that the "Username is a required field" message is not visible
  async verifyNoUsernameRequiredMessage() {
    await expect(this.page.locator('text=Username is a required field.')).not.toBeVisible();
  }

  // Verify that the "Confirm password is a required field" message is not visible
  async verifyNoConfirmPasswordRequiredMessage() {
    await expect(this.page.locator('text=Confirm password is a required field.')).not.toBeVisible();
  }
}

module.exports = signupPage;
