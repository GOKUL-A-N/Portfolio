import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { Lines } from 'react-preloaders2';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
    <App />
    <Lines/>
    </React.Fragment>
  </React.StrictMode>,
)
