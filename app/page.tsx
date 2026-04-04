import ContactLazy from "@/components/lazy/ContactLazy";
import SkillsLazy from "@/components/lazy/SkillsLazy";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";

/* 
  TODO: lazy loading (services, pricing, skills, contact), animacje z framer-motion, loading przy scrollu
*/

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Hero />

      <main className="bg-brand-darker min-h-screen text-brand-text flex flex-col gap-1">
        <Services />
        <Pricing />
        <SkillsLazy />
        <ContactLazy />
      </main>
    </div>
  );
}
