import Contact from "@/components/Contact";
import Hero from "@/components/Hero/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Hero />

      <main className="bg-brand-darker min-h-screen text-brand-text flex flex-col gap-1">
        <Services />
        <Pricing />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
