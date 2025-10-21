import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import uiImg from "../../../../../public/software/web/ui.webp";
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
    question: "What is UI/UX design?",
    answer: `UI/UX design involves creating intuitive and responsive user interfaces (UI) and interactive and convenient user experiences (UX). Both focus on creating user-friendly web designs that enable conversions and induce loyalty among users. However, while UI focuses on aesthetics, UX emphasizes overall performance and usability.`,
  },
  {
    question: "How important is UX and what are the basics of UX Design?",
    answer: `UX design is a critical element of the web design process because it helps users have a positive, efficient, and memorable journey on the website. Empathy, strategy, usability, inclusivity and validation form the main principles of UX design. The basics of UX design include:

Understanding user needs to create user-centric designs
Ensuring design and experience consistency
Maintaining simplicity and accessibility
Testing to prevent errors and bugs 
Gathering feedback from developed wireframes and prototypes
Enabling design affordability without compromising performance

`,
  },
  {
    question: "What is the difference between UX and UI design?",
    answer: `A UX design concentrates more on the overall user experience. This includes improving the usability, functionality, and user satisfaction by implementing the desired functionalotieds within the design.

However, a UI design mostly deals with the visual aspects of the interface, such as layout, colors, and typography. UI designers strive hard to ensure compelling visuals through innovation and creativity.
`,
  },
  {
    question: "What is the difference between graphic design and UI/UX design?",
    answer: `Graphic design is a niche field that creates visual content like logos, illustrations, layouts, promotional materials, and more. UI/UX design encompasses a wider field that includes creating interactive and user-friendly interfaces. UI/UX focusses on both aesthetics (UI) and functionality (UX) and seeks to balance the two for exceptional user experiences across devices, platforms, and screen sizes.
`,
  },
  {
    question: "Which is better, UI/UX or graphic design?",
    answer: `Both serve different purposes. While UI/UX is better for creating interactive, user-centered web designs, graphic design leans more towards creating elements related to visual communication and branding. Hence, rather than saying one is better than the other, it is more practical to say that the choice depends on the project requirements.
`,
  },
  {
    question: "What is information architecture?",
    answer: `Information architecture, or IA, basically involves organizing and presenting different website entities in a structured manner. Most UI UX designers leverage it to create exceptional online experiences through simple and convenient navigation, simplifying complex user information, etc.

A well-planned information architecture is important because it facilitates user interactions. The efficient arrangement of content, achieved through structured labeling and organization, guides users in fulfilling their needs and requirements in a simple and convenient manner.
`,
  },
];
const websiteServices = [
  {
    title: "Design Consultation & Strategy",
    heading:
      "Ensure brand recall with our UX & UI Design and Consulting Services",
    description: `Design Consultation is a critical part of our suite of UI and UX design services. It helps in precise strategy planning and builds a solid foundation for your UI/UX design.

Once we’ve analyzed your business needs and target audience personas, we function as a UI UX design agency, building a strategy that aligns with your business goals. We further refine these competitor research insights resulting in greater wireframe accuracy. These research points, within the ui and ux design research framework ultimately improves business growth.`,
    image: "/software/web/ux.webp",
  },
  {
    title: "Web Design",
    heading:
      "Maximize user activation and conversion with our web application design services",
    description: `Establish and strengthen your brand identity with our UI/UX design and clean coding practices. Easily generate customer good will and take your brand to the next level.

We’ve carved a niche as a UI & UX design firm who build user-friendly web designs that go beyond mere aesthetics. They become powerful marketing tools that influence conversions through unforgettable user experiences.`,
    image: "/software/web/ux.webp",
  },
  {
    title: "Mobile App Design",
    heading:
      "Our mobile app designs create a smart brand persona for your business on the go",
    description: `Every unique need requires a customized UX design approach. We harness user demands to deliver adaptive, interactive, value-driven, and mobile responsive designs.

Innovation, agility, modern tech, and DevOps form the cornerstones of our mobile app design services. These integrated practices empower us to create highly secure, visually stunning and functionally brilliant apps.`,
    image: "/software/web/ux.webp",
  },
  {
    title: "Application User Experience",
    heading:
      "Reduce your bounce rate with our analytics-based web and mobile app UX services",
    description: `We prioritize curating solutions based on the universally accepted user experience guidelines for web applications. Our wireframe development services follow through on these guidelines.

Designing a convenient, enjoyable and exciting user journey requires brain-storming and collaborative experimentation. We design enriching user interactions and amplify user engagement through real-time client inputs, extensive market research, latest technologies and upcoming UI/UX trends.`,
    image: "/software/web/ux.webp",
  },
  {
    title: "Information Architecture",
    heading:
      "Establish an instant connect with a user-focused end-to-end approach to UX/UI design",
    description: `How do you ensure usability and accessibility in UI design? By building a comprehensive information architecture in UX design that maps key functionalities within the design process.

We leverage brand-centric storytelling to catapult sales by using good user experience to drive leads, conversions, and engagement. Integrating information architecture in UX flow helps analyze and optimize existing wireframes or create new ones to support this approach.`,
    image: "/software/web/ux.webp",
  },
  {
    title: "Wireframing & Prototyping",
    heading:
      "Making clickable and navigational wireframes to simulate the end product design",
    description: `An amazing wireframe design makes it easy for the UI/UX designer to reduce bugs, glitches, and errors. The end result is an exceptional website that offers the best user experience and functionality.

Our mobile-first UI/UX design and development services emphasize integrating wireframing and prototyping into the UX design process. Outlining the UI/UX structure and layout at the initial stages helps us validate the viability of our UI/UX strategy and thought process.`,
    image: "/software/web/ux.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={uiImg}
        smallHeader="Home / Service / Design & Digital Experience / UI/UX Design"
        titleHighlight="Custom UI UX Design"
        titleMain="Service"
        description="Delight customers, enhance user experiences for both web and app with our UX & UI Design Services"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Hire Our UI UX Designers"
        mainTitle="Top-Tier "
        highlightText="UI and UX Design Company "
        afterHighlight=""
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="Reimagine the way your customers use your apps with innovative and bespoke UX and UI designs. By incorporating modern tools, tech and best-in-class design practices, we transform visions and ideas into compelling designs and highly functional experiences. Meet your business demands with our services. Strengthen user relationships by creating a fluid user journey personalized to cater to their needs.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Platform-agnostic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              UI and UX Design
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
