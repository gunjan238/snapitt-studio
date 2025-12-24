import { useState } from "react";
import CameraIntro from "@/components/CameraIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {showIntro && <CameraIntro onComplete={() => setShowIntro(false)} />}
      
      <div
        className={`transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
