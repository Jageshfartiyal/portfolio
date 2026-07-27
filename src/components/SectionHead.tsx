"use client";

import { motion } from "framer-motion";

/*
  Every section is a file in the repository — README, package.json, /dist,
  CHANGELOG. The eyebrow names the file, so the structure carries meaning
  instead of decorating with counters.
*/
export default function SectionHead({
  file,
  title,
  lede,
  inView,
}: {
  file: string;
  title: React.ReactNode;
  lede?: string;
  inView: boolean;
}) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-sodium whitespace-nowrap">
          {file}
        </span>
        <motion.span
          aria-hidden
          className="flex-1 h-px bg-edge origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="display text-[2.6rem] md:text-[3.6rem] text-chalk max-w-3xl"
      >
        {title}
      </motion.h2>

      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-ash mt-5 max-w-xl leading-relaxed"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
