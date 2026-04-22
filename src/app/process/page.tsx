import PageHero from "@/components/ui/PageHero";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ConsultationCTA from "@/components/ui/ConsultationCTA";

export const metadata = {
  title: "PROCESS | TriField",
};

export default function ProcessPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHero 
        title="PROCESS" 
        subtitle="The Narrative of Creation"
      />
      <ProcessTimeline />
      <ConsultationCTA />
    </main>
  );
}
