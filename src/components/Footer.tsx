"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/jageshfartiyal", label: "GitHub" },
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
    <footer className="relative border-t border-edge">
      <div className="shell px-5 md:px-10 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 font-mono text-[11px] text-ash">
        <span className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-verify breathe" />
          main — build passing
        </span>

        <div className="flex items-center gap-5 order-3 sm:order-none w-full sm:w-auto">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={social.label}
              className="text-ash hover:text-sodium transition-colors"
            >
              <social.icon size={15} />
            </a>
          ))}
        </div>

        <span>© {new Date().getFullYear()} Jagesh Singh Fartiyal</span>
      </div>
    </footer>
  );
}
