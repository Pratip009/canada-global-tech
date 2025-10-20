import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import webImg from "../../../../../public/software/web/banner.webp";
import ClientsMarquee from "@/components/ClientsMarquee";
import WebsiteIntro from "@/components/Software-engineering/website-development/websitecareIntro";
import AdvantageSection from "@/components/Software-engineering/website-development/AdvantageSection";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import WebsiteMarquee from "@/components/Software-engineering/website-development/WebsiteMarquee";
import TechnologyCapabilities from "@/components/TechnologyCapabilities";
import WebsiteProcessSection from "@/components/Software-engineering/website-development/WebsiteProcessSection";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import WebsiteProcessProgress from "@/components/Software-engineering/website-development/WebsiteProcessProgress";
import WebFAQ from "@/components/Software-engineering/web-development/WebFAQ";
import ReusableServiceTabs from "@/components/ReusableServiceTabs";
import ContactSection from "@/components/ContactSection";
import WebsiteServicesTab from "@/components/Software-engineering/website-development/websiteerviceTab";


export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={webImg}
        smallHeader="Home / Service / Software Engineering / Web App Development"
        titleHighlight="Web App Development Services"
        titleMain=""
        description="Tired of off-the-shelf solutions? Get scalable, secure, and user-centric web apps tailored to your business needs. Streamline operations, enhance engagement, and drive growth with future-ready web applications."
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="End-to-End Web Application Development Services"
        mainTitle="From strategy to deployment, we craft "
        highlightText="web apps that deliver results"
        afterHighlight=""
        challenges={[
          "Outdated web apps that crash under traffic spikes or business growth.",
          "High bounce rates due to slow load times, confusing navigation, or non-responsive design.",
          "Security vulnerabilities risking data breaches and loss of customer trust.",
          "Limited functionality that fails to meet evolving business needs or integrate with other systems.",
        ]}
        paragraph1="At Canada Global Tech, we deliver custom web application development services that transform your digital challenges into competitive advantages. With deep expertise in cloud-native architectures, seamless API integrations, and performance, our solutions break down data silos, enhance security, and provide actionable insights through intelligent analytics.
        From disruptive startups to global enterprises, our U.S.-based web application development team delivers technology-agnostic solutions tailored to your unique business goals, ensuring your web application becomes a catalyst for digital transformation.
        "
      />
      <WebsiteServicesTab />
      <AdvantageSection />
      <CaseStudiesSlider />
      <WebsiteMarquee />
      <TechnologyCapabilities />
      <WebsiteProcessSection />
      <DigitalChangeCTA />
      <WebsiteProcessProgress />
      <WebFAQ />
      <ContactSection/>
    </main>
  );
}
