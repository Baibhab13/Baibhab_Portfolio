
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

/**
 * Navigation component with responsive mobile menu
 * 
 * This component renders a fixed navbar at the top of the page with
 * links to different sections of the portfolio.
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Special handling for education and experience - they're tabs within about section
    if (sectionId === 'education' || sectionId === 'experience') {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
        // Small delay to ensure scroll completes before triggering tab
        setTimeout(() => {
          const tabTrigger = document.querySelector(`[value="${sectionId}"]`) as HTMLElement;
          if (tabTrigger) {
            tabTrigger.click();
          }
        }, 500);
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/70 backdrop-blur-md shadow-md dark:bg-gray-900/70' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="text-xl sm:text-2xl font-serif font-semibold cursor-pointer transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="gradient-text bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">Baibhab Sahu</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-medium text-sm hover:text-primary capitalize relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              className="text-gray-500 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md dark:bg-gray-900/95 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="font-medium text-sm hover:text-primary capitalize py-2 border-b border-gray-100 dark:border-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
