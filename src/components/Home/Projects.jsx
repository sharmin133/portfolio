import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import projects from "./projectsData";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-16 text-[#D6E6F2] bg-transparent"
    >
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-[#D6E6F2] text-center mb-4 tracking-wide elsie">
          Projects
        </h2>

        {/* Underline */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ height: "4px", borderRadius: "9999px" }}
            className="bg-[#2D5B8F] shadow-[0_0_15px_rgba(45,91,143,0.6)]"
          />
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="
              rounded-2xl overflow-hidden
              bg-[rgba(20,42,67,0.25)]
              backdrop-blur-sm
              border border-[#2D5B8F]/25
              hover:border-[#4F7BA7]/45
              transition duration-300
              shadow-[0_8px_48px_rgba(0,0,0,0.4)]
              hover:-translate-y-2
            "
            >
              {/* Image */}
              <div className="overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full h-64 object-cover
                  transition duration-500
                  group-hover:scale-105
                "
                />

                {/* Overlay */}
                <div
                  className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#142A43]/80
                  via-transparent
                  to-transparent
                  opacity-80
                "
                ></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Name */}
                <h3
                  className="
                  text-2xl md:text-3xl
                  font-semibold
                  text-[#e3ebf0]
                  mb-4
                  playfair
                "
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="
                  text-[#B8D4E3]
                  text-lg
                  leading-relaxed
                  playfair
                "
                >
                  {project.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] my-6 bg-[#2D5B8F]/30"></div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      px-4 py-2
                      text-base
                      rounded-xl
                      bg-[rgba(20,42,67,0.35)]
                      border border-[#2D5B8F]/20
                      text-[#D6E6F2]
                      playfair
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* Live Site */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-5 py-3 rounded-xl
                    text-base font-medium
                    bg-gradient-to-r from-[#2D5B8F] to-[#4F7BA7]
                    text-white
                    hover:scale-105
                    hover:shadow-[0_0_20px_rgba(79,123,167,0.5)]
                    transition duration-300
                    flex items-center gap-2
                    playfair
                  "
                  >
                    <FiExternalLink size={18} />
                    Live Site
                  </a>


                  {/* See More */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="
                    px-5 py-3 rounded-xl
                    text-base font-medium
                    border border-[#4F7BA7]/40
                    text-[#D6E6F2]
                    hover:border-[#4F7BA7]/70
                    hover:bg-[rgba(79,123,167,0.15)]
                    transition duration-300
                    flex items-center gap-2
                    playfair
                    ml-auto
                  "
                  >
                    See Details
                    <FiArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;