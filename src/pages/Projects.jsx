// App.jsx or ProjectsSection.jsx
import React from "react";
import ProjectCard from "../Components/ProjectCard";
// data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "Event Management",
    description:
      "Designed a fully functional e-commerce platform using React and Node.js, complete with user authentication.",
    tags: ["React", "Node.js", "Express", "Firbase"],
    image: "https://i.ibb.co/nMpY3BtG/1.png", // replace with actual image path or URL
    github: "https://github.com/your-repo",
    live: "https://your-site.com",
  },
  {
    id: 2,
    title: "Plant-Care-Tracker-Client",
    description:
      "Designed and built a sleek personal portfolio showcasing a photographer’s skills, projects, and achievements.",
    tags: ["React", "Node.js", "Express", "Firbase"],
    image: "https://i.ibb.co/TMfMZtkw/2.png",
    github: "https://github.com/your-repo",
    live: "https://your-site.com",
  },
  {
    id: 3,
    title: "JobTrack",
    description:
      "I created a dynamic Jewelry Website using React for the frontend and Node.js for the backend.",
    tags: ["React", "Node.js", "Express", "Firbase"],
    image: "https://i.ibb.co/8nL96SqX/3.png",
    github: "https://github.com/your-repo",
    live: "https://your-site.com",
  },
  {
    id: 4,
    title: "PathoWay",
    description:
      "urrently building PathoWay – a parcel delivery web application with real-time service center data, responsive forms, and location-based tracking.",
    tags: ["React", "Node.js", "Express", "Firbase"],
    image: "https://i.ibb.co/yBNqpXDw/4.png",
    github: "https://github.com/your-repo",
    live: "https://your-site.com",
  },
];

const Projects = () => {
  return (
    <div className=" px-4 md:px-10 my-10  mx-auto">
      {/* <h2 className="text-4xl font-black mb-8">
        HERE'S A GLIMPSE OF SOME EXCITING 🧑‍💻 PROJECTS I'VE DONE
      </h2> */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        HERE'S A GLIMPSE OF SOME EXCITING 🧑‍💻 <br />
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          {" "}
          PROJECTS I'VE DONE
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
