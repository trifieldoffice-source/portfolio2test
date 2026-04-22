"use client";

import { motion } from "framer-motion";

// 高級感のあるインテリア画像（プレースホルダー）
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    alt: "Premium Sofa",
    styleClasses: "w-full md:w-[45%]", // 左上
    delay: 0.1
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    alt: "Minimalist Chair",
    styleClasses: "w-full md:w-[45%] mt-12 md:mt-48", // 右側・大きく下にずらす
    delay: 0.3
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1595526114101-97d825cba5bb?auto=format&fit=crop&q=80&w=1600",
    alt: "Elegance Space",
    styleClasses: "w-full mt-24 md:mt-32", // 中央ワイド
    delay: 0.2
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?auto=format&fit=crop&q=80&w=800",
    alt: "Dining Table",
    styleClasses: "w-full md:w-[45%] mt-24 md:mt-0", // 左側
    delay: 0.1
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    alt: "Bedroom Set",
    styleClasses: "w-full md:w-[45%] mt-12 md:mt-32", // 右側・少し下にずらす
    delay: 0.3
  }
];

export default function Collection() {
  return (
    <section className="relative w-full min-h-screen bg-soft-white text-deep-blue py-32 px-6 overflow-hidden">
      
      {/* セクションタイトル */}
      <div className="w-full max-w-6xl mx-auto mb-20 md:mb-32">
        <motion.div
           initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm tracking-[0.5em] text-gold uppercase mb-4">Collection</h2>
          <h3 className="font-serif text-3xl md:text-5xl leading-relaxed tracking-wider">
            無重力空間を彩る、<br />
            美しきピースたち。
          </h3>
        </motion.div>
      </div>

      {/* 非対称メタボリック（メゾナリー風）ギャラリーコンテナ */}
      <div className="w-full max-w-6xl mx-auto flex flex-wrap justify-between items-start">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className={`relative group cursor-pointer ${image.styleClasses}`}
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: image.delay }}
            // ホバー時の浮遊エフェクト
            whileHover={{ y: -15 }}
          >
            {/* 画像コンテナ枠 */}
            <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-none group-hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.4)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              
              {/* ホバー時の極薄オーバーレイ */}
              <div className="absolute inset-0 bg-deep-blue/0 transition-colors duration-700 ease-out group-hover:bg-deep-blue/5" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
