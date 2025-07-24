"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Junior Quality Assurance Engineer",
    company: "CAMB AI",
    location: "Dubai, UAE",
    period: "12/2024 – Present",
    achievements: [
      "Performed Manual Testing on Web Applications: Conducted functional and regression testing across browsers and devices to ensure consistent user experience and interface behavior.",
      "Tested Public-Facing APIs for User Integration: Verified functionality and clarity of APIs available to external users, checking request/response accuracy, error handling, and documentation alignment.",
      "Reported and Tracked Issues Using Linear: Logged bugs with clear reproduction steps, communicated with developers for fixes, and kept issue statuses up to date in Linear for efficient team collaboration.",
    ],
    current: true,
  },
  {
    title: "Junior Frontend Developer (Internship)",
    company: "Jadwelny",
    location: "Dubai, UAE",
    period: "10/2024 – 12/2025",
    achievements: [
      "Designed UI in Figma and Built Responsive Web Pages: Created clean and user-friendly interface designs in Figma and implemented them using Next.js and Shadcn UI, ensuring responsiveness across devices.",
      "Developed Frontend Features Using Next.js and Shadcn: Built and styled reusable components, handled routing and state, and followed best practices to match the original Figma designs.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Sharjah, UAE",
    period: "11/2023 – 06/2024",
    achievements: [
      "Built Custom Banking Software Using Django and HTML: Developed a secure and functional web application tailored to a client's banking needs, including user authentication, transactions, and account management features.",
      "Developed Admin Panel Using Laravel: Created a dynamic admin dashboard for a client, enabling efficient data management, user roles, and content control through a clean and responsive interface.",
    ],
  },
  {
    title: "Backend Developer (Internship)",
    company: "Lift My Car",
    location: "Dubai, UAE",
    period: "06/2023 – 08/2023",
    achievements: [
      "Developed Backend Features Using Laravel: Built and maintained backend logic, routes, and database interactions using Laravel, contributing to scalable and maintainable server-side architecture.",
      "Collaborated Cross-Functionally to Match Design Intent: Worked closely with frontend developers and designers to ensure backend functionality aligned with UI/UX expectations and user flows.",
      "Contributed to Agile Sprint Development: Participated in a fast-paced agile environment, completing tasks in sprints, attending daily standups, and contributing to sprint planning and reviews.",
      "Solved Problems to Meet Deadlines and Budget Goals: Used creative problem-solving to address technical blockers, helping the team deliver features on schedule and within scope.",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-900/90 backdrop-blur-sm"
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
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10 hidden lg:block shadow-lg shadow-blue-500/50" />

                <Card
                  className={`ml-0 lg:ml-16 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 ${
                    exp.current ? "ring-2 ring-blue-500/30" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <span className="font-semibold text-blue-400">
                            {exp.company}
                          </span>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {exp.current && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: index * 0.2 + 0.5,
                            type: "spring",
                          }}
                        >
                          <Badge
                            variant="default"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
                          >
                            Current
                          </Badge>
                        </motion.div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{
                            delay: index * 0.2 + achIndex * 0.1 + 0.3,
                          }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-purple-400 transition-colors" />
                          <span className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
