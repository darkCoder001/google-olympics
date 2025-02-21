"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Jersey_10, Poppins } from "next/font/google";

interface Star {
  id: number;
  left: string;
  top: string;
  animationDuration: string;
  size: number;
}

const jersey10 = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        size: Math.random() * 3 + 1,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            opacity: Math.random() * 0.5 + 0.25,
          }}
        />
      ))}
    </div>
  );
};

const About = () => {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden py-24">
      <StarBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center space-y-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 p-1 relative overflow-hidden"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.h1
            className={`text-8xl sm:text-9xl font-bold text-center mb-8 leading-tight pb-4 ${jersey10.className}`}
            style={{
              background:
                "linear-gradient(to right, #9333ea, #ec4899, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About
          </motion.h1>

          <motion.p
            className={`text-xl sm:text-2xl text-gray-300 mb-8 text-center leading-relaxed ${poppins.className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hosted by{" "}
            <span className="font-semibold text-white">
              Google Developer Group – VIT Bhopal
            </span>
            , this flagship event is the ultimate fusion of tech, strategy, and
            sportsmanship! Teams of four will represent different countries and
            battle through mind-bending challenges that test logic, technical
            skills, quick thinking, and teamwork.
          </motion.p>

          <motion.p
            className={`text-lg sm:text-xl text-gray-400 mb-8 text-center leading-relaxed ${poppins.className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            As the games unfold, expect chaos, plot twists, emotional
            rollercoasters, and betrayal levels straight out of a reality show.
            The gold isn’t just a medal—it’s your ticket to immortality in
            campus history.
          </motion.p>

          <motion.div
            className={`bg-gray-800 text-gray-200 rounded-xl p-6 text-center shadow-lg mb-8 ${poppins.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl sm:text-2xl font-semibold text-white">
              📅 Date:{" "}
              <span className="font-bold text-pink-400">
                21st February 2025
              </span>
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              📍 Venue:{" "}
              <span className="font-bold text-purple-400">
                ARCH-102, VIT Bhopal
              </span>
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              ⏰ Time:{" "}
              <span className="font-bold text-blue-400">10 AM - 3 PM</span>
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
