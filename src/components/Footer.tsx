
import React from 'react';

/**
 * Footer component
 * 
 * This component displays the footer with copyright information and links.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-serif text-xl">Your Name</p>
            <p className="text-sm text-primary-foreground/70">Web Developer & Designer</p>
          </div>
          
          <p className="text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-sm hover:text-primary-foreground/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
