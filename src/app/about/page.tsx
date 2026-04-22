import PageHero from "@/components/ui/PageHero";
import Philosophy from "@/components/sections/Philosophy";
import OwnerProfile from "@/components/sections/OwnerProfile";
import Company from "@/components/sections/Company";

export const metadata = {
  title: "ABOUT | TriField",
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHero 
        title="ABOUT US" 
        subtitle="The Art of Digital Curation"
      />
      <Philosophy />
      <div className="bg-deep-blue">
        <div className="container mx-auto px-6 md:px-12">
          <div className="w-full h-px bg-white/10" />
        </div>
      </div>
      <OwnerProfile />
      <Company />
    </main>
  );
}
