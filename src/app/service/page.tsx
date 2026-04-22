import PageHero from "@/components/ui/PageHero";
import ServicePricing from "@/components/sections/ServicePricing";
import ServiceOptions from "@/components/sections/ServiceOptions";

export const metadata = {
  title: "OUR SERVICE | Zero Gravity",
};

export default function ServicePage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <PageHero 
        title="OUR SERVICE" 
        subtitle="Creating Timeless Spaces"
      />
      <ServicePricing />
      <ServiceOptions />
    </main>
  );
}
