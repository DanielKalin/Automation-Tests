# DeviantArt Page Component Verification Tests

This folder contains tests that verify the presence and functionality of various components on DeviantArt pages for logged-out users.

## Tests Included

### 1. Pricing Page During Sale Components Test
- **File**: `deviantart-pp-during-sale.spec.js`
- **URL**: `https://www.deviantart.com/core-membership`
- **Purpose**: Verifies all expected components are present on the DeviantArt pricing page during sale
- **Components Tested**:
  - Pricing section and promotional content
  - "Get Core" or upgrade buttons
  - Features/Benefits section
  - Category navigation
  - Page title verification

- **Components Excluded**:
  - Header navigation (logo, login button, join button)
  - Footer links
  - Search functionality
  - Social media links

### 2. Pricing Page During Sale Functionality Test
- **Purpose**: Tests that pricing page functionality works correctly during sale
- **Features Tested**:
  - Get Core button functionality
  - Proper redirects to purchase/signup pages

## Running the Tests

### Run all page verification tests:
```bash
npm run test:components
```

### Run with browser visible:
```bash
npm run test:components:headed
```

### Run specific test file:
```bash
npx playwright test tests/page-verification/deviantart-pp-during-sale.spec.js
```

## Test Output

The tests will:
1. Take screenshots of the pages for reference
2. Log each component verification step
3. Provide detailed console output showing what was tested
4. Generate test results in the `test-results/` folder

## What This Tests

✅ **Component Presence**: Verifies that all expected UI elements are visible
✅ **Navigation Functionality**: Tests that links work correctly
✅ **Page Structure**: Ensures the page loads properly for logged-out users
✅ **Search Feature**: Verifies search functionality works
✅ **Visual Verification**: Takes screenshots for manual review

## Use Cases

- **Regression Testing**: Ensure UI components don't break after updates
- **Cross-browser Testing**: Verify components work across different browsers
- **Accessibility Testing**: Foundation for adding accessibility checks
- **Visual Testing**: Screenshots help identify visual changes

## Notes

- These tests are designed for **logged-out users** only
- Tests use flexible selectors to handle UI changes
- Optional components (like social media links) are handled gracefully
- Screenshots are saved for manual verification 