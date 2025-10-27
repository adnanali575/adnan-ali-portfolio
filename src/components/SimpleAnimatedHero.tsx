"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Code, 
  Database, 
  FileText, 
  Palette, 
  Zap, 
  Globe, 
  Terminal,
  GitBranch,
  Cpu,
  Layers
} from "lucide-react";

interface SimpleAnimatedHeroProps {
  className?: string;
}

export function SimpleAnimatedHero({ className = "" }: SimpleAnimatedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl blur-xl" />
      
      {/* Animation container */}
      <div className="relative z-10 bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-2xl">
        <div className="w-full h-80 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Developer workspace */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Main monitor/code editor */}
              <motion.div
                className="relative w-56 h-40 bg-linear-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-slate-600/50 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.2)",
                    "0 0 40px rgba(59, 130, 246, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                {/* Code editor content */}
                <div className="p-3 space-y-1">
                  {/* File tabs */}
                  <div className="flex space-x-1 mb-2">
                    <div className="w-16 h-4 bg-blue-500/30 rounded text-xs flex items-center justify-center text-blue-300">App.tsx</div>
                    <div className="w-16 h-4 bg-slate-700/50 rounded text-xs flex items-center justify-center text-slate-400">index.js</div>
                  </div>
                  
                  {/* Code lines */}
                  {[
                    { text: "const portfolio = {", indent: 0, color: "text-blue-400" },
                    { text: "  name: 'Adnan Ali',", indent: 2, color: "text-green-400" },
                    { text: "  role: 'Full Stack Dev',", indent: 2, color: "text-green-400" },
                    { text: "  skills: ['React', 'Node'],", indent: 2, color: "text-yellow-400" },
                    { text: "  build: () => awesome()", indent: 2, color: "text-purple-400" },
                    { text: "};", indent: 0, color: "text-blue-400" },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center ${line.color} font-mono text-xs`}
                      style={{ paddingLeft: `${line.indent * 8}px` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.3, duration: 0.5 }}
                    >
                      <span className="text-slate-500 mr-2">{i + 1}</span>
                      {line.text}
                      {i === 5 && (
                        <motion.span
                          className="w-1 h-4 bg-blue-400 ml-1"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <div className="absolute inset-0">
                {[
                  { icon: Code, label: "React", x: 15, y: 10, color: "text-blue-400" },
                  { icon: Database, label: "Node.js", x: 80, y: 20, color: "text-green-400" },
                  { icon: FileText, label: "TypeScript", x: 10, y: 65, color: "text-blue-300" },
                  { icon: Palette, label: "CSS", x: 85, y: 55, color: "text-pink-400" },
                  { icon: Zap, label: "Vite", x: 50, y: 80, color: "text-yellow-400" },
                  { icon: Globe, label: "Web", x: 25, y: 40, color: "text-cyan-400" },
                  { icon: Terminal, label: "CLI", x: 70, y: 70, color: "text-green-300" },
                  { icon: GitBranch, label: "Git", x: 60, y: 5, color: "text-orange-400" },
                  { icon: Cpu, label: "API", x: 40, y: 15, color: "text-purple-400" },
                  { icon: Layers, label: "Stack", x: 35, y: 60, color: "text-indigo-400" },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-slate-600/30 shadow-lg"
                    style={{
                      left: `${tech.x}%`,
                      top: `${tech.y}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [0.9, 1.05, 0.9],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <tech.icon className={`w-5 h-5 ${tech.color} mb-1`} />
                    <div className="text-xs text-slate-300 font-mono">{tech.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Terminal cursor effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-1 h-4 bg-green-400"
              style={{ transform: "translate(-50%, -50%)" }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />

            {/* Code syntax highlighting particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                  style={{
                    left: `${30 + i * 12}%`,
                    top: `${40 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outer floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
