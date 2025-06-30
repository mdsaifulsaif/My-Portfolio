// components/SkillsSection.jsx
import React from "react";
import SkillCard from "../Components/SkillCard";
// import { skills } from "../data/skills";
// import SkillCard from "./SkillCard";
// data/skills.js
const skills = [
  { name: "HTML", level: "98%", icon: "SiHtml5" },
  { name: "CSS", level: "85%", icon: "SiCss3" },
  { name: "Tailwind", level: "80%", icon: "SiTailwindcss" },
  { name: "JavaScript", level: "75%", icon: "SiJavascript" },
  { name: "React", level: "70%", icon: "SiReact" },
  { name: "Node.js", level: "65%", icon: "SiNodedotjs" },
  { name: "Firebase", level: "86%", icon: "SiFirebase" },
  { name: "MongoDB", level: "73%", icon: "SiMongodb" },
  { name: "PHP", level: "84%", icon: "SiPhp" },
  { name: "WordPress", level: "90%", icon: "SiWordpress" },
  { name: "Bootstrap", level: "93%", icon: "SiBootstrap" },
];

const SkillsSection = () => {
  return (
    <div className=" mt-16 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
