This framework uses playwright-bdd package to utilize Playwright's native runner and reporting features combined with BDD flexibility

Steps to install - 

1. Install playwright-bdd
    
        npm i -D playwright-bdd

2. Install playwright browsers
    
        npx playwright install

3. Create folder structure
    
        root
        -features
        -pages
        -steps

4. Create new config file (playwright.config.ts) at root
    
    content - 
        
        import { defineConfig } from '@playwright/test';
        import { defineBddConfig } from 'playwright-bdd';

        const testDir = defineBddConfig({
            features: 'features/*.feature', // <--relative path to features location
            steps: ['steps/*.steps.ts', 'steps/fixtures.ts'] // <-- relative path to steps and fixtures location
        });

        export default defineConfig({
            testDir,
            reporter: 'html'
        });

5. Create a feature file (T001_login.feature) under features folder and add gherkin BDD test to it

6. Create a page file (login.page.ts) (corresponding to a single application webpage) and add the following to it - 
    
    // imports - 

        import type { Page, Locator } from '@playwright/test';
        import { expect } from '@playwright/test';

    // class definition for page - 

        export class LoginPage {
    
    //constructor - 

            constructor (public readonly page: Page) {

            }
    //locators - 

            private useridBox = this.page.locator('input[name="username"]');
            private passwordBox = this.page.locator('input[name="password"]');
            private loginButton = this.page.getByRole('button', { name: 'Log In' });
            private accountOverviewHeadingText = this.page.locator('//h1[contains(text(), "Accounts Overview")]').first();

    //methods to define actions on locators -

            async goTo() {
                await this.page.goto("https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
            }

            async enterUserid(userid: string) {
                await this.useridBox.fill(userid);
            } }

7. Create fixtures file (fixtures.ts) in /steps folder and add the following to it - 
            
            // imports - 
            import { test as base, createBdd } from 'playwright-bdd'; // <-- required to modify the default fixture 
            import { LoginPage } from '../pages/login.page'; // <-- required for reference to page file class

            type MyFixtures = {
                loginPage: LoginPage; // <-- create multiple fixtures for multiple pages
            };

            export const test = base.extend<MyFixtures>({ // <-- extend the default fixture with newly created ones
                loginPage: async ({ page }, use) => { // <-- add usage for all newly created fixtures in MyFixtures above
                    await use(new LoginPage(page));
                }
            });

            export const { Given, When, Then } = createBdd(test); // <-- export the modified createBdd fixture to steps

8. Create steps file (login.steps.ts) (corresponding to a single application webpage) and add following to it - 
        
        // import the custom fixture from fixtures.ts
            import { Given, When, Then } from './fixtures';

        // write step definitions and use page-specific fixture (e.g. loginPage) in the async function, then use fixture-specific methods
                Given('User launches the Parabank website login page', async  ({ loginPage }) =>{
                    await loginPage.goTo();
                });

                When('User enters userid {string} in the userid field', async  ({ loginPage }, userid)=> {
                    await loginPage.enterUserid(userid);
                });

9. Generate specs using - (bddgen needs to be run for any feature addition / updates to update the specs)
        
        npx playwright-bdd bddgen

10. Run test features in headed mode using - 
        
        npx playwright test --headed

11. Open playwright ui using - 
        
        npx playwright test --ui
        