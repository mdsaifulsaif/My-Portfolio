import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaEnvelope,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaCode,
  FaProjectDiagram,
  FaPaintBrush,
  FaLaptopCode,
  FaWordpress,
  FaLayerGroup,
  FaBehance,
  FaPinterest,
} from "react-icons/fa";
import logo from "../assets/Images/Logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="text-gray-700  border-t-1 py-10 border-gray-500  mt-15">
      <div className="w-11/12  mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <Link to="/">
            <div className="text-2xl cursor-pointer -ml-38 md:-ml-13 flex items-center justify-center font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              <img className="w-[70px] -ml-5 rounded-full" src={logo} alt="" />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Saiful.dev
              </span>
            </div>
          </Link>
          <p className="text-sm text-gray-200 mt-2">
            I'm a MERN Stack Developer specializing in creating beautiful, fast,
            and scalable web applications. Let's connect and build something
            amazing!
          </p>
          <div className="flex mt-4 space-x-4 text-xl text-gray-200">
            <a
              href="https://github.com/mdsaifulsaif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/saiful-saif-3036362b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 transition" />
            </a>
            <a
              href="https://dribbble.com/your-dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble className="hover:text-blue-500 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link to="/" className="hover:underline flex items-center gap-2">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline flex items-center gap-2"
              >
                <FaInfoCircle /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:underline flex items-center gap-2"
              >
                <FaCode /> Skills
              </Link>
            </li>
            <li>
              <Link
                to="/Projects"
                className="hover:underline flex items-center gap-2"
              >
                <FaProjectDiagram /> Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <FaPaintBrush /> Web Design
            </li>
            <li className="flex items-center gap-2">
              <FaLaptopCode /> Web Development
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress /> WordPress
            </li>
            <li className="flex items-center gap-2">
              <FaLayerGroup /> UI/UX Design System
            </li>
          </ul>
        </div>

        {/* View My Work */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-200">
            View My Work
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="#" className="hover:underline flex items-center gap-2">
                <FaBehance /> Behance
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center gap-2">
                <FaDribbble /> Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline flex items-center gap-2">
                <FaPinterest /> Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}
