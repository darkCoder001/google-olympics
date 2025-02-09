"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Jersey_10, Poppins } from "next/font/google";

const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // API Call (if needed)
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#66543b] text-white px-4 `}
    >
      <motion.div
        className="max-w-3xl w-full bg-slate-300 bg-opacity-20 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={`text-8xl font-bold text-center text-yellow-400 ${jersey.className}`}
        >
          Contact Us
        </h2>
        <p className={`text-center text-gray-300 mt-2 ${poppins.className}`}>
          Have questions? Reach out to us!
        </p>

        <div className={`mt-6 space-y-4 ${poppins.className}`}>
          <p>
            <strong>Email:</strong> contact@gdgvitbhopal.com
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Follow Us:</strong>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            <a href="#" className="text-blue-400 hover:underline">
              Discord
            </a>
          </div>
        </div>

        <form
          className={`mt-6 space-y-4 ${poppins.className}`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
          />
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
