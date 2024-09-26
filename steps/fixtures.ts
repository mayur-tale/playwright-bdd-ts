import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { RegisterPage } from '../pages/register.page';

type MyFixtures = {
    loginPage: LoginPage;
    registerPage: RegisterPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    }
});

export const { Given, When, Then } = createBdd(test);