import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './../App';
import { getEvents } from '../api';



describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })
  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    })  
  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
  test('renders NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });
});

describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
 
 
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
 
 
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
 
 
    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  
 
 
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
 
 
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    
    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
  
  test('User can change the number of events displayed', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // Given the user has just opened the app
    // (App is already rendered at this point)

    // When the user changes the value of the “number of events” input field
    const numberInput = within(AppDOM).getByRole('spinbutton');
    await user.clear(numberInput);
    await user.type(numberInput, '{backspace}{backspace}10');

    // Fetch events with the updated number of events
    const allEvents = await getEvents();
    const filteredEvents = allEvents.slice(0, 10);

    // Then the number of events in the list will change accordingly
    const EventListDOM = AppDOM.querySelector('#event-list');
    const eventListItems = within(EventListDOM).queryAllByRole('listitem');
    expect(eventListItems).toHaveLength(filteredEvents.length);
  });

});

