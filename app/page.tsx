import ContactLazy from "@/components/lazy/ContactLazy";
import SkillsLazy from "@/components/lazy/SkillsLazy";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import RevealSection from "@/components/ui/RevealSection";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Hero />

      <main className="bg-brand-darker min-h-screen text-brand-text flex flex-col gap-1">
        <RevealSection>
          <Services />
        </RevealSection>

        <RevealSection>
          <Pricing />
        </RevealSection>

        <RevealSection>
          <SkillsLazy />
        </RevealSection>

        <RevealSection>
          <ContactLazy />
        </RevealSection>
      </main>
    </div>
  );
}
