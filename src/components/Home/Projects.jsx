import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { CgEye } from "react-icons/cg";

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "RedHope",
    description:
      "RedHope is a blood donation platform that connects patients with compatible donors during emergencies, while allowing volunteers and donors to contribute to life-saving efforts.",
    image: "https://i.ibb.co.com/R4Y1DdxB/Screenshot-504.png",
    live: "https://redhope-1ec3a.web.app/",
    moreDetails: "#project4",
    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
  },

  {
    title: "PrimeGo",
    description:
      "A wholesale e-commerce platform that easily connects suppliers and buyers, providing a smooth shopping experience.",
    image: "https://i.ibb.co.com/9HJXqCkc/Screenshot-514.png",
    live: "https://primego-wholesale-website.web.app",
    moreDetails: "#primego",
    techStack: ["React", "MongoDB", "Express", "Node.js"],
  },

  {
    title: "FlatFusion",
    description:
      "FlatFusion is a platform for locating compatible roommates by connecting people based on their needs.",
    image: "/all image/picture/Screenshot 5.png",
    live: "https://roommate-finder-website.web.app/",
    moreDetails: "#flatfusion",
    techStack: ["React", "Firebase", "Tailwind CSS"],
  },

  {
    title: "AppNest",
    description:
      "A modern web platform acting as an app store, allowing users to explore and filter applications effortlessly.",
    image: "/all image/picture/Screenshot 8.png",
    live: "https://assignment-9-f82df.web.app",
    moreDetails: "#appnest",
    techStack: ["React", "JWT", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 text-gray-200"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10">
          Projects
        </h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                rounded-2xl overflow-hidden
                bg-[#120020]/40 backdrop-blur-md
                border border-purple-400/10 hover:border-purple-400/30
                transition duration-300 shadow
              "
            >
              {/* Single Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] my-6 bg-purple-500/30"></div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 text-sm
                        bg-purple-900/30
                        border border-purple-500/20
                        rounded-lg
                        text-purple-200
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
      px-4 py-2 rounded-lg text-sm font-medium
      bg-purple-900/30
      border border-purple-500/30
      text-purple-200
      hover:bg-purple-700/40
      transition
      flex items-center gap-2
    "
                  >
                    <FiExternalLink size={16} />
                    Live Site
                  </a>

                  <Link
                    to={project.moreDetails}
                    className="
      px-4 py-2 rounded-lg text-sm font-medium
      border border-purple-500/30
      text-white
      hover:bg-purple-700/30
      transition
      flex items-center gap-2
    "
                  >
                    <CgEye size={16} />
                    More Details
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