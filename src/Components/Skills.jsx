import React, { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const categories = {
    Frontend: [
      { name: "React.js", icon: <SiReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    ],
    Tools: [
      { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-blue-500">Skills</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg font-medium shadow-md transition-all ${
              activeTab === tab
                ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories[activeTab].map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3 bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="font-semibold text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
