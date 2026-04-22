import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import React from "react";

// ゴシック体に変更（あえて変数名を維持して全体のfont-serifをゴシック化する）
const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "700"],
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
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body className={`${notoSansJP.className} font-sans antialiased text-light-gray bg-deep-blue selection:bg-accent selection:text-deep-blue flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
