"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 px-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="space-y-6">
                  <motion.p className="text-lg leading-relaxed text-gray-300" variants={itemVariants}>
                    I am extremely capable and passionate towards the work I do, I possess exquisite communication
                    skills and value proper work ethics. Furthermore, I am a person that strives to experience new things
                    and to perfect said experience.
                  </motion.p>
                  <motion.p className="text-lg leading-relaxed text-gray-300" variants={itemVariants}>
                    Being able to easily conceptualize ideas and statements are other prominent qualities that I
                    consider as one of my best strengths that I can easily apply toward any task given.
                  </motion.p>
                  <motion.div className="flex flex-wrap gap-2 pt-4" variants={itemVariants}>
                    {["Full-Stack Developer", "QA Engineer", "Problem Solver"].map((badge, index) => (
                      <motion.div
                        key={badge}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {badge}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="p-6 bg-gray-800/60 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: MapPin, text: "Sharjah, UAE" },
                      { icon: Mail, text: "josh.joshua.almeida@gmail.com" },
                      { icon: Phone, text: "+971 58 839 0134" },
                    ].map(({ icon: Icon, text }, index) => (
                      <motion.div
                        key={text}
                        className="flex items-center gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                          <Icon className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 group-hover:text-blue-400 transition-colors">{text}</span>
                      </motion.div>
                    ))}

                    <motion.div
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <Github className="w-4 h-4 text-blue-400" />
                      </div>
                      <a
                        href="https://github.com/Quadraplex214"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/Quadraplex214
                      </a>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.6, duration: 0.5 }}
                    >
                      <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-400" />
                      </div>
                      <a
                        href="https://linkedin.com/in/joshua-almeida-a203112a0"
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn Profile
                      </a>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
