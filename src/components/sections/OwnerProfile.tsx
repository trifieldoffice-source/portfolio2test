"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function OwnerProfile() {
  return (
    <section className="w-full py-40 md:py-48 bg-deep-blue overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimationWrapper animation="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            
            <span className="text-accent tracking-[0.4em] uppercase text-xs mb-8 block">
              Our Performance Specs
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-12 tracking-wide leading-tight">
              直感ではなく、<br />数値で語る品質。
            </h2>
            
            <div className="space-y-8 text-light-gray leading-loose text-base md:text-lg font-light max-w-3xl mx-auto">
              <p>
                私たちは「ただ作るだけ」のクリエイターではありません。表示速度0.5秒以下という、ユーザーを一切待たせない圧倒的なパフォーマンス。これをNext.jsの最新機能によって実現します。
              </p>
              <p>
                また、100サイト以上の緻密なリサーチから導き出した「確実に成果へ繋がる勝ちパターン」を全プランに適用。感覚に頼らない、データに基づいた設計が貴社のビジネスを加速させます。
              </p>
              <p>
                セキュリティ面でも、データベースを介さない構成により脆弱性リスクをほぼゼロに極小化。運用負荷を最小限にしながら、永続的に価値を生むデジタル資産を構築します。
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10 max-w-2xl mx-auto">
              <h4 className="text-white font-serif text-xl md:text-2xl mb-8 tracking-widest uppercase">The TriField Edge</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                  <span className="text-accent text-[10px] uppercase tracking-widest mb-2 border-b border-accent/30 pb-1">Ultra Fast</span>
                  <span className="text-soft-white text-sm font-medium tracking-wide">表示速度 0.5s 以下の世界</span>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <span className="text-accent text-[10px] uppercase tracking-widest mb-2 border-b border-accent/30 pb-1">High Security</span>
                  <span className="text-soft-white text-sm font-medium tracking-wide">脆弱性リスク ゼロのモダン構成</span>
                </div>
              </div>
            </div>

          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
