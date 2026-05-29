"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/devrohit34", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/devrohit32", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rohit_kumar_0417/", label: "Instagram" },
  { icon: Mail, href: "mailto:rohitkumar347400@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Built with <Heart size={14} className="text-primary" /> by Rohit Kumar
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground font-mono"
          >
            © {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
