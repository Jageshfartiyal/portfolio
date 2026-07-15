"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const terminalLines = [
  "$ npm run release -- --platform=all",
  "✓ bundle: 350 MB → 191 MB",
  "✓ code signed · integrity verified",
  "✓ shipped to windows · macos · linux",
  "$ monitor --daily-active-users",
  "→ 10,500+ and counting",
];

const metrics = ["5 s → <1 s page load", "−45% bundle size", "40–60% less CPU"];

function TerminalLine({ text, cursor }: { text: string; cursor?: boolean }) {
  let content: React.ReactNode;
  if (text.startsWith("$")) {
    content = (
      <>
        <span className="text-mint">$</span>
        <span className="text-[#E6EAF3]">{text.slice(1)}</span>
      </>
    );
  } else if (text.startsWith("✓")) {
    content = (
      <>
        <span className="text-mint">✓</span>
        <span className="text-[#B9C4DE]">{text.slice(1)}</span>
      </>
    );
  } else if (text.startsWith("→")) {
    content = (
      <>
        <span className="text-coral">→</span>
        <span className="text-[#E6EAF3] font-medium">{text.slice(1)}</span>
      </>
    );
  } else {
    content = <span className="text-[#B9C4DE]">{text}</span>;
  }
  return (
    <div className="whitespace-pre-wrap leading-6">
      {content}
      {cursor && <span className="typewriter-cursor" />}
    </div>
  );
}

function ReleaseTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (done) {
      timeout = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
        setDone(false);
      }, 6000);
      return () => clearTimeout(timeout);
    }
    const current = terminalLines[lineIdx];
    if (charIdx < current.length) {
      timeout = setTimeout(
        () => setCharIdx((c) => c + 1),
        current.startsWith("$") ? 45 : 16
      );
    } else if (lineIdx < terminalLines.length - 1) {
      timeout = setTimeout(
        () => {
          setLineIdx((i) => i + 1);
          setCharIdx(0);
        },
        current.startsWith("$") ? 550 : 250
      );
    } else {
      timeout = setTimeout(() => setDone(true), 500);
    }
    return () => clearTimeout(timeout);
  }, [lineIdx, charIdx, done]);

  return (
    <div className="p-5 font-mono text-[13px] min-h-[176px]">
      {terminalLines.slice(0, lineIdx).map((line) => (
        <TerminalLine key={line} text={line} />
      ))}
      <TerminalLine text={terminalLines[lineIdx].slice(0, charIdx)} cursor />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* Left — name & thesis */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-soft border border-mint/20 text-xs font-mono text-mint-deep mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-6xl xl:text-7xl text-ink mb-6"
          >
            Jagesh Singh
            <br />
            Fartiyal<span className="text-coral">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm text-cobalt tracking-wide mb-5"
          >
            FULL STACK SOFTWARE ENGINEER — REACT · NODE.JS · ELECTRON
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-muted text-lg leading-relaxed max-w-xl mb-7"
          >
            4+ years building enterprise SaaS and cross-platform desktop apps
            at Aapna Infotheek — from sub-second page loads to signed Electron
            releases used by{" "}
            <span className="text-ink font-semibold">
              10,500+ people every day
            </span>
            .
          </motion.p>

          {/* Metric chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-wrap gap-2.5 mb-10"
          >
            {metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-xs px-3 py-1.5 rounded-full bg-surface border border-line text-ink/80"
              >
                {m}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cobalt text-white font-semibold text-sm hover:bg-cobalt-dark dark:shadow-glow transition-colors duration-200"
            >
              View my work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface border border-line text-ink font-semibold text-sm hover:border-ink transition-colors duration-200"
            >
              <Download size={16} />
              Download résumé
            </a>
          </motion.div>
        </div>

        {/* Right — release terminal (3D tilt) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TiltCard max={9} className="rounded-2xl">
            <div className="window shadow-window dark:shadow-glow">
              <div className="window-bar flex items-center gap-2 px-4 py-3">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs font-mono text-white/40">
                  jagesh@aapna — ~/release
                </span>
              </div>
              <ReleaseTerminal />
            </div>

            {/* Sticker — pops out of the tilt plane */}
            <div
              style={{ transform: "translateZ(40px)" }}
              className="absolute -bottom-5 -left-3"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
                className="sticker px-4 py-2 font-mono text-xs font-bold text-ink"
              >
                shipping since 2021
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/60 hover:text-cobalt transition-colors"
      >
        <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
