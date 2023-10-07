import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { Cube } from 'react-preloaders';
import Sound from 'react-sound';
import portfoliosound from "./assets/portfoliosound.mp3"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
    <App />
    <Cube />
    <Sound
      url={portfoliosound}
      playStatus={Sound.status.PLAYING}
    />
    </React.Fragment>
  </React.StrictMode>,
)
