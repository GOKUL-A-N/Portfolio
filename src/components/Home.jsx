/* eslint-disable no-unused-vars */
import React from 'react';
import githubIcons from "../assets/githubIcons.png";
import linkedInIcons from "../assets/linkedInIcons.png";
import youtubeIcons from "../assets/youtubeIcons.png"

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      
      <div className='mt-[-50px]'>
        <h1 className='text1 text-[33px] sm:text-[50px] md:text-[70px]  font-bold'>Front-End<br /> Web Developer /<br /> Ui Designer </h1>
        <h3 className='text3  font-black sm:text-[70px]  text-[50px]'>Portfolio</h3>
        <h3 className='text1 mt-[-50px] sm:mt-[-60px] font-bold text-[25px] sm:text-[30px]'>-GOKUL A N</h3>
        <br />
        <div className='flex flex-row'>
        <div><a href='https://www.linkedin.com/in/gokul-natarajmoorthy/'>
        <img src={linkedInIcons} alt="" />
        </a>
        </div>
        <div className='ml-4'><a href='https://www.youtube.com/@GOKULNATARAJMOORTHY/featured' target='blank'>
        <img src={youtubeIcons} alt="" />
        </a>
        </div>
        <div className='ml-4'><a href='https://github.com/GOKUL-A-N' target='blank'>
        <img className='bg-white rounded-full' src={githubIcons} alt="" />
        </a>
        </div>
        </div>
        <div>
          <h3 className='text1 ml-1 mt-3 visible sm:invisible'>gokulnatarajmoorthy@gmail.com</h3>
        </div>
      </div>
    </div>
  )
}

export default Home