"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  {
    role: "Python Full Stack Developer Intern",
    company: "AICTE Eduskills",
    period: "Jan 2026 - Mar 2026",
    description:
      "Built full-stack Python applications, integrated machine learning workflows, and delivered polished UX using modern front-end tooling.",
    badge: "AI/ML Intern",
    href: "https://drive.google.com/file/d/14zShvyQ-yxoAobAHqAfObLPzakfS83K_/view?usp=drivesdk",
  },
  {
    role: "Software Development Intern",
    company: "RCPL",
    period: "May 2025 - Jul 2025",
    description:
      "Developed a Student Management System in C++ and improved performance and maintainability through clean architecture.",
    badge: "C++ & DSA",
    href: "https://drive.google.com/file/d/160zm9Mc7xzIvkdJ2muedU8eU7a79JZCT/view?usp=drivesdk",
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Internship Experience</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="relative before:absolute before:top-12 before:left-5 before:h-[calc(100%-3rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500 before:via-violet-500 before:to-indigo-500 before:opacity-40 md:before:left-1/2 md:before:translate-x-0">
          {timeline.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className={`relative mb-12 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:w-[48%] ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
            >
              <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/50 px-3 py-1 text-primary">
                  <CalendarDays size={16} /> {item.period}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.badge}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  <Sparkles size={14} /> Case study-ready deliverable
                </div>
                {item.href ? (
                  <Button asChild variant="secondary" size="sm">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      View Certificate
                    </a>
                  </Button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
