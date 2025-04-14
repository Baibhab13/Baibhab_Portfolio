
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
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))] dark:from-[hsl(var(--hero-gradient-from))] dark:to-[hsl(var(--hero-gradient-to))] dark:text-gray-100">
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
