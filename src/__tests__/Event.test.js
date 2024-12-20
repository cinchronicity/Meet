import React from "react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import mockData from "../mock-data";

//FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
const event = mockData[0];

describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  //test en element for events title
  test("render event title", () => {
    const eventTitle = EventComponent.queryByText(event.summary);
    expect(eventTitle).toBeInTheDocument();
  });
  //test for events start time
  test("render event start time", () => {
    const eventStartTime = EventComponent.queryByText(event.created);
    expect(eventStartTime).toBeInTheDocument();
  });
  //test for events location
  test("render event location", () => {
    const eventLocation = EventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });
  //test for events show details button
  test("render show details button", () => {
    const showDetailsButton = EventComponent.queryByText("Show Details");
    expect(showDetailsButton).toBeInTheDocument();
  });

  //scenario 1- an event element is collapsed by default
  test("should collapse event details by default", () => {
    const eventDetails =
      EventComponent.container.querySelector(".eventDetails");
    expect(eventDetails).not.toBeInTheDocument();
  });

  //scenario 2- user can expand an event to see its details
  test("user can expand event details by clicking 'show details'", async () => {
    const user = userEvent.setup();

    const showDetailsButton = EventComponent.queryByText("Show Details");
    expect(showDetailsButton).toBeInTheDocument();
    //Click the show details button
    await user.click(showDetailsButton);
    //Check if the event details are displayed
    const eventDetails =
      EventComponent.container.querySelector(".eventDetails");
    expect(eventDetails).toBeInTheDocument();
  });
  //scenario 3- user can collapse an event to hide its details
  // test("user can collapse event details by clicking 'hide details'", async () => {
  //   const user = userEvent.setup();

  //   const showDetailsButton = EventComponent.queryByText("Show Details");
  //   expect(showDetailsButton).toBeInTheDocument();
  //   await user.click(showDetailsButton);
  //   const eventDetails = EventComponent.container.querySelector(".eventDetails");
  //   expect(eventDetails).toBeInTheDocument();
  //   //Click the hide details button
  //   const hideDetailsButton = EventComponent.queryByText("Hide Details");
  //   await user.click(hideDetailsButton);
  //   //Check if the event details are hidden
  //   eventDetails = EventComponent.container.querySelector(".eventDetails");
  //   expect(eventDetails).not.toBeInTheDocument();
  // });

  // Scenario 3 - user can collapse an event to hide its details
  test("user can collapse event details by clicking 'hide details'", async () => {
    const user = userEvent.setup();
    // Expand details first
    await user.click(EventComponent.queryByText("Show Details"));
    expect(EventComponent.queryByText("Hide Details")).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".eventDetails")
    ).toBeInTheDocument();
    // Collapse details
    await user.click(EventComponent.queryByText("Hide Details"));
    expect(EventComponent.queryByText("Hide Details")).not.toBeInTheDocument();
    expect(EventComponent.queryByText("Show Details")).toBeInTheDocument();
    expect(
      EventComponent.container.querySelector(".eventDetails")
    ).not.toBeInTheDocument();
  });
});
