import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 text-gray-900 w-full max-w-[1400px] mx-auto gap-8">
      {/* Left side - Text content */}
      <motion.div
        className=" flex-1 md:basis-[80%] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="p-4 text-4xl md:text-6xl font-extrabold mt-6 ">Hi, I’m</h2>
        <h2 className="text-4xl md:text-6xl font-extrabold text-indigo-600">Mst. Sharmin Akter</h2>
        <h3 className="text-3xl font-extrabold text-gray-700">Full Stack Developer</h3>

        <p className="text-xl md:text-2xl ">
 I am a passionate Full Stack Developer focused on building clean, user-friendly, accessible web applications. I create responsive interfaces that work smoothly. Eager to learn and collaborate, my goal is to grow by delivering quality solutions that benefit users.

        </p>

        <div className="flex space-x-6 mt-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/158sTRpyI1fRhGknsIhk3IOJKRo3sTHNp/view?usp=sharing"
            download
            className="px-8 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md font-semibold transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social icons */}
        <motion.div
          className="flex space-x-6 mt-10 text-indigo-600 text-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/sharmin133"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="..." />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mst-sharmin-akter3740/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="..." />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Right side - Profile image */}
      <motion.div
        className="order-1 flex-1 md:basis-[20%] md:order-2 flex-shrink-0 mt-8 md:mt-0 md:ml-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
          <img
            src="/all image/picture/banner.jpg"
            alt="Mst. Sharmin Akter"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
