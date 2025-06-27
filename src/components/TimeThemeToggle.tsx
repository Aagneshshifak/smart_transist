
import { Sun, Moon } from 'lucide-react';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const TimeThemeToggle = () => {
  const { theme, toggleTheme } = useTimeBasedTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-500 hover:scale-110 border"
      style={{
        background: theme === 'day' 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(0, 0, 0, 0.7)',
        borderColor: theme === 'day' 
          ? 'rgba(0, 0, 0, 0.1)' 
          : 'rgba(255, 255, 255, 0.2)',
        color: theme === 'day' ? '#000' : '#fff'
      }}
      aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun 
          className={`absolute transition-all duration-500 transform ${
            theme === 'day' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
          size={24}
        />
        <Moon 
          className={`absolute transition-all duration-500 transform ${
            theme === 'night' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
          size={24}
        />
      </div>
    </button>
  );
};

export default TimeThemeToggle;
