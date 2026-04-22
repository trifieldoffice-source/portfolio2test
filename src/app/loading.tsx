"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-deep-blue flex items-center justify-center pointer-events-none">
      <div className="relative flex flex-col items-center gap-8">
        
        {/* Animated Brand Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-2xl font-serif text-white tracking-[0.4em] uppercase"
        >
          TRIFIELD
        </motion.div>

        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-accent w-1/2"
          />
        </div>

        <span className="text-[9px] text-accent/40 tracking-[0.8em] uppercase animate-pulse">
          Curating Space
        </span>
      </div>
    </div>
  );
}
