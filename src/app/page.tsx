"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {loaded && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#07070F] min-h-screen overflow-hidden"
        >
          {/* Global background effects */}
          <div className="fixed inset-0 bg-grid pointer-events-none" />
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="fixed top-1/2 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
