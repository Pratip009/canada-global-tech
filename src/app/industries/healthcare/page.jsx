import React from "react";
import healthcareImg from "../../../../public/industry/healthcare.webp";
import IndustryHero from "@/components/Industry/IndustryHero";
import ClientsMarquee from "@/components/ClientsMarquee";
import HealthcareIntro from "@/components/Industry/HealthcareIntro";
import HealthcareTrendsTabs from "@/components/Industry/HealthcareTrendsTabs";
import HealthcareServicesTabs from "@/components/Industry/HealthcareServicesTabs";
import HealthcareSolutionsSlider from "@/components/Industry/HealthcareSolutionsSlider";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import WhoWeHelp from "@/components/Industry/WhoWeHelp";
import TechnologiesWeUse from "@/components/Industry/TechnologiesWeUse";
import FAQSection from "@/components/Industry/FAQSection";
const Healthcare = () => {
  return (
    <main>
      <IndustryHero
        backgroundImage={healthcareImg}
        smallHeader="Home / Industry / Healthcare"
        titleHighlight="Healthcare"
        titleMain="Software Development Services"
        description="Tired of one-size-fits-all?
Get healthcare software that fits your needs. Streamline, automate, and innovate with medical software solutions built around your goals, and for your budget."
      />
      <ClientsMarquee />
      <HealthcareIntro />
      <HealthcareTrendsTabs />
      <HealthcareServicesTabs />
      <HealthcareSolutionsSlider />
      <DigitalChangeCTA />
      <WhoWeHelp />
      <TechnologiesWeUse />
      <FAQSection />
    </main>
  );
};

export default Healthcare;
