"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const sitemap = [
  { name: "HOME", path: "/" },
  { name: "SERVICE", path: "/service" },
  { name: "WORKS", path: "/works" },
  { name: "PROCESS", path: "/process" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black/40 border-t border-white/5 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
          
          {/* Brand Part */}
          <div className="lg:w-1/3 space-y-8">
            <Link href="/" className="text-2xl font-serif text-white tracking-widest uppercase">
              TRIFIELD
            </Link>
            <p className="text-light-gray/60 text-xs leading-relaxed tracking-widest max-w-[280px]">
              空間そのものが持つ真の可能性を、デザインと技術、そして対話を通じて具現化するデジタル・キュレーション・スタジオ。
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-gold transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap Part */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h4 className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">Navigation</h4>
              <nav className="flex flex-col space-y-3">
                {sitemap.map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path} 
                    className="text-white/40 hover:text-white text-[11px] tracking-widest transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold">Office</h4>
              <p className="text-white/40 text-[11px] leading-relaxed tracking-widest">
                Minami Aoyama, Minato-ku,<br />
                Tokyo, Japan 107-XXXX<br />
                TRIFIELD STUDIO
              </p>
            </div>

            <div className="space-y-6 md:col-span-2 flex flex-col justify-between items-end">
              <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-4 text-white/40 hover:text-gold transition-colors duration-500"
              >
                <span className="text-[9px] tracking-[0.5em] uppercase vertical-text">Scroll to Top</span>
                <div className="p-3 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 tracking-[0.3em]">
            © 2026 TRIFIELD OFFICE. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] text-white/20 hover:text-white/40 tracking-[0.1em] transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="text-[10px] text-white/20 hover:text-white/40 tracking-[0.1em] transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
