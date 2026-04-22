import Collection from "@/components/sections/Collection";

export const metadata = {
  title: "Service Content | Zero Gravity",
};

export default function ServicesPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-24">
      <Collection />
    </main>
  );
}
