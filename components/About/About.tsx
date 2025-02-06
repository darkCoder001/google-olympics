"use client"

import Image from "next/image"
import { motion, useAnimate } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const BorderBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative rounded-xl", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-beam"></div>
      <div className="relative bg-[#1a2e2a] rounded-xl p-8">{children}</div>
    </div>
  )
}

const TextGenerateEffect = ({ words }: { words: string }) => {
  const [scope, animate] = useAnimate()
  const mountRef = useRef(false)

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      animate(
        "span",
        { opacity: 1 },
        {
          duration: 2,
          delay: (i) => i * 0.2,
        },
      )
    }
  }, [animate, scope.current])

  const wordsArray = words.split(" ")

  return (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="opacity-0 inline-block mr-1">
          {word + " "}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function About() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#1a2e2a] text-white px-8 py-16 overflow-hidden">
      {/* Torn Paper Effect */}
      <div className="absolute top-0 left-0 w-full">
        <Image src="/images/torn1.svg" alt="Torn Paper Top" width={1920} height={100} className="w-full" />
      </div>
      
      
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
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
        <BorderBeam className="group">
          <h2 className="text-5xl font-extrabold mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">
              About the Event
            </span>
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-teal-400 to-emerald-300"></div>
          </h2>
          <div className="text-lg opacity-90 leading-relaxed mb-8 text-emerald-50">
            <TextGenerateEffect words="Experience the ultimate challenge at Google Olympic VIT Bhopal. Compete, innovate, and showcase your skills in this thrilling competition!" />
          </div>
          <motion.div className="group relative overflow-hidden rounded-xl p-0.5" whileHover={{ scale: 1.02 }}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-400 animate-beam"></div>
            <button className="relative flex items-center justify-center w-full px-8 py-4 bg-[#1a2e2a] rounded-xl text-white font-semibold transition-all group-hover:bg-[#243b36]">
              <span className="relative z-10">Learn More</span>
            </button>
          </motion.div>
        </BorderBeam>
      </motion.div>
    </div>
  )
}
