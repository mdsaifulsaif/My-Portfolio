// App.jsx or ProjectsSection.jsx
import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import LoaddingPage from "./LoaddingPage";

const Projects = () => {
  const [projectsData, setprojectsData] = useState([]);
  const [loadding, setLodding] = useState(true);

  useEffect(() => {
    fetch("/projectdata.json")
      .then((res) => res.json())
      .then((data) => {
        setprojectsData(data);
        setLodding(false);
      })
      .catch((error) => {});
  }, []);

  if (loadding) {
    return <LoaddingPage></LoaddingPage>;
  }
  return (
    <div className="   mb-10 mt-16 w-11/12  mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        HERE'S A GLIMPSE OF SOME EXCITING 🧑‍💻 <br />
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          {" "}
          PROJECTS I'VE DONE
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
