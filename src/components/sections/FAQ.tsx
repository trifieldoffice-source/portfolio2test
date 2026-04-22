"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, Wrench, BarChart, Shield, HelpCircle } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

const faqItems = [
  {
    question: "技術的な特徴は何ですか？",
    answer: "Next.jsを採用しています。従来のWordPress等と異なり、データベースを直接介さない静的生成（SSG）やサーバーサイドレンダリング（SSR）を活用するため、表示速度が極めて高速で、かつセキュリティが強固（脆弱性リスクがほぼゼロ）という特徴があります。",
  },
  {
    question: "自分たちで更新できますか？",
    answer: "はい。専門知識がなくても直感的に操作できる管理画面（CMS）と、専用操作マニュアルを提供します。また、すべてのプランに「月1回の更新代行」が標準装備されていますので、安心してお任せいただけます。",
  },
  {
    question: "予約機能やお問い合わせフォームは実装できますか？",
    answer: "はい、可能です。ビジネスに必要な各種機能はNext.js環境で最適に実装できます。外部サービスとの連携や、貴社独自のビジネスロジックに合わせたオーダーメイドの実装も承っております。",
  },
  {
    question: "納期はどのくらいですか？",
    answer: "最短2週間から1ヶ月程度です。100サイト以上のリサーチから導き出した「勝ちパターンの型」を活用することで、高品質を維持しながらスピーディーな納品を実現しています。",
  },
  {
    question: "制作後の追加費用は発生しますか？",
    answer: "初期費用・月額費用ともに完全透明化しています。2年目以降は、手厚いサポートを継続するプランか、データを納品して貴社で自走する形か、柔軟に選択いただける設計にしています。",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-32 bg-deep-blue text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <AnimationWrapper animation="fade-up">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-white mb-6">FAQ</h2>
            <p className="text-gold tracking-[0.5em] uppercase text-[10px]">よくある質問</p>
          </div>
        </AnimationWrapper>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <AnimationWrapper 
                key={index} 
                animation="fade-up" 
                delay={index * 0.1}
                className="border border-white/10"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group"
                >
                  <span className="text-lg md:text-xl font-serif tracking-wide text-white/90 group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-gold/40 group-hover:text-gold transition-colors" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-light-gray/70 leading-relaxed text-base border-t border-white/5 pt-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
