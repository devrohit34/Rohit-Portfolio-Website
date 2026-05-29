"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Generative AI for All",
    issuer: "Physics Wallah × Microsoft",
    date: "April 2026",
    href: "https://drive.google.com/file/d/1vM_USIesQrJcAxutZF_cjGqK4QW-_CMT/view?usp=drivesdk",
  },
  {
    title: "AI - Business Intelligence Analyst (SSC/Q8102)",
    issuer: "Skill India (NSDC)",
    date: "April 2025",
    href: "https://drive.google.com/file/d/1swGC18QNajqJ_VJYqpkN3QKK1vrzlbDZ/view?usp=drivesdk",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "Infosys Springboard",
    date: "March 2025",
    href: "https://drive.google.com/file/d/1bj2O2mxTRN6UJJXYXJo6TL3msP-92iXQ/view?usp=drivesdk",
  },
];

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono">07.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certifications</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className={`group transition-all ${cert.premium ? 'rounded-xl border border-cyan-400/20 bg-slate-950/80 p-4 shadow-[0_28px_80px_-50px_rgba(34,211,238,0.55)] backdrop-blur-xl hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-950/95 max-w-[420px] mx-auto' : 'rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl hover:-translate-y-1 hover:border-primary/40'}`}
            >
              <div className={cert.premium ? 'flex items-start gap-4' : 'flex items-center justify-between gap-3 mb-6'}>
                <div className={`rounded-3xl p-3 shadow-lg ${cert.premium ? 'bg-cyan-500/10 text-cyan-200 shadow-cyan-500/20' : 'bg-cyan-400/10 text-cyan-300 shadow-cyan-400/10'}`}>
                  <Award size={20} />
                </div>
                {cert.premium ? (
                  <div className="ml-auto rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-cyan-200/80">
                    {cert.date}
                  </div>
                ) : (
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200/80">
                    {cert.date}
                  </div>
                )}
              </div>
              {cert.previewImage ? (
                <div className={cert.premium ? 'mb-4 flex items-center gap-4' : 'mb-6'}>
                  <div className="w-[112px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/65 shadow-[0_0_30px_rgba(56,189,248,0.12)] transition-transform duration-500 group-hover:scale-[1.01]">
                    <img
                      src={cert.previewImage}
                      alt={`${cert.title} certificate preview`}
                      className="h-[90px] w-full object-cover"
                    />
                  </div>
                  {cert.premium ? (
                    <div className="flex-1 space-y-2">
                      <h3 className="text-base font-semibold text-foreground leading-6">{cert.title}</h3>
                      <p className="text-sm text-slate-300/90">{cert.issuer}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}
              {!cert.premium ? <h3 className="text-lg font-semibold text-foreground mb-3">{cert.title}</h3> : null}
              {!cert.premium ? <p className="text-sm leading-relaxed text-muted-foreground mb-4">{cert.issuer}</p> : null}
              {cert.description ? (
                <p className={cert.premium ? 'mb-4 text-sm leading-6 text-slate-300/85' : 'mb-5 text-sm leading-6 text-slate-300/90'}>{cert.description}</p>
              ) : null}
              <div className={cert.premium ? 'flex flex-wrap items-center justify-between gap-3' : 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'}>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-cyan-200/80">
                  <ShieldCheck size={14} /> Verified
                </div>
                {cert.href ? (
                  <Button asChild variant="secondary" size="sm" className={cert.premium ? 'bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20' : ''}>
                    <a href={cert.href} target="_blank" rel="noreferrer">
                      View Certificate
                    </a>
                  </Button>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
