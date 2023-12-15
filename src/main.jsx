import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
// import { Cube } from 'react-preloaders';
// import Sound from 'react-sound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
    <div id="stars-container overflow-hidden ">
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>
      </div>
      
    <App />
    </React.Fragment>
  </React.StrictMode>,
)
