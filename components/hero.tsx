"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import BackgroundPaths from "@/components/kokonutui/background-paths";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <BackgroundPaths
        title="Saurabh Sawant"
        subtitle="Software Engineer specializing in modern web technologies"
        subSubtitle={[
          "Passionate about building scalable, user-centric web applications powered by generative AI.",
          "Experienced in full-stack development with a focus on React, Node.js, and cloud technologies.",
        ]}
        showButtons={true}
      />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
            onClick={() => scrollToSection("projects")}
          >
            <ArrowDownIcon className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
