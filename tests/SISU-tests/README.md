# DeviantArt SISU (Login) Tests

This folder contains tests for DeviantArt's SISU (Sign-In/Sign-Up) authentication system.

## Tests Included

### DeviantArt Login Test
- **File**: `deviantart-login.spec.js`
- **Purpose**: Automated login test for DeviantArt using two-step authentication
- **URL**: `https://www.deviantart.com/users/login`

## What This Test Does

1. **Step 1**: Navigates to DeviantArt login page
2. **Step 2**: Fills in username field
3. **Step 3**: Clicks "Next" button (DeviantArt uses 2-step login)
4. **Step 4**: Fills in password field on second page
5. **Step 5**: Clicks login button
6. **Step 6**: Verifies successful login by URL redirect

## Screenshots Generated

The test automatically captures screenshots during execution:
- `login-page.png` - Initial login page
- `password-page.png` - Password entry page
- `after-login.png` - After successful login

## Environment Variables Required

Create a `.env` file in the project root with:
```
DA_USERNAME=your_deviantart_username
DA_PASSWORD=your_deviantart_password
```

## Running the Test

### From project root:
```bash
npm run test:login                    # Run login test only
npm run test:login:headed            # Run with browser visible
```

### Run specific file:
```bash
npx playwright test tests/SISU-tests/deviantart-login.spec.js
```

## Technical Details

- **Framework**: Playwright
- **Language**: JavaScript
- **Authentication**: Two-step login process
- **Environment**: Uses environment variables for credentials
- **Security**: Credentials are never stored in code

## Notes

- DeviantArt uses a two-step login process (username first, then password)
- The test handles this multi-step authentication automatically
- Screenshots are saved for debugging and verification
- All credentials are kept secure using environment variables 