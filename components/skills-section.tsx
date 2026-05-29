"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Database, Sparkles, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    icon: Code2,
    items: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "HTML / CSS", level: 75 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    items: [
      { name: "Scikit-learn", level: 88 },
      { name: "XGBoost", level: 84 },
      { name: "Random Forest", level: 82 },
      { name: "Pandas / NumPy", level: 90 },
    ],
  },
  {
    title: "AI & Data",
    icon: Database,
    items: [
      { name: "Data Engineering", level: 80 },
      { name: "Feature Engineering", level: 88 },
      { name: "Model Evaluation", level: 86 },
      { name: "Visualization", level: 78 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-lg shadow-primary/10">
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">Modern AI & full-stack tools</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-foreground">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            { label: "AI Models Built", value: 5, icon: Sparkles },
            { label: "Projects Delivered", value: 12, icon: Layers },
            { label: "Data Pipelines", value: 7, icon: Database },
            { label: "Codebase Iterations", value: 420, icon: Code2 },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-cyan-300 shadow-lg shadow-cyan-400/10">
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-3xl font-semibold text-foreground">{stat.value}+</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
