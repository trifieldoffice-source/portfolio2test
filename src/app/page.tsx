import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import WorksGallery from "@/components/sections/WorksGallery";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceOptions from "@/components/sections/ServiceOptions";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import OwnerProfile from "@/components/sections/OwnerProfile";
import FAQ from "@/components/sections/FAQ";
import ConsultationCTA from "@/components/ui/ConsultationCTA";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-deep-blue">
      {/* 1. イントロダクション: パフォーマンスと価値の再定義 */}
      <Hero />
      
      {/* 2. 哲学: ロジックと数値による設計思想 */}
      <Philosophy />
      
      {/* 3. 実績: 定量的な成果を示すギャラリー */}
      <WorksGallery />
      
      {/* 4. スタジオの強み: 技術的優位性とデータ活用 */}
      <OwnerProfile />
      
      {/* 5. プロセス: リサーチから成長支援まで */}
      <ProcessTimeline />
      
      {/* 6. プランニング: 透明性のある価格体系 */}
      <ServicePricing />
      
      {/* 7. オプション: 継続的な運用と改善支援 */}
      <ServiceOptions />
      
      {/* 8. 疑問解消: 技術・費用・プロセスへの回答 */}
      <FAQ />
      
      {/* 9. 最終アクション喚起: 低摩擦な相談チャネル */}
      <ConsultationCTA />
      
      {/* 10. 事業概要: 信頼性の担保 */}
      <Company />
      
      {/* 11. コンタクト: プロジェクトの始動 */}
      <Contact />
    </main>
  );
}
