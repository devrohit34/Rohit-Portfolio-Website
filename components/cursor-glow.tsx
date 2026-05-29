"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handlePointerMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-40 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl mix-blend-screen"
      animate={{ x: position.x - 96, y: position.y - 96 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
    />
  );
}
