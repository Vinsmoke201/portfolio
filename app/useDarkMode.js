"use client";

import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled on initial load
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes to the color scheme
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    // Add event listener for color scheme changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup event listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
