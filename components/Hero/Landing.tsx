"use client";
import React, { useEffect } from "react";
import { Jersey_10, Poppins } from "next/font/google";
import { AttentionSeeker } from "react-awesome-reveal";
import Link from "next/link";
import confetti from "canvas-confetti";

const jersey10 = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Landing = () => {
  var end = Date.now() + 2 * 1000;
  var colors = ["#4285f4", "#ea4335", "#f9ab00", "#34a853"];
  useEffect(() => {
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 2 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 3 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);
  return (
    <div className="w-screen h-screen relative flex flex-col gap-6 items-center justify-center text-white px-2 pb-16">
      <div
        className="w-screen h-screen absolute top-0 left-0 z-[-2]"
        style={{
          backgroundImage: "url('/images/pixel-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-screen h-screen absolute top-0 left-0 bg-black/80 z-[-1]" />
      <div className="flex flex-col items-center justify-center mb-4 text-[#efefef]">
        <div className="w-14 h-14 bg-[url('/images/gdgc-logo.png')] bg-contain bg-no-repeat bg-center" />
        <div className={`text-xl text-center ${poppins.className}`}>
          Google Developer Group on Campus
          <br />
          VIT Bhopal
          <br />
          <p className="text-base mt-4">presents</p>
        </div>
      </div>
      <AttentionSeeker triggerOnce delay={3500} effect="flash">
        <div
          className={`text-[160px] leading-[70px] text-center text-balance shadow-xl flex flex-col items-center justify-center max-[520px]:text-[100px] max-[520px]:leading-[40px] ${jersey10.className}`}
        >
          <div className="flex items-center justify-center">
            <p className="text-[#4285f4]">G</p>
            <p className="text-[#ea4335]">o</p>
            <p className="text-[#f9ab00]">o</p>
            <p className="text-[#4285f4]">g</p>
            <p className="text-[#34a853]">l</p>
            <p className="text-[#ea4335]">e</p>
          </div>
          <br />
          <p>Olympics</p>
        </div>
      </AttentionSeeker>
      <p className={`text-xl text-center mt-6 ${poppins.className}`}>
        Get Ready for the Ultimate Showdown <br />
        Register Now!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        <div className="button-border">
          <div className="button-base">
            <Link href="https://forms.gle/AVi47sbTLNg5yHu69">
              <button
                className={`button text-3xl tracking-wide ${jersey10.className}`}
              >
                VIT Students
              </button>
            </Link>
          </div>
        </div>
        <div className="button-border">
          <div className="button-base">
            <Link href={"https://forms.gle/WHWZ7bD8kigezw1i9"}>
              <button
                className={`button text-3xl tracking-wide ${jersey10.className}`}
              >
                External Students
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
