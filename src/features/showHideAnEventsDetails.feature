Feature: Show/hide event details
  Scenario: An event element is collapsed by default
    Given The user opens the events app
    When the event list is displayed
    Then each event element should be collapsed by default
  Scenario: User can expand an event by clicking the 'Show details' button
    Given The user is viewing the list of events
    When the user clicks on the 'Show details' button
    Then the event should be expanded and visible
  Scenario: User can collapse an event by clicking the 'Hide details' button
    Given The user has expanded an event
    When the user clicks on the 'Hide details' button
    Then the event should be collapsed and hidden