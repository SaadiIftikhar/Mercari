const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/signupPage');

let signupPage;

test.beforeEach(async ({ page }) => {
  signupPage = new SignupPage(page);
  // Navigate to the website and check page title
  await page.goto('https://expo.dev/');
  await expect(page).toHaveTitle(/Expo/);
  const stickyElement = await page.locator('.sticky');
  await expect(stickyElement).toBeVisible();
});

test('Signup without Text', async ({ page }) => {
  // Navigate to signup page and verify the signup button is disabled initially
  await signupPage.navigateToSignupPage();
  await signupPage.verifySignupButtonDisabled();

  // Enable terms and conditions checkbox and check if the signup button is enabled
  await signupPage.enableAcceptTerms();
  await signupPage.verifySignupButtonEnabled();

  // Submit form and verify error messages for missing fields
  await signupPage.submitForm();
  await signupPage.verifyErrorMessagesForMissingFields();
});

test('Signup After Filling Text', async ({ page }) => {
  // Navigate to signup page and verify the signup button is disabled initially
  await signupPage.navigateToSignupPage();
  await signupPage.verifySignupButtonDisabled();

  // Enable terms and conditions checkbox and check if the signup button is enabled
  await signupPage.enableAcceptTerms();
  await signupPage.verifySignupButtonEnabled();

  // Fill the form with test data and submit the form
  await signupPage.fillForm('test', 'test', 'test', 'test');
  await signupPage.submitForm();

  // Verify specific validation messages after form submission
  await signupPage.verifyEmailValidationError();
  await signupPage.verifyNoUsernameRequiredMessage();
  await signupPage.verifyPasswordLengthError();
  await signupPage.verifyNoConfirmPasswordRequiredMessage();
});
