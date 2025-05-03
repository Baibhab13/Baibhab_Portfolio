
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
              <div className="aspect-square overflow-hidden rounded-3xl border-4 border-white/60 shadow-xl dark:border-gray-700/60 group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-purple-400/20 dark:from-primary/30 dark:to-purple-500/30 backdrop-blur-sm"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-7/12 lg:w-8/12 text-center md:text-left animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-lg md:text-xl font-medium text-muted-foreground mb-3 dark:text-gray-300">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-4 gradient-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">Baibhab Sahu</h1>
            <h3 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 dark:text-gray-300">Computer Science Engineering Student</h3>
            <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-8 text-muted-foreground dark:text-gray-300">
              I'm a passionate developer experienced in Android app development and machine learning projects. 
              Currently pursuing BTech in Computer Science at PMEC Berhampur.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <a 
                href="mailto:baibhabsahu31@gmail.com"
                className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-colors dark:hover:bg-primary/20 hover:scale-110 transform-gpu duration-300"
                aria-label="Email"
                title="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com/Baibhab13"
                className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-colors dark:hover:bg-primary/20 hover:scale-110 transform-gpu duration-300"
                aria-label="GitHub"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/Baibhab07"
                className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-primary/20 transition-colors dark:hover:bg-primary/20 hover:scale-110 transform-gpu duration-300"
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
              className="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-700 text-white rounded-lg hover:shadow-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-full"
        onClick={scrollToAbout}
      >
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
