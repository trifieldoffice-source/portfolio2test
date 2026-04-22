"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Headphones, LineChart, MonitorSmartphone } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const options = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "セキュリティ・保守マネジメント",
    desc: "Next.jsによる静的配信に加え、ドメイン管理やSSL更新、定期的なセキュリティスキャンを代行。脆弱性リスクを最小限に抑え、24時間365日の安定稼働を支えます。",
  },
  {
    icon: <LineChart className="w-6 h-6 text-gold" />,
    title: "データドリブン改善提案",
    desc: "100サイト以上のリサーチから導き出した独自の解析手法。Google Analyticsを活用し、表示速度とユーザー行動の相関を分析。翌月の具体的な改善施策をご提案します。",
  },
  {
    icon: <Headphones className="w-6 h-6 text-gold" />,
    title: "月1回の更新代行（標準装備）",
    desc: "テキスト修正や画像差し替えなど、煩わしい更新作業はすべてお任せください。高度な技術知識は不要。専任の担当者が即座に対応し、サイトの鮮度を高く保ちます。",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-gold" />,
    title: "テクニカルサポート / 自走支援",
    desc: "直感的な操作マニュアルを提供。2年目以降は、継続的なサポートだけでなく「データ納品による内製化（自走）」も選択可能。貴社のIT資産としての柔軟性を確保します。",
  },
];

export default function ServiceOptions() {
  return (
    <section className="w-full py-24 bg-deep-blue border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <AnimationWrapper animation="fade-up">
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-white mb-4">OPTIONS & SUPPORT</h2>
            <p className="text-gold tracking-widest text-xs uppercase">付帯サービス・運用支援</p>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {options.map((opt, index) => (
            <AnimationWrapper 
              key={index} 
              animation="fade-up" 
              delay={index * 0.15}
              className="flex gap-6 items-start"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-full shrink-0">
                {opt.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif text-white mb-3 tracking-wide">{opt.title}</h3>
                <p className="text-light-gray text-sm leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
