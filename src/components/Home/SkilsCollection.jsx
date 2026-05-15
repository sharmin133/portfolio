import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiVercel,
  SiNextdotjs, SiRedux, 
  SiDocker, SiNetlify, SiPrisma, SiPostgresql, SiTypescript,
  SiReactquery,
  SiFramer,
  SiAxios,
 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";


const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React",      icon: <SiReact size={36} />,       color: "#61DAFB" },
      { name: "Next.js",    icon: <SiNextdotjs size={36} />,   color: "#FFFFFF" },
      { name: "JavaScript", icon: <SiJavascript size={36} />,  color: "#F7DF1E" },
      { name: "Tailwind",   icon: <SiTailwindcss size={36} />, color: "#06B6D4" },
      { name: "CSS3",       icon: <SiCss3 size={36} />,        color: "#1572B6" },
      { name: "HTML5",      icon: <SiHtml5 size={36} />,       color: "#E34F26" },
      { name: "Redux",      icon: <SiRedux size={36} />,       color: "#764ABC" },
   
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",        icon: <SiNodedotjs size={36} />,   color: "#339933" },
      { name: "Express",        icon: <SiExpress size={36} />,     color: "#FFFFFF" },
      { name: "Mongoose",       icon: <SiMongodb size={36} />,     color: "#47A248" },
      { name: "TypeScript",     icon: <SiTypescript size={36} />,  color: "#3178C6" },
      { name: "REST API",       icon: <TbApi size={36} />,         color: "#7FB3D5" },
      { name: "Axios",          icon: <SiAxios size={36} />,       color: "#5A29E4" },
      { name: "TanStack Query", icon: <SiReactquery size={36} />,  color: "#FF4154" },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB",       icon: <SiMongodb size={36} />,    color: "#47A248" },
      { name: "PostgreSQL",    icon: <SiPostgresql size={36} />, color: "#336791" },
      { name: "Prisma",        icon: <SiPrisma size={36} />,     color: "#FFFFFF" },
      { name: "Firebase",      icon: <SiFirebase size={36} />,   color: "#FFCA28" },
      { name: "Github",        icon: <SiGit size={36} />,        color: "#F05032" },
      { name: "Vercel",        icon: <SiVercel size={36} />,     color: "#FFFFFF" },
      { name: "Netlify",       icon: <SiNetlify size={36} />,    color: "#00C7B7" },
      { name: "Docker",        icon: <SiDocker size={36} />,     color: "#2496ED" },
      { name: "Framer Motion", icon: <SiFramer size={36} />,     color: "#D6E6F2" },
    ],
  },
];

const SkillCard = ({ category, skills, index }) => (
  <motion.div
    className="rounded-2xl p-6 md:p-8
    bg-[rgba(11,22,36,0.6)] backdrop-blur-sm
    border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
    transition duration-300
    shadow-[0_8px_48px_rgba(0,0,0,0.4)]"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold text-[#7FB3D5] mb-6 playfair">
      {category}
    </h3>

    <div className="flex flex-wrap justify-start gap-4">
      {skills.map(({ name, icon, color }) => (
        <motion.div
          key={name}
          className="w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center
          rounded-xl
          bg-[rgba(20,42,67,0.55)]
          border border-[#2D5B8F]/30 hover:border-[#7FB3D5]/70
          transition"
          whileHover={{ scale: 1.1 }}
        >
          <div style={{ color }}>{icon}</div>
          <span className="text-xs mt-2 text-center font-medium playfair" style={{ color }}>
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-[#D6E6F2] bg-transparent">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-[#D6E6F2] text-center mb-4 tracking-wide elsie">
        My Skills
      </h2>

      {/* Underline */}
      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ height: "4px", borderRadius: "9999px" }}
          className="bg-[#2D5B8F] shadow-[0_0_15px_rgba(45,91,143,0.6)]"
        />
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-8">
        {skillCategories.map(({ category, skills }, index) => (
          <SkillCard key={category} category={category} skills={skills} index={index} />
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 md:p-8
          bg-[rgba(11,22,36,0.6)] backdrop-blur-sm
          border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
          shadow-[0_8px_48px_rgba(0,0,0,0.4)]
          transition duration-300"
        >
          <h2 className="text-2xl font-bold text-[#7FB3D5] text-center mb-8 playfair">
            Additional Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Languages */}
            <div className="p-4 rounded-xl
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/30 hover:border-[#2D5B8F]/60
            transition duration-300">
              <h3 className="text-base sm:text-xl text-[#7FB3D5] font-semibold mb-3 playfair">
                Languages
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#B8D4E3] text-sm playfair">
                <li>Bengali — Native</li>
                <li>English — Working Proficiency</li>
                <li>Hindi — Speaking</li>
              </ul>
            </div>

            {/* AI / ML */}
            <div className="p-4 rounded-xl
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/30 hover:border-[#2D5B8F]/60
            transition duration-300">
              <h3 className="text-base sm:text-xl text-[#7FB3D5] font-semibold mb-3 playfair">
                AI & Data Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#B8D4E3] text-sm playfair">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Natural Language Processing (NLP)</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="p-4 rounded-xl
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/30 hover:border-[#2D5B8F]/60
            transition duration-300">
              <h3 className="text-base sm:text-xl text-[#7FB3D5] font-semibold mb-3 playfair">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-[#B8D4E3] text-sm playfair">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Quick Learner</li>
                <li>Critical Thinking</li>
                <li>Project Management</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default SkillsSection;