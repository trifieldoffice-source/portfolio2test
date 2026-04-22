"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-up";
  delay?: number;
  duration?: number;
  className?: string;
  key?: string | number; // Adding this to silence potential linting quirks
}

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-in": {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  "fade-left": {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export default function AnimationWrapper({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
}: AnimationWrapperProps) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
