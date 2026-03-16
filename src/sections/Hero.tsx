"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Download, Code2, Braces } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

const floatingItems = [
  { text: "const app = express()", x: "8%", y: "20%", delay: 0 },
  { text: "useState([])", x: "78%", y: "15%", delay: 0.5 },
  { text: "<Component />", x: "85%", y: "60%", delay: 1 },
  { text: "npm run dev", x: "5%", y: "70%", delay: 1.5 },
  { text: "async/await", x: "65%", y: "78%", delay: 0.8 },
  { text: "MongoDB.find()", x: "20%", y: "82%", delay: 0.3 },
  { text: "{ ...spread }", x: "45%", y: "10%", delay: 1.2 },
];

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <span className="text-neon-cyan font-semibold">
      {text}
      <span className="typewriter-cursor" />
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating code snippets */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block text-xs font-mono text-neon-cyan/20 select-none pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.4, 0.2, 0.4, 0],
            y: [20, 0, -10, 0, 20],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[100px]" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-neon-cyan/20 text-xs font-mono text-neon-cyan/70 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name with glitch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4"
        >
          <h1
            className="glitch-text text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none"
            data-text="JAGESH FARTIYAL"
          >
            <span className="text-white">JAGESH </span>
            <span className="gradient-text">FARTIYAL</span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-white/70 mb-6 h-10"
        >
          <TypewriterText />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build{" "}
          <span className="text-neon-cyan font-semibold">fast</span>,{" "}
          <span className="text-neon-pink font-semibold">scalable</span> web apps
          that look great and work even better.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink text-[#07070F] font-bold text-sm tracking-wider hover:shadow-neon-cyan transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Code2 size={16} />
            View My Work
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full glass-card border border-white/10 text-white/80 font-semibold text-sm tracking-wider hover:border-neon-cyan/40 hover:text-neon-cyan hover:bg-neon-cyan/5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-neon-cyan transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <ArrowDown size={14} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-6 hidden lg:block">
        <Braces size={20} className="text-neon-purple/30" />
      </div>
      <div className="absolute top-24 right-6 hidden lg:block">
        <Code2 size={20} className="text-neon-cyan/30" />
      </div>
    </section>
  );
}
