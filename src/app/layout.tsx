import type { Metadata, Viewport } from "next";
import { Archivo, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Industrial grotesk — signage weight, used large and sparingly
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// Prose
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Machine data — manifests, diffs, labels, versions
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jagesh Singh Fartiyal — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 4+ years of experience building enterprise SaaS and cross-platform desktop applications with React, TypeScript, Node.js, NestJS, Electron, and MongoDB. Owns the signed release pipeline for a desktop app used by 10,500+ people daily.",
  keywords: [
    "Jagesh Singh Fartiyal",
    "Jagesh Fartiyal",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Electron Developer",
    "NestJS Developer",
    "TypeScript",
    "MongoDB",
    "Uttarakhand",
    "India",
  ],
  authors: [{ name: "Jagesh Singh Fartiyal" }],
  creator: "Jagesh Singh Fartiyal",
  openGraph: {
    title: "Jagesh Singh Fartiyal — Full Stack Software Engineer",
    description:
      "4+ years building enterprise SaaS and cross-platform desktop apps with React, Node.js, NestJS, and Electron. Cut page loads from 5+ seconds to under 1 second on a platform serving 10,500+ daily users.",
    type: "website",
    locale: "en_US",
    siteName: "Jagesh Singh Fartiyal — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagesh Singh Fartiyal — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer — React • Node.js • Electron. 4+ years shipping enterprise SaaS and desktop products.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C0B",
};

// Runs before paint so the stored theme applies without a flash.
// Exactly one of `dark` / `light` is always present; dark is the default.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t!=="light":true;var c=document.documentElement.classList;c.toggle("dark",d);c.toggle("light",!d);}catch(e){document.documentElement.classList.add("dark");}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jagesh Singh Fartiyal",
  jobTitle: "Full Stack Software Engineer",
  email: "mailto:jageshfartiyal9720@gmail.com",
  telephone: "+91-7668966682",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Aapna Infotheek Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Amrapali Institute of Technology and Science",
  },
  sameAs: [
    "https://www.linkedin.com/in/jagesh-fartiyal-23405918b",
    "https://github.com/jageshfartiyal",
  ],
  knowsAbout: [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Electron",
    "MongoDB",
    "AWS S3",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${archivo.variable} ${schibsted.variable} ${plex.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
