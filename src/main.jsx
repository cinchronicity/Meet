import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// atatus.config('6f73cce076064e6d870ceb5cbbfa9002').install();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorkerRegistration.register();


