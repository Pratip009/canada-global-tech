import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import aiImg from "../../../../../public/software/web/ai.webp";
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
    question: "What is the typical timeframe for building an AI-based product?",
    answer: `The timeline for building an AI-based product depends on factors such as project complexity, scope, and the development process. Generally, it can take between 3 to 12 months. Canada Global Tech ensures timely delivery with detailed project planning and regular updates throughout the development process.`,
  },
  {
    question: "How to choose the ideal AI software development company?",
    answer: `To select the best AI app development company, consider their expertise, portfolio, and client reviews. Look for experience with AI technologies and proven results. Canada Global Tech stands out as a top-rated AI consulting company, offering tailored solutions and a track record of successful AI projects.
`,
  },
];
const websiteServices = [
  {
    title: "AI-Powered Automation",
    heading:
      "Unleash breakthrough innovation with our AI-powered automation solutions",
    description: `We develop AI-driven automation systems that streamline processes, reduce manual effort, and enhance operational efficiency across your organization. As a leading AI software development company, we tailor our solutions to fit your unique business needs, ensuring a seamless transition to automated workflows.

Our AI-powered innovations enable your team to prioritize strategic tasks, maximize productivity, and drive holistic growth.`,
    image: "/software/web/ml.webp",
  },
  {
    title: "Predictive Analytics",
    heading:
      "Actionize your data with our advanced predictive analytics solutions",
    description: `Our AI models use cutting-edge predictive analytics to provide insights that help you make informed decisions and anticipate future trends. As a top-rated AI consulting company, we emphasize delivering actionable intelligence and facilitating strategic decision-making for sustainable value.

Our predictive analytics services perform in tandem with your data strategy and business goals. We ensure you recognize the value of data at your own pace while sharpening your business edge in today’s disruptive times.`,
    image: "/software/web/ml.webp",
  },
  {
    title: "Natural Language Processing (NLP)",
    heading:
      "Enable meaningful interactions with advanced natural language processing solutions",
    description: `As leaders in AI-powered innovations, our NLP solutions are tailored to your specific needs, allowing you to deliver more personalized and efficient services to the markets you serve.

By integrating NLP technology, you can improve engagement and deliver a seamless experience for both customers and employees.`,
    image: "/software/web/ml.webp",
  },
  {
    title: "Machine Learning Model Development",
    heading:
      "Inspire innovation with our futuristic custom machine learning models",
    description: `We design, train, and deploy machine learning models tailored to your specific business challenges. As a provider of custom artificial intelligence solutions, we work closely with your team to deliver models that seamlessly integrate into your operations and enable context-aware insights for strategic business planning—all while ensuring precision and accuracy.

Our machine learning solutions are designed to adapt and evolve with your business, ensuring long-term success and innovation.`,
    image: "/software/web/ml.webp",
  },
  {
    title: "Computer Vision Applications",
    heading: "Unlock visual data potential with our computer vision solutions",
    description: `Our computer vision applications enable your business to analyze and interpret visual data, from image recognition to video analysis, and forecast market trends. As a top-tier artificial intelligence software development company, we customize our solutions to meet your specific needs.

By integrating computer vision into your operations, you gain deeper insights, automate visual tasks, and improve overall efficiency.`,
    image: "/software/web/ml.webp",
  },
  {
    title: "AI Integration and Consulting",
    heading:
      "Seamlessly integrate AI into your existing IT estate with expert consulting services",
    description: `Our AI integration and consulting services guide you through the process of implementing AI-driven operations across your existing IT estate. We offer strategic advice, technical expertise, and hands-on support to ensure smooth and efficient AI integration.

As a leading AI consulting company, we help you leverage AI to its fullest potential, driving innovation and delivering measurable results.`,
    image: "/software/web/ml.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={aiImg}
        smallHeader="Home / Service / Data & Analytics / AI & Machine Learning"
        titleHighlight="Artificial Intelligence Development"
        titleMain="Company"
        description="Advance your operations with our AI and machine learning services, integrating intelligent automation and predictive insights into the core of your business"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="AI software development services"
        mainTitle="Transform your business with our "
        highlightText="expert AI and machine learning solutions "
        afterHighlight=""
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="As a leading artificial intelligence software development company, we offer customized AI services and solutions tailored to your specific needs. Our team excels in delivering intelligent, scalable, and efficient AI applications that drive innovation and operational excellence.

By combining advanced algorithms with robust data analytics, we ensure your AI projects not only meet but exceed industry standards, providing unmatched performance and speed.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Personalized{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI and Machine Learning
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
