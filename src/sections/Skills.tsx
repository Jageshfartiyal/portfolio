"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHead from "@/components/SectionHead";

/*
  Rendered as a manifest rather than a wall of badges. `core` is what gets
  used most weeks — highlighting it turns a flat list into a signal about
  depth, which is the thing a hiring manager is actually reading for.
*/
type Group = { name: string; core: string[]; rest: string[] };

const manifest: Group[] = [
  {
    name: "frontend",
    core: ["React.js", "TypeScript", "Redux"],
    rest: [
      "JavaScript (ES6+)",
      "Context API",
      "React Router",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    name: "backend",
    core: ["Node.js", "NestJS", "REST APIs"],
    rest: ["Express.js", "WebSockets", "Webhooks"],
  },
  {
    name: "desktop",
    core: ["Electron.js", "Code signing", "Auto updates"],
    rest: [
      "Cross-platform builds",
      "Desktop packaging",
      "Version management",
    ],
  },
  {
    name: "data & cloud",
    core: ["MongoDB", "AWS S3", "Docker"],
    rest: ["SQL", "DigitalOcean", "Kafka", "Nginx"],
  },
  {
    name: "integrations",
    core: ["Webhooks", "Stripe"],
    rest: ["HubSpot APIs", "Event-driven architecture"],
  },
  {
    name: "workflow",
    core: ["Git", "SonarQube", "ESBuild"],
    rest: [
      "GitHub",
      "Prettier",
      "GitHub Copilot",
      "Agile Scrum",
      "Code reviews",
    ],
  },
];

const practices = [
  "Performance optimization",
  "Requirement gathering",
  "Client communication",
  "Mentoring junior developers",
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="package.json"
          title="Dependencies."
          lede="Everything below is in production somewhere. The highlighted entries are the ones I reach for most weeks."
          inView={inView}
        />

        <div className="panel overflow-hidden">
          {manifest.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className={`grid md:grid-cols-[10rem_minmax(0,1fr)_3rem] gap-x-6 gap-y-2 px-5 md:px-7 py-5 ${
                i > 0 ? "border-t border-edge" : ""
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-sodium pt-0.5">
                {group.name}
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5 leading-relaxed">
                {group.core.map((item) => (
                  <span
                    key={item}
                    className="text-chalk font-medium text-[15px]"
                  >
                    {item}
                  </span>
                ))}
                {group.rest.map((item) => (
                  <span key={item} className="text-ash text-[15px]">
                    {item}
                  </span>
                ))}
              </div>

              <div className="hidden md:block font-mono tnum text-[11px] text-ash text-right pt-1">
                {group.core.length + group.rest.length}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-ash"
        >
          <span className="uppercase tracking-[0.16em] text-edge-strong">
            Also
          </span>
          {practices.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
