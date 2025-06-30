import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3 text-center">
        Projects
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        className="h-1 bg-indigo-600 mx-auto mb-8 rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full h-64"
            >
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot1.png"
                  alt="FlatFusion 1"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot2.png"
                  alt="FlatFusion 2"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 3.png"
                  alt="FlatFusion 3"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="md:max-w-7xl w-full p-6 ">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              PrimeGo
            </h3>
            <p className="text-gray-700 mb-6">
              PrimeGo is a wholesale marketplace platform designed to simplify
              bulk purchasing for users. It features minimum quantity
              validation, a secure authentication system, an admin panel for
              managing products, and a seamless cart experience to streamline
              orders.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                DaisyUI
              </span>
              <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                React Router
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                Firebase
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                Express.js
              </span>
              <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                JWT
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sharmin133/Wholesale-Product-Website-Client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Client Code
              </a>
              <a
                href="https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-sharmin133.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Server Code
              </a>
              <a
                href="https://primego-wholesale-website.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full h-64"
            >
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 5.png"
                  alt="FlatFusion 1"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 6.png"
                  alt="FlatFusion 2"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 7.png"
                  alt="FlatFusion 3"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-1/2 w-full p-6">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              FlatFusion
            </h3>
            <p className="text-gray-700 mb-6">
              FlatFusion is a full-stack roommate finder web application designed
              to simplify the process of listing and discovering shared living
              spaces. It provides a secure environment for users to post rooms,
              manage listings, and connect with potential roommates through a
              streamlined interface.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                DaisyUI
              </span>
              <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                React Router
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                Firebase
              </span>
              <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                Express.js
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sharmin133/Roommate-Finder-website-Client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Client Code
              </a>
              <a
                href="https://github.com/sharmin133/Roommate-Finder-Website-Server.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Server Code
              </a>
              <a
                href="https://roommate-finder-website.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="md:w-1/2 w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full h-64"
            >
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 8.png"
                  alt="FlatFusion 1"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/all image/picture/Screenshot 9.png"
                  alt="FlatFusion 2"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/public/all image/picture/Screenshot 10.png"
                  alt="FlatFusion 3"
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-1/2 w-full p-6">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
              AppNest
            </h3>
            <p className="text-gray-700 mb-6">
              AppNest is a modern web platform that functions as an app store,
              allowing users to explore, filter, and view details of various
              web and mobile applications. It features dynamic routing, smooth
              animations, and a responsive interface for an engaging browsing
              experience.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                DaisyUI
              </span>
              <span className="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">
                React Router
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                Firebase
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sharmin133/AppStore-Website.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Github
              </a>

              <a
                href="https://assignment-9-f82df.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

