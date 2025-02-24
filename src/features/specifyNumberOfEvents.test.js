import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import React from "react";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let EventListDOM;
    given("The user opens the events app", () => {
      AppComponent = render(<App />);
    });

    and("The user has not specified a number of events to display", () => {});
    // no action needed here, as Number of Events component starts with 32
    when("The event list is loaded", () => {
      EventListDOM = AppComponent.getByTestId("event-list"); // Updated selection
    });

    then("32 events should be displayed by default", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test("User can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let NumberInput;
    let EventListDOM;
    given("The user sees a list of events", () => {
      AppComponent = render(<App />);
      EventListDOM = AppComponent.getByTestId("event-list");
      NumberInput = AppComponent.getByLabelText(/number of events/i);
    });

    when("The user specifies the number of events to display", async () => {
      const user = userEvent.setup();
      await user.clear(NumberInput);
      await user.type(NumberInput, "10");
    });

    then(
      "The event list should update to show the specified number of events",
       async () => {
        await waitFor(() => {
          const EventListItems = within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
        });
      });
  });
});
