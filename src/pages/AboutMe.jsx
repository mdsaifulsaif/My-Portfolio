import { Link } from "react-router";
import profileImage from "../assets/Images/Md.Saiful Saif1.png";

const aboutData = {
  title: "About Me",
  description1:
    "Hello! I'm a passionate web developer specializing in modern, responsive web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
  description2:
    "I love collaborating with teams and bringing innovative ideas to life through code. I'm always eager to learn new technologies and improve my skills.",
};

const AboutMe = () => {
  return (
    <div className="md:w-6xl mx-auto text-white  md:pl-15 px-5 md:pr-10">
      <div className="mt-16 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image with gradient border */}
        <div className="relative w-64 h-80">
          <div className="absolute top-6 -left-6 p-[5px] w-full h-full bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 z-0">
            <div className="w-full h-full bg-gray-800"></div>
          </div>
          <img
            src={profileImage}
            alt="About me"
            className="relative bg-gray-800 z-10 w-full h-full object-cover rounded shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {aboutData.title.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              {aboutData.title.split(" ")[1]}
            </span>
          </h2>
          <p className="text-white/90  leading-relaxed mb-4">
            {aboutData.description1}
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            {aboutData.description2}
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              href="#contact"
              className="bg-gradient-to-r cursor-pointer from-purple-900 via-indigo-900 to-blue-900 z-0 text-white font-semibold px-6 py-2 rounded transition"
            >
              Hire Me
            </Link>
            <a
              href="https://drive.google.com/file/d/1BNUD6_cdueFHyXuWEKfXYB_WO4j8Blw9/view?usp=sharing"
              target="_blank"
              className="border border-white px-6 py-2 rounded hover:bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 z-0 transition hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
