import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const titles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center text-center px-4 py-8 gap-5
      border border-[#1E3A5F]
      rounded-2xl
      bg-[linear-gradient(180deg,#142A43_0%,#000000_100%)]
      shadow-[0_0_35px_rgba(20,42,67,0.65)]"
    >
      {/* Photo */}
      <div
        className="w-32 h-32 rounded-full overflow-hidden
        border-2 border-[#2D5B8F]
        shadow-[0_0_25px_rgba(20,42,67,0.8)]"
      >
        <img
          src="https://i.ibb.co.com/Sw4Sy7bz/hejabavatar.png"
          alt="Mst. Sharmin Akter"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name + Animated Title */}
      <div>
        <h2 className="text-3xl font-bold text-[#D6E6F2]">
          Mst. Sharmin Akter
        </h2>

        <div className="h-0.5 bg-[#2D5B8F] w-16 mx-auto my-2 rounded-full" />

        <div className="relative min-h-[1.8rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTitle}
              className="text-xl font-semibold text-[#7FB3D5]"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {titles[currentTitle]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-row gap-5 justify-center w-full">
        <a
          href="https://www.linkedin.com/in/mst-sharmin-akter3740/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center
          rounded-full
          bg-[#18344F]
          text-[#D6E6F2]
          border border-[#2D5B8F]
          hover:scale-110 hover:bg-[#21496F]
          transition duration-300"
        >
          <FaLinkedinIn size={20} />
        </a>

        <a
          href="https://github.com/sharmin133"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center
          rounded-full
          bg-[#18344F]
          text-[#D6E6F2]
          border border-[#2D5B8F]
          hover:scale-110 hover:bg-[#21496F]
          transition duration-300"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://wa.me/881732341938"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center
          rounded-full
          bg-[#18344F]
          text-[#D6E6F2]
          border border-[#2D5B8F]
          hover:scale-110 hover:bg-[#21496F]
          transition duration-300"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1Vio-m41_ca454U5Vjz4nRpBNqAqMGM-H/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3
        text-[#EAF4FF]
        text-lg font-bold
        rounded-xl text-center
        border border-[#2D5B8F]
        bg-[#18344F]
        hover:bg-[#21496F]
        shadow-[0_0_20px_rgba(20,42,67,0.5)]
        transition duration-300"
      >
        Resume
      </a>
    </div>
  );
};

export default Banner;
