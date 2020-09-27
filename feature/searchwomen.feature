Feature: Search by Hovering
  Background:
    Given i am on the home page
    @searchwomen
    Scenario: i want to search by hovering the mouse on the element
      And i move the mouse over women and selected from the drop down list
      And i see "SUMMER DRESSES" on the PLP
      And i clicked on printed chiffon dress and see PDP
      And I select quantity as "2" and size as "L"
      And i click on add to cart button
      And i see add to cart success and and click on proceed to check out button
      And i see cart summary and continue to click on check out button
      And i enter my email "johndugan@hotmail.co.uk" in the email field
      And i enter my password "Sweetbob1234" in the password field
      And i click the login button
      And i confirm the delivery address: "YOUR DELIVERY ADDRESS" and "YOUR BILLING ADDRESS"
      And i click on the third proceed to check out button
      And i agree to the terms and conditions
      And i click on the fourth proceed to check out button
      And i select payment by check method
      And i confirm the order summery message "ORDER SUMMARY"
      When i click on order confirmation button
      Then i verify order confirmation message: "Your order on My Store is complete."
      And i sign out






