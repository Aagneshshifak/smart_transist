
import { useState, useEffect } from 'react';

export type TimeTheme = 'day' | 'night';

export const useTimeBasedTheme = () => {
  const [timeTheme, setTimeTheme] = useState<TimeTheme>('night');
  const [manualOverride, setManualOverride] = useState<TimeTheme | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      const hour = now.getHours();
      const isDayTime = hour >= 6 && hour < 18;
      const newTheme = isDayTime ? 'day' : 'night';
      
      if (newTheme !== timeTheme) {
        setIsTransitioning(true);
        setTimeout(() => {
          setTimeTheme(newTheme);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 50);
      } else {
        setTimeTheme(newTheme);
      }
    };

    // Initial check
    updateTheme();

    // Update every minute
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, [timeTheme]);

  const toggleTheme = () => {
    const newTheme = (manualOverride || timeTheme) === 'day' ? 'night' : 'day';
    setIsTransitioning(true);
    setTimeout(() => {
      setManualOverride(newTheme);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 50);
  };

  const currentTheme = manualOverride || timeTheme;

  return { 
    theme: currentTheme, 
    toggleTheme, 
    isManualOverride: !!manualOverride,
    isTransitioning 
  };
};
