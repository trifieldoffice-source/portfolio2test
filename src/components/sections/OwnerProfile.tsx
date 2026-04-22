"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function OwnerProfile() {
  return (
    <section className="w-full py-48 bg-deep-blue overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Part */}
          <div className="w-full lg:w-1/2 relative">
            <AnimationWrapper animation="fade-right">
              <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 p-2">
                <img 
                  src="/portrait.png" 
                  alt="Representative Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
              </div>
            </AnimationWrapper>
            
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full" />
          </div>

          {/* Text Part */}
          <div className="w-full lg:w-1/2">
            <AnimationWrapper animation="fade-left">
              <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block">Our Performance Specs</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-wide">
                直感ではなく、<br />数値で語る品質。
              </h2>
              
              <div className="space-y-6 text-light-gray leading-loose text-base md:text-lg font-light">
                <p>
                  私たちは「ただ作るだけ」のクリエイターではありません。表示速度0.5秒以下という、ユーザーを一切待たせない圧倒的なパフォーマンス。これをNext.jsの最新機能によって実現します。
                </p>
                <p>
                  また、100サイト以上の緻密なリサーチから導き出した「確実に成果へ繋がる勝ちパターン」を全プランに適用。感覚に頼らない、データに基づいた設計が貴社のビジネスを加速させます。
                </p>
                <p>
                  セキュリティ面でも、データベースを介さない構成により脆弱性リスクをほぼゼロに抑圧。運用負荷を最小限にしながら、永続的に価値を生むデジタル資産を構築します。
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-white font-serif text-xl mb-4">The TriField Edge</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <span className="text-gold text-[10px] uppercase tracking-widest mb-1">Ultra Fast</span>
                    <span className="text-soft-white text-sm font-medium">表示速度 0.5s 以下を基準とした設計</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gold text-[10px] uppercase tracking-widest mb-1">High Security</span>
                    <span className="text-soft-white text-sm font-medium">脆弱性リスクほぼゼロのモダン構成</span>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
