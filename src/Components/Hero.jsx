import React from "react";
import { FaHandPaper, FaDownload } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import profileImage from "../assets/Images/Md.Saiful Saif1.png"; // Update as needed
import MarqueeBar from "./MarqueeBar";

const Hero = () => {
  return (
    <>
      <div className="text-white     pt-20 pb-10 px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hello Mate <FaHandPaper className="inline text-yellow-400 ml-2" />
            <br />
            I’m{" "}
            <span className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              Saiful Saif
            </span>
            <br />a <span className="t">Web Developer</span>
          </h1>
          <p className="text-gray-300 max-w-md">
            Hi, I’m Saiful – a passionate MERN stack developer. I help brands
            turn ideas into high quality products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <MdCall /> Book a Call
            </a>
            <a
              href="/Saiful_Saif_CV.pdf"
              download
              className="border border-gray-400 hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Right Image with Glowing Background */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          {/* Glowing background */}
          <div className="absolute w-90 h-98 rounded-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 opacity-30 blur-2xl z-0"></div>

          {/* Profile image */}
          <img
            src={profileImage}
            alt="Saiful Saif"
            className="relative z-10 w-95 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <MarqueeBar></MarqueeBar>
      </div>
    </>
  );
};

export default Hero;
