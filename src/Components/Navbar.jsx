import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Auto close on mobile
  };

  return (
    <nav className="bg-gradient bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white px-4 md:px-20  py-4 shadow-md fixed w-full z-50">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white  bg-clip-text ">
            Saiful.dev
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#129990] duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-black text-white transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-[#129990] text-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
