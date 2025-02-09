"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Jersey_10 } from "next/font/google";

import { cn } from "@/lib/utils";

const jersey10 = Jersey_10({
	weight: ["400"],
	subsets: ["latin"],
});

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
				className="object-cover absolute inset-0 brightness-50"
			/>
			<div
				className={cn(
					"absolute inset-0 flex items-center justify-center px-4 py-8",
					"bg-gradient-to-b from-neutral-50 to-neutral-200 text-xl md:text-2xl font-medium text-transparent bg-clip-text",
					hovered === index ? "transform translate-y-[70%] opacity-0" : "transform translate-y-0 opacity-100",
					"transition-all duration-300 ease-out"
				)}
			>
				<p className="font-bold">{card.title}</p>
			</div>
			<div
				className={cn(
					"absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
					hovered === index ? "opacity-100" : "opacity-0"
				)}
			>
				<div className="text-lg overflow-hidden text-ellipsis text-white px-4 py-8">
					{card.content}
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
		<div className="bg-gradient-to-tr from-[#66543b]">
			<div
				className="w-screen h-screen absolute top-0 left-0 z-[-2] brightness-80"
				style={{
					backgroundImage: "url(' /images/pixel-bg.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>

			<h2 className="text-7xl font-extrabold mb-6 relative flex justify-center items-center mx-auto">
				<p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-700 px-5 mt-5">
					<span className={jersey10.className}>
						The Roadmap
					</span>
				</p>
				<div className="absolute -bottom-2  w-24 h-1 bg-gradient-to-r from-orange-500 to-red-700"></div>
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
