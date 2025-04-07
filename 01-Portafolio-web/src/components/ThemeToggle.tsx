// src/components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="px-4 py-2 text-right md:px-12">
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center space-x-2 rounded-xl px-4 py-2 bg-accent hover:bg-accent-hover text-sm text-(--input) transition-all duration-300"
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        <span className="inline-block min-w-[6rem] text-center">
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </span>
      </button>
    </div>
  );
};
export default ThemeToggle;
