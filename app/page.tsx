import { About } from "@/components/About/About";
import { Landing } from "@/components/Hero/Landing";
import { Leaderboard } from "@/components/Leaderboard/Leaderboard";
import { Roadmap } from "@/components/Roadmap/roadmap";
import { roadmapCards } from "@/data/roadmap";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Landing />
			<About />
			<Roadmap cards={roadmapCards} />
			{/* <Leaderboard /> */}
		</div>
	);
}
