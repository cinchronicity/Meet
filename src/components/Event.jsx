import React from 'react';
import { useState } from 'react';
import "../App.css"; 
import PropTypes from 'prop-types';


const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <div className="eventSummary">
        <h2>{event.summary}</h2>
        <p>{event.location}</p>
        <p>{event.created}</p>
      </div> 
      {showDetails ? (
        <div className="eventDetails">
          <p>{event.description}</p>
        </div>
      ) : null}
      <button className="show-details-btn"
        onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
    </li>
  );
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default Event;