"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rohitkumar347400@gmail.com",
    href: "mailto:rohitkumar347400@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ludhiana, Punjab 141401",
    href: "#",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-7050855042",
    href: "tel:+917050855042",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/devrohit34",
    href: "https://github.com/devrohit34",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/devrohit32",
    href: "https://linkedin.com/in/devrohit32",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div ref={ref} className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              {"I'm currently looking for internship and full-time opportunities in AI/ML and Full Stack Development. Whether you have a project idea, job opportunity, or just want to connect, feel free to reach out!"}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="pt-4 border-t border-border"
              >
                <p className="text-sm text-muted-foreground mb-4">Find me online</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <social.icon size={18} />
                        </div>
                      </a>
                    ))}
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        href="https://wa.me/917050855042"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-emerald-500/15 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.18)] transition-all duration-300 hover:bg-emerald-500/25 hover:shadow-[0_0_28px_rgba(16,185,129,0.28)]"
                      >
                        <SiWhatsapp className="h-5 w-5" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={4} className="bg-foreground text-background">
                      Chat on WhatsApp
                    </TooltipContent>
                  </Tooltip>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="pt-4"
              >
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <a href="https://drive.google.com/file/d/13DT1kjd7XLuqoN0tHCudZLdm2U6ON5Go/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Send className="text-primary" size={24} />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                      <p className="text-muted-foreground">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            required
                            placeholder="Your name"
                            className="bg-secondary border-border focus:border-primary"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="bg-secondary border-border focus:border-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          required
                          placeholder="What's this about?"
                          className="bg-secondary border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Your message..."
                          rows={5}
                          className="bg-secondary border-border focus:border-primary resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={16} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
