import Banner from "@/components/case-study/Banner";
import LeftCaseStudy from "@/components/case-study/LeftCaseStudy";
import RightCaseStudy from "@/components/case-study/RightCaseStudy";

import casestudy1 from "../../../public/casestudy/media1.webp";
import casestudy2 from "../../../public/casestudy/meia2.webp";
import ClientsMarquee from "@/components/ClientsMarquee";
import CtaSection from "@/components/case-study/CtaSection";
import casestudy3 from "../../../public/casestudy/media3.webp";
import casestudy4 from "../../../public/casestudy/media4.webp";
import casestudy5 from "../../../public/casestudy/media5.webp";
import casestudy6 from "../../../public/casestudy/media6.webp";
export default function CaseStudiesPage() {
  return (
    <div className="w-full">
      <Banner
        title="Discover Our"
        gradientText="Case Studies"
        gradientFrom="#34d399"
        gradientTo="#3b82f6"
        subtitle="Explore how our innovative solutions have transformed businesses across various industries, driving growth and success."
      />
      <LeftCaseStudy
        smallHeader="Media & Entertainment"
        mainHeader="Boosted CX and operational efficiency for a Fortune 50 Media Conglomerate"
        description1="Engineered advanced cloud tech with a client portal for ad analytics & forecasts and an internal tool for budget & strategy."
        description2="Improved workflows, automation, and analytics integration for better strategic decision-making."
        stat1Value="15%"
        stat1Text="Increase in backoffice operational efficiency"
        stat2Value="60%"
        stat2Text="Improvement in customer satisfaction survey"
        image={casestudy1}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
      <RightCaseStudy
        smallHeader="Healthcare"
        mainHeader="Enhanced patient engagement for a leading healthcare provider"
        description1="Developed a telemedicine platform with integrated AI diagnostics and patient management tools."
        description2="Streamlined operations and improved patient outcomes through data-driven insights."
        stat1Value="25%"
        stat1Text="Increase in patient satisfaction scores"
        stat2Value="40%"
        stat2Text="Reduction in appointment no-shows"
        image={casestudy2}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
      <ClientsMarquee />
      <CtaSection />
      <LeftCaseStudy
        smallHeader="SaaS"
        mainHeader="Built an idea into a Multi-million Dollar SaaS Platform using patented tech"
        description1="Implemented cutting-edge tech, enabling multi-location recording, real-time analytics, dynamic editing, and scalability."
        description2="Improved workflows, automation, and analytics integration for better strategic decision-making."
        stat1Value="$25"
        stat1Text="Million+ seed funding"
        stat2Value="50+"
        stat2Text="Fortune 500 customers"
        image={casestudy3}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
      <RightCaseStudy
        smallHeader="Translation"
        mainHeader="Digital Transformation of a Translation Company, fueling business growth"
        description1="Developed scalable middleware to enhance efficiency, ensure data security, and optimize UI/UX with advanced analytics."
        description2="Streamlined operations and improved patient outcomes through data-driven insights."
        stat1Value="3x"
        stat1Text="Improvement in customer satisfaction survey"
        stat2Value="35%"
        stat2Text="Reduction in project delivery timelines"
        image={casestudy4}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
      <LeftCaseStudy
        smallHeader="Logistics"
        mainHeader="Website Revamp to boost conversions of a Leading Online Logistics Provider"
        description1="Redesigned the legacy website with cutting-edge tech, optimizing UI/UX, enhancing conversions, and scalability."
        description2="Improved workflows, automation, and analytics integration for better strategic decision-making."
        stat1Value="63%"
        stat1Text="Increase in visitor engagement"
        stat2Value="2x"
        stat2Text="Improvement in customer enquiries"
        image={casestudy5}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
      <RightCaseStudy
        smallHeader="Fintech"
        mainHeader="Boosted lead conversion by 50% through Website Redesign for a CPA Firm"
        description1="Redesigned site, optimizing UI/UX, enhancing navigation, and integrating CTAs, boosting leads by 50%."
        description2="Streamlined operations and improved patient outcomes through data-driven insights."
        stat1Value="50%"
        stat1Text="Increase in lead conversion rates"
        stat2Value="35%"
        stat2Text="Improvement in Bounce rates"
        image={casestudy6}
        gradientFrom="#0ea5e9"
        gradientTo="#a3e635"
      />
    </div>
  );
}
