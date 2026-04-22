"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

export default function ConsultationCTA() {
  return (
    <section className="w-full bg-deep-blue py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimationWrapper animation="fade-up" className="relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full -z-10 group-hover:bg-accent/10 transition-colors duration-1000" />
          
          <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl p-12 md:p-24 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-xs tracking-[0.5em] text-accent uppercase font-light">Free Consultation</h2>
              <h3 className="font-serif text-3xl md:text-5xl tracking-widest leading-tight text-white">
                15分〜30分の無料相談で、<br />Webの未来を描く。
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-light-gray/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                現在のウェブサイトの状況や、Googleマップ・インターネット上での集客および、<br className="hidden md:block" />
                貴社のイメージ状況についてざっくばらんに分析・お話しするものです。
              </p>
              <p className="text-accent/60 text-sm font-light">
                ※強引な営業は一切行いません。貴社の課題を整理する時間としてご活用ください。
              </p>
            </div>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="fade-up" delay={0.4}>
          <div className="flex justify-center mt-12">
            <a 
              href="https://timerex.net/s/trifield.office_0501/b5962a19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-accent text-deep-blue text-[10px] tracking-[0.3em] font-bold hover:shadow-[0_0_40px_rgba(0,209,255,0.4)] transition-all duration-500 uppercase"
            >
              Schedule via Timerex
            </a>
          </div>
        </AnimationWrapper>
        
        <div className="mt-16 text-center">
          <span className="text-[10px] text-white/20 tracking-[0.5em] uppercase">No strings attached. Pure exploration.</span>
        </div>
      </div>
    </section>
  );
}
