import IndustryHero from "@/components/Industry/IndustryHero";
import React from "react";
import digitalImg from "../../../../../public/software/web/digital.jpg";
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
    question: "What is Digital Marketing?",
    answer: `Online strategy to promote products/services using digital channels.
Leverages internet platforms to reach targeted audiences.
Includes SEO, social media, content marketing, email, and PPC.
Focuses on measurable results and real-time analytics.
Aims to engage customers and drive conversions.`,
  },
  {
    question: "What Services are Included in Digital Marketing?",
    answer: `Search Engine Optimization (SEO): Enhances website visibility on search engines.
Social Media Marketing: Promotes brands on platforms like Instagram, LinkedIn, Twitter.
Content Marketing: Creates valuable content to attract and retain audiences.
Pay-Per-Click (PPC) Advertising: Paid ads for instant traffic and conversions.
Email Marketing: Targeted campaigns to nurture leads and customers.
Online Reputation Management: Solutions to protect and enhance your brand’s online presence.
Web Design/Development: Optimizes user experience for better engagement.
Analytics and Reporting: Tracks performance using tools like Google Analytics.
`,
  },
   {
    question: "How Does SEO Improve My Website’s Visibility?",
    answer: `Optimizes content with relevant keywords to rank higher on search engines.
Improves site structure and speed for better user experience.
Builds quality backlinks to increase domain authority.
Enhances local SEO for geographically targeted searches.
Ensures mobile-friendliness to align with search engine algorithms.
Uses analytics to refine strategies and maintain rankings.
`,
  },
   {
    question: "What is the Role of Social Media in Digital Marketing?",
    answer: `Builds brand awareness through targeted content and ads.
Engages audiences with interactive posts, stories, and live sessions.
Drives traffic to websites via links and promotions.
Enables direct customer communication for feedback and support.
Supports influencer collaborations to expand reach.
Provides analytics to measure engagement and refine campaigns.
`,
  },
   {
    question: "How Can Content Marketing Benefit My Brand?",
    answer: `Establishes brand authority with valuable, relevant content.
Boosts SEO through keyword-rich blogs, videos, and infographics.
Engages audiences, increasing time spent on your site.
Nurtures leads with educational content like eBooks or webinars.
Encourages sharing, expanding organic reach.
Builds trust, fostering long-term customer loyalty.
`,
  },
   {
    question: "What is Pay-Per-Click (PPC) Advertising and How Does It Work?",
    answer: `Paid advertising model where advertisers pay per ad click.
Platforms like Google Ads or social media host PPC campaigns.
Targets specific audiences using keywords, demographics, or interests.
Ads appear on search results, websites, or social feeds.
Budgets are set with bids for ad placements.
Analytics track clicks, conversions, and ROI for optimization.
`,
  },
   {
    question: "How Do I Measure the Success of a Digital Marketing Campaign?",
    answer: `Key Performance Indicators (KPIs): Track metrics like traffic, conversions, and ROI.
Website Analytics: Use tools like Google Analytics for visitor behavior.
Engagement Metrics: Monitor likes, shares, comments on social media.
Conversion Rates: Measure actions like form submissions or purchases.
Cost Per Acquisition (CPA): Evaluate cost efficiency of gaining customers.
Return on Ad Spend (ROAS): Assess revenue generated from ads.
`,
  },

];
const websiteServices = [
  {
    title: "Search Engine Optimization (SEO)",
    heading: "Boost your online visibility with our expert SEO services.",
    description: `Stand out in search engine results and attract the right audience by working with a leading digital marketing agency.

Focusing on the tenets of data-driven strategy, continuous optimization, and technical excellence, we ensure your website is search engine-friendly and ranks higher for relevant keywords.

We implement on-page and off-page SEO, strategic keyword targeting, and technical enhancements that drive organic traffic and increase your brand’s discoverability`,
    image: "/software/web/mar.jpg",
  },
  {
    title: "Performance Marketing/Pay-Per-Click (PPC) Advertising",
    heading: "Maximize your ROI with precision-targeted PPC campaigns.",
    description: `Achieve higher conversions and better ad performance by collaborating with a results-driven PPC management agency.

Focusing on the tenets of strategic bidding, audience segmentation, and campaign optimization, we ensure your ads reach high-intent customers actively searching for your products or services.

We execute targeted advertising campaigns on Google Ads, Bing Ads, and other paid media platforms, ensuring maximum return on investment.`,
    image: "/software/web/mar.jpg",
  },
  {
    title: "Social Media Marketing (SMM) Services",
    heading:
      "Engage, grow, and convert with an expert social media marketing agency.",
    description: `Build a strong online presence and foster meaningful connections by partnering with a social media marketing agency that delivers real engagement.

Focusing on the tenets of brand storytelling, audience engagement, and data-driven strategies, we ensure your social campaigns create impact and drive conversions.

We leverage platforms like Facebook, Instagram, LinkedIn, and Twitter to build brand awareness, generate leads, and drive measurable results through both organic and paid strategies.`,
    image: "/software/web/mar.jpg",
  },
  {
    title: "Content Marketing",
    heading:
      "Establish thought leadership with a powerful content strategy.",
    description: `Increase brand authority and engage your audience by working with a content marketing agency that delivers impactful narratives.

Focusing on the tenets of storytelling, SEO-driven content, and strategic distribution, we craft content that educates, informs, and converts.

We develop and distribute valuable, relevant, and engaging content tailored to your audience, ensuring long-term brand trust and industry recognition.`,
    image: "/software/web/mar.jpg",
  },
  {
    title: "Email Marketing Services",
    heading: "Turn leads into loyal customers with personalized email marketing.",
    description: `Strengthen customer relationships and increase conversions by partnering with a data-driven email marketing agency.

Focusing on the tenets of personalization, automation, and audience segmentation, we craft email campaigns that deliver the right message at the right time.

We create and optimize targeted email campaigns that nurture leads, promote your services, and maintain ongoing customer engagement for long-term loyalty and retention.`,
    image: "/software/web/mar.jpg",
  },
  {
    title: "(CRO) Conversion Rate Optimization Services",
    heading:
      "Maximize conversions with strategic CRO implementations.",
    description: `Enhance website performance and increase conversion rates by collaborating with a conversion-focused digital marketing agency.

Focusing on the tenets of user behavior analysis, A/B testing, and UX optimization, we identify bottlenecks and refine the customer journey to increase sales and lead generation.

We implement data-backed CRO strategies to ensure that every website visit leads to meaningful actions—whether it’s a purchase, form submission, or inquiry.`,
    image: "/software/web/mar.jpg",
  },
];
export default function Page() {
  return (
    <main>
      <IndustryHero
        backgroundImage={digitalImg}
        smallHeader="Home / Service / Digital Strategy / Digital Marketing"
        titleHighlight="Revenue-Driven
Digital Marketing"
        titleMain="Solutions"
        description="We focus on tailored, data-driven digital marketing strategies that help
your business dominate the digital landscape and drive revenue growth."
      />
      <ClientsMarquee />
      <WebsiteIntro
        leftTitle="Bespoke Digital Marketing Solutions"
        mainTitle="Maximize Your Brand’s Potential with "
        highlightText="Revenue-focused Digital Marketing Strategies "
        afterHighlight="in Canada"
        challenges={[
          "Low Website Traffic – Struggling with Poor SEO Search Engine Optimization and ranking on search engines, making it hard for potential customers to find you.",
          "High Ad Spend, Low ROI – Wasting budget on paid campaigns that don’t convert effectively.",
          "Poor Engagement & Lead Generation – Website visitors leaving without taking action, impacting sales and growth.",
          "Inconsistent Brand Messaging – Disjointed online presence across multiple platforms, weakening brand identity.",
        ]}
        paragraph1="Our consulting-led approach ensures we first analyze your core business objectives, identify challenges, and build data-backed strategies that turn insights into high-impact digital marketing solutions. We focus on SEO, PPC, social media, content marketing, and CRO, ensuring a holistic, results-driven digital strategy tailored to your business needs.

From driving organic traffic and increasing brand awareness to optimizing ad performance and enhancing customer engagement, we craft targeted digital marketing campaigns that attract, convert, and retain customers. Whether you need SEO-driven growth, paid advertising optimization, or audience-focused content strategies, our expertise ensures your brand thrives in today’s competitive digital landscape.
        "
      />
      <ReusableServiceTabs
        services={websiteServices}
        subtitle="Our Offerings"
        title={
          <>
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Marketing
            </span>{" "}
            Services
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
