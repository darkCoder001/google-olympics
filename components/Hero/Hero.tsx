"use client";
import { div } from "framer-motion/client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="min-h-screen items-center">
      {/* Laptop View */}
      <div
        className="hidden min-h-screen md:flex flex-col items-center justify-between text-center gap-8 p-4"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Fade direction="down" triggerOnce delay={100}>
          <div className="mb-8">
            <svg width="700" height="300" viewBox="0 0 600 150">
              <defs>
                <linearGradient
                  id="googleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#4285f4", stopOpacity: 1 }}
                  />
                  <stop
                    offset="25%"
                    style={{ stopColor: "#ea4335", stopOpacity: 1 }}
                  />
                  <stop
                    offset="50%"
                    style={{ stopColor: "#fbbc05", stopOpacity: 1 }}
                  />
                  <stop
                    offset="75%"
                    style={{ stopColor: "#34a853", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#4285f4", stopOpacity: 1 }}
                  />
                </linearGradient>
                <path id="curve" d="M50, 150 Q300,12 550,150" fill="none" />
              </defs>
              <text className="text-6xl font-bold">
                <textPath
                  href="#curve"
                  startOffset="50%"
                  textAnchor="middle"
                  fill="url(#googleGradient)"
                  fontSize="65"
                  fontWeight="bold"
                >
                  Google Olympics
                </textPath>
              </text>
            </svg>
          </div>
        </Fade>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <Fade direction="up" triggerOnce delay={200}>
            <a
              href="https://forms.gle/AVi47sbTLNg5yHu69 "
              target="_blank"
              rel="noopener noreferrer"
              className="block w-72 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg tracking-wide shadow-md transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transform active:scale-95 border-2 border-transparent relative overflow-hidden"
            >
              VIT Students
              <span className="absolute inset-0 border-2 border-blue-400 animate-pulse"></span>
            </a>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <a
              href="https://forms.gle/WHWZ7bD8kigezw1i9 "
              target="_blank"
              rel="noopener noreferrer"
              className="block w-72 bg-gradient-to-r from-blue-900 to-blue-950 text-white py-4 px-8 rounded-lg font-semibold text-lg tracking-wide shadow-md transition-all duration-300 hover:from-blue-950 hover:to-black hover:shadow-xl hover:-translate-y-1 hover:scale-105 transform active:scale-95 border-2 border-transparent relative overflow-hidden"
            >
              Non-VIT Students
              <span className="absolute inset-0 border-2 border-blue-400 animate-pulse"></span>
            </a>
          </Fade>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-600 to-blue-black">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl transform rotate-12 animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-full blur-3xl transform -rotate-12 animate-pulse" />
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 text-transparent bg-clip-text">
              Google Olympics
            </span>
          </h1>

          {/* Subheading with enhanced typography */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Join us for an electrifying event filled with challenges and
            innovation!
          </p>

          {/* Responsive button container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <a
              href="https://forms.gle/AVi47sbTLNg5yHu69"
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-1 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
            >
              Register as VIT Student
            </a>
            <a
              href="https://forms.gle/WHWZ7bD8kigezw1i9"
              className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl shadow-lg hover:from-indigo-700 hover:to-indigo-800 transform hover:-translate-y-1 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none"
            >
              Register as Non-VIT Student
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
