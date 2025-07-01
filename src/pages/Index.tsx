
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight, Navigation, Clock, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import TimeThemeToggle from '../components/TimeThemeToggle';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const { theme, isTransitioning } = useTimeBasedTheme();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'day' ? 'bg-white text-black' : 'bg-black text-white'} ${isTransitioning ? 'opacity-95' : 'opacity-100'} transition-all duration-1000`}>
      <Navbar />
      <TimeThemeToggle />
      
      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight ${theme === 'day' ? 'text-black' : 'text-white'}`}>
            Transport.
          </h1>
          <p className={`text-xl md:text-2xl font-light mb-12 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
            The best way to navigate the city you love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              to="/nearby-stops"
              className={`px-8 py-3 rounded-full font-medium transition-all duration-200 ${
                theme === 'day' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Find Stops
            </Link>
            
            <Link
              to="/trip-planner"
              className={`px-8 py-3 rounded-full font-medium border transition-all duration-200 ${
                theme === 'day' 
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                  : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Plan Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Apple Product Style */}
      <section 
        ref={addToRefs}
        className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-16 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Smart Location */}
            <div className={`text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
              theme === 'day' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'day' ? 'bg-blue-100' : 'bg-blue-900'
              }`}>
                <MapPin className={`h-8 w-8 ${theme === 'day' ? 'text-blue-600' : 'text-blue-400'}`} />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                Smart Location
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                Automatically discover nearby stops with precise tracking
              </p>
              <Link 
                to="/nearby-stops"
                className={`inline-flex items-center mt-4 text-sm font-medium ${
                  theme === 'day' ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
                }`}
              >
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Route Planning */}
            <div className={`text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
              theme === 'day' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'day' ? 'bg-green-100' : 'bg-green-900'
              }`}>
                <Navigation className={`h-8 w-8 ${theme === 'day' ? 'text-green-600' : 'text-green-400'}`} />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                Route Planning
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                Get optimized routes with real-time updates
              </p>
              <Link 
                to="/trip-planner"
                className={`inline-flex items-center mt-4 text-sm font-medium ${
                  theme === 'day' ? 'text-green-600 hover:text-green-700' : 'text-green-400 hover:text-green-300'
                }`}
              >
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Real-time */}
            <div className={`text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
              theme === 'day' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'day' ? 'bg-orange-100' : 'bg-orange-900'
              }`}>
                <Clock className={`h-8 w-8 ${theme === 'day' ? 'text-orange-600' : 'text-orange-400'}`} />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                Live Updates
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                Real-time arrival predictions and service alerts
              </p>
              <div className={`inline-flex items-center mt-4 text-sm font-medium ${
                theme === 'day' ? 'text-orange-600' : 'text-orange-400'
              }`}>
                Coming soon
              </div>
            </div>

            {/* Reliability */}
            <div className={`text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
              theme === 'day' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-900 hover:bg-gray-800'
            }`}>
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                theme === 'day' ? 'bg-purple-100' : 'bg-purple-900'
              }`}>
                <Shield className={`h-8 w-8 ${theme === 'day' ? 'text-purple-600' : 'text-purple-400'}`} />
              </div>
              <h3 className={`text-xl font-medium mb-3 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
                Reliable
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
                Accurate information you can depend on
              </p>
              <div className={`inline-flex items-center mt-4 text-sm font-medium ${
                theme === 'day' ? 'text-purple-600' : 'text-purple-400'
              }`}>
                Always available
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section 
        ref={addToRefs}
        className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-16 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-light mb-6 ${theme === 'day' ? 'text-black' : 'text-white'}`}>
            Ready to get started?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'day' ? 'text-gray-600' : 'text-gray-400'}`}>
            Discover the easiest way to navigate your city.
          </p>
          
          <Link
            to="/nearby-stops"
            className={`inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-200 ${
              theme === 'day' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            Get started today <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${
        theme === 'day' ? 'border-gray-200' : 'border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`text-sm ${theme === 'day' ? 'text-gray-500' : 'text-gray-400'}`}>
            © 2024 Smart Transport. Made with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
