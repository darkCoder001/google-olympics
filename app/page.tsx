import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { CarouselCard } from "@/components/Games/Carousel";
import { Landing } from "@/components/Hero/Landing";
import { Leaderboard } from "@/components/Leaderboard/Leaderboard";
import Navbar from "@/components/Navbar/Navbar";
import { Roadmap } from "@/components/Roadmap/roadmap";
import { roadmapCards } from "@/data/roadmap";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <Landing />
      <About />
      {/* <Roadmap cards={roadmapCards} /> */}
      {/* <CarouselCard /> */}
      {/* stupid fix, will cleanup after classes end */}
      {/* <div className="hidden lg:block mt-32 md:mt-24"></div> */}
      {/* <Leaderboard /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
