"use client";

import TiltCard from "@/components/TiltCard";

// Lifted off the stage on the Z axis so they float in front of the figure
const orbitChips = [
  { text: "React", tint: "text-sodium", pos: "-left-5 top-8", z: 62, delay: "0s" },
  {
    text: "Electron",
    tint: "text-chalk",
    pos: "-right-8 top-24",
    z: 54,
    delay: "1.2s",
  },
  {
    text: "Node.js",
    tint: "text-verify",
    pos: "-left-3 bottom-8",
    z: 58,
    delay: "0.6s",
  },
];

/*
  Sits on the page surface, which flips between near-black and bone with the
  theme, so the silhouette carries a theme-aware outline rather than relying
  on fill contrast. The visor is the focal point in both.
*/
function AvatarFigure() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      role="img"
      aria-label="Stylized avatar of Jagesh wearing a holographic visor and headphones"
    >
      <defs>
        <linearGradient id="av-visor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFB627" />
          <stop offset="100%" stopColor="#5EE6A8" />
        </linearGradient>
        <linearGradient id="av-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4E5545" />
          <stop offset="100%" stopColor="#31362A" />
        </linearGradient>
      </defs>

      {/* shoulders / hoodie */}
      <path
        d="M38 196 C38 152 66 132 100 132 C134 132 162 152 162 196 Z"
        fill="url(#av-hoodie)"
        className="stroke-edge-strong"
        strokeWidth="1.5"
      />
      <path
        d="M62 160 C70 144 130 144 138 160"
        stroke="#727B5E"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* neck & head */}
      <rect x="86" y="112" width="28" height="26" rx="10" fill="#C98F5F" />
      <rect
        x="58"
        y="38"
        width="84"
        height="86"
        rx="36"
        fill="#E3B181"
        className="stroke-edge-strong"
        strokeWidth="1.5"
      />

      {/* hair */}
      <path
        d="M58 76 C54 42 78 28 100 28 C122 28 146 42 142 76 C138 56 122 46 100 46 C78 46 62 56 58 76 Z"
        fill="#2C3126"
      />

      {/* headphones — a shade lighter than the hair so they read as separate */}
      <path
        d="M52 70 C52 40 148 40 148 70"
        stroke="#4A5140"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="54" cy="82" r="10" fill="#4A5140" />
      <circle cx="146" cy="82" r="10" fill="#4A5140" />

      {/* holo visor */}
      <rect x="62" y="66" width="76" height="28" rx="14" fill="url(#av-visor)" />
      <path
        d="M70 74 L92 74"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* smile */}
      <path
        d="M88 106 Q100 114 112 106"
        stroke="#A8703F"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Avatar3D() {
  return (
    <TiltCard max={10} glare={false}>
      <div
        className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* the page's light source, pooled behind the figure */}
        <div className="absolute inset-6 rounded-full bg-sodium/15 blur-2xl" />

        {/* orbit rings, laid flat in 3D so they read as a plinth */}
        <div className="absolute inset-3" style={{ transform: "rotateX(62deg)" }}>
          <div className="w-full h-full rounded-full border-2 border-dashed border-sodium/45 animate-spin-slow" />
        </div>
        <div className="absolute inset-0" style={{ transform: "rotateX(66deg)" }}>
          <div className="w-full h-full rounded-full border-2 border-verify/30 animate-spin-slower" />
        </div>

        <div
          style={{ transform: "translateZ(42px)" }}
          className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48"
        >
          <AvatarFigure />
        </div>

        {orbitChips.map((chip) => (
          <div
            key={chip.text}
            style={{ transform: `translateZ(${chip.z}px)` }}
            className={`absolute ${chip.pos}`}
          >
            <span
              style={{ animationDelay: chip.delay }}
              className={`animate-float inline-block font-mono text-[10px] px-2.5 py-1 rounded border border-edge bg-panel ${chip.tint}`}
            >
              {chip.text}
            </span>
          </div>
        ))}
      </div>
    </TiltCard>
  );
}
