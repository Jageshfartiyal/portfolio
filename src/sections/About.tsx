"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Package, Zap } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const stats = [
  { icon: Briefcase, value: 4, suffix: "+", label: "Years Experience", tint: "text-cobalt", tintBg: "bg-cobalt-soft" },
  { icon: Users, value: 10500, suffix: "+", label: "Daily Active Users Served", tint: "text-coral-deep", tintBg: "bg-coral-soft" },
  { icon: Package, value: 45, suffix: "%", label: "Desktop Bundle Reduction", tint: "text-mint-deep", tintBg: "bg-mint-soft" },
];

const orbitChips = [
  { text: "React", tint: "text-cobalt", pos: "-left-5 top-4", z: 56, delay: "0s" },
  { text: "Electron", tint: "text-coral-deep", pos: "-right-9 top-16", z: 48, delay: "1.2s" },
  { text: "Node.js", tint: "text-mint-deep", pos: "-left-3 bottom-3", z: 52, delay: "0.6s" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function AvatarFigure() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full drop-shadow-xl"
      role="img"
      aria-label="Stylized avatar of Jagesh wearing a holographic visor"
    >
      <defs>
        <linearGradient id="av-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6478FF" />
          <stop offset="55%" stopColor="#9B78FF" />
          <stop offset="100%" stopColor="#FF7E5F" />
        </linearGradient>
        <linearGradient id="av-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A3558" />
          <stop offset="100%" stopColor="#141B30" />
        </linearGradient>
      </defs>
      {/* shoulders / hoodie */}
      <path
        d="M38 196 C38 152 66 132 100 132 C134 132 162 152 162 196 Z"
        fill="url(#av-hoodie)"
      />
      <path
        d="M62 160 C70 144 130 144 138 160"
        stroke="#3D4A75"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* neck */}
      <rect x="86" y="112" width="28" height="26" rx="10" fill="#D9A16E" />
      {/* head */}
      <rect x="58" y="38" width="84" height="86" rx="36" fill="#E8B583" />
      {/* hair */}
      <path
        d="M58 76 C54 42 78 28 100 28 C122 28 146 42 142 76 C138 56 122 46 100 46 C78 46 62 56 58 76 Z"
        fill="#1B2135"
      />
      {/* headphones */}
      <path
        d="M52 70 C52 40 148 40 148 70"
        stroke="#0B1120"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="54" cy="82" r="10" fill="#0B1120" />
      <circle cx="146" cy="82" r="10" fill="#0B1120" />
      {/* holo visor */}
      <rect
        x="62"
        y="66"
        width="76"
        height="28"
        rx="14"
        fill="url(#av-visor)"
        opacity="0.92"
      />
      <path
        d="M70 74 L92 74"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* smile */}
      <path
        d="M88 106 Q100 114 112 106"
        stroke="#B97C42"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-pad relative max-w-7xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-16"
      >
        <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
          About
        </span>
        <div className="flex-1 h-px bg-line max-w-xs" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — 3D holo avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <TiltCard max={12} className="card shadow-card p-8 w-80">
            <div
              className="relative flex flex-col items-center gap-5"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Stage */}
              <div
                className="relative w-56 h-56 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow */}
                <div className="absolute inset-6 rounded-full bg-cobalt/15 dark:bg-cobalt/25 blur-2xl" />

                {/* Orbit rings */}
                <div
                  className="absolute inset-2"
                  style={{ transform: "rotateX(62deg)" }}
                >
                  <div className="w-full h-full rounded-full border-2 border-dashed border-cobalt/30 animate-spin-slow" />
                </div>
                <div
                  className="absolute -inset-2"
                  style={{ transform: "rotateX(66deg)" }}
                >
                  <div className="w-full h-full rounded-full border border-coral/30 animate-spin-slower" />
                </div>

                {/* Avatar */}
                <div
                  style={{ transform: "translateZ(36px)" }}
                  className="relative w-44 h-44"
                >
                  <AvatarFigure />
                </div>

                {/* Floating tech chips */}
                {orbitChips.map((chip) => (
                  <div
                    key={chip.text}
                    style={{ transform: `translateZ(${chip.z}px)` }}
                    className={`absolute ${chip.pos}`}
                  >
                    <span
                      style={{ animationDelay: chip.delay }}
                      className={`animate-float inline-block text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-surface/80 backdrop-blur border border-line shadow-card ${chip.tint}`}
                    >
                      {chip.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Identity */}
              <div
                style={{ transform: "translateZ(24px)" }}
                className="text-center"
              >
                <p className="font-display font-bold text-ink">
                  Jagesh Singh Fartiyal
                </p>
                <p className="text-xs font-mono text-muted mt-1 mb-3">
                  Software Engineer · Uttarakhand, IN
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-mint-soft text-mint-deep border border-mint/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-6 leading-tight">
            Building the web,{" "}
            <span className="text-gradient">one release</span>
            <br />
            at a time.
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            I&apos;m Jagesh, a Full Stack Software Engineer with 4+ years of
            experience shipping enterprise SaaS and cross-platform desktop
            applications —{" "}
            <span className="text-ink font-semibold">React &amp; TypeScript</span>{" "}
            on the frontend,{" "}
            <span className="text-ink font-semibold">Node.js &amp; NestJS</span>{" "}
            on the backend, and{" "}
            <span className="text-ink font-semibold">Electron</span> on the
            desktop.
          </p>

          <p className="text-muted leading-relaxed mb-8">
            At{" "}
            <span className="text-cobalt font-semibold">
              Aapna Infotheek Pvt. Ltd.
            </span>
            , I own the Electron desktop app for an employee monitoring
            platform across Windows, macOS, and Linux — packaging, code
            signing, auto-updates, and production releases — and led the
            frontend modernization that cut page loads from 5+ seconds to
            under 1 second for 10,500+ daily users.
          </p>

          {/* Currently building tag */}
          <motion.div
            whileHover={{ y: -2 }}
            className="card shadow-card p-4 mb-8 flex items-start gap-3"
          >
            <span className="w-9 h-9 rounded-lg bg-coral-soft flex items-center justify-center shrink-0">
              <Zap size={16} className="text-coral-deep" />
            </span>
            <div>
              <p className="text-xs text-muted font-mono mb-1">
                Currently building:
              </p>
              <p className="text-sm text-ink/90">
                <span className="font-semibold">Mera Monitor</span> &{" "}
                <span className="font-semibold">ITAM</span> — enterprise
                monitoring &amp; asset management platforms
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="card shadow-card p-4 text-center hover:shadow-lift transition-shadow"
              >
                <span className={`w-8 h-8 rounded-lg ${stat.tintBg} inline-flex items-center justify-center mb-2`}>
                  <stat.icon size={15} className={stat.tint} />
                </span>
                <div className="font-display text-2xl font-extrabold text-ink">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
