Feature: BrowserStack Live Session functionality

  Scenario: Can open Live session
    When I type URL in browser as "BrowserStack.com"
    Then I click on "Sign in"
    Then I enter email as "email"
    Then I enter password as "password"
    Then I submit
    Then I skip local installation popup
    Then I select the browser
    Then I should see title "Dashboard"