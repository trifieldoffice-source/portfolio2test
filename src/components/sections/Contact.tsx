"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Shield } from "lucide-react";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Contact() {
  return (
    <section className="relative w-full bg-deep-blue text-soft-white py-32 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto space-y-24 relative z-10">
        
        {/* Header */}
        <AnimationWrapper animation="fade-up">
          <div className="text-center space-y-6">
            <h2 className="text-xs tracking-[0.5em] text-gold uppercase opacity-80">Inquiry</h2>
            <h3 className="font-serif text-3xl md:text-5xl tracking-widest leading-tight">
              価値あるデジタル資産を、<br className="md:hidden" />共に構築する。
            </h3>
            <p className="text-light-gray/60 text-sm md:text-base tracking-widest font-light mt-8 max-w-xl mx-auto leading-relaxed">
              表示速度改善の相談、新規サイト構築、LPO施策。漠然とした課題感だけでも構いません。<br className="hidden md:block" />
              貴社のビジネスを加速させる最適な解決策をご提案します。
            </p>
          </div>
        </AnimationWrapper>

        {/* Main Form */}
        <AnimationWrapper animation="fade-up" delay={0.2}>
          <form className="w-full bg-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-16 space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Name */}
              <div className="space-y-2 group">
                <label className="text-[10px] text-gold uppercase tracking-[0.2em]">Name</label>
                <input 
                  type="text" 
                  placeholder="お名前 / 貴社名"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-gold transition-colors placeholder-white/10"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2 group">
                <label className="text-[10px] text-gold uppercase tracking-[0.2em]">Email</label>
                <input 
                  type="email" 
                  placeholder="メールアドレス"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-gold transition-colors placeholder-white/10"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Budget Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-[10px] text-gold uppercase tracking-[0.2em]">Budget</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-gold appearance-none cursor-pointer">
                    <option value="" className="bg-deep-blue text-white">ご予算感（目安）</option>
                    <option value="basic" className="bg-deep-blue">〜 ¥100,000 (BASICクラス)</option>
                    <option value="standard" className="bg-deep-blue">¥100,000 〜 ¥250,000 (STANDARDクラス)</option>
                    <option value="business" className="bg-deep-blue">¥250,000 〜 ¥500,000 (PREMIUMクラス)</option>
                    <option value="enterprise" className="bg-deep-blue">¥500,000 〜 (大規模・ASK)</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-gold/50 pointer-events-none" />
                </div>
              </div>

              {/* Deadline Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-[10px] text-gold uppercase tracking-[0.2em]">Deadline</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-gold appearance-none cursor-pointer">
                    <option value="" className="bg-deep-blue text-white">希望納期</option>
                    <option value="asap" className="bg-deep-blue">1ヶ月以内（至急）</option>
                    <option value="3months" className="bg-deep-blue">3ヶ月以内</option>
                    <option value="6months" className="bg-deep-blue">〜半年程度</option>
                    <option value="undecided" className="bg-deep-blue">未定・相談したい</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-gold/50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[10px] text-gold uppercase tracking-[0.2em]">Message</label>
              <textarea 
                rows={4}
                placeholder="ご相談内容の詳細をご記入ください"
                className="w-full bg-transparent border border-white/10 p-4 text-white font-light outline-none focus:border-gold transition-colors placeholder-white/10 resize-none min-h-[120px]"
                required
              />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start gap-4 pt-4">
              <input type="checkbox" id="privacy" className="mt-1 accent-gold cursor-pointer w-4 h-4" required />
              <label htmlFor="privacy" className="text-[11px] text-light-gray/60 leading-relaxed cursor-pointer hover:text-light-gray transition-colors">
                <span className="text-gold border-b border-gold/30 mr-1">プライバシーポリシー</span>
                の内容に同意します。ご入力いただいた情報は、お問い合わせへの回答目的以外には使用いたしません。
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <motion.button
                type="submit"
                className="relative overflow-hidden bg-gold px-12 py-5 text-deep-blue text-xs tracking-[0.4em] uppercase font-bold group hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 transition-colors duration-500">Send Message</span>
                <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>
              <div className="flex items-center gap-2 text-gold/40 text-[9px] uppercase tracking-widest">
                <Shield className="w-3 h-3" /> Secure Submission
              </div>
            </div>
          </form>
        </AnimationWrapper>

        {/* Alternative Contact */}
        <AnimationWrapper animation="fade-up" delay={0.3}>
          <div className="max-w-xl mx-auto mt-24 text-center">
            <h4 className="text-gold tracking-[0.4em] uppercase text-[10px] mb-8">For Faster Response</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="tel:03-xxxx-xxxx" 
                className="flex items-center justify-center gap-4 p-6 border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <Phone className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[8px] text-gold/50 tracking-widest">PHONE SUPPORT</span>
                  <span className="text-white font-serif text-lg">03-xxxx-xxxx</span>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-4 p-6 border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <MessageCircle className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[8px] text-gold/50 tracking-widest">OFFICIAL LINE</span>
                  <span className="text-white font-serif text-lg">Add Friends</span>
                </div>
              </a>
            </div>
            <p className="mt-8 text-light-gray/40 text-[10px] leading-relaxed">
              ※お電話での受付は平日 10:00 - 19:00 となります。 <br />
              お急ぎの場合はLINE公式アカウントにてメッセージをお送りください。
            </p>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
}
