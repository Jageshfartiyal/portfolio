"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Code, Briefcase, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience", color: "text-neon-cyan" },
  { icon: Code, value: 10, suffix: "+", label: "Projects", color: "text-neon-pink" },
  { icon: Trophy, value: 1, suffix: "", label: "Hackathon Win 🏆", color: "text-neon-purple" },
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
      {count}
      {suffix}
    </span>
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
        <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
          01. About
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent max-w-xs" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan via-neon-pink to-neon-purple p-[2px] animate-pulse-neon">
              <div className="w-full h-full rounded-2xl bg-bg-2" />
            </div>

            {/* Photo placeholder */}
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden gradient-border">
              <div className="w-full h-full bg-gradient-to-br from-neon-cyan/10 via-bg-2 to-neon-pink/10 flex flex-col items-center justify-center gap-3">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-pink/30 border-2 border-neon-cyan/30 flex items-center justify-center">
                  <span className="text-4xl font-black text-white">JF</span>
                </div>
                <span className="text-white/40 text-xs font-mono">Jagesh Fartiyal</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass-card border border-neon-green/30 px-4 py-2 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-xs font-mono text-neon-green">Open to work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Building the web,{" "}
            <span className="gradient-text">one commit</span>
            <br />
            at a time.
          </h2>

          <p className="text-white/60 leading-relaxed mb-6">
            Hey! I&apos;m Jagesh, a Full Stack Developer from Uttarakhand, India.
            I specialize in the{" "}
            <span className="text-neon-cyan font-semibold">MERN stack</span> and
            love crafting end-to-end web experiences — from polished UIs to
            bulletproof backend APIs.
          </p>

          <p className="text-white/50 leading-relaxed mb-8">
            Currently consulting at{" "}
            <span className="text-neon-pink font-semibold">
              Aapna Infotheek Pvt. Ltd.
            </span>
            , where I&apos;m building enterprise-grade tools for productivity
            monitoring and IT asset management.
          </p>

          {/* Currently building tag */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card border border-neon-purple/20 rounded-xl p-4 mb-8 flex items-start gap-3"
          >
            <Zap size={18} className="text-neon-purple mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-white/40 font-mono mb-1">
                Currently building:
              </p>
              <p className="text-sm text-white/80">
                <span className="text-neon-cyan font-semibold">ITAM App</span>{" "}
                &{" "}
                <span className="text-neon-pink font-semibold">
                  Mera Monitor
                </span>{" "}
                — enterprise productivity tools
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
                className="glass-card border border-white/5 rounded-xl p-4 text-center hover:border-neon-cyan/20 transition-colors"
              >
                <stat.icon size={18} className={`${stat.color} mx-auto mb-2`} />
                <div className={`text-2xl font-black ${stat.color}`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
