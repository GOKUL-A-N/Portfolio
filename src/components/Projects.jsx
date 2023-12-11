/* eslint-disable no-unused-vars */
import React from 'react';
import project1Img from "../assets/project1Img.png";
import { Fade } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <div className='bg-transparent'>
        <h1 className='text2 text-center  font-bold text-[25px] sm:text-[30px]'>Projects</h1>
        <div className='flex flex-col md:flex-row'>
          <Fade onVisibilityChange={true} direction='left' className='w-[98%] md:w-[50%] p-10'>
          <div >
            <img src={project1Img} alt="" />
          </div>
          </Fade>
          <div className=' w-[98%]  md:w-[50%] p-10'>
            <div>
            <h1 className='text1 font-bold text-[20px] sm:text-[30px]'>FitGuild</h1>
            <p className='text1 text-[15px] sm:text-[22px]'>            A fitness guide website made 
React and tailwindcss . It consists of
Bmi , Maintanence calories , bulking calories , Fatloss calories calculator</p>
          <button className='button p-3 text-black font-bold mt-4 sm:mt-0  rounded'><a href="https://github.com/GOKUL-A-N/Fit-Guild">Github</a></button>
          <button className='button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded'><a href="https://gleaming-trifle-aa57bc.netlify.app/">Link</a></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects