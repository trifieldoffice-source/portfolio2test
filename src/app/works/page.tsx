import PageHero from "@/components/ui/PageHero";
import WorksGallery from "@/components/sections/WorksGallery";

export const metadata = {
  title: "OUR WORKS | TriField",
};

export default function WorksPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHero 
        title="OUR WORKS" 
        subtitle="Masterpieces in Digital & Space"
      />
      <WorksGallery />
    </main>
  );
}
