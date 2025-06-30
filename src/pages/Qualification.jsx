import React from "react";
import { FaUniversity, FaBriefcase } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const Qualification = () => {
  return (
    <section className="bg-gray-800 rounded-xl text-white px-4 md:px-20 mt-16 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My{" "}
        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Qualifications
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Academic Qualification */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
          <div className="flex items-center gap-4 mb-4">
            <FaUniversity className="text-3xl text-purple-500" />
            <h3 className="text-xl font-semibold">Academic</h3>
          </div>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>
              <span className="font-medium text-white">Exam:</span> Bachelor of
              Business Administration (BBA)
            </p>
            <p>
              <span className="font-medium text-white">University:</span>{" "}
              National University
            </p>
            <p>
              <span className="font-medium text-white">Institute:</span> Govt.
              BM College, Barisal
            </p>
            <p>
              <span className="font-medium text-white">Department:</span>{" "}
              Management
            </p>

            {/* <p>
              <span className="font-medium text-white">Passing Year:</span> 2022
            </p> */}
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition">
          <div className="flex items-center gap-4 mb-4">
            <MdWorkOutline className="text-3xl text-indigo-400" />
            <h3 className="text-xl font-semibold">Professional Experience</h3>
          </div>

          <div className="space-y-4 text-gray-300 text-sm">
            {/* Job 1 */}
            <div>
              <p className="font-medium text-white">
                E-Learning & Earning Ltd.
              </p>
              <p>Position: Jr. Web Developer</p>
              <p>Duration: 1 Year</p>
            </div>

            {/* Job 2 */}
            <div>
              <p className="font-medium text-white">Click The Photo</p>
              <p>Position: Digital Marketing Specialist</p>
              <p>Duration: 6 Months </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
