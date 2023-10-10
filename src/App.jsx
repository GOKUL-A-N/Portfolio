/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import portfoliosound from "./assets/portfoliosound.ogg"
// import { useState } from 'react';
// import ReactAudioPlayer from "react-audio-player";

// const [music,onmusic] = useState();

const handlemusic = () => {
  const x = document.getElementById('music')
  // (x.play === false)? x.autoplay = true: x.play = false;
  x.autoplay = true
  x.load();
}



const App = () => {
  return (
    <div className=''>
      
      <div className='flex-1 flex flex-row'>
        <h4 className='text1 z-10 top-[400px] rotate-[-90deg] fixed items-center right-[-70px] invisible sm:visible' >gokulnatarajmoorthy@gmail.com</h4>
        <button className='text1 font-extrabold z-10 top-[400px] rotate-[-90deg] fixed text-white' onClick={handlemusic}>Music on</button>
        {/* <button className='text1 z-10 top-[490px] rotate-[-90deg] fixed text-white' onClick={off}>Sound off</button> */}
      </div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id='skills'><Skills /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
      <audio id="music" src={portfoliosound} />
      
    </div>
  )
}

export default App