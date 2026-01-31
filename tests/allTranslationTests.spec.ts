import { test, expect } from '@playwright/test';
import { testCases } from './testData';

// Test each case from the data
testCases.forEach((testCase) => {
  test(`${testCase.tcId} - ${testCase.name}`, async ({ page }) => {
    // Navigate to the Swift Translator URL
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Verify the page has loaded
    const title = await page.title();
    console.log(`Test: ${testCase.tcId} - ${testCase.name}`);
    console.log('Page title:', title);
    
    // Just verify the URL loaded successfully
    expect(page.url()).toContain('swifttranslator.com');
    
    // Input Singlish text into the textarea
    const textareaXpath = '/html/body/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/textarea';
    const textarea = page.locator(`xpath=${textareaXpath}`);
    
    await textarea.fill(testCase.input);
    console.log('Input:', testCase.input);
    
    // Wait longer for the translation to process
    await page.waitForTimeout(5000);
    
    // Find the Sinhala output div
    const resultElement = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
    
    try {
      await resultElement.waitFor({ state: 'visible', timeout: 8000 });
    } catch (e) {
      console.log('Result element not found with waitFor');
    }
    
    // Get the translated text
    const translatedText = await resultElement.textContent();
    console.log('Actual output:', translatedText?.trim());
    console.log('Expected output:', testCase.expected);
    console.log('---');
    
    // Verify the result matches the expected Sinhala text
    expect(translatedText?.trim()).toBe(testCase.expected);
    
    console.log(`✓ ${testCase.tcId} - PASSED\n`);
  });
});
