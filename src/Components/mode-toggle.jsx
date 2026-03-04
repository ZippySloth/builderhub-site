import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-primary/10 transition"
    >
      {isDarkMode ? (
        <Moon className="h-6 w-6 text-muted-foreground" />
      ) : (
        <Sun className="h-6 w-6 text-muted-foreground" />
      )}
    </button>
  );
};

export default ModeToggle;
