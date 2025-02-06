// import Hero from "@/components/Hero/Hero";
// import { About } from "@/components/About/About";
import { Roadmap } from "@/components/Roadmap/roadmap";
import { roadmapCards } from "@/data/roadmap";




export default function Home() {
  return (
    <div className="h-screen">
      {/* <Hero /> */}
      {/* <About /> */}
      <Roadmap cards={roadmapCards} />
    </div>
  );
}
