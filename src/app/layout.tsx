import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import React from "react";

// next/font を使った Playfair Display の読み込み設定
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRIFIELD | Next.js High-Performance Web Production",
  description: "表示速度0.5秒以下。Next.jsを用いた次世代のWeb制作スタジオ「TriField」。脆弱性リスクを抑え、データに基づいた勝ちパターンで貴社の価値を最大化します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-light-gray bg-deep-blue selection:bg-gold selection:text-deep-blue flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
