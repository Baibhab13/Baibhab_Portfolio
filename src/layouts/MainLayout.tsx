
import React, { useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * Main Layout Component
 * 
 * This component provides the standard layout with navbar and footer
 * that wraps around the main content of the pages.
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children, title = "Baibhab Sahu | Portfolio" }) => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 dark:text-gray-100 relative overflow-x-hidden">
      {/* Add subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
