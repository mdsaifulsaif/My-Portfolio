import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Education
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700">
          .
        </span>
      </h2>

      <div className="space-y-8">
        <div className="group">
          <p className="text-sm text-teal-400">2021 – 2025</p>
          <div className="flex items-center gap-2 text-xl font-semibold mt-1 group-hover:underline">
            <FaGraduationCap className="text-indigo-500" />
            <span className="group-hover:text-blue-400 transition-colors">
              B.Sc. in Computer Science & Engineering
            </span>
          </div>
          <p className="text-gray-300 mt-1">
            XYZ University of Technology, Dhaka
          </p>
          <p className="text-gray-400 text-sm mt-1">
            CGPA: 3.85/4.00 (till 6th Semester)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
