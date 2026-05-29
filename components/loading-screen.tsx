"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex flex-col items-center gap-6 text-center px-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_80px_rgba(56,189,248,0.35)]">
              <div className="h-14 w-14 rounded-full border border-white/20 bg-slate-950/80 animate-pulse" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">Initializing AI portfolio</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Rohit Kumar</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Crafting modern AI & ML experiences with glassmorphism and motion.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
