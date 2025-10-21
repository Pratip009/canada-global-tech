"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const techCategories = {
  "UI/UX": [
    { name: "Figma", img: "/tech/figma.svg" },
    { name: "Sketch", img: "/tech/sketch.svg" },
    { name: "Adobe XD", img: "/tech/adobe.svg" },
    { name: "Miro", img: "/tech/miro.svg" },
    { name: "Photoshop", img: "/tech/photoshop.svg" },
    { name: "HTML", img: "/tech/html.png" },
    { name: "CSS", img: "/tech/css.png" },
    { name: "Material UI", img: "/logos/uiux/mui.png" },
    { name: "axure", img: "/logos/uiux/axure.svg" },
    { name: "zeplin", img: "/logos/uiux/zeplin.svg" },
    { name: "Illustrator", img: "/logos/uiux/illus.svg" },
  ],
  Frontend: [
    { name: "React", img: "/tech/react.svg" },
    { name: "Next.js", img: "/tech/next.svg" },
    { name: "Tailwind", img: "/tech/angular.svg" },
    { name: "TypeScript", img: "/tech/ts.svg" },
    { name: "JavaScript", img: "/tech/js.svg" },
    { name: "jQuery", img: "/tech/jq.png" },
    { name: "AJAX", img: "/tech/ajax.png" },
    { name: "WEB3", img: "/tech/web3.svg" },
    { name: "SVLET", img: "/tech/sv.svg" },
    { name: "HTML", img: "/logos/frontend/html.png" },
    { name: "CSS", img: "/logos/frontend/css.png" },
  ],
  Backend: [
    { name: "Node.js", img: "/tech/backend/nodejs.svg" },
    { name: "Express", img: "/tech/backend/express.svg" },
    { name: "NestJS", img: "/tech/backend/wordpress.svg" },
    { name: "Python", img: "/tech/backend/Ruby.svg" },
    { name: "cakephp", img: "/logos/backend/cakephp.svg" },
    { name: "corda", img: "/logos/backend/corda.svg" },
    { name: "django", img: "/logos/backend/django.svg" },
    { name: "dotnet", img: "/logos/backend/dotnet.svg" },
    { name: "etherum", img: "/logos/backend/etherum.svg" },
    { name: "fabric", img: "/logos/backend/fabric.svg" },
    { name: "flask", img: "/logos/backend/flask.svg" },
    { name: "java", img: "/logos/backend/java.svg" },
    { name: "js", img: "/logos/backend/js.svg" },
    { name: "laravel", img: "/logos/backend/laravel.svg" },
    { name: "php", img: "/logos/backend/php.svg" },
    { name: "python", img: "/logos/backend/python.svg" },
    { name: "qorum", img: "/logos/backend/qorum.svg" },
    { name: "rest", img: "/logos/backend/rest.svg" },
    { name: "ripple", img: "/logos/backend/ripple.svg" },
    { name: "spring", img: "/logos/backend/spring.svg" },
    { name: "springboot", img: "/logos/backend/springboot.png" },
    { name: "steller", img: "/logos/backend/steller.svg" },
  ],
  Mobile: [
    { name: "React Native", img: "/tech/mobile/ReactNative.svg" },
    { name: "Flutter", img: "/tech/mobile/Flutter.svg" },
    { name: "Swift", img: "/tech/mobile/iOS.svg" },
    { name: "Kotlin", img: "/tech/mobile/android.svg" },
    { name: "ionic", img: "/logos/mobile/ionic.png" },
    { name: "kotlin", img: "/logos/mobile/kotlin.png" },
    { name: "objective c", img: "/logos/mobile/objc.svg" },
    { name: "native java", img: "/logos/mobile/nativejava.svg" },
    { name: "wing", img: "/logos/mobile/wing.png" },
    { name: "xmarin", img: "/logos/mobile/xmarin.png" },
  ],
  Database: [
    { name: "MySQL", img: "/tech/database/mysql.png" },
    { name: "MongoDB", img: "/tech/database/mongodb.svg" },
    { name: "PostgreSQL", img: "/tech/database/post.svg" },
    { name: "Firebase", img: "/tech/database/firebase.svg" },
    { name: "Oracle", img: "/tech/database/oracle.png" },
    { name: "apache", img: "/logos/database/apache.svg" },
    { name: "clickhouse", img: "/logos/database/clickhouse.png" },
    { name: "couchdb", img: "/logos/database/couchdb.svg" },
    { name: "mariadb", img: "/logos/database/mariadb.png" },
    { name: "neo4j", img: "/logos/database/neo4j.svg" },
    { name: "plsql", img: "/logos/database/plsql.svg" },
    { name: "sqlite", img: "/logos/database/sqlite.svg" },
    { name: "sqlserver", img: "/logos/database/sqlserver.png" },
    { name: "tsql", img: "/logos/database/tsql.svg" },
    { name: "ybase", img: "/logos/database/ybase.webp" },
  ],
  Cloud: [
    { name: "AWS", img: "/tech/cloud/aws.svg" },
    { name: "Azure", img: "/tech/cloud/azure.png" },
    { name: "GCP", img: "/tech/cloud/google.svg" },
    { name: "DigitalOcean", img: "/tech/cloud/ibm.svg" },
    { name: "awscdk", img: "/logos/cloud/awscdk.svg" },
    { name: "azure", img: "/logos/cloud/azure.svg" },
    { name: "ipfs", img: "/logos/cloud/ipfs.svg" },
    { name: "kubernates", img: "/logos/cloud/kubernates.svg" },
    { name: "oracle", img: "/logos/cloud/oracle.svg" },
  ],
   DevOps: [
    { name: "ansible", img: "/logos/devops/ansible.svg" },
    { name: "apache", img: "/logos/devops/apache.png" },
    { name: "aws", img: "/logos/devops/aws.svg" },
    { name: "cicd", img: "/logos/devops/cicd.svg" },
    { name: "docker", img: "/logos/devops/docker.svg" },
    { name: "dockercontainer", img: "/logos/devops/dockercontainer.svg" },
    { name: "git", img: "/logos/devops/git.svg" },
    { name: "googlecloud", img: "/logos/devops/googlecloud.svg" },
    { name: "jenkins", img: "/logos/devops/jenkins.svg" },
    { name: "promethus", img: "/logos/devops/promethus.svg" },
    { name: "terraform", img: "/logos/devops/terraform.svg" },
  ],
};

