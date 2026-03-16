"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/jageshfartiyal",
    label: "GitHub",
    color: "hover:text-neon-cyan",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jagesh-fartiyal-23405918b",
    label: "LinkedIn",
    color: "hover:text-neon-cyan",
  },
  {
    icon: Mail,
    href: "mailto:jageshfartiyal9720@gmail.com",
    label: "Email",
    color: "hover:text-neon-pink",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/40 text-sm flex items-center gap-2"
        >
          <span className="font-bold text-white/60 tracking-widest">JAGESH FARTIYAL</span>
          <span>·</span>
          <span>Built with Next.js &</span>
          <Heart size={12} className="text-neon-pink fill-neon-pink" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-5"
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`text-white/40 ${social.color} transition-colors duration-200`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/25 text-xs font-mono"
        >
          © {new Date().getFullYear()} — All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
