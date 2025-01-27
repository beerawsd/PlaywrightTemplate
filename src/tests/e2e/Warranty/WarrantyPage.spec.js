import { test, expect } from '@playwright/test';
import WarrantyPage from '../../../pages/WarrantyPage';


test.describe('Warranty Page Test', () => {
    //test.use({ storageState: { cookies: [], origins: [] } });
    let warrantyPage;
  
    test.beforeEach(async ({ page }) => {
      warrantyPage = new WarrantyPage(page);
      await warrantyPage.navigate();
    });

    test('TS-Login-001: Test', async ({ page }) => {
        await warrantyPage.navigate();
        await expect(page.url()).toBe('https://warranty-uat.dpluscrm.com:14989/warranty');
     
    
      });
});