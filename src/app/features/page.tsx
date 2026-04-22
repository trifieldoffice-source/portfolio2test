import Philosophy from "@/components/sections/Philosophy";

export const metadata = {
  title: "Our Features | Zero Gravity",
};

export default function FeaturesPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-24">
      <Philosophy />
    </main>
  );
}
