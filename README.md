# Meet App  

## Table of Contents  
- [User Stories](#user-stories)  
- [Scenarios](#scenarios)  
<!-- - [Installation](#installation)  
- [Features](#features)  
- [Contributing](#contributing)   -->


## User Stories  

### **Filter Events by City**  
*As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.*  

### **Show/Hide Event Details**  
*As a user, I should be able to show or hide event details, so that I can view only the information I need without cluttering the screen.*  

### **Specify Number of Events**  
*As a user, I should be able to specify the number of events displayed, so that I can control how much information I see at once.*  

### **Use the App When Offline**  
*As a user, I should be able to use the app when offline, so that I can access essential event information even without an internet connection.*  

### **Add an App Shortcut to the Home Screen**  
*As a user, I should be able to add a shortcut for the app to my home screen, so that I can quickly access it without opening a browser.*  

### **Display Charts Visualizing Event Details**  
*As a user, I should be able to view charts visualizing event details, so that I can easily understand event trends and statistics.*  
## User Stories  

### **Filter Events by City**  
*As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.*  

### **Show/Hide Event Details**  
*As a user, I should be able to show or hide event details, so that I can view only the information I need without cluttering the screen.*  

### **Specify Number of Events**  
*As a user, I should be able to specify the number of events displayed, so that I can control how much information I see at once.*  

### **Use the App When Offline**  
*As a user, I should be able to use the app when offline, so that I can access essential event information even without an internet connection.*  

### **Add an App Shortcut to the Home Screen**  
*As a user, I should be able to add a shortcut for the app to my home screen, so that I can quickly access it without opening a browser.*  

### **Display Charts Visualizing Event Details**  
*As a user, I should be able to view charts visualizing event details, so that I can easily understand event trends and statistics.*  

## Scenarios  

<details>  
  <summary>**Feature: Filter Events By City**</summary>  

  #### **Scenario: When user hasn’t searched for a city, show upcoming events from all cities**  
  - **Given:** The user has not entered a city in the search bar  
  - **When:** The event list is displayed  
  - **Then:** The app should show upcoming events from all cities  

  #### **Scenario: User should see a list of suggestions when they search for a city**  
  - **Given:** The user is on the events search page  
  - **When:** The user starts typing a city name in the search bar  
  - **Then:** The app should display a list of suggested cities matching the input  

  #### **Scenario: User can select a city from the suggested list**  
  - **Given:** The user sees a list of suggested cities  
  - **When:** The user clicks on a city from the list  
  - **Then:** The app should filter and display upcoming events only from the selected city  

</details>  

---

<details>  
  <summary>**Feature: Show/Hide Event Details**</summary>  

  #### **Scenario: An event element is collapsed by default**  
  - **Given:** The user opens the events app  
  - **When:** The event list is displayed  
  - **Then:** Each event element should be collapsed by default  

  #### **Scenario: User can expand an event to see details**  
  - **Given:** The user sees a list of events  
  - **When:** The user clicks on an event  
  - **Then:** The event details should be expanded and visible  

  #### **Scenario: User can collapse an event to hide details**  
  - **Given:** The event details are expanded  
  - **When:** The user clicks on the expanded event  
  - **Then:** The event details should be collapsed and hidden  

</details>  

---

<details>  
  <summary>**Feature: Specify Number of Events**</summary>  

  #### **Scenario: When user hasn’t specified a number, 32 events are shown by default**  
  - **Given:** The user opens the events app  
  - **And:** The user has not specified a number of events to display  
  - **When:** The event list is loaded  
  - **Then:** 32 events should be displayed by default  

  #### **Scenario: User can change the number of events displayed**  
  - **Given:** The user sees a list of events  
  - **When:** The user specifies the number of events to display  
  - **Then:** The event list should update to show the specified number of events  

</details>  

---

<details>  
  <summary>**Feature: Use the App When Offline**</summary>  

  #### **Scenario: Show cached data when there’s no internet connection**  
  - **Given:** The user has previously accessed event data  
  - **And:** The user is offline  
  - **When:** The user opens the events app  
  - **Then:** The app should display cached event data  

  #### **Scenario: Show error when user changes search settings (city, number of events)**  
  - **Given:** The user is offline  
  - **When:** The user tries to change search settings such as city or number of events  
  - **Then:** The app should display an error message indicating that the action requires an internet connection  

</details>  

---

<details>  
  <summary>**Feature: Add an App Shortcut to the Home Screen**</summary>  

  #### **Scenario: User can install the meet app as a shortcut on their device home screen**  
  - **Given:** The user is using a compatible browser or device  
  - **When:** The user chooses to install the meet app  
  - **Then:** The app should prompt the user to add a shortcut to their device home screen  
  - **And:** The shortcut should be visible on the home screen after installation  

</details>  

---

<details>  
  <summary>**Feature: Display Charts Visualizing Event Details**</summary>  

  #### **Scenario: Show a chart with the number of upcoming events in each city**  
  - **Given:** The user has opened the events app  
  - **And:** The app has access to event data  
  - **When:** The user views the event statistics page  
  - **Then:** The app should display a chart showing the number of upcoming events in each city  

</details>  

