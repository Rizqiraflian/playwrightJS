const { baseUrl } = require("../data/global");

class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameField = 'input[name="username"]';
      this.passwordField = 'input[name="password"]';
      this.loginButton = 'button[type="submit"]';
      this.errorMessageAlert = '.oxd-alert-content';
      this.errorMessageUsernameField = "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'][normalize-space()='Required'])[1]";
      this.errorMessagePasswordField = "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'][normalize-space()='Required'])[2]";
    }
  
    async navigate() {
      await this.page.goto(baseUrl);
    }
  
    async login(adminUsername, adminPassword) {
      await this.page.fill(this.usernameField, adminUsername);
      await this.page.fill(this.passwordField, adminPassword);
      await this.page.click(this.loginButton);
    }
  
    async getErrorMessage() {
      return await this.page.textContent(this.errorMessageAlert);
    }

    async getErrorMessageUsernameField() {
        return await this.page.textContent(this.errorMessageUsernameField);
      }

    async getErrorMessagePasswordField() {
        return await this.page.textContent(this.errorMessagePasswordField);
      }
  }
  
  module.exports = LoginPage;
  