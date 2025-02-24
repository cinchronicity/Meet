import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor, fireEvent } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("The user opens the events app", () => {
      AppComponent = render(<App />);
    });

    when("the event list is displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("each event element should be collapsed by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".eventDetails");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test( "User can expand an event by clicking the 'Show details' button", ({ given, when, then }) => {
    let AppComponent;
    given("The user is viewing the list of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("the user clicks on the 'Show details' button", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const showDetailsButtons = within(AppDOM).queryAllByText("Show Details");
      fireEvent.click(showDetailsButtons[0]); // Kliknij pierwszy przycisk "Show Details"
    });

    then("the event should be expanded and visible", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".eventDetails");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("User can collapse an event by clicking the 'Hide details' button", ({
    given,
    when,
    then,
  }) => {
    given("The user has expanded an event", async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const showDetails = EventComponent.queryByText("Show details");
      await user.click(showDetails);
    });

    when("the user clicks on the 'Hide details' button", async () => {
      const user = userEvent.setup();
      const allEvents = await getEvents();
      const EventComponent = render(<Event event={allEvents[0]} />);
      const hideDetails = EventComponent.queryByText("Hide details");
      await user.click(hideDetails);
    });

    then("the event should be collapsed and hidden", async () => {
      let AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".eventDetails");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
