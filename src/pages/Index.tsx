
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
    document.title = "Your Name | Portfolio";
  }, []);
  
  return (
    <div className="bg-background min-h-screen">
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
