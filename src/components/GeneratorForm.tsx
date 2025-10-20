"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface GeneratorFormProps {
  onGenerate: (data: any) => void;
}

const GeneratorForm = ({ onGenerate }: GeneratorFormProps) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateTitles = async () => {
    if (!keyword.trim()) {
      toast.error("Please enter a keyword or field of study");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, category }),
      });

      if (!res.ok) throw new Error("Failed to generate project");

      const data = await res.json();
      onGenerate(data);
      toast.success("Generated project successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate project. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="generate" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
            Start Generating
          </h2>
          <p className="text-xl text-gray-500">
            Enter your project field and let AI create an amazing title for you
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="keyword"
              className="text-sm font-medium text-gray-700"
            >
              Project Field or Keywords
            </label>
            <Input
              id="keyword"
              type="text"
              placeholder="e.g., Healthcare AI, E-commerce..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-12 text-base rounded-xl"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category (Optional)
            </label>
            <Select
              value={category}
              onValueChange={setCategory}
              disabled={isLoading}
            >
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-app">Mobile Application</SelectItem>
                <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="iot">Internet of Things</SelectItem>
                <SelectItem value="blockchain">Blockchain</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <motion.div
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            <Button
              onClick={generateTitles}
              disabled={isLoading}
              className="w-full h-14 text-lg rounded-xl bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Project
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeneratorForm;
