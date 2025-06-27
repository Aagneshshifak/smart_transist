
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';
import TimeThemeToggle from '../components/TimeThemeToggle';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTimeBasedTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Dynamic styles based on time theme
  const getThemeStyles = () => {
    if (theme === 'day') {
      return {
        heroBackground: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(135, 206, 235, 0.5)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=4928&auto=format&fit=crop')`,
        textColor: 'text-gray-900',
        headingColor: 'text-gray-900',
        subTextColor: 'text-gray-700',
        buttonPrimary: 'from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 shadow-blue-500/25',
        buttonSecondary: 'border-gray-400 hover:border-blue-500 text-gray-700 hover:text-blue-500 shadow-blue-500/10',
        gradientText: 'from-blue-600 to-sky-600'
      };
    } else {
      return {
        heroBackground: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`,
        textColor: 'text-white',
        headingColor: 'text-white',
        subTextColor: 'text-gray-300',  
        buttonPrimary: 'from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-blue-500/25',
        buttonSecondary: 'border-gray-600 hover:border-blue-400 text-white hover:text-blue-400 shadow-blue-500/10',
        gradientText: 'from-blue-400 to-purple-500'
      };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen overflow-x-hidden transition-all duration-1000 ${theme === 'day' ? 'bg-sky-50' : 'bg-black text-white'}`}>
      <TimeThemeToggle />
      
      {/* 404 Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: styles.heroBackground }}
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className={`text-8xl md:text-9xl lg:text-[12rem] font-bold mb-6 leading-tight ${styles.headingColor} opacity-90`}>
              404
            </h1>
            
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${styles.headingColor}`}>
              <span className={`bg-gradient-to-r ${styles.gradientText} bg-clip-text text-transparent`}>
                Page Not Found
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed ${styles.subTextColor}`}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/"
                className={`group relative overflow-hidden bg-gradient-to-r ${styles.buttonPrimary} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl`}
              >
                <span className="relative z-10">Go Home</span>
                <Home className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200 relative z-10" />
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className={`group border-2 ${styles.buttonSecondary} px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm`}
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse ${theme === 'day' ? 'bg-blue-400/60' : 'bg-blue-500/60'}`}></div>
          <div className={`absolute top-3/4 right-1/3 w-1 h-1 rounded-full animate-pulse ${theme === 'day' ? 'bg-sky-400/60' : 'bg-purple-500/60'}`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'day' ? 'bg-blue-500/60' : 'bg-blue-400/60'}`} style={{ animationDelay: '2s' }}></div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
