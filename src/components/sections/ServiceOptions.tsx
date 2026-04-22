"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Headphones, LineChart, MonitorSmartphone } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const options = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "安心の保守・運用サポート",
    desc: "サーバーの監視からドメイン管理、セキュリティパッチの適用までを代行。WEBに関わる煩わしい管理業務をすべて手放し、本業に集中できる環境を提供します。",
  },
  {
    icon: <LineChart className="w-6 h-6 text-gold" />,
    title: "WEB解析・改善コンサルティング",
    desc: "公開して終わりではありません。Google Analyticsを用いた数値分析を行い、ユーザーの行動に基づいた具体的な改善案を毎月レポート形式でご提案します。",
  },
  {
    icon: <Headphones className="w-6 h-6 text-gold" />,
    title: "迅速なアフターサポート",
    desc: "「テキストを少し変えたい」「画像を追加したい」といった細かなご要望にも即座に対応。専任の担当者が、お客様のビジネスのスピード感を損なわせません。",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-gold" />,
    title: "デジタル付帯サービス",
    desc: "WEBに限らず、社内IT環境の整備や商用設備のドライブレコーダー設置代行など、身近なテクノロジーの「困りごと」を解決するパートナーとして伴走します。",
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
