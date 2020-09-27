Feature: Search

  Background:
    Given i am on the home page

    @search
    Scenario: As a user i want to search for an item and verify its described on the PDP page
      When i search for "dress" in the search input box
      Then i see see a product definition page with title "Printed Summer Dress"
