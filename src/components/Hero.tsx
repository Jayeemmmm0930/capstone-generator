import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToGenerator = () => {
    document.getElementById("generate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-animated opacity-10" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-4"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Generator</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Generate Amazing
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Capstone Titles
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into unique project titles in seconds with the power of AI
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToGenerator}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Now
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-xl"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
