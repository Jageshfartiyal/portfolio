"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TiltCard from "@/components/TiltCard";
import {
  Trophy,
  Star,
  Medal,
  Crown,
  BadgeCheck,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Card = {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
};

const awards: Card[] = [
  {
    icon: Trophy,
    iconBg: "bg-coral-soft",
    iconColor: "text-coral-deep",
    title: "Bomb of the Performance Award ×2",
    subtitle: "Aapna Infotheek Pvt. Ltd.",
    description:
      "Awarded twice — by two different Vice Presidents — for exceptional technical contribution, ownership, and project delivery.",
    featured: true,
  },
  {
    icon: Star,
    iconBg: "bg-cobalt-soft",
    iconColor: "text-cobalt",
    title: "Rising Star Award",
    subtitle: "Aapna Infotheek Pvt. Ltd.",
    description:
      "Recognized for outstanding performance, rapid growth, and consistent delivery.",
  },
  {
    icon: Medal,
    iconBg: "bg-mint-soft",
    iconColor: "text-mint-deep",
    title: "1st Runner-Up — Hackathon",
    subtitle: "Organization-wide",
    description:
      "Secured second place competing against top engineering teams from across the organization.",
  },
  {
    icon: Crown,
    iconBg: "bg-paper border border-line",
    iconColor: "text-ink",
    title: "Chess Champion",
    subtitle: "Organization-wide",
    description:
      "Winner of the company-wide chess championship — strategy on and off the keyboard.",
  },
];

const credentials: Card[] = [
  {
    icon: BadgeCheck,
    iconBg: "bg-cobalt-soft",
    iconColor: "text-cobalt",
    title: "React – The Complete Guide",
    subtitle: "incl. Next.js & Redux",
    description:
      "In-depth React certification covering component architecture, Redux state management, and Next.js.",
  },
  {
    icon: BadgeCheck,
    iconBg: "bg-mint-soft",
    iconColor: "text-mint-deep",
    title: "Complete NodeJS Developer",
    subtitle: "GraphQL, MongoDB & more",
    description:
      "Backend certification covering advanced Node.js, GraphQL, MongoDB, and REST API design.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-paper border border-line",
    iconColor: "text-ink",
    title: "B.Tech — Computer Science",
    subtitle: "Amrapali Institute of Technology and Science",
    description:
      "Bachelor of Technology in Computer Science, 2018 – 2022 · 75.33%.",
  },
];

function CredCard({ cert, index, inView }: { cert: Card; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.08 }}
      className="h-full"
    >
      <TiltCard
        max={8}
        className="card shadow-card p-6 hover:shadow-lift transition-shadow duration-300 group"
      >
      <div className="relative">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl ${cert.iconBg} flex items-center justify-center mb-4`}>
          <cert.icon size={19} className={cert.iconColor} />
        </div>

        {/* Featured badge */}
        {cert.featured && (
          <span className="absolute top-0 right-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-coral-soft text-coral-deep border border-coral/20">
            ★ FEATURED
          </span>
        )}

        <h3 className="font-display font-bold text-ink text-sm leading-snug mb-1 group-hover:text-cobalt transition-colors">
          {cert.title}
        </h3>
        <p className="text-xs font-mono text-muted mb-3">{cert.subtitle}</p>
        <p className="text-muted/90 text-xs leading-relaxed">
          {cert.description}
        </p>
      </div>
      </TiltCard>
    </motion.div>
  );
}

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
          <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
            Recognition
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
            Awards & <span className="text-gradient">credentials</span>
          </h2>
          <p className="text-muted mt-3 max-w-md">
            Recognition earned, certifications completed, and the foundation
            behind them.
          </p>
        </motion.div>

        {/* Awards */}
        <p className="text-[11px] font-mono text-muted tracking-[0.25em] uppercase mb-5">
          Awards &amp; recognition
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {awards.map((cert, i) => (
            <CredCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Certifications & Education */}
        <p className="text-[11px] font-mono text-muted tracking-[0.25em] uppercase mb-5">
          Certifications &amp; education
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {credentials.map((cert, i) => (
            <CredCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
