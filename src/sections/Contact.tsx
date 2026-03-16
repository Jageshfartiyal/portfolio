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
    // In production, connect to a backend / emailjs / formspree
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

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
          <span className="text-xs font-mono text-neon-cyan tracking-[0.3em] uppercase">
            06. Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent max-w-xs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Let&apos;s build something{" "}
            <span className="gradient-text">cool</span> together 🚀
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Email */}
            <motion.a
              href="mailto:jageshfartiyal9720@gmail.com"
              className="glass-card border border-neon-cyan/20 rounded-2xl p-5 group hover:glow-cyan hover:border-neon-cyan/40 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-neon-cyan" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/40 font-mono mb-0.5">Email</p>
                  <p className="text-white text-sm font-semibold truncate">
                    jageshfartiyal9720@gmail.com
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/20 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/jagesh-fartiyal-23405918b"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card border border-neon-pink/20 rounded-2xl p-5 group hover:glow-pink hover:border-neon-pink/40 transition-all duration-300"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex items-center justify-center shrink-0">
                  <Linkedin size={18} className="text-neon-pink" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-white/40 font-mono mb-0.5">LinkedIn</p>
                  <p className="text-white text-sm font-semibold">jagesh-fartiyal</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-white/20 group-hover:text-neon-pink group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.a>

            {/* Phone */}
            <motion.div
              className="glass-card border border-neon-purple/20 rounded-2xl p-5"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-mono mb-0.5">Phone</p>
                  <p className="text-white text-sm font-semibold">+91 7668966682</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="glass-card border border-white/10 rounded-2xl p-5"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white/50" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-mono mb-0.5">Location</p>
                  <p className="text-white/70 text-sm font-semibold">Uttarakhand, India 🇮🇳</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card border border-white/8 rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-neon-green font-semibold">Message sent!</p>
                <p className="text-white/40 text-sm mt-1">
                  I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-mono text-white/40 mb-2 block">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-neon-cyan/50 focus:bg-neon-cyan/3 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-white/40 mb-2 block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-neon-cyan/50 focus:bg-neon-cyan/3 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-white/40 mb-2 block">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hey Jagesh, let's build something amazing..."
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-neon-cyan/50 focus:bg-neon-cyan/3 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-pink text-[#07070F] font-bold text-sm tracking-wider hover:shadow-neon-cyan transition-all duration-300 mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={15} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
