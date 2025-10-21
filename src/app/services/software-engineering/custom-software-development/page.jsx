import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import customImg from "../../../../../public/software/web/custom.webp";
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
    question:
      "Why should I choose Canada Global Tech for my custom software development project? ",
    answer:
      "a trusted digital transformation partner, specializes in tech-agnostic custom solutions tailored to your unique business needs, making us the ideal choice for your custom software development project. Our customer-first approach prioritizes your goals, ensuring that everything we develop aligns with your vision and business requirements. Our team’s proficiency in a wide range of technologies ensures tech-agnostic outcomes and guarantees the best tools are selected for your project. With a proven track record of successful projects across multiple verticals and industries, we bring reliability and expertise to the table while maximizing cost savings.",
  },
  {
    question: "What is the typical timeline for developing bespoke software?",
    answer: `
The timeline for developing bespoke software varies significantly based on factors like project complexity, scope, and team size and expertise. On average,

• Small and simple projects may take 3 to 6 months.  
• Medium-sized projects can take 6 to 12 months, and;  
• Large, complex systems often require 12 to 24 months or even longer.

The software development process generally follows these phases:

1. **Planning and Requirements Gathering:** Typically takes several weeks to a couple of months to ensure a clear understanding of the project's needs.
2. **Design and Architecture:** This phase can take a few weeks to a couple of months, depending on the complexity of the system design and architecture.
3. **Development and Coding:** This is the bulk of the work, ranging from several weeks for small projects to several months for larger ones.
4. **Testing and Quality Assurance:** This phase ensures the software is functional and meets all requirements, taking several weeks to a couple of months.
5. **Deployment and Implementation:** Final deployment and any necessary adjustments typically take a few weeks to a couple of months.

Overall, the timeline is highly dependent on the project’s scale and requirements, so it’s always best to discuss specifics with your development team to get a more accurate estimate.
`,
  },
  {
    question: "How much does it cost to develop custom software?",
    answer:
      "The cost to develop custom software is a variable that depends on several factors, such as the complexity, scope, and type of solution. Other secondary factors include the location of the software development team and the feature you’re looking for. Generally, the cost of custom development lies somewhere between $10,000 - $500,000. ",
  },
  {
    question: "How do you make sure software has great UI and UX?",
    answer:
      "We ensure a high-performance, intuitive UI/UX by following a user-centered design thinking process, combined with in-depth market analysis and trend forecasting. We begin with understanding user needs and behaviors and leverage these insights to create MVP/POC to help you visualize the design. We emphasize seamless navigation, accessibility, and aesthetics as the first batch of deliverables. We rely on usability testing and feedback gathering to refine the design iteratively, ensuring high satisfaction and usability on the go.",
  },
  {
    question: "Can you integrate legacy systems with new software solutions?",
    answer: `Yes, we can integrate legacy systems with new custom software solutions. It’s a complex process, and the real challenge lies in working around the outdated technology, incompatible data formats, lack of modern APIs, and sometimes poor documentation that often accompany legacy systems.

However, with our team that works with the right tools and techniques, legacy system integration can be seamless. We leverage a number of methods, including APIs, database connectors, file integration, and middleware platforms like an Enterprise Service Bus (ESB) to facilitate communication and data transformation between old and new systems. When integrating outdated IT with new, advanced custom solutions, we focus on transforming data, assessing impacts, ensuring security, and training users. `,
  },
  {
    question:
      "How do you ensure data security and compliance during software development?",
    answer:
      "we prioritize data security and compliance throughout the software lifecycle. We implement a multi-layered approach to fortify sensitive data, from secure coding practices and robust encryption protocols. Our team conducts regular security audits, vulnerability assessments, and penetration testing to identify and address potential risks. We also adhere to industry standards and regulations such as GDPR, HIPAA, PCI-DSS, and others, ensuring compliance with legal and ethical requirements. By adhering to shift-left security, we deliver solutions that are not only functional but also secure.",
  },

  {
    question:
      "What is custom software development, and how is it different from off-the-shelf solutions?",
    answer:
      "Developing custom software means creating a solution tailored to your business requirements and long-term goals. Unlike off-the-shelf software, custom solutions are built around your unique challenges and objectives. This results in greater efficiency, scalability, and alignment with business objectives. Custom software allows for complete control over functionality, ensuring it evolves with your business. In contrast, off-the-shelf solutions often require compromises and may lack the flexibility to adapt to specific requirements, making custom software a more strategic long-term investment.",
  },
  {
    question: "Can bespoke software be updated and maintained?",
    answer:
      "Yes, bespoke software can be updated and maintained, but it typically requires a dedicated development team familiar with the codebase, as it is custom-built to meet a client’s specific needs. Regular maintenance is essential to address bugs, security vulnerabilities, and changes in business requirements. A well-defined maintenance plan, along with proper version control, ensures effective tracking and management of updates over time.With proactive monitoring and dedicated support, we ensure your software continues to deliver value, minimizing downtime and maximizing ROI. ",
  },
  {
    question:
      "What kind of post-launch software support and maintenance do you offer?",
    answer: `Canada Global Tech provides comprehensive post-launch support and maintenance, ensuring your software remains functional, secure, and up-to-date. Our services include:

Bug Fixes and Performance Optimization: Addressing any bugs or issues to improve the overall performance of your software and enhance user experience.
Regular Updates: Ensuring your software stays aligned with evolving business needs and industry standards through timely updates.
Proactive Monitoring: Constantly monitoring your system to identify and resolve potential issues before they affect operations, ensuring smooth performance.
Scalability Enhancements: Enhancing your software's ability to grow and adapt as your business expands, ensuring continued efficiency and functionality.
Security Patches:Providing regular security updates and patches to protect against potential vulnerabilities and threats, maintaining data integrity.
Feature Upgrades: Upgrading and adding new features to keep your software relevant and aligned with your changing business goals.
Dedicated Support Teams: Providing access to dedicated teams for ongoing assistance, troubleshooting, and updates, ensuring consistent support.
These services ensure seamless operation, minimize downtime, and maximize the longevity and ROI of your custom software solution. We further offer customized maintenance plans that fit your specific needs, guaranteeing long-term support and minimizing downtime`,
  },
  {
    question:
      "What are the benefits of investing in Custom Software Solutions?",
    answer: `Custom software solutions provide a string of benefits aligned with your business needs. It is designed to address your specific challenges and workflows, ensuring a perfect fit. Custom software is scalable, allowing for growth as your business expands, and it improves efficiency by automating tasks and streamlining processes, reducing costs.

Security is enhanced with measures tailored to your data protection needs, while unique features offer a competitive edge over off-the-shelf solutions. Custom software integrates seamlessly with existing systems, minimizing compatibility issues. Although the initial investment may be higher, it leads to long-term savings by eliminating costly workarounds and licenses. Custom software also provides full ownership and control, allowing for future updates and customization.`,
  },
];

