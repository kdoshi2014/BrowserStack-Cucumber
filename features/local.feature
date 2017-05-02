Feature: BrowserStack Local Testing

  Scenario: Can check tunnel working
    When I open localhost
    Then I can see title "Welcome to XAMPP"
