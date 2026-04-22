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
                  src="/executive_portrait_minimalist_1776842900141.png" 
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
              <span className="text-gold tracking-[0.4em] uppercase text-xs mb-6 block">Representative Profile</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-wide">
                目に見えないものを、<br />提案する。
              </h2>
              
              <div className="space-y-6 text-light-gray leading-loose text-base md:text-lg font-light">
                <p>
                  5年間の最前線での営業経験。そこで学んだのは、単にモノを売る技術ではなく、お客様の心の中にある「まだ見ぬ理想」を言語化し、形にする対話の重みでした。
                </p>
                <p>
                  その後、テクノロジーの無限の可能性に魅せられ、ITパスポートを取得。ITの基礎体力を備えた制作者として、感覚的な「美しさ」だけでなく、論理的な「機能性」と「マーケティング」を融合させた提案を信条としています。
                </p>
                <p>
                  「ITの言葉」と「ビジネスの言葉」の橋渡し役として、お客様を迷わせることなく、確かな成果へと伴走いたします。
                </p>
              </div>

              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-white font-serif text-xl mb-4">Core Strengths</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <span className="text-gold text-[10px] uppercase tracking-widest mb-1">Sales Origin</span>
                    <span className="text-soft-white text-sm">5年間の対面営業による深いヒアリング力と提案力</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gold text-[10px] uppercase tracking-widest mb-1">Tech Foundation</span>
                    <span className="text-soft-white text-sm">ITパスポート保持。論理的かつ堅牢な実装技術</span>
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
