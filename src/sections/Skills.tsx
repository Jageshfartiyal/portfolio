"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Frontend",
    color: "neon-cyan",
    borderColor: "border-neon-cyan/30",
    textColor: "text-neon-cyan",
    bgColor: "bg-neon-cyan/5",
    glowClass: "glow-cyan",
    icon: "⚛️",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Next.js"],
  },
  {
    label: "Backend",
    color: "neon-pink",
    borderColor: "border-neon-pink/30",
    textColor: "text-neon-pink",
    bgColor: "bg-neon-pink/5",
    glowClass: "glow-pink",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    label: "Database",
    color: "neon-purple",
    borderColor: "border-neon-purple/30",
    textColor: "text-neon-purple",
    bgColor: "bg-neon-purple/5",
    glowClass: "glow-purple",
    icon: "🗄️",
    skills: ["MongoDB", "SQL", "Mongoose"],
  },
  {
    label: "Tools",
    color: "neon-green",
    borderColor: "border-neon-green/30",
    textColor: "text-neon-green",
    bgColor: "bg-neon-green/5",
    glowClass: "",
    icon: "🔧",
    skills: ["Git", "GitHub", "Stripe", "HubSpot API", "Digital Ocean", "Postman"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
            02. Skills
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
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-white/40 mt-3 max-w-md">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              className={`glass-card rounded-2xl p-6 border ${cat.borderColor} hover:${cat.glowClass} transition-all duration-300 group`}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className={`text-sm font-bold tracking-widest uppercase ${cat.textColor}`}>
                    {cat.label}
                  </h3>
                  <p className="text-white/30 text-xs mt-0.5">
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px ${cat.bgColor} mb-5 ${cat.borderColor} border-t`} />

              {/* Pills */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    variants={pillVariants}
                    transition={{ delay: i * 0.05 }}
                    className={`skill-pill text-xs font-mono px-3 py-1.5 rounded-full ${cat.bgColor} ${cat.textColor} border ${cat.borderColor} hover:scale-105`}
                    style={{ cursor: "default" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Always learning", "Problem solver", "Clean code advocate", "API design lover"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-white/25 border border-white/10 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
