// src/components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the user has a preference stored in localStorage or uses system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return !prev;
    });
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full border-2 border-blue-500">
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
