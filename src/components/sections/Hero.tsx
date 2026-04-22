"use client";

import { motion } from "framer-motion";

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

      {/* キャッチコピー */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 3, delay: 2.5, ease: "easeOut" }}
      >
        <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl tracking-[0.2em] md:tracking-[0.3em] text-soft-white leading-loose font-light">
          空間を、<br className="md:hidden" />重力から解き放つ。
        </h1>
      </motion.div>

    </section>
  );
}
