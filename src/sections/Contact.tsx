"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUpRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";

const EMAIL = "jageshfartiyal9720@gmail.com";

const channels = [
  {
    icon: Mail,
    label: "email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
  },
  {
    icon: Linkedin,
    label: "linkedin",
    value: "in/jagesh-fartiyal",
    href: "https://www.linkedin.com/in/jagesh-fartiyal-23405918b",
    external: true,
  },
  {
    icon: Github,
    label: "github",
    value: "jageshfartiyal",
    href: "https://github.com/jageshfartiyal",
    external: true,
  },
  {
    icon: Phone,
    label: "phone",
    value: "+91 76689 66682",
    href: "tel:+917668966682",
    external: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [handoff, setHandoff] = useState<string | null>(null);

  const buildMailto = () => {
    const subject = encodeURIComponent(
      form.name ? `Portfolio enquiry from ${form.name}` : "Portfolio enquiry"
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildMailto();
    setHandoff(url);
    window.location.href = url;
  };

  const field =
    "w-full bg-void border border-edge rounded px-3.5 py-3 text-chalk text-[15px] placeholder:text-ash/60 focus:outline-none focus:border-sodium transition-colors";
  const fieldLabel =
    "block font-mono text-[10px] uppercase tracking-[0.18em] text-ash mb-2";

  return (
    <section id="contact" ref={ref} className="band relative">
      <div className="shell">
        <SectionHead
          file="MAINTAINER"
          title={
            <>
              Hiring, or stuck
              <br />
              on a release?
            </>
          }
          lede="I'm open to full stack and desktop engineering roles, and happy to talk through a packaging or performance problem either way."
          inView={inView}
        />

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-8 items-start">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="panel overflow-hidden">
              {channels.map((channel, i) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`row-link flex items-center gap-4 px-5 py-4 ${
                    i > 0 ? "border-t border-edge" : ""
                  }`}
                >
                  <channel.icon size={16} className="text-ash shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash w-20 shrink-0">
                    {channel.label}
                  </span>
                  <span className="text-chalk text-[15px] truncate">
                    {channel.value}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-edge-strong ml-auto shrink-0"
                  />
                </a>
              ))}

              <div className="flex items-center gap-4 px-5 py-4 border-t border-edge">
                <MapPin size={16} className="text-ash shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ash w-20 shrink-0">
                  based in
                </span>
                <span className="text-chalk text-[15px]">
                  Uttarakhand, India
                </span>
              </div>
            </div>

            <p className="font-mono text-[11px] text-ash mt-4 leading-relaxed">
              Usually replies within a day. IST, UTC+5:30.
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="panel px-6 md:px-8 py-7"
          >
            {handoff ? (
              <div className="py-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-verify mb-3">
                  Handed to your email app
                </p>
                <p className="text-chalk mb-2">
                  Your message is waiting there, already filled in. Nothing
                  reaches me until you hit send.
                </p>
                <p className="text-ash text-[15px] mb-6">
                  If nothing opened, email{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-sodium underline underline-offset-4"
                  >
                    {EMAIL}
                  </a>{" "}
                  directly.
                </p>
                <button
                  type="button"
                  onClick={() => setHandoff(null)}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash hover:text-chalk transition-colors"
                >
                  ← Back to the form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className={fieldLabel}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={fieldLabel}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={fieldLabel}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="The role, the team, or the problem you're trying to solve."
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 rounded bg-sodium text-void font-mono text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-sodium/85 transition-colors"
                >
                  Open in email app
                </button>

                <p className="font-mono text-[11px] text-ash leading-relaxed">
                  This fills the message into your own email app — nothing is
                  sent until you send it there.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
