// components/SkillsSection.jsx
import React from "react";
import SkillCard from "../Components/SkillCard";
// import { skills } from "../data/skills";
// import SkillCard from "./SkillCard";
// data/skills.js
const skills = [
  { name: "HTML", level: "98%", icon: "SiHtml5" },
  { name: "CSS", level: "95%", icon: "SiCss3" },
  { name: "Tailwind", level: "94%", icon: "SiTailwindcss" },
  { name: "JavaScript", level: "92%", icon: "SiJavascript" },
  { name: "React", level: "90%", icon: "SiReact" },
  { name: "Node.js", level: "88%", icon: "SiNodedotjs" },
  { name: "Express", level: "85%", icon: "SiExpress" },
  { name: "PHP", level: "84%", icon: "SiPhp" },
  { name: "WordPress", level: "90%", icon: "SiWordpress" },
  { name: "Firebase", level: "86%", icon: "SiFirebase" },
  { name: "Bootstrap", level: "93%", icon: "SiBootstrap" },
];

const SkillsSection = () => {
  return (
    <div className="py-12 px-4 max-w-5xl mx-auto text-center">
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
