// import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const experiences = [
//   {
//     duration: "Jan 2023 – Jun 2023",
//     company: "Click The Photo",
//     position: "Digital Marketing Specialist",
//     description:
//       "Handled SEO, social media campaigns, and analytics. Boosted site traffic by 40% through strategic digital planning and content optimization.",
//     link: "https://clickthephoto.com/",
//     logo: "https://i.ibb.co/hJWhJGDJ/click-the-photo.jpg",
//   },
//   {
//     duration: "Jun 2023 – Aug 2024",
//     company: "E-Learning & Earning Ltd.",
//     position: "Jr. Wordpress Developer",
//     description:
//       "Worked on WordPress-based websites, focusing on custom theme development, plugin customization, and responsive design implementation. Provided official support to clients, ensuring performance optimization, cross-browser compatibility, and smooth user experience.",
//     link: "https://e-laeltd.com/",
//     logo: "https://i.ibb.co/QvYXF85d/ele.png",
//   },
//   {
//     duration: "Sep 2024 – Present",
//     company: "Bseba Software",
//     position: "Frontend Developer",
//     description:
//       "Building and optimizing modern web interfaces using React.js, Tailwind CSS, and REST APIs. Also experienced with backend technologies like Node.js, Express, and MongoDB for full-stack development, ensuring seamless integration between front and back ends and delivering high-performing, scalable web solutions.",
//     link: "https://www.bseba.com/",
//     logo: "https://i.ibb.co/8nSsXgZw/bseva.png",
//   },
// ];

// const Experience = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <section className="md:w-6xl px-5 md:px-0 mx-auto py-16 text-white">
//       <h2
//         data-aos="fade-up"
//         className="text-3xl md:text-4xl font-bold text-center mb-12"
//       >
//         Experience
//         <span className="bg-gradient-to-r from-[#129990] via-emerald-400 to-green-400 bg-clip-text text-transparent">
//           .
//         </span>
//       </h2>

//       <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical relative">
//         {experiences
//           .slice(0)
//           .reverse()
//           .map((exp, index) => (
//             <li key={index} data-aos="fade-up">
//               {index !== 0 && <hr />}

//               <div className="timeline-middle">
//                 <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 border-4 border-gray-900"></div>
//               </div>

//               <div
//                 className={`${
//                   index % 2 === 0
//                     ? "timeline-start mb-5 md:mb-10 md:text-end"
//                     : "timeline-end mb-5 md:mb-10"
//                 }`}
//               >
//                 <div className="flex justify-center md:justify-normal">
//                   <div className="rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 border-l-4 border-white/20 md:w-[600px] bg-black/30 backdrop-blur-sm">
//                     {/* Logo inside card */}
//                     <div className="flex items-center gap-3 mb-3">
//                       <img
//                         src={exp.logo}
//                         alt={exp.company}
//                         className="w-12 h-12 rounded-lg object-cover border border-white/20"
//                       />
//                       <div>
//                         <time className="text-sm text-gray-200 font-mono block">
//                           {exp.duration}
//                         </time>
//                         <h3 className="text-xl font-semibold flex items-center gap-2">
//                           <a
//                             href={exp.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center gap-2 hover:text-gray-200 transition-colors"
//                           >
//                             {exp.company}
//                             <FaArrowUpRightFromSquare className="text-sm" />
//                           </a>
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Position + Description */}
//                     <p className="text-gray-200 text-sm font-medium mb-2">
//                       {exp.position}
//                     </p>
//                     <p className="text-gray-100 leading-relaxed">
//                       {exp.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <hr />
//             </li>
//           ))}
//       </ul>
//     </section>
//   );
// };

// export default Experience;

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experience = {
  duration: "Sep 2024 – Present",
  company: "Bseba Software",
  position: "Frontend Developer",
  subDescription:
    "Contributing to the development of scalable business solutions and modern UI systems.",
  description:
    "Building and optimizing modern web interfaces using React.js, Tailwind CSS, and REST APIs. Also experienced with backend technologies like Node.js, Express, and MongoDB for full-stack development, ensuring seamless integration between front and back ends and delivering high-performing, scalable web solutions.",
  link: "https://www.bseba.com/",
  logo: "https://i.ibb.co/8nSsXgZw/bseva.png",
};

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="md:w-6xl px-5 md:px-0 mx-auto py-16 text-white">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Experience
        <span className="bg-gradient-to-r from-[#129990] via-emerald-400 to-green-400 bg-clip-text text-transparent">
          .
        </span>
      </h2>

      <div data-aos="fade-up" className="flex justify-center">
        <div className="rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600/20 md:w-[600px] bg-gray-800/80 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 h-12 rounded-lg object-cover border border-white/20"
            />
            <div>
              <time className="text-sm text-gray-200 font-mono block">
                {experience.duration}
              </time>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-200 transition-colors"
                >
                  {experience.company}
                  <FaArrowUpRightFromSquare className="text-sm" />
                </a>
              </h3>
            </div>
          </div>

          {/* Position */}
          <p className="text-gray-200 text-sm font-medium mb-1">
            {experience.position}
          </p>
          {/* Sub Description */}
          <p className="text-gray-400 text-sm italic mb-3">
            {experience.subDescription}
          </p>

          {/* Main Description */}
          <p className="text-gray-100 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
