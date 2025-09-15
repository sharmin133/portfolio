import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 w-full  mx-auto gap-8  text-gray-900">
      
      {/* Left Side */}
      <div className="flex-1 md:basis-[80%] flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="py-4 text-2xl md:text-4xl text-yellow-600 font-semibold mt-6">
          Hi, I’m
        </h2>
        <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-800">
          Mst. Sharmin Akter
        </h2>

        {/* Rotating Title with Animation */}
        <div className="relative min-h-[3rem]">
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentTitle}
              className="text-3xl md:text-4xl font-extrabold text-gray-700"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitle]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <p className="text-xl md:text-2xl text-gray-800">
         Merging creativity with code, interactive, user-centered websites are crafted to turn ideas into clear, purposeful experiences. Using modern tools like React,Next.js, Tailwind CSS, and Node.js, scalable, responsive, high-performance digital solutions are delivered that feel seamless on any device.

        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="#contact"
             className="block px-4 py-2 text-white bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-md text-center font-semibold shadow-md hover:from-yellow-800 hover:to-yellow-600 transition"
          >
            Contact Me
          </a>
          <a
            href="#resume"
             className="px-4 py-2 border-2 border-yellow-700 text-yellow-800 font-semibold  rounded-md 
             bg-gradient-to-r from-gray-400 to-gray-300 
             hover:from-yellow-800 hover:to-yellow-500 
             hover:text-white transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
<div className="order-1 flex-1 md:basis-[20%] md:order-2 flex-shrink-0 mt-8 md:mt-0 md:ml-20">
  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg mx-auto">
   <img
  src="https://i.ibb.co.com/Sw4Sy7bz/hejabavatar.png"
  alt="Mst. Sharmin Akter"
  className="w-full h-full object-cover object-top"
/>
  </div>
</div>
    </section>
  );
};

export default Banner;
