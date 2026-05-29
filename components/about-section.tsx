"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Python",
  "C++",
  "Scikit-learn",
  "XGBoost",
  "Pandas",
  "NumPy",
  "HTML & CSS",
  "GitHub",
  "Machine Learning",
  "Data Visualization",
  "Model Deployment",
];

const counters = [
  { label: "AI Projects", value: "05" },
  { label: "Internships", value: "02" },
  { label: "Deployments", value: "03" },
  { label: "Data Pipelines", value: "07" },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                I&apos;m Rohit Kumar, an AI/ML Engineer and  Full Stack Developer passionate about building intelligent, scalable, and user-focused digital solutions.

              </p>
              <p className="text-base leading-8 text-muted-foreground">
                My work combines machine learning, Python development, and modern frontend technologies to create clean, efficient, and future-ready applications that solve real-world problems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {counters.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl"
                >
                  <p className="text-3xl font-semibold text-white">{stat.value}+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-300/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/10 backdrop-blur-xl"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Technical specialties</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-muted-foreground transition hover:border-cyan-300/40 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
