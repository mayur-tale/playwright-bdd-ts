Feature: New user is able to register and submit new user credentials request

    Scenario Outline: Verify that a new user registration request is submitted successfully
        Given User launches the Parabank website login page
        When User clicks on the Register link
        Then User can see the Register page
        When User enters user details '<firstName>' '<lastName>' '<SSN>'
        And User enters user address details '<addressStreet>' '<addressCity>' '<addressState>' '<addressZipCode>'
        And User enters credential details '<username>' '<password>'
        And User clicks Register button
        Then New user credential request is submitted successfully

        Examples:
            | firstName | lastName | SSN       | addressStreet | addressCity | addressState | addressZipCode | username | password |
            | doe       | test     | 344536663 | testStreet    | London      | Ontario      | 44390          | testmt3   | testmt   |