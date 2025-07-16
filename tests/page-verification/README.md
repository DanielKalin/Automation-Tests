# DeviantArt Page Component Verification Tests

This folder contains tests that verify the presence and functionality of various components on DeviantArt pages for logged-out users.

## Tests Included

### 1. Pricing Page During Sale Components Test
- **File**: `deviantart-pp-during-sale.spec.js`
- **URL**: `https://www.deviantart.com/core-membership`
- **Purpose**: Verifies all expected components are present on the DeviantArt pricing page during sale
- **Components Tested**:
  - **Sale Components**:
    - Sale countdown timer (with dynamic date filtering)
    - Sale disclaimer (with dynamic date filtering)
    - Multiple pricing cards verification
    - Background images verification
  - **Package Components**:
    - Package icons verification (Max, Pro+, Pro, Core+)
    - Comprehensive package pricing information display
    - Package titles detection using actual page content:
      - **Max**: "Level up your business"
      - **Pro+**: "Grow your sales and profits"
      - **Pro**: "Promote and sell your art"
      - **Core+**: "Create and connect with fans"
  - **Pricing Information**:
    - Current sale prices (e.g., $8.34/mo)
    - Original prices (e.g., was $16.67/mo)
    - Sale percentages (e.g., 50% OFF)
    - Monthly savings calculations (e.g., Monthly Savings: $8.33)
    - Structured pricing display for all packages
  - **Functionality**:
    - "Upgrade Now" button functionality and redirect verification
    - Background image styling verification
    - Proper redirects to purchase/signup pages
  - **General Components**:
    - Features/Benefits section
    - Page title verification

- **Components Excluded**:
  - Header navigation (logo, login button, join button)
  - Footer links
  - Search functionality
  - Social media links

### 2. Pricing Page During Sale Functionality Test
- **Purpose**: Tests that pricing page functionality works correctly during sale
- **Features Tested**:
  - "Upgrade Now" button functionality and redirects
  - Package pricing information extraction and display
  - Dynamic content handling for time-sensitive elements

## Recent Improvements (Latest Update)

### 🎯 **Enhanced Package Detection**
- **Fixed Max package detection** by using actual package titles from the page
- **Improved pricing extraction** for all packages with comprehensive display
- **Added debug output** for troubleshooting package detection issues
- **Enhanced error handling** for missing pricing information

### 📊 **Comprehensive Pricing Display**
- **Real-time pricing extraction** for all packages (Max, Pro+, Pro, Core+)
- **Sale price calculations** with original prices and savings
- **Structured formatting** with clear separators and organized display
- **Error handling** for missing or malformed pricing data

### 🔧 **Dynamic Content Handling**
- **Sale countdown timer** filtering to handle dynamic time information
- **Sale disclaimer** filtering to handle dynamic date information
- **Flexible selectors** that adapt to UI changes and content updates

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
1. **Take screenshots** of the pages for reference (saved to `screenshots/` folder)
2. **Log each component verification** step with detailed console output
3. **Display comprehensive pricing information** for all packages:
   ```
   📦 MAX PACKAGE:
     Monthly: $8.34/mo (was $16.67/mo)
     Sale: 50% OFF
     Monthly Savings: $8.33
   ```
4. **Generate test results** in the `test-results/` folder
5. **Provide debug information** for troubleshooting package detection

## What This Tests

✅ **Component Presence**: Verifies that all expected UI elements are visible  
✅ **Package Detection**: Identifies and extracts pricing for all Core membership packages  
✅ **Pricing Information**: Displays current prices, original prices, and savings  
✅ **Dynamic Content**: Handles time-sensitive sale information  
✅ **Navigation Functionality**: Tests that buttons and links work correctly  
✅ **Page Structure**: Ensures the page loads properly for logged-out users  
✅ **Visual Verification**: Takes screenshots for manual review  
✅ **Error Handling**: Gracefully handles missing or malformed data  

## Package Detection Logic

The test uses intelligent package detection that looks for:
- **Package titles**: Actual marketing titles displayed on the page
- **Pricing elements**: Both current and original prices
- **Sale indicators**: Discount percentages and promotional messaging
- **Package icons**: Visual elements for each membership tier

### Supported Packages:
- **Max** (Level up your business)
- **Pro+** (Grow your sales and profits)
- **Pro** (Promote and sell your art)
- **Core+** (Create and connect with fans)

## Use Cases

- **Regression Testing**: Ensure UI components don't break after updates
- **Pricing Validation**: Verify pricing information is accurate and complete
- **Sale Monitoring**: Track sale countdown and promotional content
- **Cross-browser Testing**: Verify components work across different browsers
- **Package Updates**: Detect when new packages are added or modified
- **Visual Testing**: Screenshots help identify visual changes

## Notes

- These tests are designed for **logged-out users** only
- Tests use **flexible selectors** to handle UI changes and dynamic content
- **Package titles** are used for reliable detection instead of just package names
- **Dynamic content filtering** handles time-sensitive information gracefully
- **Comprehensive error handling** ensures tests don't fail on missing optional elements
- **Screenshots** are saved with timestamps for reference and debugging
- **Detailed logging** provides insights into what components were found and tested 