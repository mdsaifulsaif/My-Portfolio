// App.jsx or ProjectsSection.jsx
import React, { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import LoaddingPage from "./LoaddingPage";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projectsData, setprojectsData] = useState([]);
  const [loadding, setLodding] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
    <div className=" px-5 md:px-0  mb-10 mt-16 md:w-6xl  mx-auto">
      <h2
        data-aos="fade-right"
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        HERE'S A GLIMPSE OF SOME EXCITING 🧑‍💻 <br />
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          {" "}
          PROJECTS I'VE DONE
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
