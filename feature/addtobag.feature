
Feature: Add to Bag
  Background:
    Given i am on the home page
    And i search for "dress" in the search input box
    And i see see a product definition page with title "Printed Summer Dress"

    @addtobag
    Scenario: As a user i want to be able to add item(s) to bag
      And i select more items
      And i select size L
      When i add to cart
      Then i verify item is added to cart


