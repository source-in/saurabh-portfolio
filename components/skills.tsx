"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2Icon,
  ServerIcon,
  DatabaseIcon,
  PaletteIcon,
  BarChart3Icon,
  CloudIcon,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: (
        <Code2Icon className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
      ),
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "HTML/CSS",
        "JavaScript",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: (
        <ServerIcon className="h-8 w-8 mb-4 text-green-600 dark:text-green-400" />
      ),
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      id: 3,
      title: "Database",
      icon: (
        <DatabaseIcon className="h-8 w-8 mb-4 text-purple-600 dark:text-purple-400" />
      ),
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "Prisma",
        "SQL",
      ],
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: (
        <PaletteIcon className="h-8 w-8 mb-4 text-orange-600 dark:text-orange-400" />
      ),
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
        "User Research",
      ],
    },
    {
      id: 5,
      title: "DevOps & Tools",
      icon: (
        <CloudIcon className="h-8 w-8 mb-4 text-teal-600 dark:text-teal-400" />
      ),
      skills: [
        "Git",
        "Docker",
        "CI/CD",
        "AWS",
        "Vercel",
        "GitHub Actions",
        "Kubernetes",
      ],
    },
    {
      id: 6,
      title: "Data & Analytics",
      icon: (
        <BarChart3Icon className="h-8 w-8 mb-4 text-red-600 dark:text-red-400" />
      ),
      skills: [
        "Data Visualization",
        "D3.js",
        "Chart.js",
        "Google Analytics",
        "A/B Testing",
        "SEO",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career as a
            software engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="h-full relative overflow-hidden border-0 hover:shadow-lg transition-shadow duration-300 backdrop-blur-md bg-white/30 dark:bg-black/30"
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
                {" "}
                <CardContent className="p-6 text-center">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-neutral-200 dark:bg-neutral-800 
                                  text-neutral-800 dark:text-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
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
