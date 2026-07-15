"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/jageshfartiyal",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jagesh-fartiyal-23405918b",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:jageshfartiyal9720@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-shell text-white/60 font-mono text-xs border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        {/* Status */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
            main — build passing
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline">Uttarakhand, IN</span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-white/50 hover:text-white transition-colors duration-200"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        <span className="text-white/40">
          © {new Date().getFullYear()} Jagesh Singh Fartiyal
        </span>
      </div>
    </footer>
  );
}
