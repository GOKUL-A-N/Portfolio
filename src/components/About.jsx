/* eslint-disable no-unused-vars */
import React from 'react';
import profileImg from "../assets/ProfilePhoto.jpg";
import Resume from "../assets/Resume.pdf"
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className='flex flex-col bg-black'>
      <h1 className='text2 text-center sm:mt-[-60px] font-bold text-[25px] sm:text-[30px]'>about me</h1>
      <Fade direction="down" >
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 flex items-center justify-center w-full md:w-[30%]'>
           <img className='mt-4' width="100%" height="100%" src={profileImg} alt="" />
        </div>
        <div className='flex-1 flex w-full md:w-[70%] justify-center '>
          
          <div className='flex-1 flex p-4 flex-col justify-center items-start sm:mr-10'>
            <h1 className='text1 text-[20px] sm:text-[30px] md:text-[40px]   font-bold'><ul className='underline '>Gokul A N</ul></h1>
            <h2 className='text1 font-bold text-[17px] sm:text-[30px]'>Front-End Web Developer / UI Designer</h2>
            <h6 className='text4 text-[13px] sm:text-[20px]'>19 years old</h6>
            <p className='text1 text-[15px] sm:text-[22px]'>        I’m  a passionate front-end developer and a ui designer with entry-level experience eager in grasping knowledge and to increase my levels . I’m also interested to build websites to small businesses and portfolios to make your presence online...</p>
            <a href={Resume} download={Resume} className=' font-bold'><button className='mt-4 p-3 button rounded'>Resume</button></a>
          </div>
        </div>
      </div>
      <div></div>
      <div className='p-3 sm:ml-5'>
        <h1 className='text1 font-bold text-[20px] sm:text-[30px]'>Education</h1>
        <br />
        <h4 className='text1 font-bold text-[10px] sm:text-[18px]'>B.E COMPUTER SCIENCE AND ENGINEERING</h4>
        <h4 className='text4 text-[15px] sm:text-[20px]'>2021-Present</h4>
        <h4 className='text4 text-[15px] sm:text-[20px]'>Hindusthan College of Engineering  and Technology</h4>
        <h4 className='text1 text-[15px] sm:text-[20px]'>CGPA : 8.48</h4>
        <br />
         <h4 className='text1 font-bold text-[10px] sm:text-[18px]'>HSE</h4>
         <h4 className='text4 text-[15px] sm:text-[20px]'>2020-2021</h4>
         <h4 className='text4 text-[15px] sm:text-[20px]'>Saratha Matric Hr Sec School</h4>
         <h4 className='text1 text-[15px] sm:text-[22px]'>Percentage : 91%</h4>
         <br />
         <h4 className='text1 font-bold text-[10px] sm:text-[18px]'>SSLC</h4>
         <h4 className='text4 text-[15px] sm:text-[20px]'>2018-2019</h4>
         <h4 className='text4 text-[15px] sm:text-[20px]'>Bharathi Vidhyalaya Matric Hr Sec School</h4>
         <h4 className='text1 text-[15px] sm:text-[22px]'>Percentage : 85.2%</h4>
      </div>
      </Fade>
    </div>
  )
}

export default About