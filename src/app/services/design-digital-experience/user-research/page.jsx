import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import userImg from "../../../../../public/software/web/user.webp";
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
    question: "What is user research?",
    answer:
      "User research is integral to creating a user experience design. It leverages different research methodologies to research the needs, wants, pain points, behavior, aptitude, etc of users. This process is known as user research. We leverage the insights gathered to refine our software solutions and increase user acceptability. ",
  },
  {
    question: "Is user research the same thing as user testing?",
    answer: `we offer both services, but they are very different processes. However, both aim to achieve the same thing: to make the software useful for the user and ensure they can use it without suffering any hassle. 

User testing involves testing a developed solution for errors and glitches that can impact user experience. User research gathers relevant insights that help designers and planners integrate required features and functionalities that can enhance user experience by eliminating their pain points. Both are integral parts of software development and help elevate software quality.`,
  },
];
const websiteServices = [
  {
    title: "User Interviews",
    heading:
      "Get quick, actionable feedback with our qualitative user research methodology",
    description: `Leverage user interviews of those who use software and apps similar to yours. Analyze them to extract relevant, actionable insights and implement them in your UX design to make it more user-centric and intuitive.

Our result-oriented, iterative user interviews are structured to seek intuitive and immediate answers. Leverage them to gain user experience insights and implement them to improve your website’s UX.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Market Research",
    heading:
      "Get quality feedback from your target demography with our world-class market research services",
    description: `Our experts will manage your market and user research. We offer comprehensive research support through expert assistance at every stage.

From study design to results prompting, target audience segmentation, market research set up and management to selecting the right methodology, our end-to-end support and expertise. Leverage it for effective, seamless, professional, and technically sound market research.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Survey Campaigns",
    heading:
      "Gain insights about your brand perception with our bespoke intelligent customer survey campaigns",
    description: `We create high-impact survey campaigns to help you monitor your industry and target market niche. These campaigns form an important cornerstone of our user research services.

We leverage chosen tools to create clear and effective customer experience surveys. The insights generated help you to gain an in-depth understanding of your brand perceptions and suggest ways to improve them. So, use our tailored surveys and campaigns to connect seamlessly with your audience.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Persona Development",
    heading:
      "Create fictional but real-life-like representations of your ideal users with our persona development services",
    description: `We extensively research user buying patterns, demographics, behavioral culture, and user journey mapping to generate effective insights and create accurate ideal buyer personas.

Use them to understand your ideal target niche on a deeper level. Create tailored solutions and apps that resonate with your users and generate strong brand loyalty. This will ultimately increase your sales by enhancing your online relevancy.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Retrospective Probing",
    heading:
      "Gain valuable customer feedback to assess the quality of their UX with our retrospective probing services",
    description: `Our retrospective probing services focus on understanding and addressing user needs. We gather and consolidate feedback to provide a comprehensive picture of what delights users and what frustrates them.

This human-centered, feedback-driven user research approach evolves your software solution. Such applications meet user expectations and generate user satisfaction to improve chances of mass acceptance post-launch.`,
    image: "/software/website/web.webp",
  },
  {
    title: "Tree Testing",
    heading:
      "Improve your website navigation and topic findability with our tree-testing technique",
    description: `By leveraging this user research technique to test your website design-related assumptions, we help you make informed decisions that improve the overall design quality.

We offer users a deconstructed outline of your website or application and ask them to explore it. This gives a clear view of the topics that real users are likely to expect. Thus, insights gathered from tree testing can be used to finalize a user-friendly design hierarchy.`,
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={userImg}
        smallHeader="Home / Service / Design & Digital Experience / User Research"
        titleHighlight="Top-rated User Experience Research"
        titleMain="Service"
        description="Drive customer engagement, elevate your product design and create customer delight with our User Research Services"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="End-to-end User Research Services"
        mainTitle="Get a competitive edge with our "
        highlightText="expert UX research services"
        afterHighlight=""
        challenges={[
          "Outdated web apps that crash under traffic spikes or business growth.",
          "High bounce rates due to slow load times, confusing navigation, or non-responsive design.",
          "Security vulnerabilities risking data breaches and loss of customer trust.",
          "Limited functionality that fails to meet evolving business needs or integrate with other systems.",
        ]}
        paragraph1="Leverage our user experience researchers to better understand your users. Learn about their needs, pain points, aptitudes, behavioral patterns, and interactions with different products and services.

We implement user-centered strategies into your designs using precise, actionable insights to drive engagement, enhance conversions, and accelerate growth. Connect now to make an informed choice about the features and functionalities of your solution.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              user research
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
