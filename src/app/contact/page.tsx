import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "CONTACT | Zero Gravity",
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHero 
        title="CONTACT" 
        subtitle="Begin Your Transformation"
      />
      <div className="bg-deep-blue pb-24">
        <Contact />
      </div>
    </main>
  );
}