export default function TechnologyCapabilities() {
  const [activeCategory, setActiveCategory] = useState("UI/UX");
  const categories = Object.keys(techCategories);

  return (
    <section className="relative w-full min-h-[600px] py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden flex items-center">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] bg-right-top bg-no-repeat opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Driving Digital Transformation through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
              Advanced Technology Capabilities.
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-14 items-start">
          {/* Sidebar (2 per row) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 md:w-[28%]"
          >
            {categories.map((category) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap tracking-wide ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md scale-105"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Tech Grid Area */}
          <div className="md:w-[72%] min-h-[520px] flex flex-col justify-start">
            <motion.p
              key={activeCategory + "-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-600 text-base md:text-lg font-medium leading-relaxed max-w-2xl mb-10"
            >
              Empower your infrastructure with{" "}
              <span className="text-gray-900 font-semibold">
                observability solutions
              </span>{" "}
              for real-time insights and seamless performance — enabling{" "}
              <span className="text-blue-600 font-semibold">
                faster decisions
              </span>{" "}
              and{" "}
              <span className="text-purple-600 font-semibold">
                smarter scaling
              </span>
              .
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center w-full"
              >
                {techCategories[activeCategory].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      boxShadow:
                        "0px 8px 20px rgba(59,130,246,0.15), 0px 0px 8px rgba(147,51,234,0.1)",
                    }}
                    className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center w-[130px] h-[110px]"
                  >
                    <div className="relative w-20 h-20">
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
