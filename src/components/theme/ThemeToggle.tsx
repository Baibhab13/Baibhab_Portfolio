
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

/**
 * Theme Toggle Component
 * 
 * This component provides a switch to toggle between light and dark modes.
 */
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
    <div className="flex items-center gap-2 glass-effect px-2 py-1 rounded-full">
      <Sun size={18} className={`${isDarkMode ? 'text-gray-500' : 'text-yellow-500'} transition-all duration-300`} />
      <Switch 
        checked={isDarkMode} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-indigo-700 data-[state=unchecked]:bg-amber-400"
      />
      <Moon size={18} className={`${isDarkMode ? 'text-indigo-400' : 'text-gray-400'} transition-all duration-300`} />
    </div>
  );
};

export default ThemeToggle;
