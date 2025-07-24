"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    name: "JavaScript",
    level: 90,
    description:
      "Experienced in writing clean, modular, and reusable JavaScript code for web applications. Comfortable with both ES6+ syntax and asynchronous programming patterns.",
    category: "Frontend",
  },
  {
    name: "React.js",
    level: 85,
    description:
      "Developed interactive user interfaces using functional components, hooks, and component-based architecture. Familiar with state management and component lifecycle.",
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 88,
    description:
      "Built production-ready full-stack applications with server-side rendering, API routes, dynamic routing, and optimized performance. Used for SEO-friendly and scalable web apps.",
    category: "Frontend",
  },
  {
    name: "Django",
    level: 82,
    description:
      "Developed backend systems using Django and Django REST Framework, including API endpoints, authentication, and database models for scalable web apps.",
    category: "Backend",
  },
  {
    name: "Node.js",
    level: 78,
    description:
      "Built server-side logic and REST APIs using Node.js. Experience working with Express.js and integrating backend services with frontend clients.",
    category: "Backend",
  },
  {
    name: "Laravel",
    level: 75,
    description:
      "Worked on building and maintaining web apps with Laravel, including routing, middleware, Eloquent ORM, and admin dashboards.",
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    description:
      "Styled responsive and mobile-friendly user interfaces using utility-first classes. Integrated seamlessly with React and Next.js projects.",
    category: "Frontend",
  },
  {
    name: "Git",
    level: 85,
    description:
      "Used Git for version control in solo and team projects. Comfortable with branching, pull requests, rebasing, and resolving merge conflicts.",
    category: "Tools",
  },
  {
    name: "Flutter",
    level: 65,
    description:
      "Explored cross-platform mobile development with Flutter and Dart, creating simple UI components and understanding widget trees.",
    category: "Mobile",
  },
  {
    name: "React Native",
    level: 60,
    description:
      "Basic experience in creating mobile interfaces using React Native, with knowledge of navigation and styling for both iOS and Android.",
    category: "Mobile",
  },
];

const categories = ["Frontend", "Backend", "Mobile", "Tools"];

const categoryColors = {
  Frontend: "from-blue-500 to-cyan-500",
  Backend: "from-purple-500 to-pink-500",
  Mobile: "from-green-500 to-teal-500",
  Tools: "from-orange-500 to-red-500",
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge
                      variant="default"
                      className={`bg-gradient-to-r ${
                        categoryColors[category as keyof typeof categoryColors]
                      } text-white border-0`}
                    >
                      {category}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -50 }
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
                        }}
                        className="space-y-3 group"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative">
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${
                                categoryColors[
                                  category as keyof typeof categoryColors
                                ]
                              }`}
                              initial={{ width: 0 }}
                              animate={
                                isInView
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                delay: categoryIndex * 0.2 + index * 0.1 + 0.6,
                                duration: 1,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
