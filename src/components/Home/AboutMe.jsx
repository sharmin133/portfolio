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
          I'm <span className="font-semibold text-indigo-600">Mst. Sharmin Akter</span>, a passionate developer focused on creating reliable, scalable, and user-friendly web applications. My background in computer science helps me solve problems efficiently by writing clean and effective code using modern tools.


        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-3xl mx-auto">
          I enjoy taking on real-world projects where I can continuously learn and apply my skills. Writing code that is easy to understand and maintain matters to me because it helps projects succeed in the long term. I’m also passionate about open-source contributions and always looking for ways to grow as a developer.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
