"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Jersey_10, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { roadmapCheckpoints } from "@/data/roadmap";

const jersey10 = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Google brand colors
const googleColors = {
  blue: "#4285F4",
  red: "#EA4335",
  yellow: "#FBBC05",
  green: "#34A853",
};

interface RoadmapCard {
  title: string;
  src: string;
  content: string;
}

interface RoadmapCheckpoint {
  checkpoint: string;
  cards: RoadmapCard[];
}

export const Card = React.memo(
  ({
    card,
    cardIndex,
    checkpointIndex,
    hoveredCard,
    setHoveredCard,
  }: {
    card: RoadmapCard;
    cardIndex: number;
    checkpointIndex: number;
    hoveredCard: { checkpoint: number; card: number } | null;
    setHoveredCard: React.Dispatch<
      React.SetStateAction<{ checkpoint: number; card: number } | null>
    >;
  }) => {
    const isHovered =
      hoveredCard !== null &&
      hoveredCard.checkpoint === checkpointIndex &&
      hoveredCard.card === cardIndex;

    return (
      <div
        onMouseEnter={() =>
          setHoveredCard({ checkpoint: checkpointIndex, card: cardIndex })
        }
        onMouseLeave={() => setHoveredCard(null)}
        className={cn(
          "rounded-xl relative bg-gray-200 dark:bg-neutral-800 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out shadow-md",
          hoveredCard !== null && !isHovered && "scale-[0.96] opacity-80"
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
            `absolute inset-0 flex items-center justify-center px-4 py-8 text-white text-xl md:text-2xl font-bold tracking-wide text-center`,
            isHovered
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-100",
            `transition-all duration-300 ease-out ${poppins.className}`
          )}
        >
          {card.title}
        </div>
        <div
          className={cn(
            "absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 px-4",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <p
            className={cn("text-white text-lg text-center", poppins.className)}
          >
            {card.content}
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function Roadmap() {
  const [hoveredCard, setHoveredCard] = useState<{
    checkpoint: number;
    card: number;
  } | null>(null);

  // Function to get Google color based on checkpoint index
  const getGoogleColor = (index: number) => {
    const colors = [
      googleColors.blue,
      googleColors.red,
      googleColors.yellow,
      googleColors.green,
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="relative bg-black min-h-screen">
      {/* Full Height Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-2] bg-black brightness-100"></div>

      {/* Roadmap Title */}
      <div className="flex flex-col items-center py-12">
        <h2 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 px-5">
          <span className={jersey10.className}>The Roadmap</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-700 mt-3"></div>
      </div>

      {/* Checkpoints */}
      <div className="relative z-10 p-4 px-10 max-w-full md:px-40 w-full">
        {roadmapCheckpoints.map((checkpoint, checkpointIndex) => {
          // Determine the grid layout based on the number of cards
          const getGridClass = (cardCount: number) => {
            switch (cardCount) {
              case 1:
                return "grid grid-cols-1 w-full max-w-3xl mx-auto";
              case 2:
                return "grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-12 lg:gap-20";
              default:
                return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:gap-12 lg:gap-16";
            }
          };

          // Get the appropriate Google color for this checkpoint
          const checkpointColor = getGoogleColor(checkpointIndex);

          return (
            <div key={checkpointIndex} className="mb-24">
              {/* Checkpoint Title with Jersey_10 font */}
              <h3
                className={cn(
                  "md:text-7xl text-5xl font-extrabold text-center mb-6",
                  jersey10.className
                )}
                style={{ color: checkpointColor }}
              >
                {checkpoint.checkpoint}
              </h3>
              <div className="flex justify-center mb-8">
                <div
                  className="w-16 h-1"
                  style={{ backgroundColor: checkpointColor }}
                ></div>
              </div>

              {/* Cards with dynamic grid based on card count */}
              <div className={getGridClass(checkpoint.cards.length)}>
                {checkpoint.cards.map((card, cardIndex) => {
                  // Type assertion to ensure card has the correct structure
                  const typedCard: RoadmapCard = {
                    title: card.title,
                    src: card.src || "", // Provide a default empty string if src is undefined
                    content: card.content,
                  };

                  return (
                    <Card
                      key={typedCard.title}
                      card={typedCard}
                      cardIndex={cardIndex}
                      checkpointIndex={checkpointIndex}
                      hoveredCard={hoveredCard}
                      setHoveredCard={setHoveredCard}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
