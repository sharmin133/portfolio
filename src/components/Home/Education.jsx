import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-200 ">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10">
        Education
      </h2>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-6 md:p-8
      bg-gradient-to-b from-[#1a0030] to-[#0a0010]
        shadow-xs shadow-purple-500"
      >

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              BSc in Computer Science and Engineering
            </h3>
            <p className="text-gray-200 text-xl">
              Port City International University
            </p>
          </div>

          {/* GPA */}
          <div className="px-5 py-3 rounded-xl
          bg-purple-900/20 border border-purple-500/20">
            <span className="text-2xl font-bold text-white">3.77</span>
            <span className="text-2xl text-gray-400 ml-2">/ 4.00</span>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] my-6 bg-purple-500/30"></div>

        {/* Bottom Grid */}
       <div className="grid md:grid-cols-2 gap-6">

  {/* Achievements */}
  <div className="p-4 rounded-xl
  bg-[#120020]/40 backdrop-blur-md
  border border-purple-400/10 hover:border-purple-400/30
  transition duration-300 shadow">
    <h2 className=" text-xl text-purple-400 font-semibold mb-3">
      Key Achievements
    </h2>
    <ul className="space-y-2 text-gray-300 text-sm">
      <li>• Successfully completed academic program</li>
      <li>• Published multiple research papers</li>
      <li>• Explored in AI & Machine Learning</li>
    </ul>
  </div>

  {/* Focus */}
  <div className="p-4 rounded-xl
  bg-[#120020]/40 backdrop-blur-md
  border border-purple-400/10 hover:border-purple-400/30
  transition duration-300 shadow">
    <h4 className="text-xl text-purple-400 font-semibold mb-3">
      Core Focus Areas
    </h4>
    <ul className="space-y-2 text-gray-300 text-sm">
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