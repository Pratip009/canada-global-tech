import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import mobileImg from "../../../../../public/software/web/mobile.webp";
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
import WebFAQ from "@/components/Software-engineering/web-development/WebFAQ";
import ReusableServiceTabs from "@/components/ReusableServiceTabs";
import ReusableFAQSection from "@/components/ReusableFAQSection";
import ContactSection from "@/components/ContactSection";
const webFAQs = [
  {
    question: "How much does it cost to develop a mobile app?",
    answer:
      "The cost depends on the features and functionality that you want to integrate within your mobile app. Other factors that also significantly impact the cost include mobile app complexity, development approach, etc. These factors make it difficult to predict the actual costs without knowing your requirements. Hence, when you approach us, we will understand your mobile app requirements and give you an estimation of the involved financials.",
  },
  {
    question: "What solutions are provided by mobile app development services?",
    answer:
      "There are many different types of services that can be included in mobile app development. However, at Canada Global Tech, we offer a comprehensive suite of services that involves iOS and Android App Development, Hybrid App Solutions, Enterprise Mobility Solutions, and Mobile App Modernisation.",
  },
  {
    question:
      "What is the difference between cross-platform app development and hybrid mobile app development?",
    answer:
      "Hybrid app development involves building apps using a single codebase that can work across multiple platforms. Technologies involved include HTML, JavaScript, and CSS. Here, developers leverage these technologies to build a single codebase but wrap it up within a native container. These apps generally take less time to develop, are inexpensive, and more efficient. Alternatively, cross-platform apps also involve using a single codebase to run the mobile app efficiently across different platforms. But here, this is achieved using frameworks like Xamarin, Flutter, and React native.",
  },
  {
    question: "What are the benefits of using AI in app development?",
    answer:
      "AI is positively impacting several areas of mobile app development. Developers can leverage it to enable personalization, enhance user engagement, optimize content, automation etc. Insights derived from AI's capability of accurate predictive analysis help enhance the efficiency and effectiveness of the mobile app as a whole.",
  },
  {
    question: "How much time does custom mobile app software development take?",
    answer:
      "Mobile apps with low complexities take about 1 to 3 months, while those with medium-scale complexities may take 4 to 6 months, and those with large-scale complexities can even take more than 7 months. Here, too, the time of development depends on the app's complexity, approach, etc.",
  },
];

const websiteServices = [
  {
    title: "iOS App Development",
    heading:
      "End-to-end custom iOS mobile app development services designed to meet Apple device users' changing needs",
    description:
      "Building high-quality iOS mobile apps requires advanced expertise in Swift, Flutter, React Native, and Objective-C. Our team of skilled mobile application developers excels in delivering premier iOS app development services to a diverse clientele including visionary start-ups, small businesses, and established enterprises.",
    image: "/software/website/web.webp",
  },
  {
    title: "Android App Development",
    heading:
      "High-impact services that transform your digital visions with innovative and creative Android mobile app development",
    description:
      "Empower your business with dynamic Android applications designed to engage and resonate with global users. We deliver scalable, responsive, and robust mobile app solutions that captivate audiences across geographies, streamline operational efficiencies, and pioneer services within your industry.",
    image: "/software/website/web.webp",
  },
  {
    title: "Hybrid App Solutions",
    heading:
      "Solve business complexities and improve target audience reach with our custom hybrid app solutions",
    description:
      "We work with a diverse clientele, including Fortune 500s, SMEs, and start-ups. From providing simple solutions to creating a sustainable competitive edge, we serve each requirement with technical proficiency and deep industry knowledge. Our tailored approach delivers high-impact hybrid mobile apps.",
    image: "/software/website/web.webp",
  },
  {
    title: "Enterprise Mobility",
    heading:
      "Leverage our smart enterprise mobility solutions to drive business excellence while minimizing associated IT risks",
    description:
      "Our mobility solutions are crafted through innovation and backed by a seamless UI/UX, smart features and powerful security. Our solutions enhance employee and user satisfaction while facilitating remote connectivity across varied devices, ensuring you stay connected from anywhere, any time.",
    image: "/software/website/web.webp",
  },
  {
    title: "Mobile App Modernization",
    heading:
      "Keep your apps relevant, efficient, and future ready with our legacy mobile app modernization services",
    description:
      "As a top cross-platform mobile app development company, our app modernization developers remove obsolete programs to ensure your apps are aligned with modern business trends and needs.Upgrade and strengthen the capabilities of your old mobile apps with our app modernization services. We follow a standardized process to future-proof your apps.",
    image: "/software/website/web.webp",
  },
  {
    title: "App Modernization Strategy Services",
    heading:
      "Get the best roadmap to keep your mobile apps relevant, efficient, and future ready with our legacy mobile app modernization strategy services",
    description:
      "Before our app modernization developers remove obsolete programs to ensure your apps are aligned with modern business trends and needs, we give you a multi-faceted view of the strategy.We help you upgrade and strengthen the capabilities of your old mobile apps with our app modernization strategy services to future-proof your apps. The assessment is followed by functionality and performance analysis, reengineering, refactoring, and re-platforming on their current platforms or by migrating them to a new environment.",
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={mobileImg}
        smallHeader="Home / Service / Software Engineering / Mobile App Development"
        titleHighlight="Mobile App Development Services"
        titleMain=""
        description="Supercharge your business with powerful, feature-rich mobile applications using custom app solutions"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Enable digital transformation with our custom mobile app development services"
        mainTitle="Elevate your digital presence and enable lasting growth with our "
        highlightText="state-of-the-art custom mobile app development services"
        afterHighlight=""
        paragraph1="As a top-tier custom mobile app development company, we empower your business with solutions that promise performance and user delight.
Our skilled mobile app developers are equipped to develop apps across multiple platforms, including iOS and Android. We build tailored mobile solutions that set the standard. Get started with our native, hybrid, or cross-platform mobile applications to maximize ROI and operational efficiency.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Platform-agnostic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Mobile App Development
            </span>{" "}
            services
          </>
        }
      />

      <AdvantageSection />
      <CaseStudiesSlider />
      <WebsiteMarquee />
      <TechnologyCapabilities />
      <WebsiteProcessSection />
      <DigitalChangeCTA />
      <WebsiteProcessProgress />
      <ReusableFAQSection
        title="Frequently Asked Questions"
        subtitle="(FAQs)"
        faqs={webFAQs}
        containerClass="bg-gray-50"
      />
      <ContactSection />
    </main>
  );
}
