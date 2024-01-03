/* eslint-disable no-unused-vars */
import React from 'react';
import MyProfilePhoto from "../assets/MyProfilePhoto.png";
import GOKUL_A_N from "../assets/GOKUL_A_N.pdf"
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className='flex flex-col bg-black overflow-x-hidden'>
      <h1 className='text2 text-center sm:mt-[-60px] font-bold text-[25px] sm:text-[30px]'>about me</h1>
      {/* <Fade direction="left" ></Fade> */}
      <div className='flex flex-col md:flex-row'>
        <Fade direction='left' className='flex-1 flex items-center justify-center w-full md:w-[30%]'>
           <img className='mt-4' width="70%" height="70%" src={MyProfilePhoto} alt="" />
        </Fade>
        <Fade direction='right' className='flex-1 flex w-full md:w-[70%] justify-center '>
          
          <div className='flex-1 flex p-4 flex-col justify-center items-start sm:mr-10 neubox'>
            <h1 className='text1 text-[20px] sm:text-[30px] md:text-[40px]   font-bold'><ul className=' '>Gokul NatarajMoorthy</ul></h1>
            <h2 className='text1 font-bold text-[17px] sm:text-[30px]'>Front-End Web Developer / UI Designer</h2>
            <h6 className='text4 text-[13px] sm:text-[20px]'>19 years old</h6>
            <p className='text-gray-400 text-[15px] sm:text-[22px]'>        Hello! I am <span className='text-white font-semibold'>Gokul</span>, a <span className='text-white font-semibold'>front-end web developer</span> student with a passion for creating user-friendly and visually appealing websites. I have a strong understanding of <span className='text-white font-semibold'>Html, CSS ,JavaScript</span>, and I am proficient in using popular front-end frameworks such as <span className='text-white font-semibold'>React</span> and <span className='text-white font-semibold'>TailwindCss. </span>
            I do have a desire for continuous learning backend tools such as <span className='text-white font-semibold'>Nodejs(Express)</span> and <span className='text-white font-semibold'>MongoDB. </span>
I am excited to start my career as a front-end web developer and to contribute to the development of innovative and impactful web applications. I am confident that I can provide your company with high-quality work and help you to achieve your business goals.</p>
            <a href={GOKUL_A_N} download={GOKUL_A_N} className=' font-bold'><button className='mt-4 p-3 button rounded'>Resume</button></a>
          </div>
        </Fade>
      </div>
      
      {/* <Fade direction='right'></Fade> */}
      <div className='p-3 sm:ml-5'>
        <h1 className=' font-bold text-[20px] text-gray-500 sm:text-[30px]'>Education & Experience</h1>
        <br />
       

         <div className='flex flex-col sm:flex-row'>
         <div className='w-[30%] p-4'><h4 className=' text-white  text-[10px] font-bold sm:text-[18px]'>B.E COMPUTER SCIENCE AND ENGINEERING</h4></div>
          <div className='p-4'>
          <div className='text-white font-semibold'><h4 className=' text-[15px] sm:text-[20px]'>2021-Present</h4></div><br />
          <h4 className=' text-[15px] text-white font-semibold sm:text-[20px]'>Hindusthan College of Engineering  and Technology</h4><br />
          <h4 className=' text-[15px] text-white sm:text-[20px]'>CGPA : 8.64</h4>
          </div>
         </div><br />
         <div className='flex flex-col sm:flex-row'>
         <div className='w-[30%] p-4'><h4 className=' text-white  text-[10px] font-bold sm:text-[18px]'>HSE</h4></div>
          <div className='p-4'>
          <div className='text-white font-semibold'><h4 className=' text-[15px] sm:text-[20px]'>2020-2021</h4></div><br />
          <h4 className=' text-[15px] text-white font-semibold sm:text-[20px]'>Saratha Matric Hr Sec School</h4><br />
          <h4 className=' text-[15px] text-white sm:text-[20px]'>Percentage : 91%</h4>
          </div>
         </div><br />
         <div className='flex flex-col sm:flex-row'>
         <div className='w-[30%] p-4'><h4 className=' text-white  text-[10px] font-bold sm:text-[18px]'>SSLC</h4></div>
          <div className='p-4'>
          <div className='text-white font-semibold'><h4 className=' text-[15px] sm:text-[20px]'>2018-2019</h4></div><br />
          <h4 className=' text-[15px] text-white font-semibold sm:text-[20px]'>Bharathi Vidhyalaya Matric Hr Sec School</h4><br />
          <h4 className=' text-[15px] text-white sm:text-[20px]'>Percentage : 86%</h4>
          </div>
         </div>
      </div>

    </div>
  )
}

export default About