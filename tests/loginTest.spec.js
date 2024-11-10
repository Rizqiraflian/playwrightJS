require('../utils/hook.js');

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const { adminUsername, adminPassword, invalidUsername, universalPassword, dashboardUrl } = require('../data/global.js');

test.describe('Login Feature Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('login success', async ({ page }) => {
    await test.step('Input admin credential', async () => {
      await loginPage.login(adminUsername, adminPassword);
    });
    await test.step('Verify Dashboard URL', async () =>{
      await expect(page).toHaveURL(dashboardUrl);
    });
    
  });

  test('login with invalid credentials', async ({ page }) => {
    await test.step('input invalid admin credential', async () =>{
      await loginPage.login(invalidUsername, universalPassword);
    });
    await test.step('Verify error message validation', async () => {
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage).toContain('Invalid credentials');
    });
  });

  test('check mandatory field validation', async ({ page }) => {
    await test.step('input blank value on the login field', async () => {
      await loginPage.login('', '');
    });
    await test.step('Verify error message validation', async () => {
      const usernameErrorMessage = await loginPage.getErrorMessageUsernameField();
      const passwordErrorMessage = await loginPage.getErrorMessagePasswordField();
      //Verify Text
      expect(usernameErrorMessage).toContain('Required');
      expect(passwordErrorMessage).toContain('Required');
    });
  });
});
