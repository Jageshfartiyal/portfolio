"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDownToLine, Check } from "lucide-react";
import Avatar3D from "@/components/Avatar3D";

/*
  The hero is the thesis: this engineer makes software smaller and faster.
  Every figure below is from the Mera Monitor release work — nothing invented.
*/
const buildReport = [
  { metric: "initial load", before: "5.0 s", after: "< 1.0 s", delta: "↓ 80%" },
  { metric: "desktop bundle", before: "350 MB", after: "191 MB", delta: "↓ 45%" },
  { metric: "installer", before: "940 MB", after: "545 MB", delta: "↓ 42%" },
  {
    metric: "cpu · under load",
    before: "baseline",
    after: "0.4–0.6× baseline",
    delta: "↓ 40–60%",
  },
];

const guarantees = ["code signed", "integrity verified", "auto-update"];
const platforms = ["windows", "macos", "linux"];

const ROW_GAP = 0.42;
const ROW_START = 0.75;

// Annotated as a tuple — a bare literal widens to number[] and framer's
// Easing type rejects it outside of JSX prop position.
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function DiffRow({
  row,
  index,
  still,
}: {
  row: (typeof buildReport)[number];
  index: number;
  still: boolean;
}) {
  const at = ROW_START + index * ROW_GAP;
  // Metric column is fixed, not 1fr — letting it stretch pushed the values so
  // far right that the pairs stopped reading as rows.
  const cell =
    "grid grid-cols-[15px_8.5rem_minmax(0,1fr)] md:grid-cols-[18px_13rem_minmax(0,1fr)_5rem] items-baseline gap-x-3 px-3 md:px-5 py-1.5 font-mono tnum text-[11px] md:text-[13px]";

  return (
    <>
      {/* removed */}
      <motion.div
        className={`${cell} diff-del`}
        initial={still ? false : { opacity: 0, x: -6 }}
        animate={
          still ? { opacity: 0.8 } : { opacity: [0, 1, 1, 0.8], x: 0 }
        }
        transition={
          still
            ? { duration: 0 }
            : { duration: 0.9, times: [0, 0.22, 0.55, 1], delay: at }
        }
      >
        <span className="text-strike select-none">−</span>
        <span className="text-strike truncate">{row.metric}</span>
        <span className="text-strike">{row.before}</span>
        <span aria-hidden className="hidden md:block" />
      </motion.div>

      {/* added */}
      <motion.div
        className={`${cell} diff-add`}
        initial={still ? false : { opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={
          still
            ? { duration: 0 }
            : { duration: 0.4, delay: at + 0.3, ease: "easeOut" }
        }
      >
        <span className="text-verify select-none">+</span>
        <span className="text-chalk truncate">{row.metric}</span>
        <span className="text-chalk font-medium">{row.after}</span>
        <span className="hidden md:block text-right text-verify">
          {row.delta}
        </span>
      </motion.div>
    </>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const still = Boolean(reduce);
  const tail = ROW_START + buildReport.length * ROW_GAP;

  const rise = (delay: number) =>
    still
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center px-5 md:px-10 pt-28 pb-20"
    >
      {/* One light source, behind the report — the only glow on the page */}
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[min(900px,90vw)] h-[420px] rounded-full blur-[120px]"
      />

      <div className="shell relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] gap-12 lg:gap-14 items-start">
        {/* Avatar leads on mobile, sits opposite the name on desktop */}
        <motion.div
          initial={still ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            still ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: EASE }
          }
          className="order-1 lg:order-2 flex flex-col items-center lg:items-end lg:mt-16"
        >
          <Avatar3D />

          {/* Release targets — lifted out of the report header, where they
              were micro-text, into the space beside it */}
          <div className="panel w-full mt-10 hidden lg:block">
            <p className="px-4 py-2.5 border-b border-edge font-mono text-micro uppercase tracking-[0.2em] text-ash">
              Release targets
            </p>
            {platforms.map((p) => (
              <div
                key={p}
                className="flex items-center justify-between px-4 py-2.5 border-b border-edge font-mono text-[12px] text-chalk"
              >
                {p}
                <Check size={13} className="text-verify" />
              </div>
            ))}
            <p className="px-4 py-3 font-mono text-[11px] text-ash">
              <span className="text-sodium">10,500+</span> daily active users
            </p>
          </div>
        </motion.div>

        <div className="order-2 lg:order-1">
        <motion.div
          {...rise(0)}
          className="inline-flex items-center gap-2.5 mb-9 font-mono text-[11px] tracking-[0.14em] uppercase text-ash"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-verify breathe" />
          Open to work
          <span className="text-edge-strong">·</span>
          Uttarakhand, IN
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="display text-[13vw] sm:text-[9vw] lg:text-[6.4rem] text-chalk mb-7"
        >
          Jagesh Singh
          <br />
          Fartiyal<span className="text-sodium">.</span>
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="text-ash text-base md:text-lg leading-relaxed max-w-2xl mb-11"
        >
          Full stack engineer, and the person who owns the release pipeline for
          a desktop app{" "}
          <span className="text-chalk font-medium">
            10,500 people open every day
          </span>
          . Packaging, code signing and auto-updates across Windows, macOS and
          Linux — plus the React and NestJS work behind them.
        </motion.p>

        {/* ---- Signature: the build report, as a diff ---- */}
        <motion.figure
          {...rise(0.28)}
          className="panel-raised shadow-bloom overflow-hidden max-w-3xl mb-10"
        >
          <figcaption className="flex items-center justify-between gap-3 px-3 md:px-5 py-2.5 border-b border-edge bg-panel">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ash">
              Build report
              <span className="text-edge-strong mx-2">/</span>
              <span className="text-chalk">mera monitor</span>
            </span>
            {/* Only between sm and lg: too cramped below, and the release
                targets panel covers it above */}
            <span className="hidden sm:block lg:hidden font-mono text-micro uppercase tracking-[0.14em] text-ash">
              {platforms.join(" · ")}
            </span>
          </figcaption>

          <div className="py-2">
            {buildReport.map((row, i) => (
              <DiffRow key={row.metric} row={row} index={i} still={still} />
            ))}
          </div>

          <motion.div
            initial={still ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={still ? { duration: 0 } : { duration: 0.5, delay: tail }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 px-3 md:px-5 py-3 border-t border-edge bg-panel"
          >
            {guarantees.map((g) => (
              <span
                key={g}
                className="flex items-center gap-1.5 font-mono text-[11px] text-ash"
              >
                <Check size={12} className="text-verify shrink-0" />
                {g}
              </span>
            ))}
          </motion.div>
        </motion.figure>

        <motion.div
          initial={still ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            still ? { duration: 0 } : { duration: 0.5, delay: tail + 0.12 }
          }
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 h-12 px-6 rounded bg-sodium text-void font-mono text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-sodium/85 transition-colors"
          >
            See the work
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 h-12 px-6 rounded border border-edge-strong bg-panel hover:border-sodium text-chalk font-mono text-[12px] tracking-[0.12em] uppercase transition-colors"
          >
            <ArrowDownToLine size={15} />
            Résumé
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
