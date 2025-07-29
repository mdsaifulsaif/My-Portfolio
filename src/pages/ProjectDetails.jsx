import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import LoaddingPage from "./LoaddingPage";

const ProjectDetails = () => {
  const [projectDataa, setprojectData] = useState([]);
  const [loadding, setLodding] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("/projectdata.json")
      .then((res) => res.json())
      .then((data) => {
        setprojectData(data);
        setLodding(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setLodding(false);
      });
  }, []);

  if (loadding) {
    return <LoaddingPage />;
  }

  const project = projectDataa.find((proj) => proj._id === id);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <div className="md:w-6xl mx-auto min-h-screen text-white px-4 md:px-20 py-16">
      <Link
        to="/projects"
        className="text-blue-500 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

        {/* Description */}
        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500 flex items-center gap-2">
              <FaExternalLinkAlt className="text-blue-500" /> Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <FaCheckCircle className="text-blue-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">
              Tech Stack
            </h2>

            {/* Frontend */}
            {project.techStack.frontend && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.frontend.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Backend */}
            {project.techStack.backend && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.backend.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Optional: Other categories */}
            {project.techStack.authentication && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  Authentication
                </h3>
                <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                  {project.techStack.authentication}
                </span>
              </div>
            )}

            {project.techStack.paymentGateway && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  Payment Gateway
                </h3>
                <span className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                  {project.techStack.paymentGateway}
                </span>
              </div>
            )}

            {project.techStack.uiEnhancements && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-2">
                  UI Enhancements
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.uiEnhancements.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 hover:opacity-90 px-4 py-2 rounded transition"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
