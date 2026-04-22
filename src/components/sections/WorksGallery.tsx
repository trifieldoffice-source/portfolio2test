"use client";

import { motion } from "framer-motion";
import { Zap, Target, Shield, ArrowUpRight } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const strengths = [
  {
    id: "01",
    title: "High Performance",
    subtitle: "表示速度の圧倒的な高速化",
    tags: ["Next.js App Router", "Static Delivery"],
    challenge: "読み込みの遅さによる直帰率の上昇と機会損失。",
    solution: "データベースを介さないヘッドレスな静的配信により、サーバー負荷を回避して最速表示。",
    result: "スピードによるSEO評価向上と、ユーザーの離脱防止を同時に実現します。",
    icon: <Zap className="w-8 h-8 text-accent" />
  },
  {
    id: "02",
    title: "Data-Driven Design",
    subtitle: "データドリブンなCVR最適化",
    tags: ["UI/UX Optimization", "Proven Patterns"],
    challenge: "表面的な美しさだけで、お問い合わせや予約数に直結しないデザイン。",
    solution: "100サイト以上のリサーチから導き出された「成果の出る」UI設計・導線パターンの適用。",
    result: "ユーザーの迷いをなくし、お問い合わせ等のコンバージョン率を劇的に改善します。",
    icon: <Target className="w-8 h-8 text-accent" />
  },
  {
    id: "03",
    title: "Zero-Vulnerability",
    subtitle: "堅牢なセキュリティと運用削減",
    tags: ["Headless Architecture", "No-DB Frontend"],
    challenge: "従来型CMS（WordPress等）のプラグイン脆弱性による攻撃リスクや、頻繁なメンテナンスの手間。",
    solution: "APIでシステムと完全に分離した次世代構成による盤石なセキュリティ設計。",
    result: "外部攻撃のリスクを極小化し、保守管理のコストを削減した永続的なデジタル資産を構築します。",
    icon: <Shield className="w-8 h-8 text-accent" />
  }
];

export default function WorksGallery() {
  return (
    <section className="w-full py-32 bg-deep-blue text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-24">
            <h2 className="text-xs tracking-[0.5em] text-accent font-serif uppercase mb-4 block">Features & Strengths</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-white tracking-wider">
              選ばれる3つの理由
            </h3>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 gap-16 md:gap-32">
          {strengths.map((item, index) => (
            <AnimationWrapper 
              key={item.id} 
              animation="fade-up" 
              delay={index * 0.2}
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center relative bg-white/[0.02] border border-white/5 p-8 md:p-12 hover:bg-white/[0.04] transition-colors duration-500">
                
                {/* Visual Identity Block */}
                <div className="lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 text-center lg:text-left">
                  <span className="text-accent font-serif text-3xl opacity-20 mb-6 block">{item.id}</span>
                  <div className="mb-6 flex justify-center lg:justify-start">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif tracking-wide mb-2">{item.title}</h3>
                  <p className="text-soft-white/60 text-sm tracking-widest">{item.subtitle}</p>
                </div>

                {/* Detail Block */}
                <div className="lg:w-2/3 space-y-8 pl-0 lg:pl-4">
                  <div className="flex flex-wrap gap-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-accent/10 px-3 py-1 text-accent tracking-widest border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-accent/80 text-xs tracking-widest font-serif uppercase">
                        <Target className="w-3 h-3" /> Challenge
                      </div>
                      <p className="text-sm text-soft-white/60 leading-relaxed font-light">{item.challenge}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-accent/80 text-xs tracking-widest font-serif uppercase">
                        <Zap className="w-3 h-3" /> Solution
                      </div>
                      <p className="text-sm text-soft-white/80 leading-relaxed font-light">{item.solution}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-accent text-xs tracking-widest font-serif uppercase">
                        <ArrowUpRight className="w-3 h-3" /> Result
                      </div>
                      <p className="text-sm text-white leading-relaxed font-medium">{item.result}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-1000" />
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
