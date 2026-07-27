"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

/*
  The rail is a pipeline: sections you've read are stamped verified, the one
  you're in is live, the rest are queued. The form says "release pipeline";
  the labels stay honest about where each link actually goes.
*/
const stages = [
  { id: "about", label: "about" },
  { id: "skills", label: "stack" },
  { id: "projects", label: "work" },
  { id: "experience", label: "changelog" },
  { id: "certifications", label: "credits" },
  { id: "contact", label: "contact" },
];

export default function BuildRail() {
  const [active, setActive] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = stages
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    // The section whose top has most recently passed the rail is the live one.
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = -1;
      sections.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i;
      });
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const liveLabel = active >= 0 ? stages[active].label : "top";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Build progress — the thinnest possible statement of "how far along" */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="h-px bg-sodium origin-left"
      />

      <div className="bg-void/85 backdrop-blur-md border-b border-edge">
        <nav className="shell px-5 md:px-10 h-[62px] flex items-center justify-between gap-6">
          {/* Monogram */}
          <a
            href="#top"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Back to top"
          >
            <span className="w-7 h-7 rounded-sm border border-edge-strong bg-panel flex items-center justify-center font-display font-extrabold text-[11px] tracking-tight text-chalk">
              JF
            </span>
            <span className="hidden sm:block font-mono text-micro text-ash">
              v4.x
            </span>
          </a>

          {/* Pipeline */}
          <ol className="hidden lg:flex items-center">
            {stages.map((stage, i) => {
              const passed = i < active;
              const live = i === active;
              return (
                <li key={stage.id} className="flex items-center">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className={`w-6 h-px transition-colors duration-300 ${
                        passed || live ? "bg-verify/45" : "bg-edge"
                      }`}
                    />
                  )}
                  <a
                    href={`#${stage.id}`}
                    aria-current={live ? "true" : undefined}
                    className="group flex items-center gap-2 px-2 py-2"
                  >
                    <span
                      aria-hidden
                      className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${
                        live
                          ? "bg-sodium ring-4 ring-sodium/15"
                          : passed
                            ? "bg-verify/70"
                            : "bg-edge-strong group-hover:bg-ash"
                      }`}
                    />
                    <span
                      className={`font-mono text-[11px] tracking-[0.1em] transition-colors duration-300 ${
                        live
                          ? "text-sodium"
                          : passed
                            ? "text-chalk/70"
                            : "text-ash group-hover:text-chalk"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>

          {/* Live stage readout — the pipeline's mobile form */}
          <span className="lg:hidden ml-auto mr-1 font-mono text-[11px] text-ash tracking-[0.1em] flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-sodium" />
            {liveLabel}
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded border border-edge-strong bg-panel hover:bg-panel-raised hover:border-sodium text-chalk font-mono text-[11px] tracking-[0.1em] uppercase transition-colors"
            >
              <ArrowDownToLine size={13} />
              Résumé
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden w-9 h-9 rounded border border-edge-strong bg-panel flex items-center justify-center text-ash hover:text-chalk transition-colors"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile pipeline, vertical */}
        <motion.div
          initial={false}
          animate={
            menuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="lg:hidden overflow-hidden border-t border-edge bg-void"
        >
          <ol className="px-5 py-3">
            {stages.map((stage, i) => (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2.5 font-mono text-[13px] tracking-[0.08em]"
                >
                  <span
                    aria-hidden
                    className={`w-[7px] h-[7px] rounded-full ${
                      i === active
                        ? "bg-sodium"
                        : i < active
                          ? "bg-verify/70"
                          : "bg-edge-strong"
                    }`}
                  />
                  <span
                    className={i === active ? "text-sodium" : "text-chalk/80"}
                  >
                    {stage.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 h-9 px-4 rounded border border-edge-strong bg-panel text-chalk font-mono text-[11px] tracking-[0.1em] uppercase"
              >
                <ArrowDownToLine size={13} />
                Résumé
              </a>
            </li>
          </ol>
        </motion.div>
      </div>
    </header>
  );
}
