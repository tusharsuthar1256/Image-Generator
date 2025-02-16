import Discover from "./discover";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import eyeImg from "../assets/eye.jpg";
import catImg from "../assets/cat.jpg";
import butterFlyImg from "../assets/butterfly.jpg";
import axios from 'axios'




function Home() {

     
  
  return (
    <>
      <main className="min-h-screen w-full bg-[#17192E] pb-10 px-6 md:px-20 text-white flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:mt-[-60px]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Create amazing <span className="text-[#5254B7]">Images</span> with the power of{" "}
            <span className="text-[#5254B7]">AI</span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-300 max-w-lg">
            Your go-to platform for AI-powered image generation. Create stunning visuals instantly with just a few clicks. Unleash your creativity and bring your ideas to life effortlessly!
          </p>
          <Link to="/generate" className="mt-8 w-full">
            <button className="w-full md:w-56 py-3 px-5 bg-[#5254B7] text-white flex items-center justify-center rounded-lg hover:bg-[#4145A5] transition-all text-sm md:text-base">
              Start creating for free <IoIosArrowRoundForward className="ml-2 text-xl" />
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-col gap-4">
              <img src={catImg} alt="Cat" className="w-70 md:w-48 rounded-2xl object-cover" />
              <img src={butterFlyImg} alt="Butterfly" className="w-70 md:w-48 rounded-2xl object-cover" />
            </div>
            <img src={eyeImg} alt="Eye" className="w-70 md:w-55 rounded-2xl object-cover" />
          </div>
        </div>
      </main>
    <Discover/>

    </>
  );
}

export default Home;


