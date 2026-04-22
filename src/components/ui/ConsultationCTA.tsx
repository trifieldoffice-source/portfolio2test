"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

export default function ConsultationCTA() {
  return (
    <section className="w-full py-24 bg-deep-blue">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative text-center space-y-12 max-w-4xl mx-auto">
          <AnimationWrapper animation="fade-up">
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              まずは、<br className="md:hidden" />気軽にお聞かせください。
            </h2>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={0.2}>
            <p className="text-light-gray/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
              どのようなサイトをご希望か、まずはざっくばらんにお話ししませんか？<br className="hidden md:block" />
              私たちが実現できることを、15分程度のリラックスした対話でご提案します。
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-up" delay={0.4}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="bg-gold text-deep-blue px-12 py-5 rounded-full text-xs tracking-[0.3em] font-bold hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 uppercase">
                Contact TriField
              </button>
            </div>
          </AnimationWrapper>
          
          <div className="mt-12">
            <span className="text-[10px] text-gold/40 tracking-[0.5em] uppercase">No strings attached. Pure exploration.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
