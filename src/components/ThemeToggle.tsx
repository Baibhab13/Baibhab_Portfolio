
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preferences or system settings
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && darkModeMediaQuery.matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2 glass-effect px-1.5 sm:px-2 py-1 rounded-full">
      <Sun size={16} className={`${isDarkMode ? 'text-gray-500' : 'text-yellow-500'} transition-all duration-300 sm:size-18`} />
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-indigo-700 data-[state=unchecked]:bg-amber-400 h-5 w-9 sm:h-6 sm:w-11"
      />
      <Moon size={16} className={`${isDarkMode ? 'text-indigo-400' : 'text-gray-400'} transition-all duration-300 sm:size-18`} />
    </div>
  );
};

export default ThemeToggle;
