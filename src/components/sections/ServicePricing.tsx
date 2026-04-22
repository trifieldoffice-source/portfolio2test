"use client";

import { motion } from "framer-motion";
import { Zap, Building2, Crown, CheckCircle2 } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const plans = [
  {
    id: "basic",
    icon: <Zap className="w-8 h-8 text-gold" />,
    name: "BASIC PLAN",
    subtitle: "お試し・LP制作",
    price: "¥98,000",
    description: "スタートアップや期間限定のキャンペーンに最適なプランです。Next.jsによる高速表示（SSG）をベースに、レスポンシブ対応はもちろん、1年間の動作保証も標準装備。コストを抑えつつ、競合を圧倒する表示速度と現代的な美しさを手に入れたい方に最適です。",
    features: ["レスポンシブ対応", "Next.js 高速構築", "1年間の動作保証", "基本SEO設定"],
  },
  {
    id: "standard",
    icon: <Building2 className="w-8 h-8 text-gold" />,
    name: "STANDARD PLAN",
    subtitle: "企業サイト / 標準構成",
    price: "¥180,000",
    description: "プロフェッショナルな信頼を築く、中規模〜大規模案件向けの標準プランです。カスタムデザインに加え、予約フォームやお問い合わせ機能など、ビジネスに必要な機能をNext.js環境で最適に実装。100サイト以上のリサーチから導き出した「勝ちパターン」を適用し、安定した成果を目指します。",
    features: ["カスタムデザイン", "予約・問い合わせ機能", "SEO完全最適化", "専用マニュアル提供"],
  },
  {
    id: "premium",
    icon: <Crown className="w-8 h-8 text-gold" />,
    name: "PREMIUM PLAN",
    subtitle: "伴走支援 / 集客特化",
    price: "¥280,000",
    description: "サイトを単なる制作物ではなく、24時間働く「デジタル旗艦店」として育て上げる最上位プランです。MEO対策の初期実装に加え、アクセス解析に基づいた毎月の改善提案（伴走支援）を実施。技術的な脆弱性をほぼゼロに抑え、強固なセキュリティと高コンバージョンを両立させます。",
    features: ["MEO対策実装", "アクセス解析提案", "月1回の更新代行", "優先サポート"],
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
