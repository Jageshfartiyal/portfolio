"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import SectionHead from "@/components/SectionHead";

/*
  The identity card is a code-signing certificate — the artifact this
  engineer produces every release, turned on himself.
*/
const certificate = [
  { field: "subject", value: "Jagesh Singh Fartiyal" },
  { field: "role", value: "Full Stack Software Engineer" },
  { field: "issuer", value: "Aapna Infotheek Pvt. Ltd." },
  { field: "valid from", value: "December 2021" },
  { field: "platforms", value: "windows · macos · linux" },
  { field: "location", value: "Uttarakhand, India" },
];

const stats = [
  { value: 4, suffix: "+", label: "years shipping" },
  { value: 10500, suffix: "+", label: "daily active users" },
  { value: 3, suffix: "", label: "platforms owned" },
];


function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - started) / duration, 1);
      // ease-out so the number settles rather than stopping dead
      setCount(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} className="tnum">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="README.md"
          title={
            <>
              I make software smaller,
              <br />
              faster and verifiable.
            </>
          }
          inView={inView}
        />

        <div className="grid lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
          {/* Signing certificate */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard max={6} className="panel-raised">
              <div className="flex items-center justify-between px-5 py-3 border-b border-edge">
                <span className="font-mono text-micro uppercase tracking-[0.2em] text-ash">
                  Signature
                </span>
                <span className="flex items-center gap-1.5 font-mono text-micro uppercase tracking-[0.14em] text-verify">
                  <ShieldCheck size={12} />
                  Valid
                </span>
              </div>

              <div
                className="px-5 pt-8 pb-6 flex justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span
                  style={{ transform: "translateZ(30px)" }}
                  className="display text-[3.6rem] leading-none text-chalk select-none"
                >
                  JF
                </span>
              </div>

              <dl className="px-5 pb-5">
                {certificate.map((line) => (
                  <div
                    key={line.field}
                    className="flex items-baseline gap-4 py-2 border-t border-edge"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash w-24 shrink-0">
                      {line.field}
                    </dt>
                    <dd className="font-mono text-[12px] text-chalk/90 text-right ml-auto">
                      {line.value}
                    </dd>
                  </div>
                ))}
                <div className="flex items-baseline gap-4 py-2 border-t border-edge">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash w-24 shrink-0">
                    status
                  </dt>
                  <dd className="font-mono text-[12px] text-verify text-right ml-auto flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-verify breathe" />
                    open to work
                  </dd>
                </div>
              </dl>
            </TiltCard>
          </motion.div>

          {/* Prose */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-ash leading-[1.75] mb-6">
              I&apos;m a full stack engineer with four years at{" "}
              <span className="text-chalk font-medium">
                Aapna Infotheek Pvt. Ltd.
              </span>
              , working in React and TypeScript on the front end, Node.js and
              NestJS on the back end, and Electron on the desktop.
            </p>

            <p className="text-ash leading-[1.75] mb-6">
              The desktop app for Mera Monitor is mine end to end — I build it,
              package it, sign it, version it, release it, and take the support
              calls when a customer&apos;s install goes sideways on a Windows
              build I&apos;ve never seen. That ownership is the part of the job
              I like most: shipping is where software becomes real.
            </p>

            <p className="text-ash leading-[1.75] mb-10">
              Before the desktop work, I led the front-end rebuild that took the
              platform&apos;s initial page load from over five seconds to under
              one. I also rebuilt the auto-update pipeline on S3 with
              cryptographic integrity checks, so a tampered binary can&apos;t
              reach a customer&apos;s machine.
            </p>

            {/* Currently building */}
            <div className="panel px-5 py-4 mb-10">
              <p className="font-mono text-micro uppercase tracking-[0.2em] text-ash mb-2">
                Currently building
              </p>
              <p className="text-chalk text-sm">
                <span className="font-medium">Mera Monitor</span>{" "}
                <span className="text-ash">·</span>{" "}
                <span className="font-medium">ITAM</span>
                <span className="text-ash">
                  {" "}
                  — enterprise monitoring and IT asset management
                </span>
              </p>
            </div>

            {/* Stats — hairline strip, no cards */}
            <div className="grid grid-cols-3 border-t border-edge">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`py-6 ${i > 0 ? "border-l border-edge pl-5" : "pr-5"}`}
                >
                  <div className="display text-[2rem] md:text-[2.4rem] text-chalk">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
