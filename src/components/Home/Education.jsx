import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-3 text-center">
        Education
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        className="h-1 bg-yellow-600 mx-auto mb-8 rounded-full"
      />

      <div className="space-y-8">
        <motion.div
          className="relative border-l-4 border-yellow-600 pl-6 p-6 rounded-xl bg-gradient-to-r from-gray-300 to-gray-200 shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-yellow-600 shadow-md"></div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Bachelor of Science in Computer Science and Engineering (CSE)
          </h3>
          <p className="text-yellow-700 font-medium mt-1">
            Port City International University, Chittagong, Bangladesh
          </p>
          <p className="text-gray-700 mt-2">2020 - 2024</p>
          <p className="text-gray-700 mt-2">CGPA: 3.77</p>
          <p className="mt-3 text-gray-600 md:text-base text-sm">
            I successfully completed my degree with a solid academic record, where I developed a deep understanding of software engineering principles, programming paradigms, and problem-solving techniques essential for building efficient and reliable applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
