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
              デザインと技術で、<br />空間に新たな価値を。
            </h3>
          </div>
        </AnimationWrapper>

        <div className="space-y-12 text-soft-white/70 font-light leading-relaxed max-w-2xl text-sm md:text-lg tracking-[0.15em] font-sans">
          <AnimationWrapper animation="fade-up" delay={0.2}>
            <p>
              私たちは、単に美しいWebサイトを作る集団ではありません。<br />
              一筋の光、影の落ち方、そして視線が抜ける「余白」——。<br />
              物理的な実体を超えた「空気の変容」を、デジタルとリアルの両軸でデザインします。
            </p>
          </AnimationWrapper>
          
          <AnimationWrapper animation="fade-up" delay={0.4}>
            <p>
              最先端のIT技術という「鋭さ」と、長年の営業経験で培った「対話」という「柔らかさ」。<br />
              この相反する要素を高い次元で融合させることで、<br />
              お客様のビジネス空間に、重力から解き放たれたような自由と高揚感をもたらします。
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={0.6}>
            <p className="text-gold italic font-serif">
              "We don't just build furniture, we design the atmosphere."
            </p>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
