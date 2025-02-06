"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bangers } from "next/font/google";

import { cn } from "@/lib/utils";

// TODO: A BETTER FONT ?
const bangers = Bangers({ subsets: ['latin'], weight: "400" })

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: Card;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	}) => (
		<div
			// TODO: TOUCH SCREEN
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered(null)}
			className={cn(
				"rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
				hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
			)}
		>
			<Image
				src={card.src}
				alt={card.title}
				fill
				className="object-cover absolute inset-0"
			/>
			<div
				className={cn(
					"absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
					hovered === index ? "opacity-100" : "opacity-0"
				)}
			>
				<div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
					<span className="font-bold">
						{card.title}
					</span>
					<div className="mt-4 text-lg overflox-hidden text-ellipsis">
						{card.content}
					</div>
				</div>
			</div>
		</div>
	)
);

Card.displayName = "Card";

type Card = {
	title: string;
	src: string;
	content: string;
};

export function Roadmap({ cards }: { cards: Card[] }) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className="bg-gradient-to-tr from-[#9b825e]">
			{/* TODO: IF PROVIDED ADD A BACKGROUND OVERLAY IMAGE */}
			<h2 className="text-6xl font-extrabold mb-6 relative flex justify-center items-center mx-auto">
				<p className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-950 px-5 mt-5">
					<span className={bangers.className}>
						The Roadmap
					</span>
				</p>
				<div className="absolute -bottom-2  w-24 h-1 bg-gradient-to-r from-green-800 to-green-950"></div>
			</h2>

			<div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
				{cards.map((card, index) => (
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
	);
}
