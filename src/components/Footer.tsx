import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Capstone Generator</h3>
            <p className="text-sm text-muted-foreground">
              Generate unique and creative project titles with the power of AI.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#generate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Generate
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Capstone Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
