"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const educationItems = [
  {
    title: "B.Tech CSE (AI & ML)",
    institution: "Gulzar Group of Institutes",
    period: "2023 - 2027",
    score: "CGPA 8.17",
    location: "Ludhiana, Punjab",
    description: "Core focus on AI, machine learning, data science, and software engineering with real-world project experience.",
    href: "https://drive.google.com/file/d/1vPNocJq0ygsh-UWcb8cyQptaqmwZ7UIr/view?usp=drivesdk",
  },
  {
    title: "12th with Science",
    institution: "S.D. Senior Secondary School",
    period: "2021 - 2023",
    score: "77.2%",
    location: "Bihar, India",
    description: "Studied science with a strong academic focus on mathematics, physics, and chemistry, developing analytical and problem-solving skills.",
    href: "https://drive.google.com/file/d/12UUEfAWu-KS-iSmlDsxRcPIgxrMxOD3J/view?usp=drivesdk",
  },
  {
    title: "10th Standard",
    institution: "S.D. Senior Secondary School",
    period: "2020 - 2021",
    score: "83.4%",
    location: "Bihar, India",
    description: "Developed early analytical skills with an emphasis on science, mathematics, and logic.",
    href: "https://drive.google.com/file/d/1Sg7s0mq3KwaB95iKbRkj5uduPQBRnIDk/view?usp=drivesdk",
  },
];

const educationPhotos = [
  {
    src: "/images/college-building.png",
    alt: "Gulzar Group of Institutes campus building",
    caption: "Gulzar Group of Institutes",
    detail: "Main Building",
  },
  {
    src: "/images/college-campus.png",
    alt: "College campus grounds and academic atmosphere",
    caption: "Gulzar Group of Institutes",
    detail: "Campus View",
  },
];

export function EducationSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="education" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">06.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center gap-3 text-primary">
                <div className="grid h-14 w-14 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-300">
                  {index === 0 ? <GraduationCap size={28} /> : <BookOpen size={28} />}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{item.period}</p>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.institution}</p>
              <div className="rounded-3xl bg-slate-950/70 px-4 py-3 text-sm text-primary shadow-inner shadow-cyan-500/10">
                {item.score}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              {item.href ? (
                <div className="mt-6">
                  <Button asChild variant="secondary" size="sm">
                    <a href={item.href} target="_blank" rel="noreferrer">
                     View Marksheet
                    </a>
                  </Button>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12"
        >
          <div className="mb-6 flex items-center gap-3 text-cyan-200/80">
            <div className="h-10 w-10 rounded-3xl bg-cyan-500/10 grid place-items-center text-cyan-300 shadow-lg shadow-cyan-500/10">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">Academic showcase</p>
              <h3 className="text-xl font-semibold text-foreground">Campus Highlights</h3>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {educationPhotos.map((photo) => (
              <motion.div
                key={photo.src}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-[1.5rem] border border-cyan-400/10 bg-slate-950/70 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.45)] transition-transform duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-white/10 bg-slate-950/80 px-4 py-4">
                  <p className="text-sm font-semibold text-foreground">{photo.caption}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {photo.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
