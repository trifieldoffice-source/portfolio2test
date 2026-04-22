import Company from "@/components/sections/Company";

export const metadata = {
  title: "Company | Zero Gravity",
};

export default function CompanyPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-24">
      <Company />
    </main>
  );
}
