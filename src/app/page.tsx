import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Collection from "@/components/sections/Collection";
import Contact from "@/components/sections/Contact";
import Company from "@/components/sections/Company";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* 
        各セクションはそれぞれのコンポーネント内で min-h-screen や 
        py-32 などの十分な余白（Padding）を設定しています。
        これらを並べることで、自然なつながりの LP が完成します。
      */}
      <Hero />
      <Philosophy />
      <Collection />
      <Contact />
      <Company />
    </main>
  );
}
