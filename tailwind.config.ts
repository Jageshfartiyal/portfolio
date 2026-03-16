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
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        bg: "#07070F",
        "bg-2": "#0D0D1A",
        neon: {
          cyan: "#00F5FF",
          pink: "#FF00E5",
          purple: "#9D00FF",
          green: "#00FF94",
        },
        glass: "rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "neon-gradient": "linear-gradient(135deg, #00F5FF, #FF00E5)",
        "neon-gradient-2": "linear-gradient(135deg, #9D00FF, #00F5FF)",
      },
      animation: {
        "glitch": "glitch 1s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { textShadow: "2px 0 #00F5FF, -2px 0 #FF00E5" },
          "25%": { textShadow: "-2px 0 #00F5FF, 2px 0 #FF00E5" },
          "50%": { textShadow: "2px 2px #9D00FF, -2px -2px #00F5FF" },
          "75%": { textShadow: "-2px -2px #FF00E5, 2px 2px #9D00FF" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 5px #00F5FF, 0 0 20px #00F5FF40" },
          "50%": { boxShadow: "0 0 20px #00F5FF, 0 0 60px #00F5FF60" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 15px #00F5FF50, 0 0 40px #00F5FF20",
        "neon-pink": "0 0 15px #FF00E550, 0 0 40px #FF00E520",
        "neon-purple": "0 0 15px #9D00FF50, 0 0 40px #9D00FF20",
        "glass": "0 8px 32px rgba(0,0,0,0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
