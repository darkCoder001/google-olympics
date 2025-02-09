<<<<<<< HEAD
// import Hero from "@/components/Hero/Hero";
// import { About } from "@/components/About/About";
import { Roadmap } from "@/components/Roadmap/roadmap";
import { roadmapCards } from "@/data/roadmap";


=======
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
>>>>>>> b3d8543864ffe44e6a3117c0a256e14167d1d416

export default function Home() {
<<<<<<< HEAD
  return (
    <div className="h-screen">
      {/* <Hero /> */}
      {/* <About /> */}
      <Roadmap cards={roadmapCards} />
    </div>
  );
=======
	return (
		<div className="h-screen w-screen overflow-x-hidden">
			<Landing />
			<About />
			{/*<Hero />
	  		<About />
      		<Roadmap cards={roadmapCards} />
			<Leaderboard /> */}
		</div>
	);
>>>>>>> b3d8543864ffe44e6a3117c0a256e14167d1d416
}
