import React from "react";
import {
  SiTailwindcss,
  SiFigma,
  SiReact,
  SiPostman,
  SiGithub,
  SiStripe,
  SiVuedotjs,
} from "react-icons/si";
import { FaImage, FaRegGem } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";

const skills = [
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "from-cyan-200 to-cyan-100",
  },
  {
    name: "Material UI",
    icon: <MdWidgets />,
    color: "from-blue-200 to-blue-100",
  },
  {
    name: "Ant Design",
    icon: <AiOutlineAntDesign />,
    color: "from-red-200 to-pink-100",
  },
  {
    name: "Mamba UI",
    icon: <SiVuedotjs />,
    color: "from-green-200 to-lime-100",
  },
  { name: "Pixso", icon: <SiFigma />, color: "from-purple-200 to-pink-100" },
  {
    name: "Daisy UI",
    icon: <FaRegGem />,
    color: "from-indigo-200 to-purple-100",
  },
  {
    name: "Context API",
    icon: <SiReact />,
    color: "from-blue-200 to-cyan-100",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "from-orange-200 to-yellow-100",
  },
  {
    name: "Git/GitHub",
    icon: <SiGithub />,
    color: "from-gray-200 to-gray-100",
  },
  { name: "Imgbb", icon: <FaImage />, color: "from-teal-200 to-cyan-100" },
  {
    name: "Figma to React",
    icon: (
      <div className="flex gap-1 items-center justify-center">
        <SiFigma />
        <SiReact />
      </div>
    ),
    color: "from-pink-200 to-blue-100",
  },
  {
    name: "Stripe",
    icon: <SiStripe />,
    color: "from-purple-200 to-indigo-100",
  },
];

const AdditionalSkills = () => {
  return (
    <div className="mt-15 max-w-5xl mx-auto px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Additional{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[140px] h-[140px] p-4 bg-gray-900 rounded-xl border border-blue-500 flex flex-col justify-center items-center text-center text-white shadow-md"
          >
            <div
              className={`text-4xl p-4 rounded-full bg-gradient-to-br ${skill.color} text-black hover:rotate-6 transition-transform duration-300`}
            >
              {skill.icon}
            </div>
            <p className="mt-3 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalSkills;
