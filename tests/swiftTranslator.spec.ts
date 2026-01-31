// import { test, expect } from '@playwright/test';

// test('Load Swift Translator website', async ({ page }) => {
//   // Navigate to the Swift Translator URL
//   await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
  
//   // Wait for the page to be fully loaded
//   await page.waitForLoadState('networkidle');
  
//   // Verify the page has loaded by checking it's not empty
//   const title = await page.title();
//   console.log('Page title:', title);
  
//   // Just verify the URL loaded successfully
//   expect(page.url()).toContain('swifttranslator.com');
  
//   console.log('Successfully loaded Swift Translator website');
  
//   // Input Singlish text into the textarea
//   const textareaXpath = '/html/body/div/div/div/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/textarea';
//   const textarea = page.locator(`xpath=${textareaXpath}`);
  
//   await textarea.fill('mama yaaluvek ekka sarathchandra ekata giyaa aedhumak ganna dhaen gedhara yanavaa');
  
//   console.log('Successfully input Singlish text');
  
//   // Wait a bit for the translation to process
//   await page.waitForTimeout(2000);
  
//   // Find the Sinhala output div - it has class "bg-slate-50" and is the output area
//   const resultElement = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');
  
//   try {
//     await resultElement.waitFor({ state: 'visible', timeout: 5000 });
//   } catch (e) {
//     console.log('Result element not found with waitFor');
//   }
  
//   // Get the translated text
//   const translatedText = await resultElement.textContent();
//   console.log('Translated text:', translatedText);
//   console.log('Translated text length:', translatedText?.length);
  
//   // Verify the result matches the expected Sinhala text
//   const expectedResult = 'මම යාලුවෙක් එක්ක සරත්චන්ඩ්‍ර එකට ගියා ඇදුමක් ගන්න දැන් ගෙදර යනවා';
//   expect(translatedText?.trim()).toBe(expectedResult);
  
//   console.log('Translation verified successfully!');
// });


import { test, expect } from '@playwright/test';
import { testCases } from './testData';

testCases.forEach((testCase) => {
  test(`${testCase.tcId} - ${testCase.name}`, async ({ page }) => {

    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');

    const textarea = page.locator('textarea');
    const result = page.locator(
      'div.bg-slate-50.whitespace-pre-wrap'
    );

    // Clear + type like a real user
    await textarea.click();
    await textarea.fill('');
    await textarea.type(testCase.input, { delay: 30 });

    // 🔥 Wait UNTIL translation appears (not time-based)
    await expect.poll(async () => {
      return (await result.textContent())?.trim();
    }, {
      timeout: 20000
    }).toBe(testCase.expected);

    console.log(`✓ ${testCase.tcId} PASSED`);
  });
});
