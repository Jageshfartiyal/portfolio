"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Clock, CheckCircle, Circle } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "ITAM Application Redesign",
    shortName: "ITAM",
    description:
      "Complete UI/UX redesign of an IT Asset Management application. Modernizing the interface for better usability and tracking of enterprise assets.",
    period: "Feb 2025 - Present",
    tech: ["React"],
    status: "In Progress",
    color: "neon-cyan",
    borderColor: "border-neon-cyan/20",
    glowColor: "glow-cyan",
    textColor: "text-neon-cyan",
    bgAccent: "bg-neon-cyan/5",
    emoji: "🖥️",
    size: "lg", // takes more grid space
  },
  {
    id: 2,
    name: "Mera Monitor",
    shortName: "MONITOR",
    description:
      "Employee monitoring tool for productivity & compliance. Real-time tracking with analytics dashboard and reporting.",
    period: "Dec 2023 - Present",
    tech: ["React", "TypeScript", "NestJS"],
    status: "In Progress",
    color: "neon-pink",
    borderColor: "border-neon-pink/20",
    glowColor: "glow-pink",
    textColor: "text-neon-pink",
    bgAccent: "bg-neon-pink/5",
    emoji: "👁️",
    size: "lg",
  },
  {
    id: 3,
    name: "NanoConnect",
    shortName: "NANO",
    description:
      "Scalable iPaaS solution for enterprise integrations. Connects multiple platforms via a unified API gateway.",
    period: "Sept - Dec 2023",
    tech: ["Node.js"],
    status: "Completed",
    color: "neon-purple",
    borderColor: "border-neon-purple/20",
    glowColor: "glow-purple",
    textColor: "text-neon-purple",
    bgAccent: "bg-neon-purple/5",
    emoji: "🔗",
    size: "sm",
  },
  {
    id: 4,
    name: "Backup App",
    shortName: "BACKUP",
    description:
      "HubSpot data backup system with Stripe payments integration, data restore & download functionality.",
    period: "Mar - Sept 2023",
    tech: ["Node.js", "MongoDB", "Digital Ocean"],
    status: "Completed",
    color: "neon-green",
    borderColor: "border-neon-green/20",
    glowColor: "",
    textColor: "text-neon-green",
    bgAccent: "bg-neon-green/5",
    emoji: "💾",
    size: "sm",
  },
];

function StatusBadge({ status, textColor }: { status: string; textColor: string }) {
  const isActive = status === "In Progress";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full ${
        isActive ? "bg-neon-green/10 text-neon-green border border-neon-green/20" : "bg-white/5 text-white/50 border border-white/10"
      }`}
    >
      {isActive ? (
        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
      ) : (
        <CheckCircle size={10} className="opacity-60" />
      )}
      {status}
    </span>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
            03. Projects
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
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md">
            Real-world applications built with care, performance, and clean architecture.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto">
          {/* Large cards */}
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`glass-card rounded-2xl p-7 border ${project.borderColor} group hover:${project.glowColor} transition-all duration-300 xl:col-span-1 relative overflow-hidden`}
              whileHover={{ y: -4 }}
            >
              {/* Background accent number */}
              <div className={`absolute top-4 right-4 text-7xl font-black ${project.textColor} opacity-5 select-none pointer-events-none font-mono`}>
                {project.shortName}
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <StatusBadge status={project.status} textColor={project.textColor} />
                </div>

                <h3 className={`text-xl font-bold text-white mb-2 group-hover:${project.textColor} transition-colors`}>
                  {project.name}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-white/30 text-xs font-mono mb-5">
                  <Clock size={12} />
                  {project.period}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md ${project.bgAccent} ${project.textColor} border ${project.borderColor}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Small cards in a stacked column */}
          <div className="flex flex-col gap-5 xl:col-span-1 md:col-span-2 xl:row-span-1">
            {projects.slice(2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                className={`glass-card rounded-2xl p-6 border ${project.borderColor} group hover:${project.glowColor} transition-all duration-300 relative overflow-hidden flex-1`}
                whileHover={{ y: -3 }}
              >
                <div className={`absolute top-3 right-3 text-4xl font-black ${project.textColor} opacity-5 select-none pointer-events-none font-mono`}>
                  {project.shortName}
                </div>

                <div className="relative flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{project.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className={`text-base font-bold text-white group-hover:${project.textColor} transition-colors`}>
                        {project.name}
                      </h3>
                      <StatusBadge status={project.status} textColor={project.textColor} />
                    </div>

                    <p className="text-white/45 text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`text-xs font-mono px-2 py-0.5 rounded ${project.bgAccent} ${project.textColor}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-white/25 text-xs font-mono shrink-0 ml-2">
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
