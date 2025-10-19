import IndustryHero from "@/components/Industry/IndustryHero";
import blogImg from "../../../../public/blogs/blog.svg";
import BlogCard from "@/components/blog/BlogCard";
export default function BlogsPage() {
  const blogs = [
    {
      image: "/blogs/react.webp",
      title: "How to Improve the Performance of Scalable ReactJS Apps?",
      author: "Pratip Kayal",
      date: "Sep 26, 2025",
      readTime: "11 minutes read",
    },
    {
      image: "/blogs/web.jpg",
      title: "Designing Seamless UX for Modern Enterprise Apps",
      author: "Pratip Kayal",
      date: "Oct 10, 2025",
      readTime: "9 minutes read",
    },
    {
      image: "/blogs/journey.png",
      title: "Accelerating Scalability with Cloud-Native Architecture",
      author: "Pratip Kayal",
      date: "Oct 15, 2025",
      readTime: "7 minutes read",
    },
    {
      image: "/blogs/ai.jpg",
      title: "Leveraging AI and ML for Smarter Digital Products",
      author: "Pratip Kayal",
      date: "Oct 18, 2025",
      readTime: "8 minutes read",
    },
    {
      image: "/blogs/security.jpg",
      title: "Security Best Practices in Modern Web Application Development",
      author: "Pratip Kayal",
      date: "Oct 12, 2025",
      readTime: "10 minutes read",
    },
    {
      image: "/blogs/devops.jpg",
      title: "DevOps Strategies for Continuous Integration and Deployment",
      author: "Pratip Kayal",
      date: "Oct 6, 2025",
      readTime: "12 minutes read",
    },
    {
      image: "/blogs/ui.webp",
      title:
        "UI Design Systems: Building Consistency and Scalability in Products",
      author: "Pratip Kayal",
      date: "Sep 30, 2025",
      readTime: "8 minutes read",
    },
    {
      image: "/blogs/testing.jpg",
      title: "Automated Testing Frameworks to Accelerate Delivery",
      author: "Pratip Kayal",
      date: "Oct 2, 2025",
      readTime: "6 minutes read",
    },
    {
      image: "/blogs/microservice.png",
      title: "Microservices vs Monolith: Choosing the Right Architecture",
      author: "Pratip Kayal",
      date: "Sep 28, 2025",
      readTime: "9 minutes read",
    },
    {
      image: "/blogs/future.jpg",
      title: "Exploring the Future of Enterprise Software with GenAI",
      author: "Pratip Kayal",
      date: "Oct 19, 2025",
      readTime: "10 minutes read",
    },
  ];

  return (
    <main>
      <IndustryHero
        backgroundImage={blogImg}
        smallHeader="Home / Resource / Blogs"
        titleHighlight="Blogs"
        titleMain=""
        description="Stay informed and inspired about the latest trends and technology updates with our collection of insights and perspectives."
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-teal-500 via-green-400 to-yellow-400 bg-clip-text text-transparent">
            Latest Insights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
