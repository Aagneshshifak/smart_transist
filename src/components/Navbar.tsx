
import { Link, useLocation } from 'react-router-dom';
import { Bus, MapPin, Map } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Bus },
    { path: '/nearby-stops', label: 'Nearby', icon: MapPin },
    { path: '/trip-planner', label: 'Plan Trip', icon: Map },
  ];

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Smart Transit</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-400 bg-gray-800'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-700">
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex justify-around flex-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center py-2 px-3 text-xs font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
