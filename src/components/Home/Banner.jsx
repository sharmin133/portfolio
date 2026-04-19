import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaGithub, FaMapMarkerAlt, FaGithubAlt, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
  const titles = ["Full Stack Developer", "MERN Stack Developer", "Frontend Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="flex flex-col items-center text-center px-4 py-8 gap-5 
border border-purple-800 rounded-2xl 
bg-gradient-to-b from-[#1a0030] to-[#0a0010]
shadow-[0_0_25px_rgba(168,85,247,0.35)]">

      {/* Photo */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-600 shadow-lg shadow-purple-900">
        <img
          src="https://i.ibb.co.com/Sw4Sy7bz/hejabavatar.png"
          alt="Mst. Sharmin Akter"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name + Animated Title */}
      <div>
        <h2 className="text-3xl font-bold text-purple-200">Mst. Sharmin Akter</h2>
        <div className="h-0.5 bg-purple-700 w-16 mx-auto my-2 rounded-full" />

        <div className="relative min-h-[1.8rem]">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTitle}
              className="text-xl font-semibold text-purple-400"
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

     
      {/* Contact Info */}
      <div className="flex flex-row gap-5 justify-center w-full">

        <a
          href="https://www.linkedin.com/in/mst-sharmin-akter3740/"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2] text-white hover:scale-110 transition"
        >
          <FaLinkedinIn size={24} />
        </a>

        <a
          href="https://github.com/sharmin133"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 text-white hover:scale-110 transition"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://facebook.com/your-profile"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition"
        >
          <FaFacebookF size={24} />
        </a>

        <a
          href="https://wa.me/881732341938"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
        >
          <FaWhatsapp size={24} />
        </a>

      </div>


      {/* Buttons */}
      

        <a
          href="https://drive.google.com/file/d/158sTRpyI1fRhGknsIhk3IOJKRo3sTHNp/view"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 text-white text-lg font-bold 
          rounded-lg text-center border border-purple-700  bg-purple-800
           hover:bg-purple-700 transition"
        >
          Resume
        </a>
      </div>
    
  );
};

export default Banner;