"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Heart, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface GanttTask {
  task: string;
  start: number;
  end: number;
}

interface TitleCardProps {
  title: string;
  tools?: string;
  language?: string;
  duration?: string;
  gantt?: GanttTask[];
  buildSteps?: string[];
  onNext?: () => void;
}

const TitleCard = ({
  title,
  tools,
  language,
  duration,
  gantt,
  buildSteps,
  onNext,
}: TitleCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    toast.success("Title copied to clipboard!");
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <div className="flex justify-center items-start min-h-screen px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-2xl p-8 border border-purple-200 max-w-md w-full text-center"
      >
        <h3 className="text-3xl font-extrabold text-purple-700 mb-6">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          {tools && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Tools:</span> {tools}
            </p>
          )}
          {language && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Language:</span> {language}
            </p>
          )}
          {duration && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Duration:</span> {duration} weeks
            </p>
          )}
        </div>

        {gantt && (
          <div className="my-4 text-left">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Gantt Chart:
            </h4>
            <div className="space-y-1">
              {gantt.map((task, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-xs"
                >
                  <span className="text-gray-600">{task.task}</span>
                  <div className="w-2/5 bg-purple-200 h-2 rounded-full relative">
                    <div
                      className="bg-purple-500 h-2 rounded-full absolute left-0"
                      style={{
                        width: `${((task.end - task.start + 1) / 12) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-gray-600 ml-2">
                    {task.start}-{task.end} wk
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {buildSteps && (
          <div className="my-4 text-left">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              How to Build:
            </h4>
            <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
              {buildSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <div className="flex gap-3 justify-center mb-4">
          <Button
            onClick={handleCopy}
            variant="default"
            size="sm"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md"
          >
            <Copy className="w-4 h-4" /> Copy
          </Button>
          <Button
            onClick={handleFavorite}
            variant="outline"
            size="sm"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border-purple-500 ${
              isFavorite
                ? "bg-purple-100 text-purple-700 border-0"
                : "text-purple-600"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>

        {onNext && (
          <Button
            onClick={onNext}
            variant="secondary"
            size="sm"
            className="mt-2 flex items-center gap-2 mx-auto px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            <RefreshCw className="w-4 h-4" /> Next
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default TitleCard;
