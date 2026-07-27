"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHead from "@/components/SectionHead";

type Credit = {
  title: string;
  issuer: string;
  detail: string;
  emphasis?: boolean;
};

const awards: Credit[] = [
  {
    title: "Bomb of the Performance Award ×2",
    issuer: "Aapna Infotheek Pvt. Ltd.",
    detail:
      "Given twice, by two different Vice Presidents, for technical contribution, ownership and delivery.",
    emphasis: true,
  },
  {
    title: "Rising Star Award",
    issuer: "Aapna Infotheek Pvt. Ltd.",
    detail:
      "Recognized for performance, rate of growth and consistency of delivery.",
  },
  {
    title: "1st Runner-Up, Hackathon",
    issuer: "Organization-wide",
    detail:
      "Second place against engineering teams from across the organization.",
  },
  {
    title: "Chess Champion",
    issuer: "Organization-wide",
    detail:
      "Won the company-wide chess championship — strategy away from the keyboard.",
  },
];

const credentials: Credit[] = [
  {
    title: "React — The Complete Guide",
    issuer: "Certification · incl. Next.js & Redux",
    detail:
      "Component architecture, Redux state management and Next.js, start to finish.",
  },
  {
    title: "Complete Node.js Developer",
    issuer: "Certification · GraphQL & MongoDB",
    detail:
      "Advanced Node.js, GraphQL, MongoDB and REST API design.",
  },
  {
    title: "B.Tech, Computer Science",
    issuer: "Amrapali Institute of Technology and Science",
    detail: "2018 – 2022 · 75.33%.",
  },
];

function CreditList({
  label,
  items,
  inView,
  offset,
}: {
  label: string;
  items: Credit[];
  inView: boolean;
  offset: number;
}) {
  return (
    <div>
      <p className="eyebrow mb-4">{label}</p>
      <div className="panel overflow-hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: offset + i * 0.07 }}
            className={`grid md:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] gap-x-8 gap-y-1.5 px-5 md:px-7 py-5 ${
              i > 0 ? "border-t border-edge" : ""
            }`}
          >
            <div>
              <h3
                className={`text-[15px] font-medium leading-snug ${
                  item.emphasis ? "text-sodium" : "text-chalk"
                }`}
              >
                {item.title}
              </h3>
              <p className="font-mono text-[11px] text-ash mt-1.5">
                {item.issuer}
              </p>
            </div>
            <p className="text-ash text-[15px] leading-relaxed md:pt-0.5">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="CREDITS"
          title="Signed off by other people."
          inView={inView}
        />

        <div className="flex flex-col gap-10">
          <CreditList
            label="Awards & recognition"
            items={awards}
            inView={inView}
            offset={0.15}
          />
          <CreditList
            label="Certifications & education"
            items={credentials}
            inView={inView}
            offset={0.3}
          />
        </div>
      </div>
    </section>
  );
}
