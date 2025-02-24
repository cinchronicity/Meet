Feature: Specify number of events
  Scenario: When user hasn’t specified a number, 32 events are shown by default
    Given The user opens the events app
    And The user has not specified a number of events to display
    When The event list is loaded
    Then 32 events should be displayed by default
  Scenario: User can change the number of events displayed
    Given The user sees a list of events
    When The user specifies the number of events to display
    Then The event list should update to show the specified number of events