"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Send, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:jageshfartiyal9720@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full bg-paper border border-line rounded-xl px-4 py-3 text-ink text-sm placeholder-muted/50 focus:outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 transition-all";

  return (
    <section id="contact" ref={ref} className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-[11px] font-mono text-muted tracking-[0.3em] uppercase">
            Contact
          </span>
          <div className="flex-1 h-px bg-line max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-4">
            Let&apos;s build something{" "}
            <span className="text-gradient">reliable</span> together.
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Have a role or a project in mind? My inbox is open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <motion.a
              href="mailto:jageshfartiyal9720@gmail.com"
              className="card shadow-card p-5 group hover:shadow-lift hover:border-cobalt/40 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-cobalt-soft flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-cobalt" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted font-mono mb-0.5">Email</p>
                  <p className="text-ink text-sm font-semibold truncate">
                    jageshfartiyal9720@gmail.com
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted/40 group-hover:text-cobalt group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/jagesh-fartiyal-23405918b"
              target="_blank"
              rel="noopener noreferrer"
              className="card shadow-card p-5 group hover:shadow-lift hover:border-cobalt/40 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-cobalt-soft flex items-center justify-center shrink-0">
                  <Linkedin size={18} className="text-cobalt" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted font-mono mb-0.5">LinkedIn</p>
                  <p className="text-ink text-sm font-semibold">jagesh-fartiyal</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted/40 group-hover:text-cobalt group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>

            {/* Phone */}
            <motion.div className="card shadow-card p-5" whileHover={{ x: 4 }}>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-mint-soft flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-mint-deep" />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">Phone</p>
                  <p className="text-ink text-sm font-semibold">+91 7668966682</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div className="card shadow-card p-5" whileHover={{ x: 4 }}>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-coral-soft flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-coral-deep" />
                </div>
                <div>
                  <p className="text-xs text-muted font-mono mb-0.5">Location</p>
                  <p className="text-ink text-sm font-semibold">
                    Uttarakhand, India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card shadow-card p-8"
          >
            <h3 className="font-display text-lg font-bold text-ink mb-6">
              Send a message
            </h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-3">📬</div>
                <p className="text-mint-deep font-semibold">
                  Opening your email client…
                </p>
                <p className="text-muted text-sm mt-1">
                  Hit send there and I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono text-muted mb-2 block"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Hi Jagesh, I'd like to talk about…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-cobalt text-white font-semibold text-sm hover:bg-cobalt-dark dark:shadow-glow transition-colors duration-200 mt-2"
                >
                  <Send size={15} />
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
