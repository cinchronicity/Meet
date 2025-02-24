import React from 'react';
import Event from './Event';
import "../App.css"; 



const EventList = ({events}) => {
  return (
    <ul id="event-list" data-testid="event-list">
      {events? events.map(event => <Event key={event.id} event={event}  />): null}
      </ul>
  );
}


export default EventList;