"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
