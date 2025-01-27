// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import LoginPage from '../../../pages/LoginPage';
import WarrantyPage from '../../../pages/WarrantyPage';
import { loginValidData , loginInvalidData } from '../../../fixtures/LoginData';


test.describe('Login Page Tests', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    let loginPage;
  
    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      await loginPage.navigate();
    });

    test('TS-Login-001: ตรวจสอบฟอร์มควรแสดงค่าตามที่กรอก ', async ({ page }) => {
        
        await expect(page.url()).toBe('https://warranty-uat.dpluscrm.com:14989/account/login');
        await loginPage.login('admin', '12345678');
        
        await expect (page.url()).toBe('https://warranty-uat.dpluscrm.com:14989/');
    
      });
});