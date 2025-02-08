import { About } from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import { Landing } from "@/components/Hero/Landing";
import { Leaderboard } from "@/components/Leaderboard/Leaderboard";
import { FocusCards as Roadmap } from "@/components/ui/focus-cards";

const roadmapCards = [
	{
		title: "Level 1",
		src: "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif",
	},
	{
		title: "Level 2",
		src: "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif",
	},
	{
		title: "Level 3",
		src: "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif",
	},

	{
		title: "Level 4",
		src: "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif",
	},
	{
		title: "Level 5",
		src: "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif",
	},
];

export default function Home() {
	return (
		<div className="h-screen w-screen">
			<Landing />
			<About />
			{/*<Hero />
	  		<About />
      		<Roadmap cards={roadmapCards} />
			<Leaderboard /> */}
		</div>
	);
}
