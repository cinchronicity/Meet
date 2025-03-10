import React from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { useEffect, useState } from "react";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";
import meetLogo from "./assets/Meet-logo.svg";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = React.useCallback(async () => {
    try {
      const allEvents = await getEvents();
      const filteredEvents =
        currentCity === "See all cities"
          ? allEvents
          : allEvents.filter((event) => event.location === currentCity);
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    } catch (error) {
      setErrorAlert("Failed to fetch events. Please try again later.");
    }
  }, [currentCity, currentNOE]);

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are offline. Displayed list may not be up-to-date.");
    }
    fetchData();
  }, [fetchData]); // Added fetchData as a dependency

  return (
    <div className="App">
      <div className="meet-header">
        <img src={meetLogo} alt="Meet App Logo" className="meet-logo" />
      </div>
      <h4>Find events happening near you!</h4>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length > 0 && <ErrorAlert text={errorAlert} />}
        {warningAlert.length > 0 && <WarningAlert text={warningAlert} />}
      </div>
      <div className="search-container">
        <NumberOfEvents
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
      </div>

      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart events={events} allLocations={allLocations} />
      </div>
      <EventList events={events} />
    </div>
  );
};

import PropTypes from "prop-types";
App.propTypes = {
  events: PropTypes.array.isRequired,
  currentNOE: PropTypes.number.isRequired,
  allLocations: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  infoAlert: PropTypes.string.isRequired,
  errorAlert: PropTypes.string.isRequired,
  warningAlert: PropTypes.string.isRequired,
  fetchData: PropTypes.func.isRequired,
};

export default App;
