import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaDribbble } from "react-icons/fa";
import logo from "../assets/Images/sitelogo1.png";
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
    <footer id="contact" className="bg-gray-900 ">
      <div className="w-11/12 text-white px-4 md:px-10 py-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: Logo + About + Socials */}
          <div className="md:w-1/2 space-y-6">
            {/* Logo */}
            <div className="text-2xl flex items-center -pl-20  font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              <img className="w-[70px] -ml-5 rounded-full " src={logo} alt="" />{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Saiful.dev
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 max-w-md">
              I'm a MERN Stack Developer specializing in creating beautiful,
              fast, and scalable web applications. Let's connect and build
              something amazing!
            </p>

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
                {/* <FaFacebook className="hover:text-[#129990] transition" /> */}
                <FaDribbble
                  className="hover:text-blue-500 transition"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
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
                className="w-full py-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-md hover:opacity-90 transition"
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
