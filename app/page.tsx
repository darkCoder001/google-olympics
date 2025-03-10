import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import { Landing } from "@/components/Hero/Landing";
import Navbar from "@/components/Navbar/Navbar";
import { Roadmap } from "@/components/Roadmap/roadmap";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Landing />
      <div id="about">
        <About />
      </div>

      {/* Add id="roadmap" here */}
      <div id="roadmap">
        <Roadmap />
      </div>

      <Footer />
    </div>
  );
}
