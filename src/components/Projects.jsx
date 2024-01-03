/* eslint-disable no-unused-vars */
import React from "react";
import project1Img from "../assets/project1Img.png";
// import project2Img from "../assets/project2Img.png";
// import project3Img from "../assets/project3Img.png";
import project4Img from "../assets/project4Img.png";
import project5Img from "../assets/project5Img.png";
import EducateUImg from "../assets/EducateUImg.png";
import devconvoVid from "../assets/devconvoVid.mp4";
import codeprepVid from "../assets/codeprepVid.mp4";
// import ReactPlayer from 'react-player/lazy'
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <div className="bg-transparent">
      <div id="stars-container overflow-hidden ">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <h1 className="text2 text-center  font-bold text-[25px] sm:text-[30px]">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row-reverse">
        <Fade
          onVisibilityChange={true}
          direction="right"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div>
            <img src={EducateUImg} alt="" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              EducateU
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              EducateU is an online learning platform designed to empower individuals and organizations with the knowledge and skills they need to succeed. Whether you're looking to advance your career, explore new interests, or simply stay up-to-date on the latest trends, EducateU has something for everyone.
            </p>
            <a href="https://github.com/GOKUL-A-N/EducateU"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            <a href="https://educateu-mt3gf8d9u-gokul-a-n.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a>
          </div>
        </div>

        
      </div>
      <div className="flex flex-col md:flex-row">
        <Fade
          onVisibilityChange={true}
          direction="left"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div className="w-full h-[100%]">
          {/* <ReactPlayer url={codeprepVid} forceVideo="true" width={100} height={100} />
           */}
           <embed src={codeprepVid} height="100%" width="100%" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              CodePrep
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              Codeprep tackles the common pain point for CS students - inefficient and scattered data structures and algorithms (DSA) preparation. It provides a comprehensive platform to learn, practice, and master fundamental DSA concepts, all in one place.
              Through Codeprep, I unlocked the power of React and Tailwind CSS, crafting a captivating user interface while implementing basic backend functionalities  with Express.js and MongoDB.
            
             
            </p>
            <a href="https://github.com/GOKUL-A-N/codeprep"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            {/* <a href="https://fit-guild-01-gokul-a-n.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a> */}
          </div>
        </div>

        
      </div>

      <div className="flex flex-col md:flex-row-reverse">
        <Fade
          onVisibilityChange={true}
          direction="right"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div className="w-full h-[100%]">
          {/* <ReactPlayer url={codeprepVid} forceVideo="true" width={100} height={100} />
           */}
           <embed src={devconvoVid} height="100%"  width="100%" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              DevConvo
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              Devconvo provides a platform for software engineers to share their knowledge, experiences, and perspectives through insightful blog posts. It fosters a community where developers can learn from each other, stay up-to-date on industry trends, and connect with like-minded individuals.
              Through Devconvo, I honed my skills in integrating complex backend functionalities with a user-friendly frontend, solidifying my understanding of full-stack development            </p><br />
            <a href="https://github.com/GOKUL-A-N/Devconvo"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            {/* <a href="https://fit-guild-01-gokul-a-n.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a> */}
          </div>
        </div>

        
      </div>
      <div className="flex flex-col md:flex-row">
        <Fade
          onVisibilityChange={true}
          direction="left"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div>
            <img src={project1Img} alt="" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              FitGuild
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              
Fit Guild: Your Personalized Fitness Playground
Imagine a vibrant, supportive online space where fitness isn{"'"}t just about numbers on a scale, but about celebrating your body{"'"}s potential and guiding you towards a healthier, happier you. That{"'"}s Fit Guild, your one-stop fitness companion built with React and Tailwind CSS.
              </p>
            <a href="https://github.com/GOKUL-A-N/Fit-Guild"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            <a href="https://fit-guild-01-gokul-a-n.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a>
          </div>
        </div>

        
      </div>
      <div className="flex flex-col md:flex-row-reverse">
        <Fade
          onVisibilityChange={true}
          direction="right"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div>
            <img src={project4Img} alt="" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              Blood Donar
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              Blood Donor is a web app built with a mission: to bridge the gap between willing donors and those in need of life-saving blood transfusions. But this isn{"'"}t just any donor app; it{"'"}s powered by the robust state management of Redux, ensuring a seamless and efficient experience for both donors and healthcare professionals.
            </p>
            <a href="https://github.com/GOKUL-A-N/Blood-donar"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            <a href="https://blood-donar.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a>
          </div>
        </div>

        
      </div>

      <div className="flex flex-col md:flex-row">
        <Fade
          onVisibilityChange={true}
          direction="left"
          className="w-[98%] md:w-[50%] p-10"
        >
          <div>
            <img src={project5Img} alt="" />
          </div>
        </Fade>
        <div className=" w-[98%]  md:w-[50%] p-10">
          <div>
            <h1 className="text1 font-bold text-[20px] sm:text-[30px]">
              Hoo Bank
            </h1>
            <p className="text1 text-[15px] sm:text-[22px]">
              {" "}
              Introducing Hoo Baank, your one-stop shop for managing your credit cards with ease and efficiency. Built with React and inspired by a YouTube tutorial, Hoo Baank goes beyond just tracking expenses. It{"'"}s a comprehensive credit card companion that empowers you to master your finances and make informed decisions.
            </p>
            <a href="https://github.com/GOKUL-A-N/Hoo-bank"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  rounded">
              Github
            </button></a>
            <a href="https://hoo-bank-gokul-a-n.vercel.app/"><button className="button p-3 text-black font-bold mt-4 sm:mt-0  sm:ml-3 rounded">
              Link
            </button></a>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Projects;
