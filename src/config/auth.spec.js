// const { test, expect } = require('@playwright/test');

// //   test.use({ storageState: 'playwright/.auth/admin.json' });
// //   test.use({ storageState: 'playwright/.auth/user.json' });
// //   test.use({ storageState: { cookies: [], origins: [] } });

// const adminFile = 'src/config/playwright/.auth/admin.json';
// test('authenticate as admin', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto('/account/login');
//   await page.locator('input[name="username"]').fill(process.env.username);
//   await page.locator('input[name="password"]').fill(process.env.password);
//   await page.locator('button[usefor="LOGIN"]').click();
//   await page.waitForURL('/');
 
//   //Assert something 
//   //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

//   // End of authentication steps.
//   await page.context().storageState({ path: adminFile });
// });



