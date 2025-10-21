import AboutSection from "@/components/about/AboutSection";
import ClienteleSlider from "@/components/about/ClienteleSlider";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import JoinOurTeam from "@/components/about/JoinOurTeam";
import TestimonialSlider from "@/components/about/TestimonialSlider";
import VideoRevealHero from "@/components/about/VideoRevealHero";
import VisionMissionSection from "@/components/about/VisionMissionSection";
import WhatWeDoSection from "@/components/about/WhatWeDoSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import IndustryHero from "@/components/Industry/IndustryHero";

export default function AboutPage() {
  return (
    <main>
      <IndustryHero
        backgroundImage="/about/about.webp"
        smallHeader="Home / Company / About Us"
        titleMain="We believe in building a Future"
        titleHighlight="where People, Process, and Technology drive Lasting Change."
        description="At Canada Global Tech we believe that true innovation stems from a deep understanding of the people behind the technology and the processes that guide it. Our mission is simple: to solve the toughest technical challenges by putting people and processes at the core of everything we do."
      />
      <ClientsMarquee />
      <VideoRevealHero />
      <AboutSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <WhatWeDoSection />
      {/* <ClienteleSlider />
      <TestimonialSlider /> */}
      <JoinOurTeam />
    </main>
  );
}
