import { About } from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="h-screen bg-black">
       <Hero/>
       <About/>
    </div>
  );
}
