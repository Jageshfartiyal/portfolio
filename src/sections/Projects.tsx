"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp } from "lucide-react";
import TiltCard from "@/components/TiltCard";

const projects = [
  {
    id: 1,
    name: "Mera Monitor",
    shortName: "MONITOR",
    description:
      "Enterprise employee monitoring platform — web plus cross-platform desktop — serving 10,500+ daily active users. Sole technical owner of the Electron app on Windows, macOS, and Linux: packaging, code signing, auto-updates, and production releases.",
    highlights: [
      "Initial page load cut from 5+ s to under 1 s",
      "CPU utilization reduced 40–60% under concurrent load",
      "Bundle 350 → 191 MB · installer 940 → 545 MB",
    ],
    tech: ["React", "Redux", "Electron.js", "Node.js", "AWS S3", "ESBuild"],
    status: "In Production",
    active: true,
    emoji: "🖥️",
  },
  {
    id: 2,
    name: "IT Asset Management (ITAM)",
    shortName: "ITAM",
    description:
      "Full-stack redesign of a legacy IT Asset Management platform. Led the backend migration from PHP to NestJS and shipped REST APIs alongside React modules for seller and buyer asset workflows.",
    highlights: [
      "Legacy PHP backend migrated to NestJS",
      "Seller & buyer workflows delivered end-to-end",
      "Webhook-driven data sync across enterprise systems",
    ],
    tech: ["React", "Node.js", "NestJS", "MongoDB", "REST APIs"],
    status: "In Production",
    active: true,
    emoji: "🗂️",
  },
  {
    id: 3,
    name: "NanoConnect — Enterprise iPaaS",
    shortName: "NANO",
    description:
      "Integration platform connecting business applications through REST APIs and webhook-based, event-driven communication — scoped and delivered in direct collaboration with enterprise clients.",
    tech: ["Node.js", "React", "REST APIs", "Webhooks"],
    status: "Delivered",
    active: false,
    emoji: "🔗",
  },
  {
    id: 4,
    name: "HubSpot Backup",
    shortName: "BACKUP",
    description:
      "Backup and restore for millions of HubSpot CRM records — scheduled backups, point-in-time recovery, and Stripe subscription billing with tiered plans and automated lifecycle management.",
    tech: ["Node.js", "HubSpot APIs", "Stripe"],
    status: "Delivered",
    active: false,
    emoji: "💾",
  },
];

function StatusBadge({ status, active }: { status: string; active: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full ${
        active
          ? "bg-mint-soft text-mint-deep border border-mint/20"
          : "bg-paper text-muted border border-line"
      }`}
    >
      {active ? (
        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
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
          <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
            Projects
          </span>
          <div className="flex-1 h-px bg-line max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
            Things I&apos;ve <span className="text-gradient">shipped</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">
            Production systems built for enterprise clients — measured in users
            served and performance gained.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-auto">
          {/* Large cards */}
          {projects.slice(0, 2).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="xl:col-span-1"
            >
              <TiltCard
                max={7}
                className="card shadow-card p-7 group hover:shadow-lift transition-shadow duration-300 overflow-hidden"
              >
              {/* Background watermark */}
              <div className="absolute top-4 right-4 text-7xl font-display font-extrabold text-ink opacity-[0.04] select-none pointer-events-none">
                {project.shortName}
              </div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <StatusBadge status={project.status} active={project.active} />
                </div>

                <h3 className="font-display text-xl font-bold text-ink mb-2 group-hover:text-cobalt transition-colors">
                  {project.name}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="flex flex-col gap-2 mb-5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs font-mono text-coral-deep"
                      >
                        <TrendingUp size={12} className="shrink-0 opacity-70" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-cobalt-soft text-cobalt border border-cobalt/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* Small cards in a stacked column */}
          <div className="flex flex-col gap-5 xl:col-span-1 md:col-span-2 xl:row-span-1">
            {projects.slice(2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="flex-1"
              >
                <TiltCard
                  max={7}
                  className="card shadow-card p-6 group hover:shadow-lift transition-shadow duration-300 overflow-hidden"
                >
                <div className="absolute top-3 right-3 text-4xl font-display font-extrabold text-ink opacity-[0.04] select-none pointer-events-none">
                  {project.shortName}
                </div>

                <div className="relative flex gap-4 items-start">
                  <span className="text-2xl shrink-0">{project.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-base font-bold text-ink group-hover:text-cobalt transition-colors">
                        {project.name}
                      </h3>
                      <StatusBadge status={project.status} active={project.active} />
                    </div>

                    <p className="text-muted text-xs leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-cobalt-soft text-cobalt"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
