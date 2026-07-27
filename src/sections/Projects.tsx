"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";
import SectionHead from "@/components/SectionHead";

/*
  Projects presented as build artifacts. Numeric wins are shown as deltas so
  they read against the hero's diff; work without a number gets prose instead
  of an invented metric.
*/
type Artifact = {
  slug: string;
  name: string;
  status: string;
  live: boolean;
  summary: string;
  platforms?: string[];
  reach?: string;
  deltas?: { value: string; label: string }[];
  notes?: string[];
  stack: string[];
};

const artifacts: Artifact[] = [
  {
    slug: "mera-monitor",
    name: "Mera Monitor",
    status: "in production",
    live: true,
    summary:
      "Enterprise employee monitoring platform — web plus a cross-platform desktop client. I'm the sole technical owner of the Electron app: development, packaging, code signing, versioning, releases and production support.",
    platforms: ["windows", "macos", "linux"],
    reach: "10,500+ daily active users",
    deltas: [
      { value: "↓ 80%", label: "initial load" },
      { value: "↓ 45%", label: "bundle size" },
      { value: "↓ 42%", label: "installer" },
      { value: "↓ 40–60%", label: "cpu under load" },
    ],
    stack: ["React", "Redux", "Electron.js", "Node.js", "AWS S3", "ESBuild"],
  },
  {
    slug: "itam",
    name: "IT Asset Management",
    status: "in production",
    live: true,
    summary:
      "Full-stack modernization of a legacy IT asset platform. I led the backend migration off PHP onto NestJS and delivered the REST APIs and React modules behind the seller and buyer asset workflows.",
    notes: [
      "Legacy PHP backend migrated to NestJS",
      "Seller and buyer workflows delivered end to end",
      "Webhook-driven sync across enterprise systems",
    ],
    stack: ["React", "Node.js", "NestJS", "MongoDB", "REST APIs"],
  },
  {
    slug: "nanoconnect",
    name: "NanoConnect",
    status: "delivered",
    live: false,
    summary:
      "An enterprise iPaaS connecting business applications over REST and webhook-driven events — scoped and built in direct collaboration with the client teams using it.",
    stack: ["Node.js", "React", "REST APIs", "Webhooks"],
  },
  {
    slug: "hubspot-backup",
    name: "HubSpot Backup",
    status: "delivered",
    live: false,
    summary:
      "Backup and restore for millions of HubSpot CRM records: scheduled backups, point-in-time recovery, and Stripe subscription billing with tiered plans and automated lifecycle handling.",
    stack: ["Node.js", "HubSpot APIs", "Stripe"],
  },
];

/*
  Written out per position rather than composed at runtime: Tailwind only
  emits classes it can find as literal strings in the source.
  2 columns on mobile, 4 on desktop — hairlines follow the reflow.
*/
const deltaCell = [
  "pr-4",
  "pl-4 border-l border-edge",
  "pr-4 border-t border-edge md:pr-0 md:pl-4 md:border-t-0 md:border-l",
  "pl-4 border-l border-t border-edge md:border-t-0",
];

function Status({ status, live }: { status: string; live: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ash whitespace-nowrap">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          live ? "bg-verify breathe" : "bg-edge-strong"
        }`}
      />
      {status}
    </span>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[11px] text-ash">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          {i > 0 && <span className="text-edge-strong">·</span>}
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [lead, second, ...rest] = artifacts;

  return (
    <section id="projects" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="/dist"
          title="Shipped."
          lede="Four production systems built for enterprise clients, measured in people served and weight removed."
          inView={inView}
        />

        <div className="flex flex-col gap-5">
          {[lead, second].map((artifact, i) => (
            <motion.article
              key={artifact.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="panel overflow-hidden"
            >
              {/* artifact header */}
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 md:px-7 py-3.5 border-b border-edge bg-panel-raised">
                <span className="font-mono text-[12px] text-chalk">
                  {artifact.slug}
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {artifact.platforms && (
                    <span className="hidden sm:flex items-center gap-2 font-mono text-micro uppercase tracking-[0.16em] text-ash">
                      {artifact.platforms.join(" · ")}
                    </span>
                  )}
                  <Status status={artifact.status} live={artifact.live} />
                </div>
              </div>

              <div className="px-5 md:px-7 py-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                  <h3 className="display text-[1.75rem] md:text-[2rem] text-chalk">
                    {artifact.name}
                  </h3>
                  {artifact.reach && (
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-sodium">
                      <Users size={12} />
                      {artifact.reach}
                    </span>
                  )}
                </div>

                <p className="text-ash leading-relaxed max-w-2xl mb-6">
                  {artifact.summary}
                </p>

                {artifact.deltas && (
                  <div className="grid grid-cols-2 md:grid-cols-4 border-t border-edge mb-6">
                    {artifact.deltas.map((delta, j) => (
                      <div key={delta.label} className={`py-4 ${deltaCell[j]}`}>
                        <div className="font-mono tnum text-[15px] md:text-[17px] text-verify">
                          {delta.value}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash mt-1.5">
                          {delta.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {artifact.notes && (
                  <ul className="border-t border-edge mb-6">
                    {artifact.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-baseline gap-3 py-2.5 border-b border-edge text-[15px] text-chalk/85"
                      >
                        <span className="text-verify font-mono text-xs shrink-0">
                          +
                        </span>
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                <Stack items={artifact.stack} />
              </div>
            </motion.article>
          ))}

          {/* Delivered, archived — smaller weight, same system */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((artifact, i) => (
              <motion.article
                key={artifact.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                className="panel overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-edge bg-panel-raised">
                  <span className="font-mono text-[12px] text-chalk">
                    {artifact.slug}
                  </span>
                  <Status status={artifact.status} live={artifact.live} />
                </div>

                <div className="px-5 py-5 flex flex-col flex-1">
                  <h3 className="display text-[1.35rem] text-chalk mb-2.5">
                    {artifact.name}
                  </h3>
                  <p className="text-ash text-[15px] leading-relaxed mb-5 flex-1">
                    {artifact.summary}
                  </p>
                  <Stack items={artifact.stack} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
