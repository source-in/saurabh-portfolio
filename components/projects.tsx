"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowRightIcon,
  ChevronUpIcon,
} from "lucide-react";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "FinSense",
      description:
        "A finance management platform using Generative AI to provide insights on savings, expenses, and investments.",
      tags: ["Next.js", "Supabase", "Generative AI", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/finsense",
    },
    {
      id: 2,
      title: "QueryGen",
      description:
        "A model built using Meta-Llama-3.1-8B and Streamlit to generate accurate SQL queries from natural language questions.",
      tags: ["Meta-Llama-3.1-8B", "Streamlit", "SQL", "Machine Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/text2sql_llama",
    },
    {
      id: 3,
      title: "Blogify",
      description:
        "A blogging platform for students with features like real-time commenting, user profiles, and content management.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/college-insights-frontend",
    },
    {
      id: 4,
      title: "CellScan",
      description:
        "A CNN-based model using ResNet50 with Streamlit integration for real-time malaria detection.",
      tags: ["Python", "ResNet50", "Streamlit", "Deep Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/malaria-cell-detection",
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in software development.
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
                className="relative group"
              >
                <Card
                  className="h-full relative overflow-hidden border-0 hover:shadow-lg transition-shadow duration-300 backdrop-blur-md bg-white/30 dark:bg-black/30 flex flex-col space-between"
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--x", `${x}px`);
                    card.style.setProperty("--y", `${y}px`);
                  }}
                  style={{
                    background: `
                      radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
                      var(--glow-color, rgba(200, 200, 200, 0.3)), 
                      transparent)
                    `,
                  }}
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-auto">
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
                  <CardFooter className="flex mt-auto justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="rounded-full"
            onClick={toggleProjects}
          >
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
  );
}
