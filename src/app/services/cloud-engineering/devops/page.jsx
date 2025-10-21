import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import devImg from "../../../../../public/software/web/devops.webp";
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
    question: "What is DevOps and how can it help my business?",
    answer: `DevOps is an agile-based product engineering approach that encourages active collaboration between the development and operations teams to enhance software quality and reduce time to market. 

By fostering an environment of collaboration and shared responsibility, it helps maximize productivity and operational efficiency.`,
  },
  {
    question: "What is infrastructure as a code?",
    answer: `Simply speaking infrastructure as code or IaC refers to transforming configuration documents for different infrastructure components into repeatable codes. These component configurations encompass operating system, server, app, VM, IT, storage etc. By doing away with manual processes, IaC helps improve the accuracy of these configurations.
`,
  },
  {
    question: "What is continuous delivery?",
    answer: `This is a software development practice inherent to DevOps. Here, codes are automatically tested and prepared for release into the production stage. Continuous delivery or CD allows dev teams to deliver updates quickly allowing their clients to quickly respond to market, security, customer and cost challenges.
`,
  },
  {
    question: "What are the benefits of DevOps implementation?",
    answer: `Integrating DevOps as a best practice for software development fosters better cross-team collaboration, streamlines incident response and allows faster time to market. 

Further it also helps build a culture for shared responsibility, faster feedback and transparency to enable faster problem-solving.
`,
  },
  {
    question: "What is CI CD in DevOps?",
    answer: `These acronyms stand for Continuous Integration or CI and Continuous Delivery or CD. while they are different DevOps practices, together they help to streamline and accelerate software delivery.
`,
  },
  
];
const websiteServices = [
  {
    title: "DevOps CI/CD services",
    heading:
      "Ensure brand recall with our UX & UI Design and Consulting Services",
    description: `Improve software quality by automating and standardizing infrastructure deployment with CI/CD pipelines`,
    image: "/software/web/dev.webp",
  },
  {
    title: "Infrastructure as Code (IaC)",
    heading:
      "Managing and provisioning computing infrastructure through machine-readable scripts",
    description: `Manual configurations are history. Business needs demand automation. Hence, the focus is now on using codes to automate the business setup and its management, resulting in greater consistency and efficiency.

Infrastructure as Code or (IaC) forms an integral part of our project-centric DevOps managed services. We help provision and manage your IT infrastructure through automation, repeatability, version control, scalability, transparency and improved security.`,
    image: "/software/web/dev.webp",
  },
  {
    title: "Monitoring and Logging",
    heading:
      "Continuously monitor infrastructure components and applications to ensure complete visibility",
    description: `Designing robust logging and monitoring frameworks forms an integral part of our time-tested DevOps managed services. With this approach we can leverage real-time streaming analytics, historical data replay capabilities, and precise visualizations for accurate forecasting, proactive alerting and streamlined incident management.

Further, these services enhance observability, and ensure robust data integrity and availability across the entire development pipeline.`,
    image: "/software/web/dev.webp",
  },
  {
    title: "Security Integration",
    heading:
      "Incorporating proactive and reactive security practices into the DevOps process to safeguard applications",
    description: `Partner with us to seamlessly integrate security in every phase of software development. We mitigate risks proactively by identifying potential vulnerabilities and addressing them quickly.

Further, our security-based DevOps practices help automate compliance checks to strengthen protection against emergent threats. We create a synergy between development, operations and security teams to implement DevSecOps practices and innovate with confidence.`,
    image: "/software/web/dev.webp",
  },
  {
    title: "Automation of Software Development",
    heading:
      "Prioritizing efficiency by automating repetitive tasks to streamline the software development lifecycle",
    description: `Automation is an indispensible asset used in modern software development. It revolutionizes how DevOps engineers accelerate time to market for high quality software solutions.

Our comprehensive DevOps automation services helps automate the entire SDLC from development to operations and delivery. Ultimately it benefits you by lowering the risks and costs associated with your software development projects.`,
    image: "/software/web/ux.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={devImg}
        smallHeader="Home / Service / Cloud Engineering / Devops"
        titleHighlight="DevOps"
        titleMain="Services and Solutions"
        description="Redefine software success by accelerating, automating, and streamlining development lifecycles with our DevOps expertise"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Project-centric DevOps Solutions"
        mainTitle="Comprehensive "
        highlightText="DevOps services "
        afterHighlight="to build market ready software solutions"
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="The days of project-based, large-scale implementations are over. Today, businesses demand continuous evolution, and the only way to achieve this is through DevOps engineering.

By streamlining processes through automation, CI/CD pipelines, agile methodology, etc., DevOps continuously helps improve business capabilities. Our DevOps engineers leverage DevOps best practices to revolutionize software delivery by reducing its time to market.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Tailor-made{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              DevOps Services for Efficient, Effortless
            </span>{" "}
            Development
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
