import React, { useEffect, useState } from 'react';
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";

export default function DarkModeToggle() {
  // Set dark mode as default, but check localStorage if previously saved
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative inline-flex items-center w-14 h-8 rounded-full transition-colors duration-300
        ${isDark ? 'bg-yellow-500' : 'bg-gray-700'} focus:outline-none sm:w-12 sm:h-7`}
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 sm:w-5 sm:h-5 rounded-full transition-transform duration-300 transform flex items-center justify-center
          ${isDark ? 'translate-x-6 sm:translate-x-5 bg-gray-700' : 'translate-x-0 bg-gray-200'}`}
      >
        <img
          src={isDark ? light : dark}
          alt="Theme Icon"
          className="w-5 h-5 sm:w-4 sm:h-4"
        />
      </span>
    </button>
  );
}
