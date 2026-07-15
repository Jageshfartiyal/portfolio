import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument)", "sans-serif"],
        display: ["var(--font-bricolage)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        shell: "rgb(var(--c-shell) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        cobalt: {
          DEFAULT: "rgb(var(--c-cobalt) / <alpha-value>)",
          dark: "rgb(var(--c-cobalt-dark) / <alpha-value>)",
          soft: "var(--c-cobalt-soft)",
        },
        coral: {
          DEFAULT: "rgb(var(--c-coral) / <alpha-value>)",
          deep: "rgb(var(--c-coral-deep) / <alpha-value>)",
          soft: "var(--c-coral-soft)",
        },
        mint: {
          DEFAULT: "rgb(var(--c-mint) / <alpha-value>)",
          deep: "rgb(var(--c-mint-deep) / <alpha-value>)",
          soft: "var(--c-mint-soft)",
        },
        violet: "rgb(var(--c-violet) / <alpha-value>)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(5,8,18,0.05), 0 8px 24px -8px rgba(5,8,18,0.10)",
        lift: "0 2px 4px rgba(5,8,18,0.06), 0 16px 40px -12px rgba(5,8,18,0.20)",
        window: "0 24px 60px -20px rgba(5,8,18,0.45)",
        glow: "0 8px 32px -6px rgb(var(--c-cobalt) / 0.45)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin 16s linear infinite",
        "spin-slower": "spin-reverse 24s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
