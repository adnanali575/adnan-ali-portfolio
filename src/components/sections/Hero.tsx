"use client";

import { Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SimpleAnimatedHero } from "@/components/SimpleAnimatedHero";
import { UpworkIcon } from "@/components/icons/UpworkIcon";
import { TeamsIcon } from "@/components/icons/TeamsIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-blue-500/5" />
      <div className="absolute inset-0 bg-linear-to-tl from-blue-600/5 via-transparent to-sky-500/5 animate-pulse" />

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-sky-500/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <div className="space-y-4">
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="relative">
                  <span className="text-blue-500">Adnan Ali</span>
                </span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I build fast, modern, and scalable web apps.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
                title="View My Work"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 border border-border hover:bg-accent text-foreground font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                title="Get In Touch"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://github.com/adnanali575"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 group hover:scale-110"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~019ce1d5335435b63e?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 group hover:scale-110"
                aria-label="Upwork"
                title="Upwork"
              >
                <UpworkIcon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="https://teams.microsoft.com/l/chat/0/0?users=adnanali25753@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 group hover:scale-110"
                aria-label="Microsoft Teams"
                title="Microsoft Teams"
              >
                <TeamsIcon className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a
                href="mailto:adnanali25753@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 group hover:scale-110"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Animation */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <SimpleAnimatedHero className="w-full max-w-md lg:max-w-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
