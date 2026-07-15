"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

type Entry = { tag: string; text: string };

const tagStyles: Record<string, string> = {
  FRONTEND: "bg-cobalt-soft text-cobalt",
  PERF: "bg-coral-soft text-coral-deep",
  DESKTOP: "bg-cobalt text-white",
  SECURITY: "bg-ink text-paper",
  BACKEND: "bg-mint-soft text-mint-deep",
  QUALITY: "bg-paper text-muted border border-line",
  INIT: "bg-paper text-muted border border-line",
};

const releases: {
  version: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isActive: boolean;
  entries: Entry[];
}[] = [
  {
    version: "v4.x",
    role: "Software Engineer",
    company: "Aapna Infotheek Pvt. Ltd.",
    location: "Uttarakhand, India",
    period: "Apr 2022 – Present",
    isActive: true,
    entries: [
      {
        tag: "FRONTEND",
        text: "Revamped the frontend of Mera Monitor, an enterprise employee monitoring platform serving 10,500+ daily active users, modernizing legacy interfaces with React.",
      },
      {
        tag: "PERF",
        text: "Cut initial page load from 5+ seconds to under 1 second through route-level lazy loading, code splitting, and React rendering optimizations.",
      },
      {
        tag: "DESKTOP",
        text: "Sole technical owner of the cross-platform Electron desktop app (Windows, macOS, Linux) — development, packaging, code signing, versioning, releases, and production support.",
      },
      {
        tag: "PERF",
        text: "Redesigned the desktop streaming architecture, reducing CPU utilization by 40–60% under concurrent workloads, and shrank the bundle from 350 MB to 191 MB and the installer from 940 MB to 545 MB.",
      },
      {
        tag: "SECURITY",
        text: "Rebuilt the auto-update pipeline on AWS S3 with cryptographic integrity verification, improving update reliability and preventing execution of tampered binaries.",
      },
      {
        tag: "BACKEND",
        text: "Modernized a legacy IT Asset Management platform by migrating its backend from PHP to NestJS, delivering full-stack features across REST APIs and React frontends.",
      },
      {
        tag: "QUALITY",
        text: "Maintained code quality through SonarQube resolution and React code reviews, mentored junior developers, and worked directly with enterprise clients from requirements to delivery.",
      },
    ],
  },
  {
    version: "v0.1.0-beta",
    role: "Software Engineer Trainee",
    company: "Aapna Infotheek Pvt. Ltd.",
    location: "Uttarakhand, India",
    period: "Dec 2021 – Mar 2022",
    isActive: false,
    entries: [
      {
        tag: "INIT",
        text: "Completed a four-month engineering traineeship on the company's React and Node.js stack, followed by promotion to Software Engineer.",
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
            Experience
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
            Changelog<span className="text-coral">.</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">
            Four years of shipped releases at Aapna Infotheek Pvt. Ltd. —
            versioned like the software I own.
          </p>
        </motion.div>

        {/* Release timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Timeline vertical line */}
          <motion.div
            className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-line"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {releases.map((release, i) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Version node */}
              <span className="absolute -left-6 md:-left-10 top-6 -translate-x-1/2 font-mono text-[11px] font-bold px-2 py-1 rounded-md bg-ink text-paper whitespace-nowrap">
                {release.version}
              </span>

              {/* Card */}
              <div className="card shadow-card p-7 md:p-8 hover:shadow-lift transition-shadow duration-300 ml-4 md:ml-6">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="font-display text-xl font-bold text-ink">
                        {release.role}
                      </h3>
                      {release.isActive && (
                        <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-mint-soft text-mint-deep border border-mint/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                          Current release
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-cobalt">
                      {release.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-muted sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end font-mono text-xs">
                      <Calendar size={12} />
                      {release.period}
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end text-xs">
                      <MapPin size={12} />
                      {release.location}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-line mb-6" />

                {/* Changelog entries */}
                <ul className="space-y-3.5">
                  {release.entries.map((entry, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + j * 0.05 }}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span
                        className={`font-mono text-[10px] font-bold tracking-wide px-2 py-0.5 rounded mt-0.5 shrink-0 ${tagStyles[entry.tag]}`}
                      >
                        {entry.tag}
                      </span>
                      <span className="text-ink/75">{entry.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
