
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight, Navigation, Clock, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

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
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight text-black">
            Transport.
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-600">
            The best way to navigate the city you love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              to="/nearby-stops"
              className="px-8 py-3 rounded-full font-medium transition-all duration-200 bg-black text-white hover:bg-gray-800"
            >
              Find Stops
            </Link>
            
            <Link
              to="/trip-planner"
              className="px-8 py-3 rounded-full font-medium border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
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
            <div className="text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-gray-50 hover:bg-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-200">
                <MapPin className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">
                Smart Location
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Automatically discover nearby stops with precise tracking
              </p>
              <Link 
                to="/nearby-stops"
                className="inline-flex items-center mt-4 text-sm font-medium text-black hover:text-gray-700"
              >
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Route Planning */}
            <div className="text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-gray-50 hover:bg-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-200">
                <Navigation className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">
                Route Planning
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Get optimized routes with real-time updates
              </p>
              <Link 
                to="/trip-planner"
                className="inline-flex items-center mt-4 text-sm font-medium text-black hover:text-gray-700"
              >
                Learn more <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Real-time */}
            <div className="text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-gray-50 hover:bg-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-200">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">
                Live Updates
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Real-time arrival predictions and service alerts
              </p>
              <div className="inline-flex items-center mt-4 text-sm font-medium text-black">
                Coming soon
              </div>
            </div>

            {/* Reliability */}
            <div className="text-center p-8 rounded-3xl transition-all duration-300 hover:scale-105 bg-gray-50 hover:bg-gray-100">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-200">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">
                Reliable
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Accurate information you can depend on
              </p>
              <div className="inline-flex items-center mt-4 text-sm font-medium text-black">
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
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-black">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Discover the easiest way to navigate your city.
          </p>
          
          <Link
            to="/nearby-stops"
            className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-200 bg-black text-white hover:bg-gray-800"
          >
            Get started today <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2024 Smart Transport. Made with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
