"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "@/components/TiltCard";
import {
  PanelsTopLeft,
  Server,
  AppWindow,
  CloudCog,
  Plug,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Category = {
  label: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  skills: string[];
};

const categories: Category[] = [
  {
    label: "Frontend",
    icon: PanelsTopLeft,
    iconBg: "bg-cobalt-soft",
    iconColor: "text-cobalt",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Context API",
      "React Router",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    label: "Backend",
    icon: Server,
    iconBg: "bg-coral-soft",
    iconColor: "text-coral-deep",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "WebSockets",
      "Webhooks",
    ],
  },
  {
    label: "Desktop",
    icon: AppWindow,
    iconBg: "bg-mint-soft",
    iconColor: "text-mint-deep",
    skills: [
      "Electron.js",
      "Cross-Platform Apps",
      "Desktop Packaging",
      "Code Signing",
      "Auto Updates",
      "Version Management",
    ],
  },
  {
    label: "Database & Cloud",
    icon: CloudCog,
    iconBg: "bg-cobalt-soft",
    iconColor: "text-cobalt",
    skills: [
      "MongoDB",
      "SQL",
      "AWS S3",
      "DigitalOcean",
      "Docker",
      "Kafka",
      "Nginx",
    ],
  },
  {
    label: "Integrations",
    icon: Plug,
    iconBg: "bg-coral-soft",
    iconColor: "text-coral-deep",
    skills: [
      "Stripe",
      "HubSpot APIs",
      "Webhooks",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Tools & Workflow",
    icon: Wrench,
    iconBg: "bg-mint-soft",
    iconColor: "text-mint-deep",
    skills: [
      "Git",
      "GitHub",
      "SonarQube",
      "ESBuild",
      "Prettier",
      "GitHub Copilot",
      "Agile Scrum",
      "Code Reviews",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
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
          <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
            Stack
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
            What I <span className="text-gradient">work with</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">
            The technologies I use to ship production software — from browser
            to server to desktop.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat.label} variants={cardVariants}>
              <TiltCard
                max={6}
                className="card shadow-card p-6 hover:shadow-lift transition-shadow duration-300"
              >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center`}>
                  <cat.icon size={18} className={cat.iconColor} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold tracking-wide uppercase text-ink">
                    {cat.label}
                  </h3>
                  <p className="text-muted/70 text-xs mt-0.5">
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-line mb-5" />

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-paper border border-line text-ink/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Development practices */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            "Performance Optimization",
            "Requirement Gathering",
            "Client Communication",
            "Mentoring Junior Developers",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-muted border border-line bg-surface px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
