import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import newImg from "../../../../../public/software/web/new.webp";
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
    question: "How do I choose the right web design company?",
    answer: `As a business owner, selecting a web design agency in Canada is key. When making the selection for the best web design company near you, you shouldn't be stressed. You should aim to ensure a perfect balance of aesthetics and functionality for your website.

Some factors that you must consider when making the selection include:

Experience in designing websites for your industry
Technical expertise of their web designers
Client retention rate
Gaining an understanding of their customer support 
Reviewing their case studies to understand the type of work done
The budget quoted and the reasons for quoting the same
Timeframe quoted
Communication
While there are many companies across the globe that will score well on this criteria, getting someone locally, in and around Canada, or even the USA may be the better option. In any case, whichever web design firm you do select, should score well on the above criteria, and ensure the success of your project.`,
  },
  {
    question:
      "Does Canada Global Tech offer any local expertise in web design?",
    answer: `As one of the top web design companies in CANADA, Canada Global Tech does indeed offer local services in and around City.

To learn more about our specific offerings, please use our contact form to send us a message, and we'll be happy to take this forward.

`,
  },
  {
    question: "When should your company decide on website redesign?",
    answer: `The industry standard is around 24-30 months.

A company should consider a website redesign when: 

The brand has evolved.
The website looks dated
The website lacks critical functionalities
The website content is outdated
Traffic is declining
`,
  },
  {
    question: "What is the difference between web design and web development?",
    answer: `Web design focuses more on the aesthetics of the website. It prioritizes elements like color, theme, layout, navigation, etc., to ensure the visual appeal and usability of the website.

In contrast, web development deals with the website's functionality or backend. It ensures that the web design operates seamlessly across different devices, platforms, and browsers. 

Both services are complimentary. Together, they help develop websites with compelling visuals, highly interactive UI, and exceptional performance.
`,
  },
  {
    question: "Would a website redesign bring more traffic and leads?",
    answer: `A website redesign can significantly boost your traffic by enhancing your site’s visibility, usability, and ability to convert visitors into customers.

Here’s how website redesign services can help drive traffic and leads -

Improved SEO Performance: Website redesign services optimize your site for search engines, boosting visibility and attracting more targeted traffic.
Enhanced User Experience (UI/UX): A redesign focuses on creating a seamless, user-friendly interface, keeping visitors engaged and reducing bounce rates.
Increased Lead Generation: By capturing targeted traffic, a well-designed site turns visitors into qualified leads and paying customers.
Customized Solutions: A professional website redesign company tailors the design to align with your business goals, ensuring your site stands out in a competitive digital landscape.
Maximized Online Presence: Redesigning your site ensures it stays current with modern design trends and search engine algorithms, driving consistent traffic and growth.

`,
  },
  {
    question: "Why is responsive web design important?",
    answer: `A responsive web design is extremely important for businesses today. Since mobile is the device people use to browse the internet 55% of the time, you simply need to have a responsive website.

Here are some key factors - 

Enhances User Experience (UX): Redesigning ensures a seamless, user-friendly interface across devices, improving navigation, accessibility, and overall usability.
Improves Mobile-Friendliness: Mobile-friendly designs are critical for SEO rankings, as search engines prioritize responsive sites in results.
Boosts SEO Performance: A redesigned site optimized for current ranking factors, including speed, mobile usability, and content structure, helps improve visibility in search results.
Increases Website Traffic and Conversions: A modernized, visually appealing design attracts visitors, encourages longer site engagement, and leads to higher conversions.
Aligns with Business Goals: A redesign allows you to align your website with updated business objectives, branding, and messaging.
Supports Modern Technology: Integrating the latest tools, frameworks, and features ensures compatibility with evolving digital trends and user expectations.
Eliminates Outdated Elements: Redesigning helps remove obsolete technologies, such as Flash, and integrates modern, efficient solutions.
Encourages Consistent Branding: A redesigned website ensures your branding is consistent across all pages and devices, building trust and recognition.
Optimizes Content Delivery: Faster loading times and well-structured content enhance user satisfaction and engagement.
Reduces Maintenance Costs: Modern, streamlined designs often lower ongoing maintenance expenses compared to older, outdated platforms.
`,
  },
];
const websiteServices = [
  {
    title: "Custom Web Design",
    heading:
      "Craft your digital identity with innovative solutions from the best web design company in Canada City",
    description: `From crafting your online identity to building your brand, our data-driven web design and development services deliver results that speak for themselves. We leverage different data categories like demographics, emotional quotients, preferences, etc to ascertain the right aesthetics.

Our creative and expert web designers make more than mere website designs, they craft websites that cascade as you scroll.`,
    image: "/software/web/webdesign.webp",
  },
  {
    title: "Website Redesign",
    heading:
      "Take your website graphics, usability, performance, and credibility to the next level with our website redesign services in NYC",
    description: `When it comes to web design in NYC, many companies face this challenge: How can we ensure longer visitor sessions and improve conversion rates? It’s easy. Website redesign and website revamp services can help them overcome all website related challenges, while catering to their business needs. 

With customizable landing pages, personalized content, and search engine optimization, our Canada-based web designers transform dated poor websites from poor performers to exceptional tools for memorable user journeys.`,
    image: "/software/web/webdesign.webp",
  },
  {
    title: "Corporate Websites",
    heading:
      "Stay top of the crop by leveraging profound skill and expertise of our enterprise website designers.",
    description: `As specialists offering corporate website design services in Canada, we ensure that our designs fuel your digital presence and add to your customer strength. From mobile-friendly B2B web designs to digital storefronts, we’re best placed to design your website.

Good aesthetics build corporate credibility. To maximize the results from your corporate website design, ensure that it ticks all the right boxes. Take advantage of our specialized NYC web development company to design a website that reflects your mission and vision, establishing your business identity as a global brand.`,
    image: "/software/web/webdesign.webp",
  },
  {
    title: "Lead Generation Websites",
    heading:
      "Engage and drive conversions at full scale with Canada’s most experienced website design company",
    description: `As a leading website design firm in Canada, we prioritize understanding user aspirations and leveraging them to inspire conversions. Integrating elements like advanced search, predictive analysis and autocomplete predictions helps engage users and guide them towards completing their website journey.

As one of the few competent website design companies in Canada, we know attracting high-value leads is quite challenging. But designing the best web design strategy, helps us convert your website into a powerful lead-generating tool.`,
    image: "/software/web/webdesign.webp",
  },
  {
    title: "eCommerce Web Design Services",
    heading:
      "Showcase products, transact securely, and maintain inventory accuracy with our ecommerce design & ecommerce development services.",
    description: `Whether it is mobile-first web design, or built for larger screens, we engineer experiences with lightning-fast website speeds and visually compelling product catalogs. as your top-rated web design and development partner. Leverage our Canada web design services to meet your web design needs and objectives.

Our responsive ecommerce web designs dominate the digital marketplace. We build them using the latest technology, clean coding practices, and experienced expertise to strengthen your online presence and make you stand out.`,
    image: "/software/web/webdesign.webp",
  },
  {
    title: "Gated Websites",
    heading:
      "Unlock conversion possibilities and digital brilliance with our gated web design services.",
    description: `As one of the top web design companies in Canada, we offer premium tailored services that ensure high-quality, secure, gated websites catering to niche clients with specific requirements.

We offer this service as an extension of our lead generation web design services. Including unique and innovative services justifies our presence in the list of reputed web development companies in Canada.`,
    image: "/software/web/webdesign.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={newImg}
        smallHeader="Home / Service / Design & Digital Experience / Web Design Canada"
        titleHighlight="Top-rated User Experience Research"
        titleMain="Service"
        description="Transform core experiences and turbocharge your digital presence with our top-tier web design services and solutions in Canada"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Website Design Services in Canada"
        mainTitle="Top-rated "
        highlightText="web design and development company in Canada "
        afterHighlight="adept at crafting user-centric experiences"
        challenges={[
          "A slow experience that frustrates end-users.",
          "Poor lead conversion leading to stagnant growth.",
          "Poor mobile responsiveness impacting bounce rate.",
          "Limited content management capabilities causing operational inefficiency.",
        ]}
        paragraph1="As a Canada-based website design company, we specialize in creating cutting-edge, human-centric web designs that cater to real-world problems. We understand the importance of continuous disruption and strive relentlessly to transform your online presence with innovative design solutions and expert craftsmanship. Our team of top-tier designers bring creativity and leverage leading capabilities to create unique, adaptive, and responsive web designs, helping businesses like yours stay ahead of the CX game and thrive in this ever-changing digital landscape.

By combining creative vision with technical web design and web development expertise, we ensure your brand’s visibility and online success
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Our custom{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              web design
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
