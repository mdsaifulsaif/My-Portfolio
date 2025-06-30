import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDribbble,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/Images/sitelogo1.png";
import { Link } from "react-router";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-gray-900">
      <div className="w-11/12 text-white px-4 md:px-10 py-12 mt-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6">
            {/* Logo */}
            <Link to="/">
              <div className="text-2xl cursor-pointer flex items-center font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                <img
                  className="w-[70px] -ml-5 rounded-full"
                  src={logo}
                  alt=""
                />
                <span className="ml-2">Saiful.dev</span>
              </div>
            </Link>

            {/* About */}
            <p className="text-gray-400 max-w-md">
              I'm a MERN Stack Developer specializing in creating beautiful,
              fast, and scalable web applications. Let's connect and build
              something amazing!
            </p>

            {/* Email & WhatsApp */}
            <div className="mt-4 space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <a
                  href="mailto:mdsaifulsaif.dev@gmail.com"
                  className="hover:text-white"
                >
                  mdsaifulsaif.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/8801727841588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-xl">
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

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="3"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-md hover:opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saiful.dev — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
