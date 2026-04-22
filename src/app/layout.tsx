import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

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
  title: "Premium Interior | Zero Gravity",
  description: "空間を、重力から解き放つ。高級インテリアブランドのランディングページ。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-gold selection:text-deep-blue">
        <Header />
        {children}
      </body>
    </html>
  );
}
