// const { test, expect } = require('@playwright/test');

// // test.describe("Login with Admin ",() => {
// //   test.use({ storageState: 'playwright/.auth/admin.json' });
// //   test('has title', async ({ page }) => {
// //     await page.goto('https://warranty-uat.dpluscrm.com:14989/warranty');
// //     // Expect a title "to contain" a substring.
// //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/warranty');
// //     await page.screenshot({ path: 'screenshot.png' });
// //     await page.locator('button[usefor="WARRANTY"]').click();
// //     await page.screenshot({ path: 'screenshot2.png' });
// //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/register-warranty');
// //     });
// // });

// // test.describe("Login with User ",() => {
// //   test.use({ storageState: 'playwright/.auth/user.json' });
// //   test('has title', async ({ page }) => {
// //     await page.goto('https://warranty-uat.dpluscrm.com:14989/warranty');
// //     // Expect a title "to contain" a substring.
// //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/warranty');
// //     await page.screenshot({ path: 'screenshot3.png' });
// //     await page.locator('button[usefor="WARRANTY"]').click();
// //     await page.screenshot({ path: 'screenshot4.png' });
// //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/register-warranty');
// //     });
// // });


// // test.describe("Login with out state", () => {
// //   test.use({ storageState: { cookies: [], origins: [] } });
// //   test('has title test', async ({ page }) => {
// //     await page.goto('https://warranty-uat.dpluscrm.com:14989/warranty');
// //     // Expect a title "to contain" a substring.
// //     await expect(page).toHaveURL('https://warranty-uat.dpluscrm.com:14989/account/login');
// //     await page.screenshot({ path: '/reports/login/screenshot5.png' });
// //   });
// // });

// const adminFile = 'src/config/playwright/.auth/admin.json';
// test('authenticate as admin', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto('https://warranty-uat.dpluscrm.com:14989/account/login');
//   await page.locator('input[name="username"]').fill('admin');
//   await page.locator('input[name="password"]').fill('12345678');
//   await page.locator('button[usefor="LOGIN"]').click();
//   await page.waitForURL('https://warranty-uat.dpluscrm.com:14989/');
 
//   //Assert something 
//   //await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

//   // End of authentication steps.
//   await page.context().storageState({ path: adminFile });
// });



