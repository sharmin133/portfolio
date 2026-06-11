import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

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

const projects = [
  {
    title: "RedHope",

    description:
      "RedHope is a blood donation platform that connects patients with compatible donors during emergencies, while allowing volunteers and donors to contribute to life-saving efforts.",

    image: "https://i.ibb.co/R4Y1DdxB/Screenshot-504.png",

    live: "https://redhope-1ec3a.web.app/",

    github: "https://github.com/sharmin133/blood-donation-client-site-code.git",

    techStack: ["React", "Next.js", "Tailwind CSS", "Firebase"],
  },

  {
    title: "PrimeGo",

    description:
      "A wholesale e-commerce platform that easily connects suppliers and buyers, providing a smooth shopping experience.",

    image: "https://i.ibb.co/9HJXqCkc/Screenshot-514.png",

    live: "https://primego-wholesale-website.web.app",

    github:
      "https://github.com/sharmin133/Wholesale-Product-Website-Client.git",

    techStack: ["React", "MongoDB", "Express", "Node.js"],
  },

  {
    title: "FlatFusion",

    description:
      "FlatFusion is a platform for locating compatible roommates by connecting people based on their needs.",

    image: "/all image/picture/Screenshot 5.png",

    live: "https://roommate-finder-website.web.app/",

    github: "https://github.com/sharmin133/Roommate-Finder-website-Client.git",

    techStack: ["React", "Firebase", "Tailwind CSS"],
  },

  {
    title: "AppNest",

    description:
      "A modern web platform acting as an app store, allowing users to explore and filter applications effortlessly.",

    image: "/all image/picture/Screenshot 8.png",

    live: "https://assignment-9-f82df.web.app",

    github: "https://github.com/sharmin133/AppStore-Website.git",

    techStack: ["React", "JWT", "MongoDB"],
  },
];

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
          {projects.map((project, index) => (
            <motion.div
              key={index}
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

                  {/* Github */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-5 py-3 rounded-xl
                    text-base font-medium
                    border border-[#2D5B8F]/30
                    text-[#D6E6F2]
                    hover:border-[#4F7BA7]/50
                    hover:bg-[rgba(20,42,67,0.45)]
                    transition duration-300
                    flex items-center gap-2
                    playfair
                  "
                  >
                    <FiGithub size={18} />
                    Github
                  </a>
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
