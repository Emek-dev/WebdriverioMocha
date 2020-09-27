Feature: Forgot password

  Scenario: As a user i want to be able to reset password

    Given i am on the home page
    And i click on the sign in link
    And i click the forgot password link
    And i enter my email "johndugan@hotmail.co.uk" in the email field
    When i click on retrieve password button
    Then i get successful message "A confirmation email has been sent to your address: johndugan@hotmail.co.uk"






