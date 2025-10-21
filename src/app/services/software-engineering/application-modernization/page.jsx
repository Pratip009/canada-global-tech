import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import appImg from "../../../../../public/software/web/app.webp";
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
    question: "Why do we need application modernization for enterprises?",
    answer:
      "Generally, legacy applications were monolithic applications. Such bulky applications are now a thing of the past. They make integrating the latest tech trends difficult and resource intensive. Hence, application modernization is no longer an afterthought. It is a mandatory exercise that enterprises must undertake to survive. ",
  },
  {
    question: "What are the benefits of application modernization?",
    answer:
      "With the latest advances in the microservices architecture, application modernization has become convenient and quick. Further, it also empowers enterprises with state of the art applications that can help counter competition and increase their digital relevance by improving customer satisfaction.",
  },
  {
    question: "How to modernize an application?",
    answer:
      "we follow a very cost effective process for app modernization. With DevOps forming the core of our application re-engineering services and solutions we have defined a very precise re-engineering process that involves.With real-time client collaboration we ensure that all our re-engineering projects stay close to the client’s vision and successfully fulfils all client busines requirements after deployment.",
  },
  {
    question: "How can I ensure ongoing security after deployment?",
    answer:
      "Modernization of legacy applications can help address security loopholes by proactively implementing robust cybersecurity measures. For example, we at Canada Global Tech prioritize security by implementing certain critical measures like secure design principles, frequent security updates, industry best practices etc. Hence, there is no doubt that opting for app re-engineering will help correct your cybersecurity posture and enable you to predict and tackle upcoming cyberthreats proactively.",
  },
];

const websiteServices = [
  {
    title: "Legacy System Modernization",
    heading:
      "Optimize your legacy systems for the modern business landscape to be tomorrow-ready",
    description:
      "Make the shift to bridge the gap between goal-setting and realization. We initiate the process with a comprehensive analysis of your current system, which includes identifying areas for improvement. Scrutinizing both the infrastructure and code of your legacy application helps build the foundation for a successful legacy modernization strategy. We help you gain relevance and thrive in today’s tech-driven marketplace by implementing this strategy.",
    image: "/software/website/web.webp",
  },
  {
    title: "Deprecated System Re-engineering",
    heading:
      "Renew your legacy apps to convert them into futuristic tools for growth and commercial success",
    description:
      "Technical debt is a common challenge of a deprecated system refactoring project. We overcome it by introducing modular and adaptable code structures, built keeping clean practices in mind. We also modernize your tech stack to ensure the maintainability, scalability, security, performance, and future compatibility of your re-engineered software, optimizing it for faster loading times and seamless operations.",
    image: "/software/website/web.webp",
  },
  {
    title: "Re-architecting Applications",
    heading:
      "Revamp and improve your enterprise applications to gain a distinct competitive edge",
    description:
      "Our expertise in modernizing legacy applications stems from successes achieved in legacy application modernization. We build software reengineering solutions that are compatible with multiple modern platforms and tailored for tomorrow.",
    image: "/software/website/web.webp",
  },
  {
    title: "Re-platforming Solutions",
    heading:
      "Modernize to streamline workflows and excel where limitations cause app abandonment",
    description:
      "Contemporary platforms and browsers come with optimized architectures that legacy systems can rarely handle. But, you do not have to replace it. Rather, you refactor it to save time and money yet promote usability, scalability, security, and performance. As a result, you can adapt better to the dynamicity of the modern online business environment. Leverage our practical application reengineering services to facilitate modernization without losing downtime and revenue.",
    image: "/software/website/web.webp",
  },
  {
    title: "Cloud Migration",
    heading:
      "Ensure your business stays up-to-date by moving your core legacy systems to the cloud",
    description:
      "Modernize your legacy systems and align them with the latest tech and customer trends by embracing the limitless power of the cloud. Migrate your legacy apps to make them resilient and agile. Partner with us to harness the power of modernization to migrate your business-critical legacy software to the cloud and mitigate the risk of downtime or security breaches.",
    image: "/software/website/web.webp",
  },
  {
    title: "Code Refactoring",
    heading:
      "Declutter your legacy app codes to remove redundancy and improve app performance",
    description:
      "So, what is code refactoring? Making enough changes to improve internal code quality without altering its external behavior. Such refactoring techniques must be implemented to improve code readability and reduce app complexities. From code assessment to planning, testing, implementation, and support, we offer the entire gamut of code refactoring services. Leverage them to eliminate app performance bottlenecks and optimize the codebase.",
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={appImg}
        smallHeader="Home / Service / Software Engineering / Application Modernization"
        titleHighlight="Legacy Application Modernization"
        titleMain="Services"
        description="Ensure your legacy systems run at peak efficiency, keeping your business competitive, secure, agile, and ready for what's next"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Legacy Application Modernization Services"
        mainTitle="What makes us "
        highlightText="the top choice for application re-engineering?"
        afterHighlight=""
        paragraph1="Leverage our zero-disruption legacy application modernization services to evolve rather than replace. Upgrade and optimize to unlock the full potential of your existing systems and ensure maximum TCO.

At Unified, we adopt a conscious, value-driven approach, complemented by a comprehensive suite of specialized skills, tools, and methodologies, to curate modernization strategies that transform and catalyze your business operations. Our application modernization experts work dedicatedly alongside your team to understand your business and deliver solution approaches that go beyond the “lift and shift” approach and ensure tangible value – faster.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Our Application{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Modernization
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
