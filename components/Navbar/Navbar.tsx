"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Info, Home, Gamepad2, Trophy } from "lucide-react";

import { FloatingDock } from "../ui/floating-dock";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    {
      title: "About",
      icon: <Info className="w-full h-full" />,
      href: "#about",
    },
    {
      title: "Roadmap",
      icon: <Home className="w-full h-full" />,
      href: "#roadmap",
    },
    {
      title: "Rules",
      icon: <Gamepad2 className="w-full h-full" />,
      href: "/rules",
    },
    {
      title: "Leaderboard",
      icon: <Trophy className="w-full h-full" />,
      href: "/leaderboard",
    },
  ];

  return (
    <>
      <nav
        className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 px-7 ${
          isScrolled ? "bg-black bg-opacity-50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image
                  src={"/images/gdgc-logo.png"}
                  alt=""
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div
                className={`ml-10 flex items-baseline space-x-4 ${poppins.className}`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        scrollTo(item.href.slice(1));
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <FloatingDock
        items={navItems}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      />
    </>
  );
};

export default Navbar;
