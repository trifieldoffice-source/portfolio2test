"use client";

import { motion } from "framer-motion";
import { Settings, BarChart3, MapPin } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const options = [
  {
    id: "maintenance",
    icon: <Settings className="w-8 h-8 text-accent" />,
    title: "保守・メンテナンス",
    price: "¥10,000 / 月",
    description: "ドメイン・サーバーの管理から、定期的なセキュリティアップデート、Next.jsのバージョン更新対応まで一貫してサポートします。脆弱性を最小限に抑え、常に安全で高速な状態を維持。また、月1回のアナリティクス基本レポートも提供します。",
  },
  {
    id: "analysis",
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
    title: "アクセス解析・改善提案",
    price: "¥30,000 / 月",
    description: "GA4（Googleアナリティクス）やヒートマップを駆使し、ユーザーの行動を詳細に分析。離脱率の高いページや、コンバージョンに至るまでの障害を特定し、毎月具体的な改善（ABテスト等）を提案・実行します。データに基づいた確実な成長を実現します。",
  },
  {
    id: "meo",
    icon: <MapPin className="w-8 h-8 text-accent" />,
    title: "MEO対策支援",
    price: "¥20,000 / 月",
    description: "「地域名 × 業種」で検索した際、上位（マップ枠）に表示されるよう最適化します。口コミの返信代行や写真の投稿管理、キーワード設計など、実店舗への集客に直結する施策を継続的に実施。Webサイトと連携させることで、認知から来店までの導線を強化します。",
  },
];

export default function ServiceOptions() {
  return (
    <section className="w-full py-24 bg-deep-blue border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <AnimationWrapper animation="fade-up">
          <div className="mb-20 space-y-4">
            <h2 className="text-xs tracking-[0.5em] text-accent uppercase opacity-80">Selected Works</h2>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight inline-block border-b border-accent pb-4">
              実績ギャラリー
            </h3>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {options.map((option, index) => (
            <AnimationWrapper 
              key={option.id} 
              animation="fade-up" 
              delay={index * 0.15}
              className="group p-8 border border-white/5 hover:border-accent/30 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="mb-6">{option.icon}</div>
              <h3 className="text-xl font-serif mb-2">{option.title}</h3>
              <p className="text-accent/80 font-serif text-sm mb-4">{option.price}</p>
              <p className="text-light-gray/70 text-xs md:text-sm leading-relaxed">
                {option.description}
              </p>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
