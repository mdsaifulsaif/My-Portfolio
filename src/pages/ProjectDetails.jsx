import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
    <div className="bg-black min-h-screen text-white px-4 md:px-20 py-16">
      <Link
        to="/projects"
        className="text-blue-500 pt-5 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[500px] object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🚀 Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🛠 Tech Stack</h2>
            <ul className="text-gray-300 space-y-1">
              <li>
                <strong>Frontend:</strong>{" "}
                {project.techStack.frontend
                  ? project.techStack.frontend.join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Backend:</strong>{" "}
                {project.techStack.backend
                  ? project.techStack.backend.join(", ")
                  : "N/A"}
              </li>
              <li>
                <strong>Authentication:</strong>{" "}
                {project.techStack.authentication || "N/A"}
              </li>
              <li>
                <strong>Payment Gateway:</strong>{" "}
                {project.techStack.paymentGateway || "N/A"}
              </li>
              <li>
                <strong>UI Enhancements:</strong>{" "}
                {project.techStack.uiEnhancements
                  ? project.techStack.uiEnhancements.join(", ")
                  : "N/A"}
              </li>
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 px-4 py-2 rounded hover:opacity-90 transition"
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
