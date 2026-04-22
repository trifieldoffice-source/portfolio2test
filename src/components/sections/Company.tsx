"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Company() {
  return (
    <section id="company" className="w-full py-24 bg-deep-blue border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Company</h2>
            <p className="text-light-gray tracking-widest uppercase text-sm">会社概要</p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={0.2}>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12">
            <dl className="divide-y divide-white/10">
              {[
                { label: "会社名", value: "株式会社 Zero Gravity (Zero Gravity Inc.)" },
                { label: "設立", value: "2015年4月1日" },
                { label: "代表取締役", value: "山田 太郎" },
                { label: "資本金", value: "50,000,000円" },
                { label: "所在地", value: "〒107-0062 東京都港区南青山X-X-X ZGビル" },
                { label: "事業内容", value: "1. 高級家具・インテリア雑貨の企画・製造・販売\n2. 空間デザイン・コーディネート事業\n3. ライフスタイルブランドの運営" },
              ].map((item, index) => (
                <div key={index} className="py-6 flex flex-col md:flex-row md:items-start gap-4">
                  <dt className="text-gold font-serif min-w-[200px] font-medium">{item.label}</dt>
                  <dd className="text-light-gray whitespace-pre-wrap leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
