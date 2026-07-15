"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Changelog", href: "#experience" },
  { label: "Awards", href: "#certifications" },
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
          ? "bg-surface/75 backdrop-blur-md py-3 border-b border-line shadow-card"
          : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-extrabold text-lg text-ink tracking-tight">
            jagesh
          </span>
          <span
            className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-cobalt-soft text-cobalt border border-cobalt/15"
            title="4+ years of experience"
          >
            v4+
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i + 0.3 }}
            >
              <a
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-cobalt transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA + theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-paper bg-ink rounded-full hover:bg-cobalt hover:text-white transition-colors duration-200"
          >
            <Download size={14} />
            Résumé
          </a>
        </div>

        {/* Mobile hamburger + theme */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-ink/70 hover:text-ink transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-surface/95 backdrop-blur border-t border-line"
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-ink transition-colors py-1 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-paper bg-ink rounded-full hover:bg-cobalt hover:text-white transition-colors"
          >
            <Download size={14} />
            Download résumé
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
