"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Virtual AI Assistant",
    period: "05/2024 – 06/2024",
    description:
      "3D virtual assistant powered by AI for dynamic portfolio interactions.",
    achievements: [
      "Developed a virtual 3D AI assistant using React.js for the frontend and Django REST Framework for the backend.",
      "Integrated OpenAI API and LangChain to process portfolio data and generate context-aware responses.",
      "Implemented conversational AI features to provide interactive and personalized user experiences.",
      "Managed API endpoints to securely fetch and deliver relevant information from the portfolio.",
      "Focused on creating smooth animations and responsive UI for engaging 3D interactions.",
    ],
    technologies: [
      "React.js",
      "Django REST",
      "OpenAI API",
      "LangChain",
      "3D Animation",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI-Driven Apparel Retail Platform",
    period: "10/2023 – 04/2024",
    description:
      "E-commerce site with AI-powered clothing design and secure payment integration.",
    achievements: [
      "Built a full-stack web application using Next.js (frontend) and Django REST Framework (backend).",
      "Integrated OpenAI's DALL·E API to provide AI-generated apparel design suggestions tailored to user preferences.",
      "Implemented Stripe API for secure, seamless payment processing and order management.",
      "Developed RESTful APIs for managing products, user profiles, and transactions.",
      "Ensured responsive design and optimal performance across desktop and mobile devices.",
    ],
    technologies: [
      "Next.js",
      "Django REST",
      "DALL·E API",
      "Stripe API",
      "RESTful APIs",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Attendance Management System",
    period: "09/2023 – 12/2023",
    description:
      "Online platform for efficient student attendance tracking and management.",
    achievements: [
      "Developed a web-based attendance management system using Next.js for the frontend and Django REST Framework for the backend.",
      "Designed intuitive user interfaces and workflows using Figma to enhance user experience for teachers and administrators.",
      "Implemented RESTful APIs for recording, updating, and retrieving student attendance data.",
      "Enabled real-time attendance monitoring and reporting features to simplify administrative tasks.",
      "Worked within an agile development environment, participating in sprint planning and iterative improvements.",
    ],
    technologies: [
      "Next.js",
      "Django REST",
      "Figma",
      "RESTful APIs",
      "Real-time Features",
    ],
    gradient: "from-green-500 to-teal-500",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-slate-900/80 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateY: 0 }
                  : { opacity: 0, y: 100, rotateY: -30 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 relative overflow-hidden group">
                {/* Enhanced gradient overlay for dark mode */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-400 transition-colors bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                        <CalendarDays className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <ul className="space-y-2">
                    {project.achievements
                      .slice(0, 3)
                      .map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            delay: index * 0.2 + achIndex * 0.1 + 0.5,
                          }}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-purple-400 transition-colors" />
                          <span className="text-sm text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                  </ul>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.2 + techIndex * 0.1 + 1,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-blue-500/20 text-blue-300 border-blue-400/30"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: index * 0.2 + 1.2 }}
                      className="flex gap-3"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 bg-transparent hover:bg-blue-500/10 border-blue-500/30 text-gray-300 hover:text-blue-400 hover:border-blue-400/50"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
