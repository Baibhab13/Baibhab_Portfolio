
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Baibhab Sahu | Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 dark:text-gray-100 bg-dot-pattern">
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
