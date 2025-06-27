
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
      className={`bg-white dark:bg-gray-900 dark:bg-[#1a1a2e] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${
        hover ? 'hover:shadow-md hover:shadow-blue-500/20 transition-shadow cursor-pointer' : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
