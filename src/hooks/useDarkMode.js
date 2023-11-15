// useDarkMode.js
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage or default to light mode
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Update localStorage when the theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    // You can also apply the theme class to the entire document here
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
