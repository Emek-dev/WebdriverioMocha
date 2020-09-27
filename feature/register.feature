Feature: Register Account

  Background:
    Given i am on the home page
    And i click on the sign in link

    @register
    Scenario: To register an account
      And i enter email in the email field
      And i click on create new account button
      And i click on male gender radio button
      And i enter my first name in the name field
      And i enter my last name in the name field
      And i enter password "Sweetbob1234" in the password field
      And i enter DOB DAY "1" MONTH "7" and year "1986"
      And i enter address details "DonJ LTD" address "20" line2 "London road" city "Denver" state "Colorado" zipcode "12345" county "United States"
      And i enter my mobile number
      When i click on the register button
      Then i verify register success message: "Welcome to your account. Here you can manage all of your personal information and orders."
      And i sign out