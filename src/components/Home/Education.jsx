import React from "react";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3 text-center">Education</h2>
 <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        className="h-1 bg-indigo-600 mx-auto mb-8 rounded-full"
      />
      <div className="space-y-8">
        <div className="border-l-4 border-indigo-600 pl-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            Bachelor of Science in Computer Science and Engineering (CSE)
          </h3>
          <p className="text-indigo-600 font-medium mt-1">Port City International University, Chittagong, Bangladesh</p>
          <p className="text-gray-700 mt-2">2020 - 2024</p>
          <p className="text-gray-700 mt-2">CGPA: 3.77</p>
          <p className="mt-2 text-gray-600">
            I successfully completed my degree with a solid academic record, where I developed a deep understanding of software engineering principles, programming paradigms, and problem-solving techniques essential for building efficient and reliable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
