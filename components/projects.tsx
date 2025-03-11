"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon, ChevronUpIcon } from "lucide-react"

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using WebSockets.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that helps create marketing copy and blog posts.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "OpenAI", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts and nutrition with personalized recommendations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Smart Home Dashboard",
      description: "A centralized dashboard for controlling and monitoring IoT devices in a smart home.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "MQTT", "Node-RED", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in software development.
          </p>
        </motion.div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-neutral-200 dark:border-neutral-800">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button variant="outline" className="rounded-full" onClick={toggleProjects}>
            {showAllProjects ? (
              <>
                Collapse Projects
                <ChevronUpIcon className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View All Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}

