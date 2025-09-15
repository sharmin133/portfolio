import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiDaisyui, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiVercel,
  SiNextdotjs, SiRedux, SiCanva, SiFramer, SiAxios
} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 size={48} color="#E34F26" />, bg: "#FFE5D9" },
      { name: "CSS3", icon: <SiCss3 size={48} color="#1572B6" />, bg: "#D0E8FF" },
      { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" />, bg: "#FFF9C4" },
      { name: "React", icon: <SiReact size={48} color="#61DAFB" />, bg: "#DFF6FF" },
      { name: "Next.js", icon: <SiNextdotjs size={48} color="#000000" />, bg: "#E0E0E0" },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" />, bg: "#D0F4FF" },
      { name: "DaisyUI", icon: <SiDaisyui size={48} color="#0EA5E9" />, bg: "#D0EFFF" },
      { name: "Shadcn UI", icon: <BsBoxArrowUpRight size={48} color="#7C3AED" />, bg: "#E8DAFF" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={48} color="#339933" />, bg: "#DFFFD6" },
      { name: "Express", icon: <SiExpress size={48} color="#000000" />, bg: "#E0E0E0" },
      { name: "Redux", icon: <SiRedux size={48} color="#764ABC" />, bg: "#E6E0FF" },
      { name: "REST APIs", icon: <SiAxios size={48} color="#5A29E4" />, bg: "#E6E0FF" },
      { name: "Authentication", icon: <SiAxios size={48} color="#5A29E4" />, bg: "#E6E0FF" },
      { name: "JWT", icon: <SiAxios size={48} color="#F97316" />, bg: "#FFE6D0" },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" />, bg: "#DFFFD6" },
      { name: "Firebase", icon: <SiFirebase size={48} color="#FFCA28" />, bg: "#FFF9C4" },
      { name: "Git", icon: <SiGit size={48} color="#F05032" />, bg: "#FFE5D9" },
      { name: "Vercel", icon: <SiVercel size={48} color="#000000" />, bg: "#E0E0E0" },
      { name: "Canva", icon: <SiCanva size={48} color="#00C4CC" />, bg: "#D0F4FF" },
      { name: "Framer Motion", icon: <SiFramer size={48} color="#0055FF" />, bg: "#D0E8FF" },
    ],
  },
];

const SkillCard = ({ category, skills, index }) => (
  <motion.div
    className="rounded-xl p-6 flex-1 cursor-pointer"
    style={{
     background: "linear-gradient(to top, #D1D5DB, #F9FAFB)",
      boxShadow: "0 6px 15px rgba(0,0,0,0.05)"
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.4, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl md:text-3xl font-bold text-yellow-700 mb-6 text-center">
      {category}
    </h3>
    <div className="flex flex-wrap gap-6 justify-center">
      {skills.map(({ name, icon, bg }) => (
        <motion.div
          key={name}
          className="w-28 h-28 md:w-32 md:h-32 rounded-lg flex flex-col items-center justify-center shadow-md p-3"
          style={{ backgroundColor: bg }}
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
          title={name}
        >
          {icon}
          <span className="mt-2 text-sm md:text-base font-semibold text-gray-800 text-center">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);



const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className=" mx-auto p-6 md:p-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-3 text-center">
        My Skills
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-yellow-600 mx-auto mb-8 rounded-full"
      />
      <div className="px-4 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map(({ category, skills }, index) => (
          <SkillCard
            key={category}
            category={category}
            skills={skills}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;

