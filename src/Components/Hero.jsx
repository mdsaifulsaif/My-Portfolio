import React, { useEffect, useRef } from "react";
import {
  FaHandPaper,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import {
  SiReact,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { gsap } from "gsap";
import profileImage from "../assets/Images/Md.Saiful Saif.png";
import MarqueeBar from "./MarqueeBar";
import { Link } from "react-router";

const Hero = () => {
  const glowRef = useRef(null);

  // Icon refs
  const reactIcon = useRef(null);
  const expressIcon = useRef(null);
  const mongoIcon = useRef(null);
  const jsIcon = useRef(null);
  const nodeIcon = useRef(null);

  useEffect(() => {
    // Background glow rotation
    gsap.to(glowRef.current, {
      rotate: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    // Icon rotation + floating animation
    const icons = [
      reactIcon.current,
      expressIcon.current,
      mongoIcon.current,
      jsIcon.current,
      nodeIcon.current,
    ];

    icons.forEach((icon, i) => {
      // Floating effect
      gsap.to(icon, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "easeInOut",
        delay: i * 0.2,
      });

      // Slow rotation
      gsap.to(icon, {
        rotate: 360,
        duration: 8 + i * 2,
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  return (
    <>
      <div className="md:w-6xl  mx-auto text-white pt-20 pb-10 px-4 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-visible">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <h1 className="text-3xl dark:text-gray-800 md:text-5xl font-bold leading-tight">
            Hello Mate <FaHandPaper className="inline text-yellow-400 ml-2" />
            <br />
            I’m{" "}
            <span className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              Saiful Saif
            </span>
            <br />a{" "}
            <span className="text-white dark:text-gray-800">Web Developer</span>
          </h1>
          <p className="text-gray-300 dark:text-gray-700 sm max-w-md mx-auto md:mx-0">
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

        {/* Right Side Image with Tech Icons */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center relative z-10">
          {/* Glowing animated background */}
          <div
            ref={glowRef}
            className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 opacity-30 shadow-2xl blur-xl md:blur-xl rounded-3xl z-0"
          ></div>

          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Saiful Saif"
            className="relative z-20 w-full md:w-[360px] h-auto rounded-xl"
          />

          {/* Tech Icons */}
          <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] z-30 pointer-events-none">
            <div
              ref={reactIcon}
              className="absolute top-0 left-1/5 transform -translate-x-1/2 pointer-events-auto"
            >
              <SiReact
                size={30}
                className="text-cyan-400 cursor-pointer"
                title="React"
              />
            </div>

            <div
              ref={expressIcon}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 pointer-events-auto"
            >
              <SiExpress
                size={30}
                className="text-gray-300 cursor-pointer"
                title="Express.js"
              />
            </div>

            <div
              ref={mongoIcon}
              className="absolute top-7 left-7/8 transform -translate-x-1/2 pointer-events-auto"
            >
              <SiMongodb
                size={30}
                className="text-green-500 cursor-pointer"
                title="MongoDB"
              />
            </div>

            <div
              ref={jsIcon}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-auto"
            >
              <SiJavascript
                size={30}
                className="text-yellow-400 cursor-pointer"
                title="JavaScript"
              />
            </div>

            <div
              ref={nodeIcon}
              className="absolute bottom-4 right-6 pointer-events-auto"
            >
              <SiNodedotjs
                size={30}
                className="text-green-400 cursor-pointer"
                title="Node.js"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="md:w-6xl mx-auto h-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <MarqueeBar />
      </div>
    </>
  );
};

export default Hero;
