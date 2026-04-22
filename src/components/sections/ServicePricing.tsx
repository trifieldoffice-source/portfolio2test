"use client";

import { motion } from "framer-motion";
import { Zap, Building2, Crown, CheckCircle2 } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const plans = [
  {
    id: "light",
    icon: <Zap className="w-8 h-8 text-gold" />,
    name: "LIGHT PLAN",
    subtitle: "LP制作 / スピード導入",
    price: "¥300,000〜",
    description: "「まずは存在感を示したい」というニーズに応える、インパクト重視のランディングページ制作プランです。単なるデザイン制作に留まらず、ユーザー心理を徹底的に分析したストーリー構成（DRM）を採用。ラグジュアリーな世界観を損なうことなく、高いコンバージョン率を実現します。公開後の軽微な修正サポートも含まれており、スピーディーな事業展開を支えます。",
    features: ["レスポンシブ対応", "基本SEO設定", "構成ライティング補助", "お問い合わせフォーム実装"],
  },
  {
    id: "standard",
    icon: <Building2 className="w-8 h-8 text-gold" />,
    name: "STANDARD PLAN",
    subtitle: "企業サイト / ブランディング",
    price: "¥800,000〜",
    description: "プロの制作会社としての信頼を確固たるものにする、本格的なコーポレートサイト制作プランです。競合分析に基づいた独自ポジショニングの確立から、MEO（Googleマップ対策）を見据えた地域戦略まで網羅。情報を整理し、使い勝手（UI/UX）を極めた複数ページ構成により、見込み客の信頼度を最大化します。5年間の営業経験を活かした「売れる」導期設計が強みです。",
    features: ["最大10ページ構成", "MEO対策初期設定", "競合・市場分析レポート", "CMS（お知らせ機能）実装"],
  },
  {
    id: "premium",
    icon: <Crown className="w-8 h-8 text-gold" />,
    name: "PREMIUM PLAN",
    subtitle: "集客特化 / フルオーダー",
    price: "ASK",
    description: "「空間に新たな贅を」を体現する、最上位のフルカスタマイズプランです。最新の3DインテリアシミュレーターとのWEB連携や、シネマティックな動画背景の導入など、他社を圧倒するデジタル体験を構築します。ITパスポート保持者による高度な技術実装と、緻密な集客マーケティングを融合。ただ美しいだけでなく、成約からLTV向上までを逆算した、Web上の「旗艦店」を作り上げます。",
    features: ["完全自由設計", "3Dシミュレーション連携", "伴走型マーケティング支援", "プロカメラマン撮影手配"],
  },
];

export default function ServicePricing() {
  return (
    <section className="w-full py-32 bg-deep-blue text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <AnimationWrapper 
              key={plan.id} 
              animation="fade-up" 
              delay={index * 0.2}
              className="flex flex-col bg-white/[0.03] border border-white/10 hover:border-gold/50 transition-colors duration-500 p-10 relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gold/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-colors duration-500" />
              
              <div className="mb-8">{plan.icon}</div>
              
              <div className="mb-6">
                <span className="text-gold tracking-[0.3em] font-serif text-sm mb-2 block">{plan.name}</span>
                <h3 className="text-2xl font-serif mb-1">{plan.subtitle}</h3>
                <p className="text-gold/80 text-xl font-serif">{plan.price}</p>
              </div>
              
              <p className="text-light-gray text-sm leading-relaxed mb-10 min-h-[160px]">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mt-auto">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-soft-white/80">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 w-full h-px bg-white/10" />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
