import { test, expect } from '@playwright/test';

test('Todo MVC page title verification', async ({ page }) => {
  // Navigate to the Todo MVC demo application
  // This is a sample application commonly used for testing frameworks
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Verify that the page title contains "Todo"
  // This ensures we've successfully loaded the correct application
  await expect(page).toHaveTitle(/Todo/);
  
  // Optional: You can add more assertions here as needed
  // For example, checking if key elements are visible on the page
});
