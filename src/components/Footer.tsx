
import React from 'react';
import { Mail, Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

/**
 * Footer component
 * 
 * This component displays the footer with copyright information and links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground dark:from-primary dark:to-purple-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-serif text-xl">Baibhab Sahu</p>
            <p className="text-sm text-primary-foreground/70 dark:text-gray-300">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex items-center gap-4 my-4 md:my-0">
            <a 
              href="mailto:baibhabsahu31@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-white hover:scale-110 transition-transform"
              aria-label="Email"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/Baibhab13"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-white hover:scale-110 transition-transform"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/Baibhab07"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-300 dark:hover:text-white hover:scale-110 transition-transform"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-center md:justify-end">
              &copy; {currentYear} Baibhab Sahu. All rights reserved.
            </p>
            <p className="text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <Heart size={12} className="mx-1 text-red-300" /> and modern tech
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <a 
            href="#home" 
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
