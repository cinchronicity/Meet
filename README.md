# Meet App  

## **Project Overview**  
Meet App is a serverless, progressive web application (PWA) built with React. It uses the Google Calendar API to fetch and display upcoming events. The application supports offline functionality, responsive design, and interactive data visualization through charts. The project follows a test-driven development (TDD) approach, ensuring high-quality code and comprehensive test coverage.  

---

## Table of Contents  
- [User Stories](#user-stories)  
- [Scenarios](#scenarios)  
- [Technical Objectives](#technical-objectives)
- [Technical Requirements](#technical-requirements)
- [Testing Strategy](#testing-strategy)
- [Installation](#installation)
- [Deployment](#deployment)


---


## **User Stories**

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
  <summary><b>Feature: Filter Events By City</b></summary>  

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
  <summary><b>Feature: Show/Hide Event Details</b></summary>  

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
  <summary><b>Feature: Specify Number of Events</b></summary>  

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
  <summary><b>Feature: Use the App When Offline</b></summary>  

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
  <summary><b>Feature: Add an App Shortcut to the Home Screen</b></summary>  

  #### **Scenario: User can install the meet app as a shortcut on their device home screen**  
  - **Given:** The user is using a compatible browser or device  
  - **When:** The user chooses to install the meet app  
  - **Then:** The app should prompt the user to add a shortcut to their device home screen  
  - **And:** The shortcut should be visible on the home screen after installation  

</details>  

---

<details>  
  <summary><b>Feature: Display Charts Visualizing Event Details</b></summary>  

  #### **Scenario: Show a chart with the number of upcoming events in each city**  
  - **Given:** The user has opened the events app  
  - **And:** The app has access to event data  
  - **When:** The user views the event statistics page  
  - **Then:** The app should display a chart showing the number of upcoming events in each city  

</details>  


## **Technical Objectives**  
- **Serverless Architecture:** No backend maintenance, easy scalability, and zero cost for idle time using AWS Lambda.  
- **Progressive Web App (PWA):** Provides features like offline support, instant loading, push notifications, and "add to home screen" prompts.  
- **Test-Driven Development (TDD):** Development guided by writing tests before implementation, ensuring robust and reliable code.  
- **Data Visualization:** Interactive charts provide insights into event details.  

---

## **Technical Requirements**  
- **Framework:** React: UI development
- **Serverless Functions:** AWS Lambda for backend API authentication  
- **API Integration:** Google Calendar API using OAuth2  
- **Testing:** Jest and React Testing Library with 90%+ test coverage  
- **PWA Compliance:** Passes Lighthouse’s PWA checklist  
- **Cross-Browser Compatibility:** Works on Chrome, Firefox, Safari, Edge, Opera, and IE11  
- **Responsive Design:** Supports screen widths from 320px (mobile) to 1920px (desktop) - **Recharts / D3.js** – Data visualization  
- **Offline Support:** Service workers enable functionality without an internet connection  
- **Deployment:** Deployed using Vercel 

---

## **Testing Strategy**  
- **Unit Tests:** Test React components with mock data.  
- **Integration Tests:** Validate integration of app components with Google Calendar API.  
- **End-to-End Tests:** Conduct full flow tests using Puppeteer.  
- **Coverage Requirement:** Minimum 90% test coverage for all features.  

---

### Prerequisites
- **Node.js** (v14 or later)  
- **npm** (v6 or later)  
- A Google API project with **Calendar API enabled** 

## **Installation**  

Follow these steps to deploy the Meet App:  

### **1. Clone the Repository**  
Use the following command to clone the repository to your local machine:  

```bash
git clone https://github.com/yourusername/meet-app.git
cd meet-app
 ```
### **Install Dependencies** 
### **2 Run the following command to install the necessary dependencies:
```bash 
npm install
```
### **3. Run the App Locally**
This will launch the app in your default browser at http://localhost:3000.

```bash
npm start
```
### **3. Run tests with:**
```bash 
npm test
```

## 🌐 **Deployment**
The app is configured to be deployed using Vercel. 

Automatic Deployment: Push to the main branch triggers automatic deployment
Manual Deployment:
```bash
npm run build
```
👉 Live Demo --> https://meet-sandy.vercel.app/
