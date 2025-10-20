import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import testingImg from "../../../../../public/software/web/testing.webp";
import ClientsMarquee from "@/components/ClientsMarquee";
import WebsiteIntro from "@/components/Software-engineering/website-development/websitecareIntro";
import AdvantageSection from "@/components/Software-engineering/website-development/AdvantageSection";
import CaseStudiesSlider from "@/components/CaseStudiesSlider";
import WebsiteMarquee from "@/components/Software-engineering/website-development/WebsiteMarquee";
import TechnologyCapabilities from "@/components/TechnologyCapabilities";
import WebsiteProcessSection from "@/components/Software-engineering/website-development/WebsiteProcessSection";
import DigitalChangeCTA from "@/components/DigitalChangeCTA";
import WebsiteProcessProgress from "@/components/Software-engineering/website-development/WebsiteProcessProgress";
import ReusableServiceTabs from "@/components/ReusableServiceTabs";
import ReusableFAQSection from "@/components/ReusableFAQSection";
import ContactSection from "@/components/ContactSection";
const webFAQs = [
  {
    question: "What is quality assurance testing?",
    answer:
      "It is a process that software development companies adopt to enhance the quality of their software solutions and ensure they meet the required compliances, regulations, and standards. ",
  },
  {
    question: "How QA testing company help my business?",
    answer:
      "Choosing a software testing and quality assurance company like Unified Infotech is important because it allows you to implement the QA and test processes properly. Further analyzing your software provides them with insights. They utilize these insights to select the right testing processes and tools, thereby improving the precision and accuracy of quality assurance and software testing.",
  },
  
  {
    question: "What are cross platform mobile app testing services?",
    answer:
      "Custom mobile app development is not restricted to a single platform. Hence, all apps must be tested to ensure their performance and user-friendliness across all platforms. Companies like Unified Infotech offer cross-platform mobile app development services to ensure that your app delivers on its promise of user satisfaction.",
  },
];

const websiteServices = [
  {
    title: "Application Testing",
    heading:
      "Testing business-critical apps to validate they are free from glitches and perform as per requirements",
    description:
      "Avail of our quality assurance specialists to achieve application excellence. Our application testing services help ensure the proper working of its functionalities and integrations to elevate its security, performance, and usability.Further rapid application testing also helps improve the reliability and quality of your software. At the same time, it minimizes associated risks and optimizes the UX",
    image: "/software/website/web.webp",
  },
  {
    title: "Test Automation",
    heading:
      "Reduce test cycle time and optimize testing costs with our test automation services",
    description:
      "We employ the latest test automation tools to ensure a successful digital transformation. Test automation comes with many benefits and some crucial challenges, which we overcome using our expertise and by selecting the right tools.Collaborating with our test automation experts helps reduce time to market without compromising software quality. You also gain increased operational efficiency and improve your UX, which results in increased revenue",
    image: "/software/website/web.webp",
  },
  {
    title: "Performance Testing",
    heading:
      "Leverage our performance testing expertise to achieve unmatched reliability and performance",
    description:
      "To ensure software stability, we test it under increasing stress loads. Some techniques we apply to enhance the stability of your software include load testing, stress testing, endurance testing, and scalability testing.We also follow the DevOps principle of continuous testing from the initiation of the software development. This approach helps identify bugs and errors early, allowing us to address them promptly.",
    image: "/software/website/web.webp",
  },
  {
    title: "Security Testing",
    heading:
      "Restrict unauthorized access by detecting, analyzing, and addressing vulnerabilities with our security testing services",
    description:
      "Cyber incidents are costly mistakes. Prevent them at all costs by establishing robust security policies, measures, and procedures. Additionally, we conduct regular audits of your IT infrastructure to check for loopholes.Further, when you opt for our security testing services, we also ensure compliance with the required regulations. Along with securing your software from cyberattacks, we also align it with the prevalent security legislations and compliances applicable.",
    image: "/software/website/web.webp",
  },
  {
    title: "Accessibility Testing",
    heading:
      "Deliver inclusive apps and experiences by making software solutions accessible to people with diverse abilities",
    description: `Our comprehensive security testing and quality assurance processes also encompass accessibility testing coverage. We ensure you meet the required accessibility standards by checking for keyboard and multimedia accessibility, screen reader compatibility, color contrast and visual design, text resizing and zoom, etc.

Through seamless accessibility testing, our quality assurance testers help elevate software quality so you can improve your market value and retention rate.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Compliance Testing",
    heading:
      "Validate your software for regulatory, legislative, and business compliance to earn user trust and confidence",
    description: `Leverage our compliance testing services to ensure your software’s regulatory compliance. We facilitate your software’s adherence to diverse applicable standards and regulations, such as GDPR, HIPAA, etc., mitigating the risk of non-compliance and the levy of penalties.

Additionally, we ensure project success by meeting standards related to coding, security, and functional safety, as well as complying with regulatory and compliance requirements.`,
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={testingImg}
        smallHeader="Home / Service / Software Engineering / Testing & Quality Assurance"
        titleHighlight="Software Testing and QA"
        titleMain="Services"
        description="Supercharge software delivery with no compromises on quality with our expert software testing and quality assurance services"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Quality Assurance and Software Testing"
        mainTitle="Ensure end-to-end "
        highlightText="quality assurance and testing"
        afterHighlight="for your software"
        challenges={[]}
        paragraph1="We comb your software minutely to identify issues before they escalate into expensive problems. Leverage our goal-driven QA and software testing services to validate every aspect of your software.

Our quality assurance analysts will ensure that no technical glitches impact business by testing your integrations, security, performance, and usability. We focus on efficiency, improved performance, and seamless functionalities so you can focus on other business-related matters.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Holistic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              QA and Software Testing
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
      <ContactSection/>
    </main>
  );
}
