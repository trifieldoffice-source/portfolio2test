"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Search, Target, Zap } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const workItems = [
  {
    id: "01",
    title: "Minimalist Private Villa",
    category: "Luxury Residence",
    tags: ["Interior Design", "3D Simulation"],
    challenge: "限られた採光条件の中で、圧倒的な開放感と「静寂」を両立させたいという、一見相反するご要望。既存の画一的なレイアウトでは解決できない、空間の再定義が求められました。",
    solution: "重力から解き放たれたような浮遊感を生む特注家具の設計と、光の屈折を緻密に計算したミラーポリッシュ素材の配置。視線の抜け（余白）を1cm単位で調整しました。",
    result: "「滞在するだけで思考がクリアになる」とのお声をいただき、施工から半年後には建築専門誌の表紙を飾るなど、クライアントのブランディング向上にも大きく寄与しました。",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "02",
    title: "Aoyama Dental Boutique",
    category: "Clinic / Medical",
    tags: ["UX Design", "Interior Branding"],
    challenge: "「怖い、痛い」という歯科医院のネガティブなイメージを払拭し、ラグジュアリーホテルのような寛ぎを提供したい。合わせて、スタッフの動線効率の劇的な改善も必須でした。",
    solution: "待合室を「ラウンジ」として再構築し、プライバシーと開放感を両立するガラスパーティションを採用。WEBサイトのデザインと空間の質感を完全に同期させることで一貫性を追求。",
    result: "新規来院数が前年比150%を達成。何より「ここで働きたい」という求人応募が急増し、スタッフの離職率がゼロになるという、採用ブランディング面でも大きな成果を上げました。",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "03",
    title: "Tech Innovation Hub",
    category: "Corporate / Office",
    tags: ["UI/UX", "Office Design"],
    challenge: "リモートワーク普及後、あえて「集まりたくなるオフィス」とは何か。ただの作業場ではない、クリエイティビティが自然発生するような触媒としての空間作りが命題でした。",
    solution: "固定席を廃し、偶発的な対話を誘発する「アゴラ（広場）」を核としたレイアウト。WEB予約システムと連動したスマートな空間利用を可能にするIT基盤も同時に構築しました。",
    result: "社員の出社率が自然と30%向上。「プロジェクト間の壁がなくなった」という現場の声が相次ぎ、イノベーションの創出スピードが加速する環境を実現しました。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
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
