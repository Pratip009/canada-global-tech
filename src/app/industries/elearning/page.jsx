import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import elearningImg from "../../../../public/industry/eLearning.webp";
import ClientsMarquee from "@/components/ClientsMarquee";
import ElearningIntro from "@/components/Industry/ElearningIntro";
import ElearningTrendsTabs from "@/components/Industry/ElearningTrendsTabs";
import ElearningServicesTabs from "@/components/Industry/ElearningServicesTabs";
import ElearningSolutionsSlider from "@/components/Industry/ElearningSolutionsSlider";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import ElearningHelp from "@/components/Industry/ElearningHelp";
import ElearningTechnologies from "@/components/Industry/ElearningTechnologies";
import ElearningFAQSection from "@/components/Industry/ElearningFAQSection";
const Elearning = () => {
  return (
    <main>
      <IndustryHero
        backgroundImage={elearningImg}
        smallHeader="Home / Industry / Education & Elearning"
        titleHighlight="Education & Elearning"
        titleMain="Software Development Services"
        description="Looking for outstanding digital learning experiences?
Engage, educate, and change lives with AI-powered EdTech and smart eLearning solutions designed to make learning secure, flexible, fun and cost-effective."
      />
      <ClientsMarquee />
      <ElearningIntro />
      <ElearningTrendsTabs />
      <ElearningServicesTabs />
      <ElearningSolutionsSlider />
      <DigitalChangeCTA />
      <ElearningHelp />
      <ElearningTechnologies />
      <ElearningFAQSection />
    </main>
  );
};

export default Elearning;
