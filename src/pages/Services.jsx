import Aos from "aos";
import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
  FaServer,
  FaCloudUploadAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Development",
    icon: <FaLaptopCode size={28} className="text-cyan-400" />,
    description:
      "Full-stack web applications using modern frameworks like React, Express.js, Node.js and MongoDB.",
    features: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
      "Server-Side Rendering",
    ],
    hoverBg: "hover:bg-cyan-900",
  },
  {
    title: "Responsive Design",
    icon: <FaMobileAlt size={28} className="text-pink-400" />,
    description:
      "Mobile-first, responsive websites that work flawlessly across all devices.",
    features: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
      "Adaptive Layouts",
    ],
    hoverBg: "hover:bg-pink-900",
  },
  {
    title: "Frontend Development",
    icon: <FaCode size={28} className="text-sky-400" />,
    description:
      "Interactive and responsive user interfaces built with modern web technologies.",
    features: [
      "React.js & Modern JavaScript (ES6+)",
      "Tailwind CSS, HTML5, CSS3",
      "Axios & localStorage Integration",
      "State Management (useState, useEffect, useContext)",
    ],
    hoverBg: "hover:bg-sky-900",
  },
  {
    title: "UI/UX Implementation",
    icon: <FaPencilRuler size={28} className="text-orange-400" />,
    description:
      "Pixel-perfect implementation of modern designs using React and Tailwind CSS.",
    features: [
      "Figma to React",
      "Design System Creation",
      "Component Libraries",
      "Responsive Layouts & Animations",
    ],
    hoverBg: "hover:bg-orange-900",
  },
  {
    title: "Backend Development",
    icon: <FaServer size={28} className="text-purple-400" />,
    description:
      "Scalable backend solutions using Node.js, Express.js, MongoDB and third-party services.",
    features: [
      "Express API Development",
      "MongoDB Schema Design",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    hoverBg: "hover:bg-purple-900",
  },
  {
    title: "Cloud Deployment",
    icon: <FaCloudUploadAlt size={28} className="text-pink-500" />,
    description:
      "Deploy & manage full-stack apps seamlessly using platforms like Vercel and Firebase.",
    features: [
      "Vercel, Netlify & Railway Deployment",
      "CI/CD Workflow Setup",
      "Environment Variable Management",
      "Production Optimization",
    ],
    hoverBg: "hover:bg-pink-900",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation will happen every time the element is in view
    });
  }, []);
  return (
    <section className="text-white my-5 pt-15 px-5 md:px-0  md:w-6xl mx-auto ">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-right"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p data-aos="fade-right" className="text-gray-400">
          Comprehensive web development services to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className={`bg-gray-800 rounded-xl p-5 shadow-md transition-colors duration-300 ${service.hoverBg} `}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
