
import { Given, When, Then } from './fixtures';


         Given('User launches the Parabank website login page', async  ({ loginPage }) =>{
            await loginPage.goTo();
         });

         When('User enters userid {string} in the userid field', async  ({ loginPage }, userid)=> {
            await loginPage.enterUserid(userid);
         });

         When('User enters password {string} in the password field', async  ({ loginPage }, password) => {
            await loginPage.enterPassword(password);
         });

 
         When('User clicks the Login button', async  ({ loginPage }) => {
            await loginPage.clickLoginButton();
         });

  
         Then('User is logged in successfully', async  ({ loginPage }) =>  {
           
           await loginPage.verifyLoginSuccessful();
           
         });