"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-8 py-16 overflow-hidden">
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <Image
            src="/images/advitya.png"
            alt="About Event"
            width={400}
            height={400}
            className="relative z-10 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            About the Event
          </span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400"></div>
        </h2>
        <p className="text-lg opacity-90 leading-relaxed mb-8 text-orange-100">
          Experience the ultimate challenge at Google Olympic VIT Bhopal. Compete, innovate, and showcase your skills in
          this thrilling competition!
        </p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  )
}
