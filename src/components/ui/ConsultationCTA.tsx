"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimationWrapper from "./AnimationWrapper";

export default function ConsultationCTA() {
  return (
    <section className="w-full py-24 bg-deep-blue">
      <div className="container mx-auto px-6 md:px-12">
        <AnimationWrapper animation="fade-up">
          <div className="relative group overflow-hidden border border-gold/20 bg-white/[0.02] p-12 md:p-20 text-center">
            {/* Shimmer Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-wide">
              まずは小さな悩みから、<br className="md:hidden" />お聞かせください。
            </h2>
            <p className="text-light-gray mb-12 max-w-2xl mx-auto leading-relaxed">
              漠然としたイメージだけでも構いません。対話を通じて、あなたの空間が持つ真の可能性を一緒に探っていきましょう。
            </p>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 bg-gold px-10 py-5 text-deep-blue font-serif relative group hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-sm tracking-widest uppercase">Free Consultation</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Button Inner Shine */}
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <div className="mt-12">
              <span className="text-[10px] text-gold/40 tracking-[0.5em] uppercase">No strings attached. Pure exploration.</span>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
