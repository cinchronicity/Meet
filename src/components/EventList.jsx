import React from "react";
import Event from "./Event";
import "../App.css";
import PropTypes from "prop-types";

const EventList = ({ events }) => {
  return (
    <ul id="event-list" data-testid="event-list">
      {events
        ? events.map((event) => <Event key={event.id} event={event} />)
        : null}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
