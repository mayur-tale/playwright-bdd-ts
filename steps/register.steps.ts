
import { Given, When, Then } from './fixtures';

When("User clicks on the Register link", async ({loginPage}) =>{
    await loginPage.clickRegisterButton();
})

Then("User can see the Register page", async ({registerPage}) => {
    await registerPage.verifyRegisterPageLoad();
})

When("User enters user details {string} {string} {string}", async ({registerPage}, firstName, lastName, SSN) =>{
    await registerPage.enterFirstName(firstName);
    await registerPage.enterLastName(lastName);
    await registerPage.enterCustomerSSN(SSN);
})

When("User enters user address details {string} {string} {string} {string}", async ({registerPage}, addressStreet, addressCity, addressState, addressZipCode)=>{
    await registerPage.enterAddressStreet(addressStreet);
    await registerPage.enterAddressCity(addressCity);
    await registerPage.enterAddressState(addressState);
    await registerPage.enterAddressZipCode(addressZipCode);
})

When("User enters credential details {string} {string}", async ({registerPage}, username, password)=>{
    await registerPage.enterUsername(username);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
})

When("User clicks Register button", async ({registerPage}) =>{
    await registerPage.clickRegisterButton();
})

Then("New user credential request is submitted successfully", async ({registerPage})=>{
    await registerPage.verifyRegistrationSuccess();
})