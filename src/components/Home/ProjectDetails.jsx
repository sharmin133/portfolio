import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiEye,
  FiCheckCircle,
  FiCode,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";
import projects from "./projectsData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const cardClasses = `
  relative overflow-hidden
  rounded-2xl
  bg-[rgba(20,42,67,0.4)]
  backdrop-blur-md
  border border-[#4F7BA7]/25
  hover:border-[#6FA0D0]/60
  transition-all duration-300
  shadow-[0_8px_48px_rgba(0,0,0,0.4)]
  hover:shadow-[0_12px_60px_rgba(79,123,167,0.25)]
  hover:-translate-y-1
  p-6 md:p-9
`;

const SectionHeader = ({ icon, label, title }) => (
  <div className="flex items-center gap-4 mb-6">
    <span
      className="
      flex items-center justify-center
      w-12 h-12 rounded-xl
      bg-gradient-to-br from-[#2D5B8F]/50 to-[#4F7BA7]/40
      border border-[#6FA0D0]/50
      text-[#BFDDFA]
      shadow-[0_0_20px_rgba(79,123,167,0.35)]
      shrink-0
    "
    >
      {icon}
    </span>
    <div>
      {label && (
        <p className="text-xs tracking-[0.25em] uppercase text-[#8FB8E0] mb-1 playfair font-medium">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-[1.75rem] font-semibold text-white playfair">
        {title}
      </h2>
    </div>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="grid  gap-x-6 gap-y-4">
    {items.map((item, i) => (
      <li
        key={i}
        className="
        flex items-start gap-3
        text-[#DCEAF7] text-[1.05rem] leading-relaxed playfair
        bg-[rgba(79,123,167,0.08)]
        border border-[#4F7BA7]/15
        rounded-xl px-4 py-3
      "
      >
        <span
          className="
          mt-1 w-2.5 h-2.5 rounded-full
          bg-gradient-to-r from-[#6FA0D0] to-[#D6E6F2]
          shadow-[0_0_8px_rgba(111,160,208,0.8)]
          shrink-0
        "
        ></span>
        {item}
      </li>
    ))}
  </ul>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center text-[#EAF3FA]">
        <h2 className="text-3xl mb-6 playfair">Project not found</h2>
        <Link
          to="/"
          className="
          inline-flex items-center gap-2
          px-5 py-3 rounded-xl
          bg-gradient-to-r from-[#2D5B8F] to-[#4F7BA7]
          text-white
          playfair
        "
        >
          <FiArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-16 text-[#EAF3FA]">
      {/* Ambient glow background */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-25 -z-10"
        style={{
          background:
            "radial-gradient(circle, #4F7BA7 0%, transparent 70%)",
        }}
      ></div>

      {/* Back to Home - top */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="mb-10"
      >
        <Link
          to="/"
          className="
          inline-flex items-center gap-2
          px-5 py-3 rounded-xl
          border border-[#4F7BA7]/35
          text-[#EAF3FA]
          hover:border-[#6FA0D0]/70
          hover:bg-[rgba(20,42,67,0.55)]
          hover:-translate-x-1
          transition-all duration-300
          playfair
        "
        >
          <FiArrowLeft size={18} />
          Back to Home
        </Link>
      </motion.div>

      {/* Heading block */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
        className="mb-12"
      >
        <p className="text-sm tracking-[0.35em] uppercase text-[#8FB8E0] mb-4 playfair font-medium">
          Project Case Study
        </p>
        <h1
          className="
          text-4xl md:text-6xl font-semibold mb-5 elsie
          bg-gradient-to-r from-white via-[#D6E6F2] to-[#8FB8E0]
          bg-clip-text text-transparent
          drop-shadow-[0_0_30px_rgba(79,123,167,0.35)]
        "
        >
          {project.title}
        </h1>
        <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-[#2D5B8F] to-[#6FA0D0] shadow-[0_0_15px_rgba(79,123,167,0.6)] mb-6"></div>
        <p className="text-[#DCEAF7] text-lg leading-relaxed max-w-3xl playfair">
          {project.description}
        </p>
      </motion.div>

      {/* 3 Pictures */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
        className="grid md:grid-cols-1 gap-5 mb-14"
      >
        {project.images.map((img, i) => (
          <div
            key={i}
            className="
            relative rounded-2xl overflow-hidden
            border border-[#4F7BA7]/25
            hover:border-[#6FA0D0]/60
            shadow-[0_8px_48px_rgba(0,0,0,0.4)]
            hover:shadow-[0_12px_50px_rgba(79,123,167,0.3)]
            hover:-translate-y-1
            transition-all duration-300
            group
          "
          >
            <div className="overflow-hidden">
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="
                w-full h-80 md:h-96 object-cover
                transition duration-500
                group-hover:scale-110
              "
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624]/70 via-transparent to-transparent opacity-70 pointer-events-none"></div>
          </div>
        ))}
      </motion.div>

      {/* Details Sections */}
      <div className="space-y-6">
        {/* Project Overview */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className={cardClasses}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2D5B8F] via-[#4F7BA7] to-transparent"></div>
          <SectionHeader
            icon={<FiEye size={20} />}
            label="Overview"
            title="Project Overview"
          />
          <p className="text-[#DCEAF7] text-lg leading-relaxed playfair">
            {project.overview}
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className={cardClasses}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2D5B8F] via-[#4F7BA7] to-transparent"></div>
          <SectionHeader
            icon={<FiCheckCircle size={20} />}
            label="Highlights"
            title="Key Features"
          />
          <ul className="grid  gap-x-6 gap-y-4">
            {project.keyFeatures.map((feature, i) => (
              <li
                key={i}
                className="
                flex items-start gap-3
                text-[#DCEAF7] text-[1.05rem] leading-relaxed playfair
                bg-[rgba(79,123,167,0.08)]
                border border-[#4F7BA7]/15
                rounded-xl px-4 py-3
              "
              >
                <span
                  className="
                  mt-1 w-2.5 h-2.5 rounded-full
                  bg-gradient-to-r from-[#6FA0D0] to-[#D6E6F2]
                  shadow-[0_0_8px_rgba(111,160,208,0.8)]
                  shrink-0
                "
                ></span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technology Used */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeUp}
          className={cardClasses}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2D5B8F] via-[#4F7BA7] to-transparent"></div>
          <SectionHeader
            icon={<FiCode size={20} />}
            label="Stack"
            title="Technology Used"
          />
          <div className="flex flex-wrap gap-3">
            {project.technologyUsed.map((tech, i) => (
              <span
                key={i}
                className="
                px-5 py-2.5
                text-base font-medium
                rounded-xl
                bg-gradient-to-r from-[#2D5B8F]/40 to-[#4F7BA7]/40
                border border-[#6FA0D0]/40
                text-white
                hover:border-[#6FA0D0]/80
                hover:from-[#2D5B8F]/60 hover:to-[#4F7BA7]/60
                hover:scale-105
                hover:shadow-[0_0_18px_rgba(111,160,208,0.4)]
                transition-all duration-300
                playfair
                cursor-default
              "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

          {/* Challenges Faced */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={6}
          variants={fadeUp}
          className={cardClasses}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2D5B8F] via-[#4F7BA7] to-transparent"></div>
          <SectionHeader
            icon={<FiAlertTriangle size={20} />}
            label="Obstacles"
            title="Challenges Faced"
          />
          <BulletList items={project.challengesFaced} />
        </motion.div>
 
        {/* Future Plans */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={7}
          variants={fadeUp}
          className={cardClasses}
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2D5B8F] via-[#4F7BA7] to-transparent"></div>
          <SectionHeader
            icon={<FiTrendingUp size={20} />}
            label="Roadmap"
            title="Future Plans"
          />
          <BulletList items={project.futurePlans} />
        </motion.div>
      </div>

      {/* Bottom Buttons: Live + Source Code */}
      <motion.div
        initial="hidden"
        animate="visible"
        custom={8}
        variants={fadeUp}
        className="flex flex-wrap gap-4 mt-14"
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-7 py-3.5 rounded-xl
          text-base font-semibold
          bg-gradient-to-r from-[#2D5B8F] to-[#6FA0D0]
          text-white
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(111,160,208,0.6)]
          transition-all duration-300
          flex items-center gap-2
          playfair
        "
        >
          <FiExternalLink size={18} />
          Live Site
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
          px-7 py-3.5 rounded-xl
          text-base font-semibold
          border border-[#4F7BA7]/40
          text-[#EAF3FA]
          hover:border-[#6FA0D0]/70
          hover:bg-[rgba(20,42,67,0.55)]
          hover:scale-105
          transition-all duration-300
          flex items-center gap-2
          playfair
        "
        >
          <FiGithub size={18} />
          View Source Code
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;