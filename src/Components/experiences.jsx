import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const experiences = [
  {
    duration: "Jun 2023 – Aug 2024",
    company: "E-Learning & Earning Ltd.",
    position: "Jr. Web Developer",
    description:
      "Worked on responsive front-end applications using React and Tailwind CSS. Integrated REST APIs and ensured cross-browser compatibility.",
    link: "#", // You can replace this with actual company link
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
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          .
        </span>
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group">
            <span className="text-sm font-medium  bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              {exp.duration}
            </span>
            {/* <p className="text-sm font-medium text-teal-400">{exp.duration}</p> */}
            <div className="flex items-center gap-2 text-xl font-semibold text-white group-hover:underline">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors group-hover:text-blue-500"
              >
                {exp.company} | {exp.position}
                <FaArrowUpRightFromSquare className="text-sm" />
              </a>
            </div>
            <p className="text-gray-300 mt-2 leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
