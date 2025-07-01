
import { Link, useLocation } from 'react-router-dom';
import { Bus, MapPin, Map, Info, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Bus },
    { path: '/nearby-stops', label: 'Nearby', icon: MapPin },
    { path: '/trip-planner', label: 'Plan Trip', icon: Map },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-black" />
              <span className="text-xl font-bold text-gray-900">Smart Transit</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-between items-center py-2 px-4">
          <div className="flex justify-around flex-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center py-2 px-3 text-xs font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/login"
            className="flex flex-col items-center py-2 px-3 text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            <User className="h-5 w-5 mb-1" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
