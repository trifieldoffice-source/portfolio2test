"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Company() {
  const companyData = [
    { label: "屋号 / ブランド名", value: "TriField (トライフィールド)" },
    { label: "代表者", value: "山田 太郎 (仮)" },
    { label: "事業形態", value: "個人事業主 (制作ギルド)" },
    { label: "所在地", value: "〒107-xxxxx 東京都港区南青山（詳細はお取引時に開示）" },
    { label: "主要事業内容", value: "・高級・高価格帯向けWEBサイト及びLP制作\n・UI/UXデザイン及びブランディング支援\n・Googleマップ(MEO)最適化支援\n・WEBサイト運用・保守マネジメント\n・3Dインテリアシミュレーター導入支援\n・IT環境整備・デジタル化コンサルティング" },
    { label: "外部資格", value: "ITパスポート (国家資格) 保持" },
  ];

  return (
    <section id="company" className="w-full py-48 bg-deep-blue border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Overview</h2>
            <p className="text-gold tracking-[0.5em] uppercase text-[10px]">事業概要</p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-sm border border-white/10 p-10 md:p-16">
            <dl className="divide-y divide-white/10">
              {companyData.map((item, index) => (
                <div key={index} className="py-8 flex flex-col md:flex-row md:items-start gap-6 group">
                  <dt className="text-gold font-serif min-w-[240px] text-xs tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </dt>
                  <dd className="text-soft-white/90 text-sm md:text-base whitespace-pre-wrap leading-relaxed font-light">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimationWrapper>
        
        {/* Aesthetic footer note */}
        <AnimationWrapper animation="fade-up" delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-light-gray/40 text-[9px] tracking-[0.4em] uppercase italic">
              Empowering space through meticulous curation and digital excellence.
            </p>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
