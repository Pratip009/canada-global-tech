import HeroSection from "@/components/HeroSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TechnologyOfferings from "@/components/TechnologyOfferings";
import WhoWeAre from "@/components/WhoWeAre";
import CardSlider from "@/components/CardSlider";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import TechnologyCapabilities from "@/components/TechnologyCapabilities";
import ClientsTestimonials from "@/components/ClientsTestimonials";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import IndustryShowcase from "@/components/IndustryShowcase";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsMarquee />
      <TechnologyOfferings />
      <WhoWeAre />
      <CardSlider />
      <CaseStudiesSlider />
      <TechnologyCapabilities />
      {/* <ClientsTestimonials /> */}
      <DigitalChangeCTA />
      <IndustryShowcase />
      <ContactSection/>
    </main>
  );
}
