import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [

    {
    title: "RedHope",
    description: " RedHope is a blood donation platform that connects patients with compatible donors during emergencies, while allowing volunteers and donors to contribute to life-saving efforts. ",
    images: ["https://i.ibb.co.com/R4Y1DdxB/Screenshot-504.png",
      "https://i.ibb.co.com/214KPSJz/Screenshot-522.png",
      "https://i.ibb.co.com/GfXLJrL1/Screenshot-523.png"
    ],
    live: "https://redhope-1ec3a.web.app/",
    moreDetails: "#project4",
  },
  {
    title: "PrimeGo",
    description:
      "A wholesale e-commerce platform that easily connects suppliers and buyers, providing a smooth shopping experience.",
    images: [
      "https://i.ibb.co.com/9HJXqCkc/Screenshot-514.png",
      "https://i.ibb.co.com/JRF5syN7/Screenshot-515.png",
      "https://i.ibb.co.com/yFPW4pfD/Screenshot-516.png",
    ],
    live: "https://primego-wholesale-website.web.app",
    moreDetails: "#primego",
  },
  {
    title: "FlatFusion",
    description:
      "FlatFusion is a platform for locating compatible roommates by connecting people based on their needs, helping save time and build comfortable shared living arrangements.",
    images: [
      "/all image/picture/Screenshot 5.png",
      "/all image/picture/Screenshot 6.png",
      "/all image/picture/Screenshot 7.png",
    ],
    live: "https://roommate-finder-website.web.app/",
    moreDetails: "#flatfusion",
  },
  {
    title: "AppNest",
    description:
      "A modern web platform acting as an app store, allowing users to explore and filter web and mobile applications effortlessly.",
    images: [
      "/all image/picture/Screenshot 8.png",
      "/all image/picture/Screenshot 9.png",
      "/all image/picture/Screenshot 10.png",
    ],
    live: "https://assignment-9-f82df.web.app",
    moreDetails: "#appnest",
  },

   {
    title: "PrimeGo",
    description:
      "A wholesale e-commerce platform that easily connects suppliers and buyers, providing a smooth shopping experience.",
    images: [
      "https://i.ibb.co.com/9HJXqCkc/Screenshot-514.png",
      "https://i.ibb.co.com/JRF5syN7/Screenshot-515.png",
      "https://i.ibb.co.com/yFPW4pfD/Screenshot-516.png",
    ],
    live: "https://primego-wholesale-website.web.app",
    moreDetails: "#primego",
  },

 
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-3 text-center">
        Projects
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        className="h-1 bg-yellow-600 mx-auto mb-12 rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.slice(0, 4).map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="bg-gradient-to-t from-gray-200 to-gray-500 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Image Swiper */}
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full h-64"
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Project Details */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-yellow-700">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-md text-center font-semibold shadow-md hover:from-yellow-800 hover:to-yellow-600 transition"
                >
                  Live Site
                </a>
                <Link
                  to={project.moreDetails}
                  className="px-4 py-2 border-2 border-yellow-700 text-yellow-800 font-semibold rounded-md 
                             bg-gradient-to-r from-gray-300 to-gray-200 
                             hover:from-yellow-800 hover:to-yellow-500 
                             hover:text-white transition-colors duration-300"
                >
                  More Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Projects Button */}
      {projects.length > 4 && (
        <div className="flex justify-center mt-12">
          <Link
            to="/all-projects"
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-lg shadow-lg hover:from-yellow-800 hover:to-yellow-600 transition"
          >
            See More Projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
