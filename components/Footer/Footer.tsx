"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Jersey_10, Poppins } from "next/font/google";

const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Footer: React.FC = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={containerRef}
      className={`${poppins.className} relative w-full bg-black text-white overflow-hidden min-h-[330px]`}
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div
        ref={textRef}
        className={`absolute bottom-0 left-0 w-full text-[20vw] font-bold leading-none tracking-widest select-none ${jersey.className}`}
        style={{
          background: `radial-gradient(
              circle 200px at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.25),
              transparent 80%
            )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "#1a1a1a",
        }}
      >
        GDGC
      </div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div>
          <h3
            className="text-lg font-semibold mb-4 cursor-pointer"
            onClick={() => handleScrollTo("about")}
          >
            About
          </h3>
        </div>

        <div>
          <h3
            className="text-lg font-semibold mb-4 cursor-pointer"
            onClick={() => handleScrollTo("roadmap")}
          >
            Roadmap
          </h3>
        </div>

        <div>
          <h3
            className="text-lg font-semibold mb-4 cursor-pointer"
            onClick={() => router.push("/rules")}
          >
            Rules
          </h3>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">STAY CONNECTED</h3>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ y: -2 }}
              className="cursor-pointer"
              href="https://x.com/gdgcvitbhopal"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="cursor-pointer"
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="cursor-pointer"
              href="https://www.youtube.com/channel/UCVr5tPwyUH8rJd5yEhBd94w"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="cursor-pointer"
              href="https://www.instagram.com/gdgcvitbhopal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
