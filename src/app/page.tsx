import ContactLazy from "@/components/sections/Contact.lazy";
import SkillsLazy from "@/components/sections/Skills.lazy";
import ReviewsLazy from "@/components/sections/Reviews.lazy";
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
          <ReviewsLazy />
        </RevealSection>

        <RevealSection>
          <ContactLazy />
        </RevealSection>
      </main>
    </div>
  );
}
