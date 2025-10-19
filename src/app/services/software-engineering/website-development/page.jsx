import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import websiteImg from "../../../../../public/software/website/banner.webp";
import ClientsMarquee from "@/components/ClientsMarquee";

import WebsiteIntro from "@/components/Software-engineering/website-development/websitecareIntro";

import WebsiteServicesTab from "@/components/Software-engineering/website-development/websiteerviceTab";
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
    </main>
  );
}
