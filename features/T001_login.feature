Feature: User is able to login to the parabank site

    @demo
    Scenario Outline: Registered user logs into the parabank website
        Given User launches the Parabank website login page
        When User enters userid '<userid>' in the userid field
        And User enters password '<password>' in the password field
        And User clicks the Login button
        Then User is logged in successfully
        Examples:
            | userid | password |
            | testmt | testmt   | 
