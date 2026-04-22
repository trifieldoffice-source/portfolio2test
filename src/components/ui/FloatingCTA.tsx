"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 1 second or initial scroll
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(0, 209, 255, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-accent px-6 py-4 rounded-full shadow-2xl cursor-pointer group"
        >
          {/* Pulsing Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping group-hover:hidden" />
          
          <div className="relative z-10 flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-deep-blue" />
            <span className="text-deep-blue font-bold text-[10px] md:text-xs tracking-[0.2em] whitespace-nowrap">
              お問い合わせ・無料相談会
            </span>
          </div>

          <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
