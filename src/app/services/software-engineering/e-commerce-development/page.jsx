import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import ecomImg from "../../../../../public/software/web/ecom.webp";
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
    question: "How long does it take to build an eCommerce website/app?",
    answer:
      "Usually, we take 12-14 weeks to create an eCommerce website. However, the development time depends on your unique business requirements, features, project complexity, functionalities, and other factors.",
  },
  {
    question: "How much does an ecommerce website cost?",
    answer:
      "Typically, ecommerce websites require complex integrations, premium plugins and other overhead costs to consider. It can range from $10,000 - $12,000 and above based on the scope of the project, and your overheads.",
  },
  {
    question: "How to choose the best ecommerce development company?",
    answer:
      "The right eCommerce development company will enhance the functional efficiency of your eCommerce website. Choose your service provider only after careful deliberation on their experience and expertise in handling eCommerce projects for different industries and business sizes, competence over technologies specific to eCommerce, web design prowess, whether they offer post-launch support and maintenance and cost and budget estimations. You should also go through the client testimonials and reviews available on the internet as they help validate the points mentioned above.",
  },
  {
    question:
      "What are the security risks that are involved with eCommerce sites?",
    answer:
      "All ecommerce solutions are prone to certain security risks. Some common cyber threats such websites face include financial fraud, credit card fraud, phishing attacks, DDoS attacks, spamming, malware, and vulnerability exploitation, among others. Leverage our services to build your ecommerce website. We prioritize security,  aesthetics and functionality, making us one of the most reliable ecommerce web development companies.",
  },
  {
    question: "What are the main activities of eCommerce sites?",
    answer:
      "E-commerce business includes online transactions, such as buying and selling products and services. Hence, ecommerce website developers generally include relevant ecommerce functionalities like product descriptions, shopping carts, checkout processes, delivery and returns etc. However, the main functions of an ecommerce website include marketing, supply chain management, financial management, round-the-clock services etc.",
  },
  {
    question: "What types of AI technologies are used in eCommerce?",
    answer:
      "AI is creating a deep impact on the eCommerce landscape. It is currently being used to optimize different ecommerce operations, mostly the ones that are relevant to improving customer experience like personalized product recommendations, fraud detection, chatbots etc. Some popular AI technologies being implemented include Natural Language Processing, Machine Learning, Data Mining etc.",
  },
];

const websiteServices = [
  {
    title: "Custom eCommerce Website Development",
    heading:
      "Transform customer interactions and engagement with our tailor-made eCommerce website development services",
    description:
      "From WordPress Ecommerce development to more complex platforms, our ecommerce website developers create real value for your business by delivering the custom solution that your business demands.Running a successful ecommerce business has several challenges. As a tech-enabled and user-centric ecommerce development company, we help you overcome these challenges using our expertly designed, feature-rich solutions, enabling you to ride the new waves of growth confidently.",
    image: "/software/website/web.webp",
  },
  {
    title: "Mobile Commerce Solutions",
    heading:
      "Deliver rich, immersive, and user-friendly experiences at your customers' fingertips",
    description:
      "For ecommerce, customer loyalty and retention depend on their user journey. We combine an omnichannel presence, precise customer mapping, and user-centric solutions to increase your customer reach and grow your business.Our mobile-first ecommerce development provides you with an additional digital touchpoint. Leverage it to facilitate unique shopping experiences through push notifications, faster checkout processes, voice shopping facilities, etc.",
    image: "/software/website/web.webp",
  },
  {
    title: "Custom eCommerce Solutions",
    heading:
      "Enable tangible results with our professional-grade B2B eCommerce website development services",
    description:
      "Inspire new possibilities by redefining outcomes with our tech-based custom eCommerce solutions. We achieve this by delivering an intuitive user experience through a seamless omnichannel, multi-platform approach.Our solutions enhance user engagement by integrating key functionalities such as shopping carts, product pages, checkout processes, and payment gateways. Additionally, our eCommerce UI/UX design services elevate your site’s aesthetics with visually compelling content.",
    image: "/software/website/web.webp",
  },
  {
    title: "eCommerce Platform Migration",
    heading:
      "Migrate your legacy systems to innovation-led eCommerce website solutions for 10X performance",
    description:
      "Meet constantly evolving user demands by migrating your current systems to modern ecommerce online platforms at competitive e-commerce website development costs.As an intuitive ecommerce website design company, we help upgrade your current ecommerce app design to foster an environment that guarantees operational efficiency and intelligence-based business management.",
    image: "/software/website/web.webp",
  },
  {
    title: "B2B eCommerce Solutions",
    heading:
      "Optimize your B2B solutions with our enterprise and open-source eCommerce platforms, designed for efficiency",
    description:
      "Our custom eCommerce website development services encompass B2B and SaaS eCommerce solutions, providing comprehensive customer engagement across various niches with all essential services in one place.With years of experience in executing specialized eCommerce projects for a global clientele, we excel at delivering user-centric, SEO-friendly B2B eCommerce websites tailored to your needs.",
    image: "/software/website/web.webp",
  },
  {
    title: "eCommerce Optimization and Security",
    heading:
      "Boost conversions and enhance customer experience with streamlined and secure eCommerce platforms",
    description:
      "Conversions and SEO optimizations are complementary functions for most ecommerce websites. Implementing a well-defined SEO strategy results in good rankings, increased visibility, and improved web traffic.Adopting data-driven ecommerce conversion rate optimization best practices like user behavior analysis and targeted strategy implementation further enhances the impact of your website and increases conversions. Ensuring robust security measures is also crucial for protecting customer data and building trust.",
    image: "/software/website/web.webp",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={ecomImg}
        smallHeader="Home / Service / Software Engineering / Ecommerce"
        titleHighlight="eCommerce Web Development"
        titleMain="Services"
        description="Drive tangible business transformation with eCommerce experiences that not only resonate with your customers but also drive market success"
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="The need for eCommerce Development"
        mainTitle="eCommerce web design solutions "
        highlightText="that captivate and engage users,"
        afterHighlight="ensuring customer retention"
        paragraph1="Statistics reveal that 88% of online consumers reconsider returning to a website after a negative experience, and 38% will disengage if the content or layout is unappealing. With 2.14 billion people shopping online, these figures underscore the importance of a compelling digital presence.

As a premier eCommerce website design company, we bring extensive industry experience to the table and seamlessly blend brand vision with a robust tech stack to create your ideal digital e-commerce solution platform. Our eCommerce web developers conduct a thorough analysis of your needs, define objectives and challenges, and decide on the scope of your website development project.

Contact us today to start transforming your eCommerce presence and drive your online success.
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
      <ContactSection/>
    </main>
  );
}
