/* eslint-disable no-unused-vars */
import React from 'react';
import cssImg from "../assets/cssImg.png";
import figmaImg from "../assets/figmaImg.png";
import githubImg from "../assets/githubImg.png";
import gitImg from "../assets/gitImg.png";
import htmlImg from "../assets/htmlImg.png";
import javaImg from "../assets/javaImg.png";
import javascriptImg from "../assets/javascriptImg.png";
import reactImg from "../assets/reactImg.png";
import tailwindcssImg from "../assets/tailwindcssImg.png";
import typescriptImg from "../assets/typescriptImg.png"

const Skills = () => {
  return (
    <div className='flex flex-col justify-center '>
      <h1 className='text2 text-center p-4 font-bold text-[25px] sm:text-[30px] '>Skills</h1>
      <div className='slider bg-white'>
          <div className='slide-track'>
          <img src={htmlImg} className='slide' height="80px" width="80px" alt="" />
          <img src={cssImg} className='slide' height="80px" width="80px" alt="" />
          <img src={javaImg} className='slide' height="80px" width="80px" alt="" />
          <img src={javascriptImg} className='slide' height="80px" width="80px" alt="" />
          <img src={typescriptImg} className='slide' height="80px" width="80px" alt="" />
          <img src={reactImg} className='slide' height="80px" width="80px" alt="" />
          <img src={tailwindcssImg} className='slide' height="80px" width="80px" alt="" />
          <img src={figmaImg} className='slide' height="80px" width="80px" alt="" />
          <img src={githubImg} className='slide' height="80px" width="80px" alt="" />
          <img src={gitImg} className='slide' height="80px" width="80px" alt="" />
          <img src={htmlImg} className='slide' height="80px" width="80px" alt="" />
          <img src={cssImg} className='slide' height="80px" width="80px" alt="" />
          <img src={javaImg} className='slide' height="80px" width="80px" alt="" />
          <img src={javascriptImg} className='slide' height="80px" width="80px" alt="" />
          <img src={typescriptImg} className='slide' height="80px" width="80px" alt="" />
          <img src={reactImg} className='slide' height="80px" width="80px" alt="" />
          <img src={tailwindcssImg} className='slide' height="80px" width="80px" alt="" />
          <img src={figmaImg} className='slide' height="80px" width="80px" alt="" />
          <img src={githubImg} className='slide' height="80px" width="80px" alt="" />
          <img src={gitImg} className='slide' height="80px" width="80px" alt="" />
          
          </div>
          </div>
    </div>
  )
}

export default Skills