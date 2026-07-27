"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import SectionHead from "@/components/SectionHead";

/*
  A real changelog: scope tags are conventional-commit style, and the two
  entries are versioned because the order genuinely carries information —
  trainee first, then the four years that followed.
*/
type Entry = { scope: string; text: string };

// Green marks a measured win, amber marks the integrity work. Everything
// else stays quiet so those two read.
const scopeStyle: Record<string, string> = {
  perf: "text-verify border-verify/30",
  security: "text-sodium border-sodium/30",
  desktop: "text-chalk border-edge-strong",
  frontend: "text-ash border-edge",
  backend: "text-ash border-edge",
  quality: "text-ash border-edge",
  init: "text-ash border-edge",
};

const releases: {
  version: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  entries: Entry[];
}[] = [
  {
    version: "v4.x",
    role: "Software Engineer",
    company: "Aapna Infotheek Pvt. Ltd.",
    location: "Uttarakhand, India",
    period: "Apr 2022 – Present",
    current: true,
    entries: [
      {
        scope: "frontend",
        text: "Revamped the front end of Mera Monitor, an enterprise employee monitoring platform serving 10,500+ daily active users, modernizing legacy interfaces with React.",
      },
      {
        scope: "perf",
        text: "Cut initial page load from over 5 seconds to under 1 second through route-level lazy loading, code splitting and React rendering optimizations.",
      },
      {
        scope: "desktop",
        text: "Took sole technical ownership of the cross-platform Electron desktop app on Windows, macOS and Linux — development, packaging, code signing, versioning, releases and production support.",
      },
      {
        scope: "perf",
        text: "Redesigned the desktop streaming architecture, reducing CPU utilization 40–60% under concurrent workloads and shrinking the bundle from 350 MB to 191 MB and the installer from 940 MB to 545 MB.",
      },
      {
        scope: "security",
        text: "Rebuilt the auto-update pipeline on AWS S3 with cryptographic integrity verification, improving update reliability and preventing tampered binaries from executing.",
      },
      {
        scope: "backend",
        text: "Modernized a legacy IT Asset Management platform by migrating its backend from PHP to NestJS, delivering full-stack features across REST APIs and React front ends.",
      },
      {
        scope: "quality",
        text: "Held code quality through SonarQube resolution and React code reviews, mentored junior developers, and worked with enterprise clients from requirements through delivery.",
      },
    ],
  },
  {
    version: "v0.1.0",
    role: "Software Engineer Trainee",
    company: "Aapna Infotheek Pvt. Ltd.",
    location: "Uttarakhand, India",
    period: "Dec 2021 – Mar 2022",
    current: false,
    entries: [
      {
        scope: "init",
        text: "Completed a four-month engineering traineeship on the company's React and Node.js stack, followed by promotion to Software Engineer.",
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="CHANGELOG.md"
          title={
            <>
              Four years,
              <br />
              in release order.
            </>
          }
          inView={inView}
        />

        <div className="relative">
          {/* the trunk */}
          <motion.span
            aria-hidden
            className="absolute left-0 top-3 bottom-3 w-px bg-edge origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          />

          {releases.map((release, i) => (
            <motion.article
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.15 }}
              className="relative pl-6 md:pl-10 pb-10 last:pb-0"
            >
              {/* tag on the trunk */}
              <span
                className={`absolute left-0 top-4 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 ${
                  release.current
                    ? "bg-sodium border-void"
                    : "bg-edge-strong border-void"
                }`}
              />

              <div className="panel">
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 md:px-7 py-3 border-b border-edge bg-panel-raised">
                  <span className="font-mono text-[12px] text-sodium tracking-[0.08em]">
                    {release.version}
                  </span>
                  {release.current && (
                    <span className="flex items-center gap-2 font-mono text-micro uppercase tracking-[0.16em] text-verify">
                      <span className="w-1.5 h-1.5 rounded-full bg-verify breathe" />
                      current release
                    </span>
                  )}
                </div>

                <div className="px-5 md:px-7 py-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3 mb-6">
                    <div>
                      <h3 className="display text-[1.5rem] md:text-[1.75rem] text-chalk mb-1">
                        {release.role}
                      </h3>
                      <p className="text-ash">{release.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 font-mono text-[11px] text-ash sm:text-right sm:items-end">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {release.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {release.location}
                      </span>
                    </div>
                  </div>

                  <ul>
                    {release.entries.map((entry, j) => (
                      <motion.li
                        key={entry.text}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.45 + j * 0.05 }}
                        className="grid sm:grid-cols-[6.5rem_minmax(0,1fr)] gap-x-5 gap-y-1.5 py-3.5 border-t border-edge"
                      >
                        <span
                          className={`justify-self-start self-start font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-sm border ${scopeStyle[entry.scope]}`}
                        >
                          {entry.scope}
                        </span>
                        <span className="text-chalk/80 text-[15px] leading-relaxed">
                          {entry.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
