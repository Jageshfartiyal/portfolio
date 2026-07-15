import Navbar from "@/components/Navbar";
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
      <main className="relative bg-paper text-ink min-h-screen overflow-hidden">
        {/* Engineering-paper grid + aurora washes */}
        <div className="fixed inset-0 bg-grid pointer-events-none" />
        <div className="fixed -top-40 right-[-10%] w-[560px] h-[560px] bg-cobalt/10 dark:bg-cobalt/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[480px] h-[480px] bg-coral/10 dark:bg-coral/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="fixed top-1/3 left-1/3 w-[420px] h-[420px] bg-violet/10 dark:bg-violet/15 rounded-full blur-[140px] pointer-events-none" />

        <Navbar />
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
