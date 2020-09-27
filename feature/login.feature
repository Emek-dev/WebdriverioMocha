Feature: Login

  Scenario Outline: As a user i want to login successfully

    Given i am on the home page
    And i click on the sign in link
    And i enter my email "<myemail>" in the email field
    And i enter my password "<mypassword>" in the password field
    When i click the login button
    Then i should be logged in
    Then i verify "<expectedName>" on my details page
    And i sign out

    Examples:
      | myemail                | mypassword    | expectedName  |
      | ebob20213@gmail.com    | Sweetbob1234  | Emeka Ekebere |
      | laurasmith@aol.com     | Sweetbob1234  | laura smith   |
      | johndugan@hotmail.co.uk| Sweetbob1234  | john dugan    |

  Scenario Outline: as a user i want to see an error message when i log in incorrectly

    Given i am on the home page
    And i click on the sign in link
    And i enter my email "<myemail>" in the email field
    And i enter my password "<mypassword>" in the password field
    When i click the login button
    Then i see an error "<expectedErrorMessage>" message details


    Examples:
      | myemail                | mypassword  | expectedErrorMessage      |
      | ebob20213@gmail.com    |             | Password is required.     |
      |                        | Sweetbob1234| An email address required.|
      | johndugan@hotmail.co.uk| Sweetbob123 | Authentication failed.    |
      |                        |             | An email address required.|

