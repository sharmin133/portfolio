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

           <p className="text-base md:text-lg text-gray-700 mb-6">
      I focus on writing clean and maintainable code to ensure long-term project success. I’m a quick learner who thrives in team environments, adapts to new challenges easily, and continuously improves through real-world development experiences.
    </p>

    <p className="text-base md:text-lg text-gray-700">
    I am a passionate Full Stack Developer focused on creating clean, user-friendly, and accessible web applications. I build responsive interfaces that function smoothly and effectively. Always eager to learn and improve, I collaborate well in teams and look forward to contributing to meaningful projects. My goal is to grow as a developer by delivering high-quality solutions that benefit users.
    </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
