// components/ProjectCard.jsx
import React from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GiDiamondHard, GiKnifeFork } from "react-icons/gi";
import { LuArrowUpRight } from "react-icons/lu";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const iconMap = {
  AiOutlineShoppingCart: <AiOutlineShoppingCart size={24} />,
  AiOutlineUser: <AiOutlineUser size={24} />,
  GiDiamondHard: <GiDiamondHard size={24} />,
  GiKnifeFork: <GiKnifeFork size={24} />,
};

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl bg-gray-800 p-4 shadow-md transition hover:shadow-indigo-500/30">
      {/* Project Image */}
      <img
        src={project?.image}
        alt={project.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      {/* Project Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{project.description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          {/* Detail Button */}
          <Link
            to={`/project/${project._id}`}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm  bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500   px-4 py-2 rounded-md transition"
          >
            <LuArrowUpRight /> View Project
          </Link>

          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition"
          >
            <FaGithub /> GitHub
          </a>
          {/* Live Site Button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white  px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600  transition"
          >
            <FaExternalLinkAlt /> Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
