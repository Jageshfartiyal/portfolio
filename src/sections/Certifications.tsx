"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, BookOpen, GraduationCap, Shield } from "lucide-react";

const certs = [
  {
    icon: Trophy,
    emoji: "🥈",
    title: "First Runner-Up — Company Hackathon",
    subtitle: "Aapna Infotheek Pvt. Ltd.",
    period: "2023",
    description:
      "Secured First Runner-Up position in the internal company hackathon, demonstrating rapid problem-solving and technical innovation.",
    color: "neon-cyan",
    borderColor: "border-neon-cyan/20",
    textColor: "text-neon-cyan",
    bgColor: "bg-neon-cyan/5",
    featured: true,
  },
  {
    icon: BookOpen,
    emoji: "📜",
    title: "Complete NodeJS Developer in 2023",
    subtitle: "GraphQL, MongoDB, + more",
    period: "2023",
    description:
      "Comprehensive certification covering advanced Node.js, GraphQL, MongoDB, REST APIs, and modern backend development patterns.",
    color: "neon-pink",
    borderColor: "border-neon-pink/20",
    textColor: "text-neon-pink",
    bgColor: "bg-neon-pink/5",
    featured: false,
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "B.Tech — Computer Science & Engineering",
    subtitle: "2018 - 2022",
    period: "2022",
    description:
      "Bachelor of Technology in Computer Science, building a strong foundation in algorithms, data structures, and software engineering.",
    color: "neon-purple",
    borderColor: "border-neon-purple/20",
    textColor: "text-neon-purple",
    bgColor: "bg-neon-purple/5",
    featured: false,
  },
  {
    icon: Shield,
    emoji: "🪖",
    title: "Aapna Commando Readiness Program",
    subtitle: "Dec 2021 - Mar 2022",
    period: "2022",
    description:
      "Intensive discipline and professional excellence program focused on resilience, teamwork, and leadership under pressure.",
    color: "neon-green",
    borderColor: "border-neon-green/20",
    textColor: "text-neon-green",
    bgColor: "bg-neon-green/5",
    featured: false,
  },
];

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
            05. Achievements
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Certs &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md">
            Milestones, recognition, and continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border ${cert.borderColor} transition-all duration-300 relative overflow-hidden group`}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Accent glow corner */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full ${cert.bgColor} opacity-30`}
              />

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center mb-4`}>
                  <span className="text-xl">{cert.emoji}</span>
                </div>

                {/* Featured badge */}
                {cert.featured && (
                  <span className="absolute top-0 right-0 text-xs font-mono px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                    ★ Featured
                  </span>
                )}

                <h3 className={`font-bold text-white text-sm leading-snug mb-1 group-hover:${cert.textColor} transition-colors`}>
                  {cert.title}
                </h3>
                <p className={`text-xs font-mono ${cert.textColor} mb-3 opacity-80`}>
                  {cert.subtitle}
                </p>
                <p className="text-white/40 text-xs leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${cert.borderColor}`} />
                  <span className="text-white/25 text-xs font-mono">{cert.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
