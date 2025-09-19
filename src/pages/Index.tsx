import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <AdvantagesSection />
    </div>
  );
};

export default Index;
