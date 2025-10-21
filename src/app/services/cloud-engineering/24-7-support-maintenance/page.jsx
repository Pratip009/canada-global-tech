import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import supportImg from "../../../../../public/software/web/support.webp";
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
import ReusableFAQSection from "@/components/ReusableFAQSection";

const webFAQs = [
  {
    question: "How can we check the quality of your services?",
    answer: `we predetermine certain custom performance metrics for individual support and maintenance projects. These metrics are reviewed based on the formal monthly system uptime reports and other reports generated to ensure they maintain high standards. We also conduct audits to ensure compliance with our support processes and protocols. Additionally, we adhere to SLAs (Service Level Agreements) that outline performance metrics, ensuring our services meet the agreed-upon standards of efficiency and reliability.`,
  },
  {
    question: "How do you support business workflows?",
    answer: `Our comprehensive service models highlight our support for business workflows, which include regular updates, monitoring, and strategic use of knowledge management practices.We maintain a knowledge base for quick resolution of recurring issues, ensure that all support activities are documented, and adhere to strict security protocols. Implementing these measures improves the stability, efficiency, and security of your IT systems. Consequently, your business workflows improve, allowing for seamless business operations and continuity.
`,
  },
];
const websiteServices = [
  {
    title: "24/7 Monitoring",
    heading: "Round-the-clock monitoring to ensure uninterrupted operations",
    description: `Our comprehensive support framework guarantees continuous monitoring and immediate response to system alerts and user queries, regardless of time or day.

The presence of specialized on-call engineers 24/7 ensures the constant surveillance of critical systems, optimizing system uptime and consistently meeting service level agreements (SLAs).`,
    image: "/software/web/help.webp",
  },
  {
    title: "Support and Maintenance",
    heading:
      "Real-time support and maintenance for optimal uptime and efficiency",
    description: `Our structured approach ensures smooth communication, swift resource allocation, and compliance with governance standards, enhancing support services and client satisfaction at every stage.

We also provide proactive maintenance to prevent issues before they arise, ensuring uninterrupted service and optimal system performance.`,
    image: "/software/web/help.webp",
  },
  {
    title: "Remote Support",
    heading: "Remote assistance to resolve issues quickly and efficiently",
    description: `We leverage advanced remote diagnostics tools and secure access technology to provide comprehensive 24/7 remote support and maintenance services.

Our skilled tech experts swiftly identify and resolve issues from afar, minimizing downtime and enhancing operational efficiency. This ensures high availability and optimal performance across distributed IT infrastructures.`,
    image: "/software/web/help.webp",
  },
  {
    title: "On-site Support",
    heading:
      "Dispatching technical experts to provide on-site support when necessary",
    description: `In instances when remote resolution seems insufficient, our field service engineers ensure the resolution of complex issues with minimal operational impact.

Such on-site intervention, achieved through rapid deployment of on-site support, is critical to ensuring the operational continuity of your software solutions. We provide on-site support for hardware-related failures, intricate system configurations, or when hands-on troubleshooting is essential for resolution.`,
    image: "/software/web/help.webp",
  },
  {
    title: "Incident Management",
    heading:
      "Swift identification and resolution of incidents to minimize downtime",
    description: `Our incident management protocols are designed for quick detection, classification, and escalation of incidents to ensure rapid response and mitigation.

By integrating ITIL best practices, we streamline the resolution process to reduce the impact of technical anomalies and maintain high service availability, stability, and reliability.`,
    image: "/software/web/help.webp",
  },
  {
    title: "Service Desk",
    heading:
      "Dedicated service desk for handling all support requests and inquiries",
    description: `We provide a single point of contact for all IT queries and issues through our IT help desk services. Our tiered support structure ensures efficient management and resolution of user tickets.

Structured problem-solving and escalation processes guarantee prompt and effective resolution of support requests, ensuring high user satisfaction and continuous operational stability.`,
    image: "/software/web/help.webp",
  },
  {
    title: "Monitoring and Alerts",
    heading:
      "Continuous monitoring of systems with real-time alerts for proactive issue resolution",
    description: `Our comprehensive support services also employ sophisticated monitoring solutions that continuously scan for anomalies and performance deviations.

The generated real-time alerts enable our support teams to address potential issues proactively before they escalate, preserving system integrity and ensuring optimal performance.`,
    image: "/software/web/help.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={supportImg}
        smallHeader="Home / Service / Cloud Engineering / 24/7 Support & Maintenance"
        titleHighlight="24x7 Support and Maintenance"
        titleMain="Services"
        description="Enhance software effectiveness and efficiency with our responsive support and maintenance services"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Software maintenance and support services"
        mainTitle="Ensure optimal business performance with our end-to-end "
        highlightText="help desk services "
        afterHighlight=""
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="Stay ahead with our exclusive customer support. Update and optimize your applications and software solutions to align them with evolving customer and market expectations regarding performance and aesthetics with our expert 24/7 support and maintenance services.

Our spectrum of services enhance business productivity by infusing your software with the required security, scalability, efficiency, and user experience—enabling you to realize a better ROI.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Build agility and reduce{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              TCO with Unified's software support and maintenance
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
