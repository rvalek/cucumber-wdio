Feature: Logging in to LMS

Background:
    Given I'm on the login page

Scenario: Log in with the wrong password
    When I log in with incorrect password
    Then show error message

Scenario: Log in with a teacher's account
    When I log in with teacher's credentials
    Then show the list of teacher's classes