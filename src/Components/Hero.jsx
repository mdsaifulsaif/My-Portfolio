import React, { useEffect, useRef } from "react";
import {
  FaHandPaper,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { gsap } from "gsap";
import profileImage from "../assets/Images/Md.Saiful Saif1.png";
// import bgdd from "../assets/Images/splash.png";
import MarqueeBar from "./MarqueeBar";
import { Link } from "react-router";

const Hero = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    gsap.to(glowRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <div className="w-11/12 mx-auto text-white pt-20 pb-10 px-4 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-visible">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hello Mate <FaHandPaper className="inline text-yellow-400 ml-2" />
            <br />
            I’m{" "}
            <span className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              Saiful Saif
            </span>
            <br />a <span className="text-white">Web Developer</span>
          </h1>
          <p className="text-gray-300 sm max-w-md mx-auto md:mx-0">
            Hi, I’m Saiful – a passionate MERN stack developer. I help brands
            turn ideas into high quality products.
          </p>

          {/* Socials */}
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/saiful-saif-3036362b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="hover:text-blue-500 transition"
              />
            </a>
            <a
              href="https://github.com/mdsaifulsaif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://dribbble.com/mdsaifulsaif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble
                size={24}
                className="hover:text-blue-500 transition"
              />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-6 py-3 rounded-md flex items-center gap-2 shadow-md hover:shadow-indigo-500/50 transition duration-300"
            >
              View Project
            </Link>
            <a
              href="https://drive.google.com/file/d/1BNUD6_cdueFHyXuWEKfXYB_WO4j8Blw9/view?usp=sharing"
              target="blank"
              className="border border-gray-400 hover:bg-gray-800 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center relative z-10">
          {/* Glowing animated background */}
          <div
            ref={glowRef}
            className="absolute  w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 opacity-30 shadow-2xl blur-xl md:blur-xl rounded-3xl z-0"
          ></div>

          {/* Profile Image */}

          <img
            src={profileImage}
            alt="Saiful Saif"
            className="relative  z-10 w-full md:w-[360px] h-auto rounded-xl "
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="w-11/12 mx-auto h-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <MarqueeBar></MarqueeBar>
      </div>
    </>
  );
};

export default Hero;
