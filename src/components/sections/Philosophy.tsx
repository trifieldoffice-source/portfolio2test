"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  
  // スクロールに応じたパララックス制御
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 背景の「01」は、スクロールに合わせて遅れて（下方向に）ついてくるような視差効果
  const yBackground = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // テキストのゆったりとした出現アニメーション
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-deep-blue text-soft-white flex flex-col items-center justify-center overflow-hidden py-32 px-6"
    >
      {/* 巨大な背景ナンバー (パララックス) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ y: yBackground }}
      >
        <span className="text-[40vw] font-serif font-bold text-soft-white opacity-[0.03] tracking-tighter mix-blend-overlay">
          01
        </span>
      </motion.div>

      {/* メインコンテンツ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">
        
        {/* セクションタイトル */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-sm tracking-[0.5em] text-gold uppercase mb-4">Philosophy</h2>
          <h3 className="font-serif text-3xl md:text-5xl leading-relaxed tracking-wider">
            私たちは、<br className="md:hidden" />家具を作らない。
          </h3>
        </motion.div>

        {/* 説明文 */}
        <motion.div
          className="space-y-8 text-soft-white/70 font-light leading-loose max-w-2xl text-sm md:text-base tracking-widest"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p>
            物理的な「モノ」としての強度や機能性は、当然の前提に過ぎません。<br />
            私たちがデザインしているのは、それが置かれた瞬間に生まれる「空気の変容」です。
          </p>
          <p>
            光の反射、歩くたびに変わる陰影、そして視線が抜ける余白。<br />
            空間の重力を忘れさせるような、無重力の体験をデザインします。
          </p>
        </motion.div>

      </div>
    </section>
  );
}
