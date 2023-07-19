/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className='sticky top-0 z-10'>
    <nav className="navbar flex flex-row">
      
      <div className="navbar-container container ">
      
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
         <ul className='menu-items cursor-pointer'>
         <li>
            <Link className='Link' activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li>
            <Link className='Link' activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li>
            <Link className='Link' activeClass="active" smooth spy to="skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className='Link' activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className='Link' activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </li>
          
         </ul>
         
         </div>
         <button  className='m-1 mr-5 realtive right-0  font-bold text-[23px] flex justify-center items-center'><Link className='Link' activeClass="active" smooth spy to="home">Portfolio...</Link></button>
  </nav>
  
      {/* <Outlet /> */}
  </div>
  )
}

export default Navbar