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
  ImageIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const projects = [
    {
      id: 1,
      title: "FinSense",
      description:
        "A finance management platform using Generative AI to provide insights on savings, expenses, and investments.",
      tags: ["Next.js", "Supabase", "Generative AI", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/finsense",
      screenshots: ["/screenshots/finsense/fs1.png"],
    },
    {
      id: 2,
      title: "QueryGen",
      description:
        "An AI-powered web app that lets users connect databases and get answers by asking questions in plain English. Supports multiple databse connections (PostgreSQL, MySQL, SQlite) and CSV uploads for easy data access.",
      tags: ["Next.js", "FastAPI", "Gemini", "SQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/querygen",
      screenshots: [
        "/screenshots/querygen/qg1.png",
        "/screenshots/querygen/qg2.png",
        "/screenshots/querygen/qg3.png",
        "/screenshots/querygen/qg4.png",
        "/screenshots/querygen/qg5.png",
        "/screenshots/querygen/qg6.png",
        "/screenshots/querygen/qg7.png",
      ],
    },
    {
      id: 3,
      title: "DocuChat AI",
      description:
        "An AI-powered document assistant that allows users to upload PDFs and ask questions about the content using natural language. Built with Langchain and OpenAI APIs.",
      tags: ["Next.js", "Langchain", "OpenAI", "Supabase"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/docuchat",
      screenshots: [
        "/screenshots/chatbot/chatbot1.png",
        "/screenshots/chatbot/chatbot2.png",
        "/screenshots/chatbot/chatbot3.png",
      ],
    },
    {
      id: 4,
      title: "CellScan",
      description:
        "A CNN-based model using ResNet50 with Streamlit integration for real-time malaria detection.",
      tags: ["Python", "ResNet50", "Streamlit", "Deep Learning"],
      liveUrl: "#",
      githubUrl: "https://github.com/source-in/malaria-cell-detection",
      screenshots: [
        "/screenshots/cellscan/cs1.png",
        "/screenshots/cellscan/cs2.png",
      ],
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

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
                    <CardTitle className="flex items-center gap-2">
                      {project.title}
                      {project.title === "FinSense" && (
                        <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                          under dev
                        </span>
                      )}
                    </CardTitle>
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
                  <CardFooter className="flex mt-auto justify-between gap-2">
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedProject(project.id);
                        setCurrentIndex(0);
                      }}
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Screens
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
            onClick={() => setShowAllProjects(!showAllProjects)}
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

      {/* Dialog for Screenshots */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-6xl p-6">
          <DialogHeader>
            <DialogTitle>
              {projects.find((p) => p.id === selectedProject)?.title}{" "}
              Screenshots
            </DialogTitle>
          </DialogHeader>

          {selectedProject !== null && (
            <div className="relative mt-4 flex items-center justify-center">
              <img
                src={
                  projects.find((p) => p.id === selectedProject)?.screenshots[
                    currentIndex
                  ]
                }
                alt={`Screenshot ${currentIndex + 1}`}
                className="rounded-xl w-full max-h-[80vh] object-contain shadow-lg transition-all duration-300"
              />

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0
                      ? projects.find((p) => p.id === selectedProject)!
                          .screenshots.length - 1
                      : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev ===
                    projects.find((p) => p.id === selectedProject)!.screenshots
                      .length -
                      1
                      ? 0
                      : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
