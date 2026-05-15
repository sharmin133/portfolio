import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 text-[#D6E6F2] bg-transparent"
    >
      <motion.div
        className="mx-auto text-center max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl mb-4
          text-[#D6E6F2]
          tracking-wide elsie"
        >
          About Me
        </h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-1 bg-[#2D5B8F] mx-auto rounded-full mb-8
          shadow-[0_0_15px_rgba(45,91,143,0.6)]"
        />

        <p
          className="text-lg md:text-xl leading-[2.2rem]
          text-[#B8D4E3] text-justify playfair"
        >
          I'm{" "}
          <span className="font-semibold text-[#e3ebf0]">
            Mst. Sharmin Akter,
          </span>{" "}
          a Full Stack Developer, passionate about building user-friendly, reliable, and scalable web applications. I’ve always been curious about technology, and that curiosity gradually turned into a strong interest in programming. I work with modern technologies including Next.js, TypeScript, Prisma, PostgreSQL, along with the MERN stack. I also explore areas like Python, AI, machine learning, deep learning, and natural language processing to expand my technical knowledge.
        </p>

        <p
          className="mt-6 text-lg md:text-xl leading-[2.2rem]
          text-[#c3d6e0] text-justify playfair"
        >
          I enjoy experimenting with different tools and techniques to make applications both functional and visually appealing. For me, coding is about more than writing lines of code—it’s about creating digital experiences that people enjoy using. I’m constantly learning, trying new ideas, and improving my skills. My goal is to grow as a developer and create applications that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;