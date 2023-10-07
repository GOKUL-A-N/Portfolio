/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className=''>
      
      <div>
        <h4 className='text1 z-10 top-[400px] rotate-[-90deg] fixed items-center right-[-70px] invisible sm:visible' >gokulnatarajmoorthy@gmail.com</h4>
      </div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id='skills'><Skills /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>
      
    </div>
  )
}

export default App