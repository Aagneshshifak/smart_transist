
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
      className={`bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-800/50 p-6 transition-all duration-300 ease-out ${
        hover 
          ? 'hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer hover:bg-white dark:hover:bg-black hover:border-blue-200/50 dark:hover:border-blue-500/60' 
          : ''
      } ${className}`}
      onClick={onClick}
      style={{
        backgroundImage: hover 
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
          : undefined
      }}
    >
      <div className="dark:bg-gradient-to-br dark:from-black/80 dark:to-gray-900/40 dark:backdrop-blur-md dark:border dark:border-blue-500/20 dark:rounded-2xl dark:p-0 dark:-m-6 dark:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
