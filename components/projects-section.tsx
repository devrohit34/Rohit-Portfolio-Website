"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Github, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const featuredProjects = [
  {
    title: "AI-Based Regional Climate Change Impact Prediction",
    description:
      "Built an ML pipeline on 10,000+ data points to predict climate indicators using XGBoost and Random Forest, with SHAP-based interpretability. Performed preprocessing, feature engineering, and visualization using Pandas and Matplotlib.",
    tech: ["Python", "Pandas", "Matplotlib", "XGBoost", "Random Forest", "SHAP"],
    tags: ["AI/ML", "Data", "Prediction"],
    github: "https://github.com/devrohit34/AI-Based-Regional-Climate-Change-Impact-Prediction",
    period: "January 2026 - April 2026",
    image: "/images/climate-change-preview.jpg",
  },
  {
    title: "Student Performance Analyzer",
    description:
      "Built ML models on 1,000+ records to predict student performance with preprocessing and feature engineering. Evaluated Logistic Regression, Decision Tree, and Random Forest; deployed via Streamlit dashboard for interactive predictions.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "ML Models"],
    tags: ["AI/ML", "Dashboard", "Education"],
    github: "https://github.com/devrohit34/Student-Performance-Analyzer",
    period: "August 2025 - December 2025",
    image: "/images/student-performance-preview.jpg",
  },
];

const otherProjects = [
  {
    title: "Student Management System",
    description: "Engineered a comprehensive Student Management System using Object-Oriented Programming principles, improving data organization and retrieval efficiency.",
    tech: ["C++", "OOP", "DSA"],
    tags: ["C++", "System"],
    github: "https://github.com/devrohit34/Student-Management-System",
  },
  {
    title: "Detect Spam SMS Message",
    description: "Machine learning model to detect and classify spam SMS messages using NLP techniques and classification algorithms for real-time spam filtering.",
    tech: ["Python", "NLP", "Scikit-learn", "ML"],
    tags: ["AI/ML", "NLP"],
    github: "https://github.com/devrohit34/DETECT-SPAM-SMS-MESSAGE",
  },
  {
    title: "Generative AI Web Apps",
    description: "Collection of web applications powered by Generative AI, featuring text generation, image creation, and interactive AI-driven user experiences.",
    tech: ["Python", "Generative AI", "Streamlit", "APIs"],
    tags: ["AI/ML", "Generative"],
    github: "https://github.com/devrohit34/Generative-AI-Web-Apps",
  },
  {
    title: "Resume Analyzer",
    description: "AI-powered resume analysis tool that extracts key information, provides skill matching, and offers suggestions for improving resume quality.",
    tech: ["Python", "NLP", "ML", "Streamlit"],
    tags: ["AI/ML", "NLP"],
    github: "https://github.com/devrohit34/Resume-Analyzer",
  },
];

const filters = [
  "All",
  ...Array.from(
    new Set(
      [...featuredProjects, ...otherProjects].flatMap((project) => project.tags)
    )
  ),
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredFeaturedProjects = useMemo(() => {
    if (activeFilter === "All") return featuredProjects;
    return featuredProjects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-primary font-mono">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === filter
                    ? "border-cyan-300 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-32 mb-24">
            {filteredFeaturedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-card shadow-xl mb-4 group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 760px"
                      className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground/70 font-mono text-xs mb-3">{project.period}</p>
                  <ul className="flex flex-wrap gap-2 mb-4 text-xs font-mono text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech} className="bg-card px-2 py-1 rounded">{tech}</li>
                    ))}
                  </ul>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                    <span className="text-sm">View on GitHub</span>
                  </a>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}>
                  {/* Project Image */}
                  <div
                    className={`md:col-span-7 ${
                      index % 2 === 1 ? "md:col-start-6 md:order-2" : ""
                    }`}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="relative block aspect-video rounded-2xl overflow-hidden bg-card shadow-xl group"
                    >
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 760px"
                        className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </motion.a>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`md:col-span-7 z-10 ${
                      index % 2 === 1
                        ? "md:col-start-1 md:row-start-1 md:text-left"
                        : "md:col-start-6 md:text-right"
                    }`}
                  >
                    <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <div className="bg-card/95 backdrop-blur-sm p-5 rounded-lg shadow-xl mb-4 border border-border">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <p className="text-muted-foreground/70 font-mono text-xs mb-3">{project.period}</p>
                    <ul
                      className={`flex flex-wrap gap-2 mb-4 text-xs font-mono text-muted-foreground ${
                        index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <li key={tech} className="bg-background/50 px-2 py-1 rounded">{tech}</li>
                      ))}
                    </ul>
                    <div
                      className={`flex gap-4 ${
                        index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-foreground">Other Noteworthy Projects</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-2 group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Folder className="text-primary" size={40} />
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
