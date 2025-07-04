import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImOpt } from "react-icons/im";
import { Link, NavLink } from "react-router"; // Fixed import
// import logo from "../assets/Images/Logo.png";
import logo from "../assets/Images/sitelogo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full  fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-11/12 md:px-10 mx-auto  py-2 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="text-2xl cursor-pointer flex items-center justify-center font-bold bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 bg-clip-text text-transparent">
              <img
                className="w-[70px] -ml-5  rounded-full "
                src={logo}
                alt=""
              />{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Saiful.dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className="hover:text-blue-500 duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={handleLinkClick}
                  className="hover:text-blue-500 text-lg"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
