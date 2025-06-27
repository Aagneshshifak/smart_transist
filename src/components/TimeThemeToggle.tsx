
import { Sun, Moon } from 'lucide-react';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const TimeThemeToggle = () => {
  const { theme, toggleTheme, isTransitioning } = useTimeBasedTheme();

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className="fixed top-6 right-6 z-50 p-4 rounded-full backdrop-blur-xl transition-all duration-700 hover:scale-110 border shadow-2xl"
      style={{
        background: theme === 'day' 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(0, 0, 0, 0.85)',
        borderColor: theme === 'day' 
          ? 'rgba(0, 0, 0, 0.1)' 
          : 'rgba(255, 255, 255, 0.3)',
        color: theme === 'day' ? '#000' : '#fff',
        boxShadow: theme === 'day' 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
          : '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
      }}
      aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} mode`}
    >
      <div className="relative w-7 h-7 flex items-center justify-center">
        <Sun 
          className={`absolute transition-all duration-700 transform ${
            theme === 'day' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
          size={28}
        />
        <Moon 
          className={`absolute transition-all duration-700 transform ${
            theme === 'night' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
          size={28}
        />
      </div>
    </button>
  );
};

export default TimeThemeToggle;
