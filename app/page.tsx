import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Audiences from "@/components/Audiences";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Agentic from "@/components/Agentic";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-[1]">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Why />
      <Audiences />
      <Process />
      {/* <Work /> */}
      <Agentic />
      <FinalCta />
      <Footer />
    </div>
  );
}
