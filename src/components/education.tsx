"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering (B.E), Software Engineering",
    institution: "University Of Bolton",
    location: "United Arab Emirates",
    period: "2021 – 2024",
    type: "University",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    degree: "High School",
    institution: "Our Own English High School, Sharjah (Boys Branch)",
    location: "United Arab Emirates",
    period: "2007 – 2020",
    type: "High School",
    gradient: "from-green-500 to-teal-500",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="py-20 px-4 bg-slate-900/90 backdrop-blur-sm"
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
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 100, rotateX: -30 }
              }
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="perspective-1000"
            >
              <Card className="transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 relative overflow-hidden group">
                {/* Enhanced gradient overlay for dark mode */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        delay: index * 0.3 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`p-3 bg-gradient-to-r ${edu.gradient} rounded-lg shadow-lg`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {edu.degree}
                      </CardTitle>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ delay: index * 0.3 + 0.5 }}
                        className="text-blue-400 font-semibold mb-2"
                      >
                        {edu.institution}
                      </motion.p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{ delay: index * 0.3 + 0.6 }}
                          className="flex items-center gap-1"
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isInView
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{ delay: index * 0.3 + 0.7 }}
                          className="flex items-center gap-1"
                        >
                          <CalendarDays className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
