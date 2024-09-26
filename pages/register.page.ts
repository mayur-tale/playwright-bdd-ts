import { Page, expect } from '@playwright/test';

export class RegisterPage {

    constructor (public readonly page: Page) {

    }

    private registerPageHeadingText = this.page.locator('//h1[contains(text(), "Signing up is easy")]');
    private firstNameBox = this.page.locator('//input[@id="customer.firstName"]');
    private lastNameBox = this.page.locator('//input[@id="customer.lastName"]');
    private AddressStreetBox = this.page.locator('//input[@id="customer.address.street"]');
    private AddressCityBox = this.page.locator('//input[@id="customer.address.city"]');
    private AddressStateBox = this.page.locator('//input[@id="customer.address.state"]');
    private AddressZipCodeBox = this.page.locator('//input[@id="customer.address.zipCode"]');
    private customerSSNBox = this.page.locator('//input[@id="customer.ssn"]');
    private usernameBox = this.page.locator('//input[@id="customer.username"]');
    private passwordBox = this.page.locator('//input[@id="customer.password"]');
    private confirmPasswordBox = this.page.locator('//input[@id="repeatedPassword"]');
    private registerButton = this.page.locator('//input[@value="Register"]');
    private registrationSuccessText = this.page.locator('//p[contains(text(), "Your account was created successfully")]');

    async verifyRegisterPageLoad () {
        await expect(this.registerPageHeadingText).toBeVisible();
    }

    async enterFirstName (firstName: string) {
        await this.firstNameBox.fill(firstName);
    }

    async enterLastName (lastName: string) {
        await this.lastNameBox.fill(lastName);
    }

    async enterAddressStreet (addressStreet: string) {
        await this.AddressStreetBox.fill(addressStreet);
    }

    async enterAddressCity (addressCity: string) {
        await this.AddressCityBox.fill(addressCity);
    }

    async enterAddressState (addressState: string) {
        await this.AddressStateBox.fill(addressState);
    }

    async enterAddressZipCode (addressZipCode: string) {
        await this.AddressZipCodeBox.fill(addressZipCode);
    }

    async enterCustomerSSN (customerSSN: string) {
        await this.customerSSNBox.fill(customerSSN);
    }

    async enterUsername (username: string) {
        await this.usernameBox.fill(username);
    }

    async enterPassword (password: string) {
        await this.passwordBox.fill(password);
    }

    async enterConfirmPassword (confirmPassword: string) {
        await this.confirmPasswordBox.fill(confirmPassword);
    }

    async clickRegisterButton () {
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess() {
        await expect(this.registrationSuccessText).toBeVisible();
    }

    
}