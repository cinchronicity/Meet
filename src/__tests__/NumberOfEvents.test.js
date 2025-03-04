import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

// FEATURE 3: SPECIFY NUMBER OF EVENTS
describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let setCurrentNOE;
  let setErrorAlert;

  beforeEach(() => {
    setCurrentNOE = jest.fn(); // Create a mock function to pass as a prop to the NumberOfEvents component
    setErrorAlert = jest.fn();
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
    );
  });

  test("contains an element with the role of the textbox", () => {
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberInput).toBeInTheDocument();
  });

  test("default value of the input field is 32", () => {
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(numberInput).toHaveValue(32);
  });

  test("value of the textbox changes accordingly when a user types in it", async () => {
    const user = userEvent.setup();
    const numberInput = NumberOfEventsComponent.queryByRole("spinbutton");
    await user.type(numberInput, "{backspace}{backspace}10");
    expect(numberInput).toHaveValue(10);
    expect(setCurrentNOE).toHaveBeenCalledWith("10");
  });
});