const websiteServices = [
  {
    title: "Software Consulting",
    heading:
      "Start with a plan, finish with a solution, with a custom software company that cares",
    description:
      "Navigating the world of tech can be tricky, but our software development and consultancy services are all about helping you figure out what works best for your business. By sharing software advisory and consulting services, backed by market research and competitive analysis, we create a solid strategy that aligns with your goals. Think of us as your tech partners—someone who gets your challenges and knows how to solve them with practical, scalable solutions. We’ll help you cut through the noise, avoid unnecessary costs, and focus on what truly drives growth.",
    image: "/software/website/web.webp",
  },
  {
    title: "Custom Software Product Development",
    heading:
      "Turn your idea into a game-changing product that actually works for you",
    description:
      "Our product engineering and custom SaaS development services are the perfect mix of innovation, creativity, and practicality. Harnessing the best practices and methodologies in customized software development, we create software products that function intuitively and adapt with the business.From consultations and scope assessment to prototyping, design, development, rigorous testing, and hassle-free deployment, our product engineering services are with you every step of the way. We adhere to international compliance standards, so you can rest easy knowing your product is ready for continuous value generation.",
    image: "/software/website/web.webp",
  },
  {
    title: "Custom Enterprise Software Development",
    heading:
      "Get the software your enterprise needs to grow, evolve, and succeed",
    description:
      "When off-the-shelf software just isn’t cutting it, that’s where we come in. Based in the US, our custom enterprise software development services are all about creating solutions that fit your business like a glove. Whether you need to improve processes, integrate systems, or build something entirely new, we’ve got you covered.We don’t just create software; we build tools that help your business run smoother, grow faster, and stay ahead of the competition. From modernizing outdated systems to developing brand-new platforms, we’ll work with you to craft the perfect solution for your needs.",
    image: "/software/website/web.webp",
  },
  {
    title: "Custom Web App Development",
    heading: "Build web apps that drive success and help you seize the market",
    description:
      "Regardless of the size or complexity of your business challenge, our expert custom web app development services help create powerful, high-performance applications, such as web portals, web applications, SaaS solutions, and other web-based digital properties that drive mission-critical processes.With 14+ years of experience in designing and building transformative web-based solutions for global brands, we are a trusted custom software development firm for enterprises, medium businesses, and start-ups.",
    image: "/software/website/web.webp",
  },
  {
    title: "Custom Mobile App Development",
    heading:
      "Make your business solutions easily accessible to your audience, no matter where they are ",
    description:
      "As a top mobile software development company in the US, we offer full-cycle mobile app services, from design and development to integration and management. By blending expertise with the latest technologies and proven practices, we create native, hybrid, and cross-platform apps that deliver smooth, intuitive user experiences across every platform. Whether it’s a consumer-facing app or a robust enterprise solution, we build apps that not only meet market needs but also fuel your business growth.",
    image: "/software/website/web.webp",
  },
  {
    title: "API Engineering and Software Integration",
    heading:
      "Seamlessly connect your systems with APIs that power your business forward.",
    description:
      "Your business runs on connections, and our API engineering and software integration services are built to create those connections effortlessly. We design and implement APIs that enable smooth data flow across your platforms, ensuring everything works together efficiently.Our team integrates third-party systems and builds custom APIs tailored to your needs, eliminating friction and enhancing overall performance. We simplify the complexity of connecting multiple tools, applications, and services, so you can focus on achieving your goals without worrying about technical hiccups",
    image: "/software/website/web.webp",
  },
  {
    title: "Legacy Software & App Modernization",
    heading:
      "Transform your legacy systems into a driver of innovation and growth",
    description:
      "The digital world moves fast, and clinging to outdated systems just doesn’t cut it anymore. Give your aging applications an upgrade via the latest technologies, architectures, and frameworks. We’ll help you ditch the glitches, performance hiccups, and clunky designs with our expert software and app modernization services.Our team makes it simple: we’ll work with you to re-engineer your applications, modernize your legacy software, power them up with cutting-edge technologies, and deliver experiences your users will love. Oh, and we’ll make sure they’re ready for the cloud too—because that’s where the future is.",
    image: "/software/website/web.webp",
  },
  {
    title: "Software Support & Maintenance",
    heading:
      "Keep your software running at peak performance, every time, all the time!",
    description:
      "After your software goes live, it’s critical to keep it running at its best. Our software support and maintenance services are designed to handle ongoing updates, bug fixes, and performance monitoring to keep everything running smoothly.We proactively address issues, perform regular system checks, and ensure your software is always up to date with the latest features and security patches. Our dedicated team provides you with the peace of mind that your software is in expert hands, preventing downtime and optimizing your system’s performance.",
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={customImg}
        smallHeader="Home / Service / Software Engineering / Custom software development"
        titleHighlight="Custom Software Development"
        titleMain="Company"
        description="Tired of one-size-fits-all? Get software that fits your needs. Streamline, automate, and innovate with custom software solutions built around your goals, and for your budget."
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="End-to-end Custom Software Development Services in USA"
        mainTitle="Get the right software "
        highlightText="with the right strategy and support,"
        afterHighlight="tailored just for you"
        challenges={[
          "Lack of scalability owing to dated software solutions and digital capabilities",
          "Operational inefficiency due to lack of automation & business intelligence",
          "Scattered and non-interoperable digital infrastructure resulting in disorganization",
          "Inadequate AI capabilities impacting user experience",
        ]}
        paragraph1="we deliver custom software development services that transform your ideas into impactful solutions. Our customer-focused approach ensures we design strategies and build software to help you scale, streamline operations, and enhance user experience.

With expertise in unlocking flexibility, automating processes, and integrating workflows, we’ve empowered businesses to achieve future-readiness and productivity.

From startups to enterprises, our custom software development team in the US delivers end-to-end support across the entire software lifecycle—strategy, development, and deployment—providing tech-agnostic solutions that drive digital transformation. We’re ready to help you too.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Our Custom{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              eCommerce Development
            </span>{" "}
            Solutions
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
