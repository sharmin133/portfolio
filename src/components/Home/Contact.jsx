import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setError("Oops! Something went wrong. Please try again.");
        console.error(err);
      });
  };

  return (
    <section id='contact' className="py-20 px-6 md:px-16 text-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3 text-center">Let's Contact</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        className="h-1 bg-indigo-600 mx-auto mb-8 rounded-full"
      />

      {/* 👉 Animate the entire contact section below */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-10"
      >

        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="text-gray-800 space-y-8">
            <div className="border-2 border-gray-400 p-4 rounded-xl flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <div>
                <p className="font-semibold">WhatsApp:</p>
                <a href="https://wa.me/881732341938" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  +8801732341938
                </a>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 rounded-xl flex items-center gap-3">
              <FaLinkedin className="text-blue-700 text-xl" />
              <div>
                <p className="font-semibold">LinkedIn:</p>
                <a href="https://www.linkedin.com/in/mst-sharmin-akter3740/" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  /mst-sharmin-akter3740
                </a>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 rounded-xl flex items-center gap-3">
              <FaGithub className="text-gray-800 text-xl" />
              <div>
                <p className="font-semibold">GitHub:</p>
                <a href="https://github.com/sharmin133" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  github.com/sharmin133
                </a>
              </div>
            </div>

            <div className="border-2 border-gray-400 p-4 rounded-xl flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="border-2 border-gray-400 p-4 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold rounded-md py-3 hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <p className="mt-6 text-center text-green-600 font-semibold">
              Thank you for reaching out! I will get back to you soon.
            </p>
          )}
          {error && (
            <p className="mt-6 text-center text-red-600 font-semibold">{error}</p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
