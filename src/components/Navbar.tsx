"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card py-3 border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-bold tracking-widest"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-white">J</span>
          <span className="text-neon-cyan">F</span>
          <span className="text-white">_</span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={link.href}
                className="text-sm text-white/60 hover:text-neon-cyan transition-colors duration-200 tracking-wider font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="mailto:jageshfartiyal9720@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-neon-cyan border border-neon-cyan/40 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-200 glow-cyan"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-neon-cyan transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-card border-t border-white/5"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-neon-cyan transition-colors py-1 tracking-wider text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:jageshfartiyal9720@gmail.com"
            className="mt-2 text-center px-5 py-2 text-sm font-semibold text-neon-cyan border border-neon-cyan/40 rounded-full hover:bg-neon-cyan/10 transition-all"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
