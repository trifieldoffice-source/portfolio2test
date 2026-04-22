"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Layout, PenTool, Search, Wrench, Rocket } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const steps = [
  { 
    id: "01", 
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Discovery & Deep Listening", 
    sub: "初回ヒアリング",
    desc: "お客様の潜在的な理想を引き出し、言葉にならない「空気感」までも徹底的に聞き取る、密度の濃い120分の対話を行います。単なる機能要件の確認に留まらず、ビジネスの核心とビジョンを最優先で共有します。" 
  },
  { 
    id: "02", 
    icon: <Layout className="w-6 h-6" />,
    title: "Strategic Concept", 
    sub: "コンセプト設計・市場分析",
    desc: "ヒアリングに基づき、競合他社にはない「貴社だけの独自性」を定義。5年間の営業経験で培った市場感覚を武器に、誰に何を届けるべきかという戦略の土台を、情緒的なコンセプトとして昇華させます。" 
  },
  { 
    id: "03", 
    icon: <PenTool className="w-6 h-6" />,
    title: "Visual Identity & UX", 
    sub: "デザイン・ユーザー体験設計",
    desc: "最新の3Dインテリアシミュレーション技術やラグジュアリーなタイポグラフィを駆使し、一瞬で心を奪うデジタル体験を設計。デバイスを問わず、スムーズでストレスのない「心地よい滞在時間」を構築します。" 
  },
  { 
    id: "04", 
    icon: <Search className="w-6 h-6" />,
    title: "Meticulous Refinement", 
    sub: "ディテール調整・検証",
    desc: "フォントの太さ、余白の1ピクセル、アニメーションの速度——。細部に神を宿らせるべく、徹底的なブラッシュアップを実施。ITパスポート保持者としての論理的な検証を行い、美しさと高い操作性を両立させます。" 
  },
  { 
    id: "05", 
    icon: <Wrench className="w-6 h-6" />,
    title: "Precision Engineering", 
    sub: "開発・実装",
    desc: "美しさを損なうことなく、最新のNext.js App Router等の技術で高速かつセキュアに実装。アニメーションの一つひとつに命を吹き込み、実機での入念なテストを経て、魂を込めた「一つの空間」として完成させます。" 
  },
  { 
    id: "06", 
    icon: <Rocket className="w-6 h-6" />,
    title: "Expansion & Growth", 
    sub: "公開・運用パートナーシップ",
    desc: "公開は始まりに過ぎません。MEO対策やアクセス解析、保守管理を通じて、ビジネスの成長に伴走。小さな改善の積み重ねが大きな価値を生むよう、長期的な視点でお客様のデジタル上の「旗艦店」を守り続けます。" 
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="w-full py-32 bg-deep-blue text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative" ref={containerRef}>
        
        {/* Animated Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
          <motion.div 
            className="w-full bg-gold origin-top"
            style={{ scaleY }}
          />
        </div>

        <div className="space-y-32 relative">
          {steps.map((item, index) => (
            <div key={item.id} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              
              {/* Content Box */}
              <div className="w-full md:w-[calc(50%-4rem)]">
                <AnimationWrapper animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <span className="text-gold font-serif text-sm tracking-[0.3em] font-medium">{item.id}</span>
                      <h3 className="text-2xl md:text-3xl font-serif tracking-wide">{item.title}</h3>
                      <p className="text-gold/60 text-[10px] tracking-widest uppercase font-sans">{item.sub}</p>
                    </div>
                    <p className="text-sm text-light-gray leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </AnimationWrapper>
              </div>

              {/* Icon / Node */}
              <div className="relative z-10 flex items-center justify-center shrink-0">
                <div className="w-14 h-14 bg-deep-blue border border-gold/50 rounded-full flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-shadow duration-500">
                  {item.icon}
                </div>
              </div>

              {/* Spacer for reverse layout */}
              <div className="hidden md:block md:w-[calc(50%-4rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
