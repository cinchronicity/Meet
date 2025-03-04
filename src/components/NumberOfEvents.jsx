import React, { useState } from "react";
import PropTypes from "prop-types";
import "../App.css"; 


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
      if (isNaN(value) || value <= 0) {
      setErrorAlert('Please enter a valid number of events');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }
    setNumber(value);
  };


  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="number"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired,
};

export default NumberOfEvents;
