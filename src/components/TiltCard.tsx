"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/*
  Used exactly once, on the signature card — a physical object is the one
  thing on this page that has earned the right to tilt. The rake light is
  sodium, matching the page's single light source.
*/
type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees */
  max?: number;
  /**
   * Specular rake across the surface. Only meaningful on a flat card face —
   * on a shape with no border radius it clips to a visible square, so turn
   * it off for free-standing objects.
   */
  glare?: boolean;
};

export default function TiltCard({
  children,
  className = "",
  max = 7,
  glare = true,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 150,
    damping: 20,
  });
  const rakeX = useTransform(px, [0, 1], ["10%", "90%"]);
  const rakeY = useTransform(py, [0, 1], ["10%", "90%"]);
  const rake = useMotionTemplate`radial-gradient(420px circle at ${rakeX} ${rakeY}, rgb(var(--c-sodium) / 0.10), transparent 60%)`;

  if (reduce) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: rake }}
          />
        )}
      </motion.div>
    </div>
  );
}
