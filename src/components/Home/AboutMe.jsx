import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 text-gray-800">
      <motion.div
        className=" mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-4">
          About Me
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-1 bg-yellow-600 mx-auto mb-8 rounded-full"
        />

        <p className="text-lg md:text-xl leading-relaxed max-w-6xl mx-auto">
          I'm{" "}
          <span className="font-semibold text-yellow-700">
            Mst. Sharmin Akter{" "} 
          </span>
           a MERN stack developer, passionate about building user-friendly, reliable, and scalable web applications. I’ve always been curious about technology, and that curiosity gradually turned into a strong interest in programming. Starting with small projects gave me confidence and showed me how much I enjoy creating for the web.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-6xl mx-auto">
          I work with the MERN stack, including MongoDB, Express.js, React and Node.js, and I also explore Next.js, Tailwind CSS, DaisyUI and Framer Motion to build smooth and interactive interfaces. I enjoy experimenting with different tools and techniques to make applications both functional and visually appealing.
        </p>

          <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-6xl mx-auto">
         For me, coding is about more than writing lines of code. It’s about creating digital experiences that people enjoy using. I’m constantly learning, trying new ideas, and improving my skills. My goal is to grow as a developer and create applications that make a real impact.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
