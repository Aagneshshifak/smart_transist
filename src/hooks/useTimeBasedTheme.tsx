
import { useState, useEffect } from 'react';

export type TimeTheme = 'day' | 'night';

export const useTimeBasedTheme = () => {
  const [timeTheme, setTimeTheme] = useState<TimeTheme>('night');
  const [manualOverride, setManualOverride] = useState<TimeTheme | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      const hour = now.getHours();
      const isDayTime = hour >= 6 && hour < 18;
      setTimeTheme(isDayTime ? 'day' : 'night');
    };

    // Initial check
    updateTheme();

    // Update every minute
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = (manualOverride || timeTheme) === 'day' ? 'night' : 'day';
    setManualOverride(newTheme);
  };

  const currentTheme = manualOverride || timeTheme;

  return { theme: currentTheme, toggleTheme, isManualOverride: !!manualOverride };
};
