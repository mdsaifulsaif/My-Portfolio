import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="text-white rounded-2xl md:p-5 shadow-md hover:shadow-indigo-600/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project?.image}
          alt={project.title}
          className="w-full  object-contain"
        />
        {project.badge && (
          <span className="absolute top-2 right-2 bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {project.badge}
          </span>
        )}
      </div>

      {/* Project Info */}
      <div className="mt-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-3">
            {project.description.split(" ").slice(0, 10).join(" ")}...
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-[#1c1c2c] text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Features with icon */}
          <div className="mb-4">
            <h4 className="font-semibold text-white text-sm mb-2">Featured</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              {project.features?.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <FaArrowTrendUp className="text-blue-500 mt-1" />
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons pinned to bottom */}
        <div className="flex flex-wrap gap-3 mt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r cursor-pointer from-purple-900 via-indigo-900 to-blue-900  hover:opacity-90 px-4 py-2 rounded-lg transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}

          {project["github client"] && (
            <a
              href={project["github client"]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
            >
              <FaGithub /> GitHub
            </a>
          )}

          <Link
            to={`/project/${project._id}`}
            className="flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md"
          >
            <FaArrowRight /> Project Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
