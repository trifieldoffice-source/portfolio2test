"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Shield } from "lucide-react";
import { useState } from "react";
import AnimationWrapper from "../ui/AnimationWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    deadline: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessKey: "sf_f8ddba04d76781fbcb5e9b10",
          subject: "【TriField】ウェブサイトからのお問い合わせ",
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", industry: "", deadline: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-deep-blue text-soft-white py-32 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto space-y-24 relative z-10">
        
        {/* Header */}
        <AnimationWrapper animation="fade-up">
          <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto mt-12 p-8 bg-white/[0.03] border border-accent/20 rounded-lg backdrop-blur-md">
              <h4 className="text-accent text-sm tracking-[0.2em] mb-4">【15～30分程度の無料相談を実施中】</h4>
              <p className="text-sm text-soft-white/80 leading-loose mb-8">
                現在のウェブサイトの状況や、Googleマップ・インターネット上での集客および、<br className="hidden md:block" />
                貴社のイメージ状況についてざっくばらんに分析・お話しする場です。
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://timerex.net/s/trifield.office_0501/b5962a19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent text-deep-blue text-[11px] font-bold tracking-widest hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300"
                >
                  Schedule via Timerex
                </a>
              </div>
            </div>

            <p className="text-light-gray/60 text-sm tracking-widest font-light mt-12 max-w-xl mx-auto leading-relaxed">
              具体的なプロジェクトの相談、または上記無料相談の予約以外のメッセージは、<br className="hidden md:block" />
              以下のフォームよりお気軽にお送りください。
            </p>
          </div>
        </AnimationWrapper>

        {/* Main Form */}
        <AnimationWrapper animation="fade-up" delay={0.2}>
          {submitStatus === "success" ? (
            <div className="w-full bg-white/[0.02] border border-accent/30 backdrop-blur-sm p-16 text-center space-y-6">
              <h3 className="text-2xl text-accent font-serif tracking-wide">Thank You.</h3>
              <p className="text-light-gray/80 leading-relaxed max-w-md mx-auto">
                お問い合わせありがとうございます。<br />
                内容を確認次第、2営業日以内に担当者よりご返信いたします。
              </p>
              <button 
                onClick={() => setSubmitStatus("idle")}
                className="mt-8 text-xs text-accent tracking-widest border-b border-accent/30 pb-1"
              >
                Go back to form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full bg-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-16 space-y-12">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Name */}
                <div className="space-y-2 group">
                  <label className="text-[10px] text-accent uppercase tracking-[0.2em]">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="お名前 / 貴社名"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-accent transition-colors placeholder-white/10"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 group">
                  <label className="text-[10px] text-accent uppercase tracking-[0.2em]">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="メールアドレス"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-accent transition-colors placeholder-white/10"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Industry/Business Type */}
                <div className="space-y-2 group">
                  <label className="text-[10px] text-accent uppercase tracking-[0.2em]">Industry</label>
                  <input 
                    type="text" 
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="業種・業態（例: 歯科医院、カフェ等）"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-accent transition-colors placeholder-white/10"
                  />
                </div>

                {/* Deadline Dropdown */}
                <div className="space-y-2 relative">
                  <label className="text-[10px] text-accent uppercase tracking-[0.2em]">Deadline</label>
                  <div className="relative">
                    <select 
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-white font-light outline-none focus:border-accent appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-deep-blue text-white">希望納期</option>
                      <option value="1ヶ月以内（至急）" className="bg-deep-blue">1ヶ月以内（至急）</option>
                      <option value="3ヶ月以内" className="bg-deep-blue">3ヶ月以内</option>
                      <option value="〜半年程度" className="bg-deep-blue">〜半年程度</option>
                      <option value="未定・相談したい" className="bg-deep-blue">未定・相談したい</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-accent/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] text-accent uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="ご相談内容の詳細をご記入ください"
                  className="w-full bg-transparent border border-white/10 p-4 text-white font-light outline-none focus:border-accent transition-colors placeholder-white/10 resize-none min-h-[120px]"
                  required
                />
              </div>

              {submitStatus === "error" && (
                <div className="text-red-400 text-sm text-center">
                  通信エラーが発生しました。時間をおいて再度お試しください。
                </div>
              )}

              {/* Privacy Agreement */}
              <div className="flex items-start gap-4 pt-4">
                <input type="checkbox" id="privacy" className="mt-1 accent-accent cursor-pointer w-4 h-4" required />
                <label htmlFor="privacy" className="text-[11px] text-light-gray/60 leading-relaxed cursor-pointer hover:text-light-gray transition-colors">
                  <span className="text-accent border-b border-accent/30 mr-1">プライバシーポリシー</span>
                  の内容に同意します。ご入力いただいた情報は、お問い合わせへの回答目的以外には使用いたしません。
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden bg-accent px-12 py-5 text-deep-blue text-xs tracking-[0.4em] uppercase font-bold group transition-all duration-500 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0_0_40px_rgba(0,209,255,0.3)]"}`}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 transition-colors duration-500">
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </span>
                  {!isSubmitting && <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />}
                </motion.button>
                <div className="flex items-center gap-2 text-accent/40 text-[9px] uppercase tracking-widest">
                  <Shield className="w-3 h-3" /> Secure Submission
                </div>
              </div>
            </form>
          )}
        </AnimationWrapper>

        {/* Alternative Contact */}
        <AnimationWrapper animation="fade-up" delay={0.3}>
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-accent tracking-[0.4em] uppercase text-[10px] mb-8">For Faster Response</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="tel:03-xxxx-xxxx" 
                className="flex items-center justify-center gap-4 p-6 border border-white/5 hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[8px] text-accent/50 tracking-widest">PHONE SUPPORT</span>
                  <span className="text-white font-serif text-base">03-xxxx-xxxx</span>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-4 p-6 border border-white/5 hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <MessageCircle className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[8px] text-accent/50 tracking-widest">OFFICIAL LINE</span>
                  <span className="text-white font-serif text-base">Add Friends</span>
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
