import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact | Zero Gravity",
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen pt-24">
      <Contact />
    </main>
  );
}
