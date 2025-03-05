import React from "react";
import "./App.css";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import { useEffect, useState } from "react";
import { InfoAlert, ErrorAlert, WarningAlert} from "./components/Alert";

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState(""); 
  const [errorAlert, setErrorAlert] = useState(""); 
  const [warningAlert, setWarningAlert] = useState("");  

  useEffect(() => {
    fetchData();
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are offline. Displayed list may not be up-to-date.");
    }
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
          {warningAlert.length > 0 && <WarningAlert text={warningAlert} />}

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
