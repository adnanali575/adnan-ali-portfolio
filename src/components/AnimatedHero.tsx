"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

// Import animation data
import animationData from "@/assets/animations/dev-animation.json";

interface AnimatedHeroProps {
  className?: string;
}

export function AnimatedHero({ className = "" }: AnimatedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationError, setAnimationError] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Fallback animation component
  const FallbackAnimation = () => (
    <div className="w-full h-80 flex items-center justify-center">
      <div className="relative">
        {/* Code lines animation */}
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-blue-500/20 rounded"
              style={{ width: `${60 + i * 10}%` }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        
        {/* Floating code symbols */}
        <div className="absolute inset-0 flex items-center justify-center">
          {['</>', '{ }', '()', '[]'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/60 font-mono text-lg"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

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
        {animationError ? (
          <FallbackAnimation />
        ) : (
          <div className="w-full h-80">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
              onError={() => setAnimationError(true)}
            />
          </div>
        )}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
