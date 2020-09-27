Feature: Check Out

  Background:
    Given i am on the home page
    And i search for "dress" in the search input box
    And i see see a product definition page with title "Printed Summer Dress"
    And i select more items
    And i select size L
    #And I select quantity "2" and size "L"
    And i add to cart


    @checkout
    Scenario: As a user i want to check out item(s) from cart
      And i click on the proceed to check out button
      And i click on the second proceed to check out button
      And i enter my email "johndugan@hotmail.co.uk" in the email field
      And i enter my password "Sweetbob1234" in the password field
      And i click the login button
      And i click on the third proceed to check out button
      And i agree to the terms and conditions
      And i click on the fourth proceed to check out button
      And i verify i am on payment page "PLEASE CHOOSE YOUR PAYMENT METHOD"
      And i select payment by check method
      When i click on order confirmation button
      Then i verify order confirmation message: "Your order on My Store is complete."


