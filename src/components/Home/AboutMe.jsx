import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 text-gray-200">
      <motion.div
        className="mx-auto text-center max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
          About Me
        </h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

        />

        {/* Paragraph 1 */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-justify ">
          I'm{" "}
          <span className="font-semibold text-purple-400">
            Mst. Sharmin Akter,
          </span>{" "}
          a Full Stack Developer, passionate about building user-friendly, reliable, and scalable web applications. 
          I’ve always been curious about technology, and that curiosity gradually turned into a strong interest in programming.
           I work with modern technologies including Next.js, TypeScript, Prisma, PostgreSQL, along with the MERN stack. 
           I also explore areas like Python, AI, machine learning, deep learning, and natural language processing to expand my technical knowledge.
            I enjoy experimenting with different tools and techniques  to make applications both functional and visually appealing. 
           For me, coding is about more than writing lines of code—it’s about creating digital experiences that people enjoy using.
            I’m constantly learning, trying new ideas, 
             and improving my skills. My goal is to grow as a developer and create applications that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;