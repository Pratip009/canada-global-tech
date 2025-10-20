import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import websiteImg from "../../../../../public/software/website/banner.webp";
import ClientsMarquee from "@/components/ClientsMarquee";
import WebsiteIntro from "@/components/Software-engineering/website-development/websitecareIntro";
import WebsiteServicesTab from "@/components/Software-engineering/website-development/websiteerviceTab";
import AdvantageSection from "@/components/Software-engineering/website-development/AdvantageSection";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import WebsiteMarquee from "@/components/Software-engineering/website-development/WebsiteMarquee";
import TechnologyCapabilities from "@/components/TechnologyCapabilities";
import WebsiteProcessSection from "@/components/Software-engineering/website-development/WebsiteProcessSection";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import WebsiteProcessProgress from "@/components/Software-engineering/website-development/WebsiteProcessProgress";
import WebsiteFaqSection from "@/components/Software-engineering/website-development/WebsiteFaqSection";
import ContactSection from "@/components/ContactSection";
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={websiteImg}
        smallHeader="Home / Service / Software Engineering / Web Design & Development"
        titleHighlight="Web Design & Development Services"
        titleMain=""
        description="Forward-thinking leaders like you know the power of web and cloud technologies to drive operational success. Partner with expert consultants to achieve seamless performance, scalable growth, and resilient digital infrastructure for the future."
      />
      <ClientsMarquee />
      <WebsiteIntro />
      <WebsiteServicesTab />
      <AdvantageSection />
      <CaseStudiesSlider />
      <WebsiteMarquee />
      <TechnologyCapabilities />
      <WebsiteProcessSection />
      <DigitalChangeCTA />
      <WebsiteProcessProgress />
      <WebsiteFaqSection />
      <ContactSection/>
    </main>
  );
}
