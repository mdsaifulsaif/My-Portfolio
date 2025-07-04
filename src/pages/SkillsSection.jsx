import React from "react";
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

const skills = [
  {
    title: "Frontend Development",
    icon: <SiHtml5 />,
    color: "from-blue-500 to-blue-300", // gradient
    bgColor: "bg-blue-600", // icon bg
    skills: [
      { name: "React.js", level: 85, icon: <SiReact /> },
      { name: "JavaScript", level: 90, icon: <SiJavascript /> },
      { name: "HTML5/CSS3", level: 95, icon: <SiHtml5 /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <SiNodedotjs />,
    color: "from-green-500 to-green-300",
    bgColor: "bg-green-600",
    skills: [
      { name: "Node.js", level: 60, icon: <SiNodedotjs /> },
      { name: "Express.js", level: 70, icon: <SiExpress /> },
      { name: "REST API", level: 90, icon: <SiPostman /> },
    ],
  },
  {
    title: "Database & Storage",
    icon: <SiMongodb />,
    color: "from-purple-500 to-purple-300",
    bgColor: "bg-purple-600",
    skills: [
      { name: "MongoDB", level: 90, icon: <SiMongodb /> },
      { name: "MySQL", level: 75, icon: <SiMysql /> },
      { name: "Firebase", level: 85, icon: <SiFirebase /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <SiNetlify />,
    color: "from-orange-500 to-yellow-300",
    bgColor: "bg-orange-600",
    skills: [
      { name: "Netlify", level: 85, icon: <SiNetlify /> },
      { name: "Vercel", level: 95, icon: <SiVercel /> },
      { name: "Railway", level: 90, icon: <SiRailway /> },
    ],
  },
  {
    title: "WordPress",
    icon: <SiWordpress />,
    color: "from-pink-500 to-pink-300",
    bgColor: "bg-pink-600",
    skills: [
      { name: "WordPress Theme Development", level: 70, icon: <SiWordpress /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className=" w-11/12 pt-15 mx-auto">
      <h2 className="text-3xl md:text-4xl  font-bold text-center mb-10">
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <div
            key={index}
            className={`border-2 rounded-xl p-6 shadow-lg  text-white border-blue-500 ${
              skills.length % 2 !== 0 && index === skills.length - 1
                ? "md:col-span-2 md:mx-auto md:w-1/2"
                : ""
            }`}
          >
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`text-white p-2 text-xl rounded-lg ${category.bgColor}`}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${category.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <AdditionalSkills></AdditionalSkills>
    </section>
  );
};

export default SkillsSection;
