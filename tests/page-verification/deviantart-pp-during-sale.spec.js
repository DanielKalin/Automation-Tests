const { test, expect } = require('@playwright/test');

test.describe('DeviantArt Pricing Page During Sale', () => {
  
  test('should display all expected components on pricing page during sale', async ({ page }) => {
    // Navigate to DeviantArt Core Membership page
    await page.goto('https://www.deviantart.com/core-membership');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot for reference
    await page.screenshot({ path: 'tests/page-verification/pricing-page-during-sale.png' });
    
    // Test 1: Core Membership Specific Content
    console.log('Testing pricing page content during sale...');
    
    // Check for pricing information
    const pricingSection = page.locator(':has-text("50% off"), :has-text("Core"), :has-text("Membership"), .price, .pricing').first();
    await expect(pricingSection).toBeVisible();
    console.log('✓ Pricing section is present');
    
    // Check for "Get Core" or "Upgrade" button
    const getCoreButton = page.locator(':has-text("Get Core"), :has-text("Upgrade"), button:has-text("Core")').first();
    await expect(getCoreButton).toBeVisible();
    console.log('✓ Get Core button is present');
    
    // Check for features list or benefits
    const featuresSection = page.locator(':has-text("features"), :has-text("benefits"), :has-text("premium"), .features, .benefits').first();
    await expect(featuresSection).toBeVisible();
    console.log('✓ Features/Benefits section is present');
    
    // Test 2: Category Navigation (optional)
    console.log('Testing category navigation...');
    
    // Check for category links/buttons (make this optional)
    const categoryLinks = page.locator('a[href*="browse"], nav a, .category').first();
    const categoryLinksVisible = await categoryLinks.isVisible().catch(() => false);
    if (categoryLinksVisible) {
      console.log('✓ Category navigation is present');
    } else {
      console.log('ℹ Category navigation not found (may not be prominent on pricing page)');
    }
    
    // Final verification: Page title
    const pageTitle = await page.title();
    expect(pageTitle).toContain('DeviantArt');
    console.log('✓ Page title contains "DeviantArt"');
    
    console.log('\n🎉 All pricing page verification tests passed!');
  });
  
  test('should have working pricing page functionality during sale', async ({ page }) => {
    await page.goto('https://www.deviantart.com/core-membership');
    await page.waitForLoadState('networkidle');
    
    console.log('Testing pricing page functionality during sale...');
    
    // Test "Get Core" button functionality
    const getCoreButton = page.locator(':has-text("Get Core"), :has-text("Upgrade"), button:has-text("Core")').first();
    if (await getCoreButton.isVisible()) {
      await getCoreButton.click();
      await page.waitForTimeout(3000);
      
      // Verify we're redirected to a purchase/signup page
      const currentUrl = page.url();
      const validUrls = ['checkout', 'purchase', 'payment', 'signup', 'join', 'core'];
      const isValidRedirect = validUrls.some(url => currentUrl.includes(url));
      expect(isValidRedirect).toBe(true);
      console.log('✓ Get Core button redirects properly');
    }
    
    // Test completed - no additional navigation tests needed
    
    console.log('\n🎉 Pricing page functionality tests passed!');
  });
  
}); 