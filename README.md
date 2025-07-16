# DeviantArt Login Test

Automated login test for DeviantArt using Playwright.

## Setup

1. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

2. Set environment variables:
   ```bash
   export DA_USERNAME='your_username'
   export DA_PASSWORD='your_password'
   ```

   Or create a `.env` file:
   ```
   DA_USERNAME=your_username
   DA_PASSWORD=your_password
   ```

## Running the Test

```bash
# Run test in headless mode
npm test

# Run test with browser visible
npm run test:headed
```

## What the Test Does

1. Navigates to DeviantArt login page
2. Fills in username and password
3. Clicks the login button
4. Verifies successful login by checking for user menu

## Requirements

- Node.js
- Playwright
- Valid DeviantArt credentials 