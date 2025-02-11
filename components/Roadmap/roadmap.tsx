"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Jersey_10 } from "next/font/google";
import { cn } from "@/lib/utils";
import { roadmapCheckpoints } from "@/data/roadmap";

const jersey10 = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

type TroadmapCard = {
  title: string;
  src: string;
  content: string;
};

type TroadmapCheckpoint = {
  checkpoint: string;
  cards: TroadmapCard[];
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: TroadmapCard;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-gray-200 dark:bg-neutral-800 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out shadow-md",
        hovered !== null && hovered !== index && "scale-[0.96] opacity-80"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 brightness-75"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center px-4 py-8 text-white text-xl md:text-2xl font-bold tracking-wide text-center",
          hovered === index ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
          "transition-all duration-300 ease-out"
        )}
      >
        {card.title}
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 px-4",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <p className="text-white text-lg text-center">{card.content}</p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function Roadmap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
	<div className="relative bg-black min-h-screen">
	  {/* Full Height Background Image */}
	<div className="absolute inset-0 w-full h-full z-[-2] bg-black brightness-100">
		
	</div>

      {/* Roadmap Title */}
      <div className="flex flex-col items-center py-12">
        <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 px-5">
          <span className={jersey10.className}>The Roadmap</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-700 mt-3"></div>
      </div>

      {/* Checkpoints */}
      <div className="relative z-10 p-4 max-w-6xl mx-auto md:px-8 w-full">
        {roadmapCheckpoints.map((checkpoint: TroadmapCheckpoint, checkpointIndex) => (
          <div key={checkpointIndex} className="mb-16">
            {/* Checkpoint Title */}
            <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              {checkpoint.checkpoint}
            </h3>
            <div className="flex justify-center my-2">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-700"></div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {checkpoint.cards.map((card, index) => (
                <Card
                  key={card.title}
                  card={card}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
