import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {

    constructor (public readonly page: Page) {

    }

    private useridBox = this.page.locator('input[name="username"]');
    private passwordBox = this.page.locator('input[name="password"]');
    private loginButton = this.page.getByRole('button', { name: 'Log In' });
    private accountOverviewHeadingText = this.page.locator('//h1[contains(text(), "Accounts Overview")]').first();
    private registerLink = this.page.locator('//a[contains(text(), "Register")]');

     async goTo() {
        await this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
     }

     async enterUserid(userid: string) {
        await this.useridBox.fill(userid);
     }

     async enterPassword(password: string) {
        await this.passwordBox.fill(password);
     }

     async clickLoginButton() {
        await this.loginButton.click();
     }

     async verifyLoginSuccessful() {
        await expect(this.accountOverviewHeadingText).toBeVisible();
     }

     async clickRegisterButton() {
         await this.registerLink.click();
     }
}

