import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { Cube } from 'react-preloaders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
    <App />
    <Cube />
    </React.Fragment>
  </React.StrictMode>,
)
