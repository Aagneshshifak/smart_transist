
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = false, onClick }: CardProps) => {
  return (
    <div
      className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-6 transition-all duration-300 ease-out ${
        hover 
          ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer hover:bg-white/95 dark:hover:bg-gray-900/95 hover:border-blue-200/50 dark:hover:border-blue-500/50' 
          : ''
      } ${className}`}
      onClick={onClick}
      style={{
        backgroundImage: hover 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
          : undefined
      }}
    >
      {children}
    </div>
  );
};

export default Card;
