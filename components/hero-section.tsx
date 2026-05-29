"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/devrohit34", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/devrohit32", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rohit_kumar_0417/", label: "Instagram" },
  { icon: Mail, href: "mailto:rohitkumar347400@gmail.com", label: "Email" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_24%)]" />
      <div className="container mx-auto grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" />
            AI/ML Engineer & Full Stack Developer
          </div>

          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Rohit Kumar
            </h1>
            <p className="text-2xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-cyan-300 via-violet-400 to-indigo-300 bg-clip-text md:text-4xl">
              Building Intelligent AI Solutions & Modern Full Stack Experiences.
            </p>
            <p className="text-base leading-8 text-muted-foreground max-w-xl md:text-lg">
              Passionate AI/ML and Full Stack Developer focused on building intelligent, scalable, and user-friendly digital solutions using modern technologies and data-driven innovation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] max-w-2xl">
            <Button asChild className="bg-cyan-400 text-slate-950 hover:bg-cyan-300" size="lg">
              <a href="#projects">Explore Work</a>
            </Button>
            <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/10" size="lg">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Role</p>
            <div className="mt-4 text-lg font-medium text-white">
              <TypeAnimation
                sequence={[
                  "AI/ML Engineer", 2000,
                  "Full Stack Developer", 2000,
                  "AI/ML Engineer", 2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-md justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-indigo-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-1">
              <div className="relative h-[420px] w-[420px] overflow-hidden rounded-[2rem] bg-slate-900">
                <Image
                  src="/images/rohit-kumar-formal.jpg"
                  alt="Rohit Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
        aria-label="Scroll down"
      >
        Scroll to About
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
