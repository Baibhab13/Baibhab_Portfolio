
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
 * 
 * To customize this portfolio:
 * 1. Edit the content in each component (Hero.tsx, About.tsx, etc.)
 * 2. Update the profile image in Hero.tsx
 * 3. Change the project details in Projects.tsx
 * 4. Update contact information in Contact.tsx
 * 5. Customize colors in index.css and tailwind.config.ts
 */
const Index = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Baibhab Sahu | Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 dark:text-gray-100 relative">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
