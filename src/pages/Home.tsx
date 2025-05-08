
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

/**
 * Home/Portfolio Page
 * 
 * This is the main homepage of the portfolio website that combines
 * all the different sections using the MainLayout.
 */
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
};

export default Home;
