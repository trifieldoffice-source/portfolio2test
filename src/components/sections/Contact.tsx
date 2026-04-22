"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen bg-deep-blue text-soft-white py-32 px-6 flex flex-col justify-center items-center overflow-hidden">
      
      {/* 繊細な装飾光（無重力的な空間の揺らぎ） */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-soft-white/5 blur-[100px] pointer-events-none" />

      <motion.div
        className="w-full max-w-2xl mx-auto flex flex-col space-y-16 relative z-10"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-sm tracking-[0.5em] text-gold uppercase">Contact</h2>
          <h3 className="font-serif text-3xl md:text-5xl tracking-widest leading-relaxed">
            重力の無い空間へ、<br className="md:hidden" />ようこそ。
          </h3>
          <p className="text-soft-white/50 text-sm md:text-base tracking-widest font-light mt-8">
            カタログ請求、あるいはプロジェクトのご相談。
          </p>
        </div>

        <form className="w-full flex flex-col space-y-12 mt-12">
          {/* お名前 */}
          <div className="relative group">
            <input 
              type="text" 
              id="name"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-soft-white/20 pb-4 text-soft-white text-lg font-light tracking-widest outline-none transition-all duration-500 focus:border-soft-white focus:pb-6 placeholder-soft-white/20"
              required
            />
          </div>

          {/* メールアドレス */}
          <div className="relative group">
            <input 
              type="email" 
              id="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-soft-white/20 pb-4 text-soft-white text-lg font-light tracking-widest outline-none transition-all duration-500 focus:border-soft-white focus:pb-6 placeholder-soft-white/20"
              required
            />
          </div>

          {/* メッセージ */}
          <div className="relative group">
            <textarea 
              id="message"
              rows={3}
              placeholder="Message"
              className="w-full bg-transparent border-b border-soft-white/20 pb-4 text-soft-white text-lg font-light tracking-widest outline-none transition-all duration-500 focus:border-soft-white focus:pb-6 placeholder-soft-white/20 resize-none"
              required
            />
          </div>

          {/* 送信ボタン：ホバー時に光が溢れる無重力エフェクト */}
          <div className="pt-8 flex justify-center">
            <motion.button
              type="submit"
              className="relative overflow-hidden border border-soft-white/30 rounded-full px-12 py-5 tracking-[0.3em] uppercase text-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-deep-blue">
                Send Message
              </span>
              
              {/* 光が内側から満ちるエフェクト */}
              <div className="absolute inset-0 bg-soft-white translate-y-[100%] rounded-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              
              {/* 外部への光の拡散（グロー） */}
              <div className="absolute inset-0 bg-soft-white blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0 pointer-events-none" />
            </motion.button>
          </div>
        </form>

      </motion.div>
    </section>
  );
}
