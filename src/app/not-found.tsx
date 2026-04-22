"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-deep-blue flex items-center justify-center px-6 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 text-center space-y-12 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold font-serif text-8xl md:text-9xl opacity-20 block mb-4 tracking-tighter">404</span>
          <h1 className="text-2xl md:text-3xl font-serif text-white tracking-widest leading-relaxed">
            お探しの空間は、<br />まだ存在していないようです。
          </h1>
          <p className="text-light-gray/60 text-sm mt-6 leading-relaxed tracking-widest font-light">
            入力されたアドレスが正しいか、またはページが移動した可能性があります。<br />
            こちらから元の世界へ戻ることができます。
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/"
            className="flex items-center gap-3 bg-gold px-10 py-4 text-deep-blue text-xs tracking-[0.3em] uppercase font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 border border-white/10 px-10 py-4 text-white text-xs tracking-[0.3em] uppercase hover:bg-white/5 transition-all duration-500"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    </main>
  );
}
