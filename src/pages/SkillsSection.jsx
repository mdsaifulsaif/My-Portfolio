import React, { useEffect } from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiRailway,
  SiWordpress,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import AdditionalSkills from "../Components/AdditionalSkills";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    title: "Frontend Development",
    icon: <SiHtml5 />,
    bgColor: "from-blue-600 to-blue-400",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5 / CSS3", icon: <SiHtml5 /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <SiNodedotjs />,
    bgColor: "from-green-600 to-green-400",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: <SiPostman /> },
    ],
  },
  {
    title: "Database & Storage",
    icon: <SiMongodb />,
    bgColor: "from-purple-600 to-purple-400",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <SiNetlify />,
    bgColor: "from-orange-600 to-yellow-400",
    skills: [
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Railway", icon: <SiRailway /> },
    ],
  },
  {
    title: "WordPress",
    icon: <SiWordpress />,
    bgColor: "from-pink-600 to-pink-400",
    skills: [{ name: "Theme Development", icon: <SiWordpress /> }],
  },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="md:w-6xl px-5 md:px-0 pt-15 mx-auto">
      <h2
        data-aos="fade-right"
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`border border-gray-700 rounded-xl p-6 shadow-lg text-white relative overflow-hidden transition-all duration-500 hover:shadow-2xl ${
              skills.length % 2 !== 0 && index === skills.length - 1
                ? "md:col-span-2 md:mx-auto md:w-1/2"
                : ""
            }`}
          >
            {/* gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${category.bgColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
            ></div>

            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div
                className={`text-white p-2 text-xl rounded-lg bg-gradient-to-r ${category.bgColor}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/70 backdrop-blur-sm hover:bg-gradient-to-r hover:from-indigo-600 hover:to-blue-600 transition-all duration-500 cursor-pointer shadow-md"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AdditionalSkills />
    </section>
  );
};

export default SkillsSection;
