const { defineConfig, devices } = require('@playwright/test');
import * as dotenv from 'dotenv';

module.exports = defineConfig({
  //globalSetup : 'src/config/global-setup.js',
  //globalTeardown: './src/config/teardown.js',
  testDir: './src',
  timeout: 30000, 

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    video: "on",
    launchOptions:{
      slowMo: 1000
    },
    trace: 'on',
    screenshot: 'on',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    { 
      name: 'setup',
      //testMatch: /src\/config\/auth\.spec\.js/,
      testMatch: /src\/config\/auth\.setup/,
    },
    {
      name: 'tests',  
      testMatch: /src\/tests\/e2e\/.*\.spec\.js/, // จับทุกไฟล์ที่ลงท้ายด้วย .spec.js ใน src/tests/
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'src/config/playwright/.auth/admin.json', // ใช้ storageState ที่ถูกบันทึกไว้
      },
    },
    //ตั้งค่า teardown
    {
      name: 'teardown',
      testMatch: /src\/config\/teardown\.spec\.js/, // ระบุไฟล์ teardown
      dependencies: ['tests'], // รอ tests เสร็จแล้วจึงทำ teardown
    },
    {
      name: 'api',
      testMatch: '**/src/tests/api/**/*.js',  // หรือ **/*.js ถ้าเป็น JavaScript
      storageState: undefined
    }
    
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

