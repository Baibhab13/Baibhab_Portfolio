
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

/**
 * Footer component
 * 
 * This component displays the footer with copyright information and links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-serif text-xl">Baibhab Sahu</p>
            <p className="text-sm text-primary-foreground/70 dark:text-gray-400">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex items-center gap-4 my-4 md:my-0">
            <a 
              href="mailto:baibhabsahu31@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="Email"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/Baibhab13"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/Baibhab07"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors dark:text-gray-400 dark:hover:text-white"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <p className="text-sm">
            &copy; {currentYear} Baibhab Sahu. All rights reserved.
          </p>
        </div>
        
        <div className="flex justify-center mt-4">
          <a 
            href="#home" 
            className="text-sm hover:text-primary-foreground/80 transition-colors dark:hover:text-gray-300"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
