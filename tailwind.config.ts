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
        sans: ["var(--font-schibsted)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "monospace"],
      },
      colors: {
        void: "rgb(var(--c-void) / <alpha-value>)",
        panel: {
          DEFAULT: "rgb(var(--c-panel) / <alpha-value>)",
          raised: "rgb(var(--c-panel-2) / <alpha-value>)",
        },
        edge: {
          DEFAULT: "rgb(var(--c-edge) / <alpha-value>)",
          strong: "rgb(var(--c-edge-strong) / <alpha-value>)",
        },
        chalk: "rgb(var(--c-chalk) / <alpha-value>)",
        ash: "rgb(var(--c-ash) / <alpha-value>)",
        sodium: "rgb(var(--c-sodium) / <alpha-value>)",
        verify: "rgb(var(--c-verify) / <alpha-value>)",
        strike: "rgb(var(--c-strike) / <alpha-value>)",
      },
      borderRadius: {
        // Precision reads through tight corners — nothing here is pill-soft
        DEFAULT: "4px",
        sm: "3px",
        md: "5px",
        lg: "6px",
        xl: "8px",
      },
      boxShadow: {
        bloom: "0 0 80px -20px var(--bloom)",
        lift: "0 16px 44px -20px var(--drop)",
      },
      fontSize: {
        micro: ["10px", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin-reverse 26s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
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
