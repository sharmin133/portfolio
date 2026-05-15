import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-16 text-[#D6E6F2] bg-transparent">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-[#D6E6F2] text-center mb-4 tracking-wide elsie">
        Education
      </h2>

      {/* Underline */}
      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ height: "4px", borderRadius: "9999px" }}
          className="bg-[#2D5B8F] shadow-[0_0_15px_rgba(45,91,143,0.6)]"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl p-5 md:p-8
        bg-[rgba(20,42,67,0.25)]
        shadow-[0_8px_48px_rgba(0,0,0,0.4)]
        backdrop-blur-sm"
      >

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-[#e3ebf0] playfair leading-snug">
              BSc in Computer Science and Engineering
            </h3>
            <p className="text-[#B8D4E3] text-sm sm:text-base md:text-xl mt-1 playfair">
              Port City International University
            </p>
          </div>

          {/* GPA */}
          <div className="self-start sm:self-center px-4 py-2 sm:px-5 sm:py-3 rounded-xl
          bg-[rgba(20,42,67,0.4)]
          border border-[#2D5B8F]/40 whitespace-nowrap">
            <span className="text-lg sm:text-2xl font-bold text-[#e3ebf0]">3.77</span>
            <span className="text-lg sm:text-2xl text-[#7FB3D5] ml-2">/ 4.00</span>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] my-5 md:my-6 bg-[#2D5B8F]/30"></div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

          {/* Achievements */}
          <div className="p-4 rounded-xl
          bg-[rgba(20,42,67,0.35)]
          border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
          transition duration-300">
            <h2 className="text-base sm:text-xl text-[#7FB3D5] font-semibold mb-3">
              Key Achievements
            </h2>
            <ul className="space-y-2 text-[#B8D4E3] text-sm">
              <li>• Achieved consistent academic performance throughout the program</li>
              <li>• Published multiple research papers</li>
              <li>• Explored in AI & Machine Learning</li>
            </ul>
          </div>

          {/* Focus */}
          <div className="p-4 rounded-xl
          bg-[rgba(20,42,67,0.35)]
          border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
          transition duration-300">
            <h4 className="text-base sm:text-xl text-[#7FB3D5] font-semibold mb-3">
              Core Focus Areas
            </h4>
            <ul className="space-y-2 text-[#B8D4E3] text-sm">
              <li>• Data Structures & Algorithms</li>
              <li>• Software Engineering</li>
              <li>• Web Development</li>
              <li>• Artificial Intelligence</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Education;