import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experiences = [
  {
    duration: "Jun 2023 – Aug 2024",
    company: "E-Learning & Earning Ltd.",
    position: "Jr. Wordpress Developer",
    description:
      "Worked on WordPress-based websites, including custom theme development, plugin customization, and responsive design implementation. Ensured performance optimization and cross-browser compatibility.",
    link: "#", // Replace with real company link if available
  },
  {
    duration: "Jan 2023 – Jun 2023",
    company: "E-Learning & Earning Ltd.",
    position: "Digital Marketing Specialist",
    description:
      "Handled SEO, social media campaigns, and analytics. Boosted site traffic by 40% through strategic digital planning and content optimization.",
    link: "#",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="md:w-6xl px-5 md:px-0 mx-auto text-white py-16">
      <h2
        data-aos="fade-right"
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Experience
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          .
        </span>
      </h2>

      {/* Timeline */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experiences.map((exp, index) => (
          <li key={index} data-aos="fade-up">
            {index !== 0 && <hr />}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "timeline-start mb-10 md:text-end"
                  : "timeline-end md:mb-10"
              }`}
            >
              <time className="font-mono italic">{exp.duration}</time>
              <div className="text-lg font-bold flex items-center gap-2">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-blue-500"
                >
                  {exp.company} | {exp.position}
                  <FaArrowUpRightFromSquare className="text-sm" />
                </a>
              </div>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
