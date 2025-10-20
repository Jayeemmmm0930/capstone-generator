"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GeneratorForm from "@/components/GeneratorForm";
import TitleCard from "@/components/TitleCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface GanttTask {
  task: string;
  start: number;
  end: number;
}

interface GeneratedProject {
  title: string;
  tools?: string;
  language?: string;
  duration?: string;
  gantt?: GanttTask[];
  buildSteps?: string[];
}

const Index = () => {
  const [generatedProject, setGeneratedProject] =
    useState<GeneratedProject | null>(null);

  const handleGenerate = (project: GeneratedProject) => {
    setGeneratedProject(project);
    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <GeneratorForm onGenerate={handleGenerate} />

      {generatedProject && (
        <section
          id="results"
          className="py-20 px-4 bg-accent/20 flex justify-center"
        >
          <div className="max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Generated Project
              </h2>
              <p className="text-xl text-muted-foreground">
                Review the project details below
              </p>
            </motion.div>

            <div className="flex justify-center">
              <TitleCard
                title={generatedProject.title}
                tools={generatedProject.tools}
                language={generatedProject.language}
                duration={generatedProject.duration}
                gantt={generatedProject.gantt}
                buildSteps={generatedProject.buildSteps}
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
