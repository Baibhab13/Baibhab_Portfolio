
import React from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

/**
 * Hero section component
 * 
 * This component renders the main hero section with a profile image,
 * name, job title and a brief introduction.
 */
const Hero = () => {
  // Scroll to the about section when the arrow is clicked
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Profile Image */}
          <div className="w-full md:w-5/12 lg:w-4/12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl border-4 border-white shadow-xl dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-secondary dark:bg-gray-800"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-7/12 lg:w-8/12 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-3 dark:text-gray-300">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4">Baibhab Sahu</h1>
            <h3 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 dark:text-gray-300">Computer Science Engineering Student</h3>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-8">
              I'm a passionate developer experienced in Android app development and machine learning projects. 
              Currently pursuing BTech in Computer Science at PMEC Berhampur.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <a 
                href="mailto:baibhabsahu31@gmail.com"
                className="p-3 bg-secondary rounded-full hover:bg-secondary/70 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="Email"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Baibhab13"
                className="p-3 bg-secondary rounded-full hover:bg-secondary/70 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/Baibhab07"
                className="p-3 bg-secondary rounded-full hover:bg-secondary/70 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
                aria-label="LinkedIn"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Call to action button */}
            <button 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
