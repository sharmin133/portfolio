import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 text-gray-800">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8">
          About Me
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-1 bg-indigo-600 mx-auto mb-8 rounded-full"
        />

        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          I'm <span className="font-semibold text-indigo-600">Mst. Sharmin Akter</span>, I build web applications that are reliable, user-friendly, and designed to scale smoothly as they grow. My background in computer science helps me solve problems by writing clean and simple code using the latest tools.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-3xl mx-auto">
          I always focus on making my code easy to understand and update, so projects can succeed over time. Besides coding, I enjoy learning about UI/UX design, contributing to open-source projects, and improving my skills through real-world projects.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
