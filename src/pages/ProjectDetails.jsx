import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import LoaddingPage from "./LoaddingPage";

// Mock static data (replace with API later)
// const projectData = [
//   {
//     id: "1",
//     title: "Portfolio Website",
//     description: "Personal portfolio built with React, Tailwind CSS & deployed on Vercel.",
//     image: "/projects/portfolio.png",
//     tags: ["React", "Tailwind", "Responsive"],
//     github: "https://github.com/mdsaifulsaif/portfolio",
//     live: "https://saifuldev.vercel.app",
//   },
//   {
//     id: "2",
//     title: "Parcel Delivery App",
//     description: "A delivery platform using React, MongoDB, and Express.",
//     image: "/projects/parcel.png",
//     tags: ["MERN", "MongoDB", "Node.js"],
//     github: "https://github.com/mdsaifulsaif/parcel-delivery",
//     live: "https://parcelmate.vercel.app",
//   },
// ];

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
      .catch((error) => {});
  }, []);

  if (loadding) {
    return <LoaddingPage></LoaddingPage>;
  }
  const project = projectDataa.find((proj) => proj._id === id);
  console.log(project);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-20 py-16">
      <Link
        to="/"
        className="text-blue-500 pt-5 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="max-w-5xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[500px] object-content rounded-xl mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-300 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 px-4 py-2 rounded hover:opacity-90 transition"
          >
            <FaExternalLinkAlt /> Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
