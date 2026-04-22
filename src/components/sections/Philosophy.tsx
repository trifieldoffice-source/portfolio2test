"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[80vh] bg-deep-blue text-soft-white flex flex-col items-center justify-center overflow-hidden py-48 px-6"
    >
      {/* Background Number */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ y: yBackground }}
      >
        <span className="text-[40vw] font-serif font-bold text-soft-white opacity-[0.02] tracking-tighter mix-blend-overlay">
          01
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-20">
        
        <AnimationWrapper animation="fade-up">
          <div className="space-y-4">
            <h2 className="text-xs tracking-[0.5em] text-gold uppercase opacity-80">Philosophy</h2>
            <h3 className="font-serif text-3xl md:text-5xl leading-relaxed tracking-wider">
              ロジックと技術で、<br />
              Webを「資産」へ変える。
            </h3>
          </div>
        </AnimationWrapper>

        <div className="space-y-12 text-soft-white/70 font-light leading-relaxed max-w-2xl text-sm md:text-lg tracking-[0.15em] font-sans">
          <AnimationWrapper animation="fade-up" delay={0.2}>
            <p>
              私たちは、感覚に頼ったデザインは提供しません。<br />
              100サイト以上の徹底的なリサーチから導き出した「勝ちパターンの型」をベースに、<br />
              表示速度0.5秒以下という圧倒的な技術スペックを融合。
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-up" delay={0.4}>
            <p>
               Next.jsによるモダンな技術スタックを採用することで、<br />
              脆弱性リスクをほぼゼロに抑えつつ、永続的な資産価値を持つWebサイトを構築します。<br />
              「一瞬で開き、成果を出し続ける」。それが私たちの定義する本物の品質です。
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={0.6}>
            <p className="text-gold italic font-serif">
              "Logic-driven performance for the next digital era."
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
