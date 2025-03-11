"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDownIcon, ArrowRightIcon } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=500" alt="Alex Morgan" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">About Me</h2>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              I'm a passionate software engineer with over 5 years of experience building web and mobile applications. I
              specialize in modern JavaScript frameworks like React, Next.js, and Node.js.
            </p>

            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
              My journey in software development began at the University of Technology, where I earned my Bachelor's
              degree in Computer Science. Since then, I've worked with startups and established companies to deliver
              high-quality, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full">
                <FileDownIcon className="mr-2 h-4 w-4" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Let's Talk
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

