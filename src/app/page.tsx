import BuildRail from "@/components/BuildRail";
import MotionProvider from "@/components/MotionProvider";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      {/* Grain is the only ambient treatment — the page's single glow lives in the hero */}
      <main className="grain relative bg-void text-chalk min-h-screen">
        <BuildRail />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </MotionProvider>
  );
}
