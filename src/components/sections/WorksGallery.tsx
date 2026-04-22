"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Search, Target, Zap } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const workItems = [
  {
    id: "01",
    title: "Global Tech Inc. | 次世代コーポレートサイト",
    category: "Corporate Website",
    tags: ["Next.js", "SSG", "Performance"],
    challenge: "旧サイトの表示速度が3秒を超え、モバイルユーザーの離脱率が高いことが課題でした。",
    solution: "Next.js App Routerへの移行。画像を自動最適化し、データベース不要の静的配信へ切り替えました。",
    result: "表示速度が0.4秒へ激減。直帰率が24.8%改善し、お問い合わせ数は前年比2.1倍に増加しました。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Yamada Dental | 集客特化型クリニックサイト",
    category: "Medical & Clinic",
    tags: ["SEO", "Conversion", "Trust"],
    challenge: "地域競合が多く、自社の専門性が視覚的に伝わっていないことが課題でした。",
    solution: "100サイト以上のリサーチに基づく「勝ちパターン」を適用。予約までの動線を極限までシンプルに設計。",
    result: "主要キーワードで検索1位を獲得。月間予約数は旧サイト比で310%の成長を達成しました。",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Studio Mirage | 表現力と高速性の融合",
    category: "Creative Portfolio",
    tags: ["Creative", "Animation", "Vercel"],
    challenge: "リッチなアニメーションを実現しつつ、GoogleのLCP要件（表示速度）をクリアする必要がありました。",
    solution: "Framer Motionを用いた優雅なフェードイン。Lighthouseスコアで全項目100点を達成する技術実装。",
    result: "ブランドイメージの向上に大きく貢献。国内外の数々のアワードにノミネートされる成果を得ました。",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function WorksGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <section className="w-full py-32 bg-deep-blue text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-32">
          {workItems.map((item, index) => (
            <AnimationWrapper 
              key={item.id} 
              animation="fade-up" 
              delay={index * 0.2}
              className="group relative"
            >
              <div 
                className="flex flex-col lg:flex-row gap-12 lg:items-center cursor-default"
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Visual Side */}
                <div className="lg:w-3/5 relative overflow-hidden aspect-video group">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="bg-gold p-4 rounded-full"
                    >
                      <ArrowUpRight className="text-deep-blue w-8 h-8" />
                    </motion.div>
                  </div>
                  
                  {/* Category Tag Overlay */}
                  <div className="absolute top-8 left-8">
                    <span className="bg-deep-blue/80 backdrop-blur-md text-gold px-4 py-1 text-[10px] tracking-[0.2em] border border-gold/30">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/5 space-y-8">
                  <div>
                    <span className="text-gold font-serif text-sm opacity-50 mb-2 block">{item.id}</span>
                    <h3 className="text-3xl md:text-4xl font-serif tracking-wide">{item.title}</h3>
                    <div className="flex gap-4 mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-soft-white/40 tracking-widest border-b border-white/10 pb-1">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gold text-xs tracking-widest font-serif uppercase">
                      <Target className="w-3 h-3" /> Challenge
                    </div>
                    <p className="text-sm text-soft-white/60 leading-relaxed font-light">{item.challenge}</p>
                    </div>

                    <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gold text-xs tracking-widest font-serif uppercase">
                      <Zap className="w-3 h-3" /> Solution
                    </div>
                    <p className="text-sm text-soft-white/80 leading-relaxed font-light">{item.solution}</p>
                    </div>

                    <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gold text-xs tracking-widest font-serif uppercase">
                      <Search className="w-3 h-3" /> Result
                    </div>
                    <p className="text-sm text-white leading-relaxed font-medium">{item.result}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="absolute -bottom-16 left-0 w-full h-px bg-white/5" />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
