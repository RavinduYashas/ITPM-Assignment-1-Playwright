# ITPM Assignment 1 - Playwright Test Automation

## 📋 Project Overview

This is a **Playwright-based test automation project** designed to test the [Swift Translator](https://www.swifttranslator.com/) web application. The project validates Singlish text translation functionality with comprehensive test cases covering both positive and negative test scenarios.

**Project Name:** `itpm-assignment-1-playwright`  
**Version:** 1.0.0  
**Type:** Web UI Test Automation

---

## 🎯 Test Scope

The project includes automated tests for:
- **Translation Testing**: Validates input-to-output translation on Swift Translator
- **Browser Coverage**: Tests run on multiple browsers (Chromium, Firefox, WebKit)
- **Positive Test Cases**: Valid input translation scenarios
- **Negative Test Cases**: Edge cases like joined words, spelling errors, slang, excessive symbols, informal grammar, and word order issues
- **UI-related test scenario**: Sinhala output updates automatically in real-time

### Test Files:
- `tests/allTranslationTests.spec.ts` - Main test suite for translation validation
- `tests/swiftTranslator.spec.ts` - Additional translator-specific tests
- `tests/testData.ts` - Test data and test case definitions

---

## 📦 Prerequisites

Before running tests, ensure you have:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Git** (optional, for cloning)
- **Windows/Mac/Linux** OS

---

## 🚀 Installation & Setup

### Step 1: Clone or Download the Project
```bash
# Clone the repository (if available)
git clone <repository-url>
cd ITPM-Assignment-1-Playwright

# Or navigate to your project directory
cd path/to/ITPM-Assignment-1-Playwright
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript type definitions for Node.js

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

This downloads the required browser binaries (Chromium, Firefox, WebKit).

---

## 🏃 Running Tests

### Run All Tests
```bash
npx playwright test
```

Executes all test files in parallel across all configured browsers (Chromium, Firefox, WebKit).

### Run Specific Test File
```bash
npx playwright test tests/allTranslationTests.spec.ts
```

### Run Tests with Specific Browser
```bash
# Chromium only
npx playwright test tests/allTranslationTests.spec.ts --project=chromium

# Firefox only
npx playwright test tests/allTranslationTests.spec.ts --project=firefox

# WebKit (Safari) only
npx playwright test tests/allTranslationTests.spec.ts --project=webkit
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

Displays browser windows during test execution for visual debugging.

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

Opens Playwright Inspector for step-by-step debugging.

### Run Specific Test by Name
```bash
npx playwright test -g "test-name-pattern"
```

Example:
```bash
npx playwright test -g "Joined-words"
```

---

## 📊 Test Reports

After running tests, Playwright generates an **HTML report** automatically.

### View Test Report
```bash
npx playwright show-report
```

Or manually open:
```
playwright-report/index.html
```

### Report Contents:
- ✅ Passed/Failed test status
- ⏱️ Execution time for each test
- 📸 Screenshots on failure
- 🎬 Video recordings (if configured)
- 🔍 Trace files for debugging

### Test Results Directory
```
test-results/
├── allTranslationTests-Neg-Fun-0001---Joined-words-chromium/
├── allTranslationTests-Neg-Fun-0001---Joined-words-firefox/
├── allTranslationTests-Neg-Fun-0001---Joined-words-webkit/
└── ... (more test results)
```

---

## 📁 Project Structure

```
ITPM-Assignment-1-Playwright/
├── tests/
│   ├── allTranslationTests.spec.ts    # Main test suite
│   ├── swiftTranslator.spec.ts        # Additional tests
│   └── testData.ts                    # Test data and cases
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Project dependencies
├── README.md                          # This file
├── playwright-report/                 # HTML test reports
└── test-results/                      # Test execution results
```

---

## ⚙️ Configuration

### Playwright Configuration (`playwright.config.ts`)

Key settings:
- **Test Directory**: `./tests/`
- **Parallel Execution**: Enabled by default (`fullyParallel: true`)
- **Retries**: 0 locally, 2 on CI
- **Reporter**: HTML format with trace collection on first retry
- **Browsers**: Chromium, Firefox, WebKit

### Modify Timeouts
Edit `playwright.config.ts`:
```typescript
use: {
  navigationTimeout: 30000,
  actionTimeout: 10000,
  trace: 'on-first-retry',
}
```

---

## 🔍 Test Structure & Conventions

### Typical Test Pattern
```typescript
import { test, expect } from '@playwright/test';

test('Test Name', async ({ page }) => {
  // Navigate to URL
  await page.goto('https://www.swifttranslator.com/');
  
  // Wait for page load
  await page.waitForLoadState('networkidle');
  
  // Locate and interact with elements
  const textarea = page.locator('xpath=//textarea');
  await textarea.fill('test input');
  
  // Assertions
  expect(page.url()).toContain('swifttranslator.com');
  await expect(textarea).toBeVisible();
});
```

### Key Conventions:
- **Locators**: Prefer `page.getByRole()` or `page.locator('xpath=...')` over CSS selectors
- **Assertions**: Use `await expect()` for all verifications
- **Navigation**: Use `page.goto(url)` with full URLs
- **Waits**: Use `page.waitForLoadState()` or `page.waitForTimeout()`

---

## 🐛 Debugging & Troubleshooting

### Issue: Tests Fail to Connect to Website
```bash
# Check network connectivity
# Ensure swifttranslator.com is accessible
# Try running in headed mode to see errors
npx playwright test --headed
```

### Issue: Timeout Errors
```bash
# Increase timeout in playwright.config.ts
timeout: 60000, // 60 seconds

# Or increase specific test timeout
test.setTimeout(120000); // 2 minutes
```

### Issue: Element Not Found
```bash
# Run in debug mode to inspect selectors
npx playwright test --debug

# Check XPath in browser console
# Verify page has fully loaded before interacting
```

### Generate Trace for Debugging
```bash
npx playwright test --trace on
```

View trace:
```bash
npx playwright show-trace trace.zip
```

---

## 📝 Adding New Tests

1. **Create test case data** in `tests/testData.ts`:
```typescript
{
  tcId: 'TEST-001',
  name: 'My New Test',
  input: 'test input text',
  expectedOutput: 'expected output'
}
```

2. **Update test file** (`tests/allTranslationTests.spec.ts`):
```typescript
testCases.forEach((testCase) => {
  test(`${testCase.tcId} - ${testCase.name}`, async ({ page }) => {
    // Test logic here
  });
});
```

3. **Run the new test**:
```bash
npx playwright test -g "My New Test"
```

---

## 🔧 Environment Variables

Currently, no environment variables are required. To add support for custom URLs or credentials:

1. Create `.env` file:
```
TRANSLATOR_URL=https://www.swifttranslator.com/
```

2. Enable in `playwright.config.ts`:
```typescript
import dotenv from 'dotenv';
dotenv.config();
```

---

## 📚 Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test API](https://playwright.dev/docs/api/class-test)
- [Playwright Locators](https://playwright.dev/docs/locators)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Swift Translator](https://www.swifttranslator.com/)

---

## 💡 Best Practices

✅ **Do:**
- Use semantic locators (`getByRole`, `getByLabel`) when possible
- Add explicit waits for dynamic content
- Organize test data separately from test logic
- Use descriptive test names
- Check reports after test runs

❌ **Don't:**
- Use hard-coded delays (use `waitForLoadState` instead)
- Use overly complex XPath selectors
- Run all tests in sequence if parallel execution is available
- Skip assertions; verify expected behavior

---

## 📞 Support & Contribution

For issues, questions, or improvements:
1. Check the test report for detailed failure information
2. Review Playwright documentation
3. Enable debug mode for detailed logs
4. Check browser console in headed mode

---

## 📄 License

ISC License

---

**Last Updated:** January 2026  
**Project Version:** 1.0.0

