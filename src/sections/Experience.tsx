"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Star } from "lucide-react";

const experience = [
  {
    role: "Consultant — Full Stack Developer",
    company: "Aapna Infotheek Pvt. Ltd.",
    location: "Uttarakhand, India",
    period: "Nov 2022 - Present",
    isActive: true,
    color: "neon-cyan",
    borderColor: "border-neon-cyan/30",
    textColor: "text-neon-cyan",
    bullets: [
      "Led the redesign of an ITAM (IT Asset Management) application using React, improving UI/UX consistency and user efficiency.",
      "Built Mera Monitor — a real-time employee productivity monitoring tool using React, TypeScript, and NestJS.",
      "Developed NanoConnect, a scalable iPaaS platform for enterprise system integrations using Node.js.",
      "Created a HubSpot data backup application with Stripe payment integration, data restore, and download features.",
      "Collaborated with cross-functional teams to deliver reliable, production-grade web applications.",
      "Participated in and won (First Runner-Up) the company's internal hackathon.",
      "Completed the Aapna Commando Readiness Program focused on discipline and professional excellence.",
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
          <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
            04. Experience
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
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Timeline vertical line */}
          <motion.div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 timeline-line rounded-full"
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-2 border-neon-cyan bg-bg glow-cyan" />
              </div>

              {/* Card */}
              <div className={`glass-card border ${exp.borderColor} rounded-2xl p-8 hover:glow-cyan transition-all duration-300`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      {exp.isActive && (
                        <span className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-neon-green/10 text-neon-green border border-neon-green/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                          Currently Here
                        </span>
                      )}
                    </div>
                    <div className={`text-lg font-semibold ${exp.textColor}`}>
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-white/40 text-right">
                    <div className="flex items-center gap-1.5 justify-end font-mono">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r from-${exp.color}/20 to-transparent mb-6`} />

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + j * 0.05 }}
                      className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                    >
                      <Star
                        size={12}
                        className={`${exp.textColor} mt-1 shrink-0 opacity-70`}
                      />
                      {bullet}
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
