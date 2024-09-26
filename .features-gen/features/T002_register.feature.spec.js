/** Generated from: features\T002_register.feature */
import { test } from "../../steps/fixtures.ts";

test.describe("New user is able to register and submit new user credentials request", () => {

  test.describe("Verify that a new user registration request is submitted successfully", () => {

    test("Example #1", async ({ Given, loginPage, When, Then, registerPage, And }) => {
      await Given("User launches the Parabank website login page", null, { loginPage });
      await When("User clicks on the Register link", null, { loginPage });
      await Then("User can see the Register page", null, { registerPage });
      await When("User enters user details 'doe' 'test' '344536663'", null, { registerPage });
      await And("User enters user address details 'testStreet' 'London' 'Ontario' '44390'", null, { registerPage });
      await And("User enters credential details 'testmt3' 'testmt'", null, { registerPage });
      await And("User clicks Register button", null, { registerPage });
      await Then("New user credential request is submitted successfully", null, { registerPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\T002_register.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify that a new user registration request is submitted successfully|Example #1": {"pickleLocation":"15:13"},
};