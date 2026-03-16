import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jagesh Fartiyal — Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack. Building fast, scalable web applications with React, Node.js, MongoDB, and more.",
  keywords: [
    "Jagesh Fartiyal",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "Web Developer",
    "Uttarakhand",
    "India",
  ],
  authors: [{ name: "Jagesh Fartiyal" }],
  creator: "Jagesh Fartiyal",
  openGraph: {
    title: "Jagesh Fartiyal — Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack. Building fast, scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagesh Fartiyal — Full Stack Developer",
    description: "Full Stack Developer | MERN Stack Specialist",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
