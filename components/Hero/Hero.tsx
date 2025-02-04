"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between text-center gap-8 p-4"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Fade direction="left">
        <div className="mb-8">
          <svg width="700" height="300" viewBox="0 0 600 150">
            <defs>
              <linearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#4285f4", stopOpacity: 1 }} />
                <stop offset="25%" style={{ stopColor: "#ea4335", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#fbbc05", stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: "#34a853", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#4285f4", stopOpacity: 1 }} />
              </linearGradient>
              <path id="curve" d="M50, 150 Q300,12 550,150" fill="none" />
            </defs>
            <text className="text-6xl font-bold">
              <textPath href="#curve" startOffset="50%" textAnchor="middle" fill="url(#googleGradient)" fontSize="65" fontWeight="bold">
                Google Olympics
              </textPath>
            </text>
          </svg>
         
        </div>
      </Fade>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
        <Fade direction="left">
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
        <Fade direction="left" delay={500}>
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
  );
};

export default Hero;
