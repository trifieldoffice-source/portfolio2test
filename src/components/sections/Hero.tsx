"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../ui/AnimationWrapper";

// 家具を抽象化した幾何学オブジェクト（円、矩形、正方形、ピル型）
const shapes = [
  { 
    id: 1, 
    type: "circle", 
    size: "w-[25vw] h-[25vw] max-w-[200px] max-h-[200px]", 
    initial: { x: "-60vw", y: "-50vh" }, 
    final: { x: "-18vw", y: "-20vh" }, 
    delay: 0.2 
  },
  { 
    id: 2, 
    type: "rect", 
    size: "w-[35vw] h-[8vw] max-w-[300px] max-h-[80px]", 
    initial: { x: "60vw", y: "-40vh" }, 
    final: { x: "15vw", y: "-25vh" }, 
    delay: 0.6 
  },
  { 
    id: 3, 
    type: "square", 
    size: "w-[20vw] h-[20vw] max-w-[180px] max-h-[180px]", 
    initial: { x: "-50vw", y: "50vh" }, 
    final: { x: "-20vw", y: "15vh" }, 
    delay: 1.0 
  },
  { 
    id: 4, 
    type: "pill", 
    size: "w-[12vw] h-[30vw] max-w-[120px] max-h-[250px]", 
    initial: { x: "50vw", y: "60vh" }, 
    final: { x: "22vw", y: "12vh" }, 
    delay: 1.4 
  },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-deep-blue flex items-center justify-center">
      
      {/* 浮遊する幾何学オブジェクト（無重力演出） */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            // 画面外からゆっくりと中央に寄ってくる
            initial={{ x: shape.initial.x, y: shape.initial.y, opacity: 0, rotate: -45 }}
            animate={{ x: shape.final.x, y: shape.final.y, opacity: 1, rotate: 0 }}
            transition={{
              duration: 5,
              ease: [0.16, 1, 0.3, 1], // 非常に滑らかで優雅なイージング (カスタムキュービックベジェ)
              delay: shape.delay
            }}
          >
            {/* 到着後もゆらゆらと浮遊し続ける */}
            <motion.div
              className={`border border-soft-white/10 bg-soft-white/5 backdrop-blur-lg ${shape.size} ${
                shape.type === "circle" ? "rounded-full" : 
                shape.type === "pill" ? "rounded-[100px]" : 
                shape.type === "rect" ? "rounded-3xl" : "rounded-[2rem]"
              }`}
              animate={{ 
                y: ["-8%", "8%", "-8%"],
                x: ["-3%", "3%", "-3%"],
                rotate: ["-3deg", "3deg", "-3deg"]
              }}
              transition={{
                duration: 10 + shape.id * 2, // オブジェクトごとに周期をずらして自然な揺らぎに
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-12 max-w-5xl px-6">
        <AnimationWrapper animation="fade-up">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-7xl text-white leading-tight tracking-wider">
              貴社の価値を、<br />
              <span className="text-gold">「速度」</span>と<span className="text-gold">「デザイン」</span>で最大化する
            </h1>
            <p className="text-gold tracking-[0.4em] text-xs md:text-sm uppercase font-medium">
              Next.jsによる圧倒的な表示パフォーマンスと、緻密なサイト分析を融合
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={0.3}>
          <p className="text-light-gray/80 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto tracking-widest font-light">
            表示速度46%改善。一瞬で開き、資産として育つ次世代のウェブサイトを、<br className="hidden md:block" />
            最新技術によって最適化された適正価格で実現します。
          </p>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={0.6}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="bg-gold text-deep-blue px-12 py-5 rounded-full text-xs tracking-[0.3em] font-bold hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 uppercase">
              View Our Strategy
            </button>
            <div className="flex items-center gap-3 text-white/40 text-[10px] tracking-widest uppercase">
              <div className="w-12 h-px bg-white/20" />
              Next.js / TypeScript / Tailwind
            </div>
          </div>
        </AnimationWrapper>
      </div>

      {/* Speed Metric Badge */}
      <AnimationWrapper animation="fade-left" delay={1} className="absolute bottom-12 right-12 hidden lg:block">
        <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-end">
          <span className="text-gold font-serif text-3xl">0.5s</span>
          <span className="text-[10px] text-white/40 tracking-widest uppercase">Average Loading Speed</span>
        </div>
      </AnimationWrapper>

    </section>
  );
}
