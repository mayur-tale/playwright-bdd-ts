/** Generated from: features\T001_login.feature */
import { test } from "../../steps/fixtures.ts";

test.describe("User is able to login to the parabank site", () => {

  test.describe("Registered user logs into the parabank website", () => {

    test("Example #1", { tag: ["@demo"] }, async ({ Given, loginPage, When, And, Then }) => {
      await Given("User launches the Parabank website login page", null, { loginPage });
      await When("User enters userid 'testmt' in the userid field", null, { loginPage });
      await And("User enters password 'testmt' in the password field", null, { loginPage });
      await And("User clicks the Login button", null, { loginPage });
      await Then("User is logged in successfully", null, { loginPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\T001_login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Registered user logs into the parabank website|Example #1": {"pickleLocation":"12:13","tags":["@demo"]},
};