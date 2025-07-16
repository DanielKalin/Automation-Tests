require('dotenv').config();
const { test, expect } = require('@playwright/test');

test('DeviantArt login', async ({ page }) => {
  const username = process.env.DA_USERNAME;
  const password = process.env.DA_PASSWORD;

  if (!username || !password) {
    throw new Error('DA_USERNAME and DA_PASSWORD must be set in environment variables');
  }

  await page.goto('https://www.deviantart.com/users/login');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot to see what the page looks like
  await page.screenshot({ path: 'login-page.png' });
  
  // Print page content to understand the structure
  const pageContent = await page.content();
  console.log('Page title:', await page.title());
  console.log('Current URL:', page.url());
  
  // Look for all input fields on the page
  const allInputs = await page.locator('input').all();
  console.log('Found', allInputs.length, 'input fields');
  
  for (let i = 0; i < allInputs.length; i++) {
    const input = allInputs[i];
    const type = await input.getAttribute('type');
    const name = await input.getAttribute('name');
    const placeholder = await input.getAttribute('placeholder');
    const id = await input.getAttribute('id');
    console.log(`Input ${i}: type="${type}", name="${name}", placeholder="${placeholder}", id="${id}"`);
  }
  
  // Step 1: Fill username field
  try {
    const usernameField = await page.locator('input[name="username"]');
    await usernameField.waitFor({ timeout: 10000 });
    await usernameField.fill(username);
    console.log('Successfully filled username field');
  } catch (error) {
    console.log('Failed to fill username field:', error.message);
    throw error;
  }
  
  // Step 2: Click "Next" button to proceed to password step
  try {
    const nextButton = await page.locator('button:has-text("Next")');
    await nextButton.click();
    console.log('Successfully clicked Next button');
  } catch (error) {
    console.log('Failed to click Next button:', error.message);
    throw error;
  }
  
  // Wait for password page to load
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'password-page.png' });
  
  // Step 3: Fill password field
  try {
    const passwordField = await page.locator('input[type="password"]');
    await passwordField.waitFor({ timeout: 10000 });
    await passwordField.fill(password);
    console.log('Successfully filled password field');
  } catch (error) {
    console.log('Failed to fill password field:', error.message);
    throw error;
  }
  
  // Step 4: Click login button
  try {
    const loginButton = await page.locator('button[type="submit"]:has-text("Log In"), button:has-text("Sign In")');
    await loginButton.click();
    console.log('Successfully clicked login button');
  } catch (error) {
    console.log('Failed to click login button:', error.message);
    throw error;
  }
  
  // Wait for login to complete (use timeout instead of networkidle)
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'after-login.png' });
  
  // Check final URL
  const finalUrl = page.url();
  console.log('Final URL:', finalUrl);
  
  // Simple check - if we're not on the login page anymore, consider it success
  const success = !finalUrl.includes('/users/login');
  console.log('Login success:', success);
  
  expect(success).toBe(true);
}); 