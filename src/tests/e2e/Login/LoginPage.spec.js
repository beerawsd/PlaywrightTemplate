// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';

test.describe('Login Page Tests', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    let loginPage;
    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      await loginPage.navigate();
	  await expect(page.url()).toBe('/account/login');

    });
	
    test('TS-Login-001: ตรวจสอบฟอร์มควรแสดงค่าตามที่กรอก ', async ({ page }) => {
        await loginPage.login('admin', '12345678');
        await expect (page.url()).toBe('/');
    
	});
});