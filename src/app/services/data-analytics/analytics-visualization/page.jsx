import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import analyticsImg from "../../../../../public/software/web/analytics.webp";
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
    question: "What is data integration?",
    answer: `Data integration is a process wherein data is aggregated from multiple touchpoints across an organization and used as an up-to-date dataset for business intelligence and data analytics. It is a cumulation of many sub-processes, such as data replication, data ingestion, and data transformation. These processes transform different formats of raw data into standardized formats and store them in a target repository like data lakes and data warehouses.`,
  },
  {
    question:
      "What is the difference between data analytics and data visualization?",
    answer: `Data analytics is the process of analyzing data to gather insights and formulate patterns and trends. Simply speaking, analytics extract meaning from data collected across multiple sources.

Data visualization involves showcasing these insights into easy-to-understand visuals. These visual narratives contain different types of information and are circulated among internal and external stakeholders.
`,
  },
  {
    question: "What is the purpose of data visualization?",
    answer: `The purpose of data visualization is to curate data into easy-to-understand visual narratives. These narratives highlight different stories, such as an organization's health, upcoming trends, outliers, etc. It makes it easy for the viewer to seek information easily by removing the noise from data.
`,
  },
];
const websiteServices = [
  {
    title: "Data Integration",
    heading:
      "Embed data-driven workflows into your business ecosystem for confident decision-making",
    description: `Data is the lifeblood of today’s enterprises. It can potentially become an important differentiator in the fast-paced era of digitalization.

We empower your systems with real time data integration capabilities so they can handle diverse data types aggregated from different touchpoints. Unifying your integration process helps eradicate data siloes making data available to users with access`,
    image: "/software/web/data.webp",
  },
  {
    title: "Real-time Analytics",
    heading:
      "Accelerate value creation and speed-to-value with real-time data analytics",
    description: `Timely and accurate insights help deliver your business priorities. We enable this by creating bespoke analytics solutions that suit your exclusive needs.

Partner with us to discover value in data. We will reinvent your business performance by delivering sustainable value with our intelligent real time analytics platform in big data.`,
    image: "/software/web/data.webp",
  },
  {
    title: "Interactive Dashboards",
    heading:
      "Make sense of your data and steer your business to success with our dynamic dashboards",
    description: `As a data visualization solution provider, we carefully select BI tools based on your business needs. We use them to your advantage and design intuitive dashboards that help simplify complex datasets and present the information in a visually compelling manner.

Our customizable and interactive dashboards help present data using the relevant tools and technologies. Leverage them to display and track your key performance indicators on a single screen to support better decision-making.`,
    image: "/software/web/data.webp",
  },
  {
    title: "Predictive Analytics",
    heading:
      "Forecast trends and outcomes accurately to gain a competitive edge with our data-driven insights",
    description: `Predictive analytics play a critical role in the different types of data analytics services we offer. Here, we extract insights from the existing data sources to analyze patterns and predict future trends and outcomes using different data analytics tools.

Use this technique for business risk assessment and management. Make it your differentiator by using its insights to adapt to industry needs and identify opportunities for growth.`,
    image: "/software/web/data.webp",
  },
  {
    title: "Data Quality Management",
    heading:
      "Ensuring high-quality, reliable, relevant, and consistent data for accurate and timely analysis",
    description: `As your partnering data visualization consultant, we are committed to implementing the best practices of data quality management.

Our data quality management services leverage a niche set of practices and methodologies to identify data quality issues, perform root cause analysis, innovate solutions based on the insights and create metrics to establish the required data quality standards.`,
    image: "/software/web/data.webp",
  },
  {
    title: "Custom Solutions",
    heading:
      "Building meaningful data analytics and visualization strategies tailored to meet business needs",
    description: `Enhance your business competency with data-driven decisions. Implement our customized data initiatives to improve different business verticals, such as operations, engineering, and governance.

We excel at building comprehensive data ecosystems tailored to individual business and industry needs. Further, our advanced data visualization techniques empower you to proactively comprehend evolving market dynamics and launch innovative offerings successfully.`,
    image: "/software/web/data.webp",
  },
  {
    title: "Application Performance Monitoring",
    heading:
      "Elevating user experiences with continuous monitoring beyond performance and response times",
    description: `In a highly connected digital landscape, it is important to monitor and preempt variables that can impact the performance of an application. Making this an afterthought can have severe consequences like poor user experience leading to an increase in user frustration and bounce rates.

We help track key performance indicators (KPIs) to improve system availability, response times, user experiences and optimize system performance.`,
    image: "/software/web/data.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={analyticsImg}
        smallHeader="Home / Service / Data & Analytics / Analytics & Visualization"
        titleHighlight="Data Analytics and Visualization"
        titleMain="Services"
        description="Activate your data's potential for actionable insights and endless possibilities in business continuity and growth"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Data visualization and analytics services"
        mainTitle="Integrating "
        highlightText="real-time insights "
        afterHighlight="into your decision-making for better performance and greater resilience"
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="Today, businesses cannot afford to overlook the importance of data analytics and visualization. From domain-focused analysis to proactive risk mitigation, we provide bespoke solutions with the right mix of talent and technologies for every form of data visualization and analytics. Our solutions are designed to empower your business core with data’s value and help you achieve your business priorities.

Leverage our services to enhance your decision intelligence and drive transformation across different business verticals. Visualize your success with us.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Our Data{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Visualization and Analytics
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
