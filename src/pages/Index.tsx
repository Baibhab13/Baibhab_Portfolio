
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Main Portfolio Page
 * 
 * This is the main page of the portfolio website that combines
 * all the different sections. Each section is a separate component
 * for better organization and maintenance.
 */
const Index = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Baibhab Sahu | Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 dark:text-gray-100 relative overflow-x-hidden w-full">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
