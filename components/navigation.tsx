"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "certifications",
        "contact",
      ];
      let currentSection = "hero";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-slate-950/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <motion.a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-white"
          whileHover={{ scale: 1.03 }}
        >
          Rohit.
        </motion.a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
              className={`text-sm font-medium transition-all ${
                activeSection === item.href.slice(1)
                  ? "text-cyan-300"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-white"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
          </Button>
          <div className="hidden lg:block">
            <Button asChild variant="default" size="sm" className="gap-2 px-4 py-2">
              <a
                href="https://drive.google.com/file/d/13DT1kjd7XLuqoN0tHCudZLdm2U6ON5Go/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} /> Resume
              </a>
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white shadow-lg shadow-cyan-500/10 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-950/95 border-t border-white/10 backdrop-blur-2xl"
          >
            <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-cyan-300"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild variant="default" className="w-full gap-2 px-4 py-3">
                <a
                  href="https://drive.google.com/file/d/13DT1kjd7XLuqoN0tHCudZLdm2U6ON5Go/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
