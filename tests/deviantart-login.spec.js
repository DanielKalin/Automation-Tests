const { test, expect } = require('@playwright/test');

test('DeviantArt login', async ({ page }) => {
  const username = process.env.DA_USERNAME;
  const password = process.env.DA_PASSWORD;

  if (!username || !password) {
    throw new Error('DA_USERNAME and DA_PASSWORD must be set in environment variables');
  }

  await page.goto('https://www.deviantart.com/users/login');
  
  // Fill in username and password
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  
  // Click the login button
  await page.click('button[type="submit"]');
  
  // Wait for navigation or a user-specific element
  await page.waitForSelector('a[data-hook="user_menu"]', { timeout: 10000 });
  
  // Assert that the user menu is visible (indicating login success)
  const userMenu = await page.isVisible('a[data-hook="user_menu"]');
  expect(userMenu).toBe(true);
});
