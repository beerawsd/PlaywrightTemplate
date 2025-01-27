import { test, expect } from '@playwright/test';

test(`api demo2`,async({playwright}) => {
    await page.goto('https://demoqa.com')
    await page.fill('id=userName','demoqa')
    await page.fill('password','Welcome1!');

    Promise.all([
        page.waitForRequeset(new RegExp('.*/v1v/Login.*')),
        page.click(''),
    ])
    await page.waitForNavigation();

    const e = await page.waitForSelector('css=div.main-header');
    const headerText = await e.textContent();
    console.log(`Header Text= ${headerText}`);
});
