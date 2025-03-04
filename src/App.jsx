import React from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { useEffect, useState } from "react";
import { InfoAlert, ErrorAlert } from "./components/Alert";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState(""); // new state for alert message text
  const [errorAlert, setErrorAlert] = useState(""); // new state for error alert message text

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
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
  }; // new catch block to handle network or server errors

  return (
    <div className="App">
      <div className="App-header">
        <div className="alerts-container">
          {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
          {errorAlert.length > 0 && <ErrorAlert text={errorAlert} />}

        </div>
        <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>

        <CitySearch
          allLocations={allLocations}
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;
