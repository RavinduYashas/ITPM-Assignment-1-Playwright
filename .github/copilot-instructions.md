# Copilot Instructions for ITPM Assignment 1 Playwright

## Project Overview
This is a Playwright-based test automation project for web UI testing. The architecture centers on test files in the `tests/` directory, configured via `playwright.config.ts` for cross-browser execution (Chromium, Firefox, WebKit).

## Key Components
- **Test Suite**: Located in `tests/`, using Playwright's test runner.
- **Configuration**: `playwright.config.ts` defines test directory, parallel execution, retries, and browser projects.
- **Reports**: HTML reports generated in `playwright-report/` after test runs.

## Critical Workflows
- **Run Tests**: Use `npx playwright test` to execute all tests in parallel across configured browsers.
- **Debug Tests**: Run `npx playwright test --headed` to see browser windows during execution.
- **View Reports**: After tests, open `playwright-report/index.html` to review results and traces.
- **Run Specific Test**: `npx playwright test tests/example.spec.ts --project=chromium`

## Project Conventions
- **Test Structure**: Tests use `test()` function with async page fixtures. Assertions via `expect()` with Playwright matchers.
- **Locators**: Prefer semantic locators like `page.getByRole('link', { name: 'Get started' })` over CSS selectors, as seen in `tests/example.spec.ts`.
- **Navigation**: Use `page.goto(url)` for navigation, with full URLs since no baseURL is set.
- **Assertions**: Use `await expect(page).toHaveTitle(/regex/)` or `await expect(locator).toBeVisible()` for UI checks.
- **Configuration**: No custom scripts in `package.json`; rely on `npx` for Playwright commands. TypeScript used for config and tests, but no build step required.

## Integration Points
- **Browsers**: Tests run on Chromium, Firefox, WebKit via Playwright's built-in browsers.
- **External Sites**: Tests target external websites (e.g., https://playwright.dev/); no local server integration.
- **Dependencies**: Only `@playwright/test` and `@types/node` as dev dependencies.

## Examples
- Basic test: Navigate and assert title: `await page.goto('https://playwright.dev/'); await expect(page).toHaveTitle(/Playwright/);`
- Interaction: Click link and verify: `await page.getByRole('link', { name: 'Get started' }).click(); await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();`

Focus on semantic locators and async/await patterns consistent with Playwright best practices.</content>
<parameter name="filePath">c:\Users\ravin\OneDrive\Desktop\Projects\ITPM Assiment 1\ITPM-Assignment-1-Playwright\.github\copilot-instructions.md