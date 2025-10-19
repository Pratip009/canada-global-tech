import IndustryHero from "@/components/Industry/IndustryHero";
import blogbanner from "../../../../public/industry/elearning/blog.svg";
import CaseStudySlider from "@/components/UI-UX/CaseStudySlider";
import UIUXShowcase from "@/components/UI-UX/UIUXShowcase";
import CTASection from "@/components/UI-UX/CTASection";
export default function UIUXGalleryPage() {
  return (
    <main>
      <IndustryHero
        backgroundImage={blogbanner}
        smallHeader="Home / Resource / UI and UX Gallery"
        titleHighlight="UI and UX Gallery"
        titleMain="Home Our UI and UX Gallery"
        description="Curated collection of intuitive futuristic designs featuring finely crafted iconography, typography, and visual hierarchy"
      />
      <CaseStudySlider />
      <UIUXShowcase />
      <CTASection />
    </main>
  );
}
