
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight, Sparkles, Navigation, Clock, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`
          }}
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-white">Smart Public</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Transport
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Navigate your city with confidence. Experience the future of public transportation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/nearby-stops"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Find Nearby Stops</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/trip-planner"
                className="group border-2 border-gray-600 hover:border-blue-400 text-white hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
              >
                <span>Plan Your Journey</span>
                <Map className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={addToRefs}
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need for seamless public transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Smart Location Detection
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Automatically discover nearby bus and train stops with precise location tracking
                </p>
                <Link 
                  to="/nearby-stops"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 mb-6 group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Navigation className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  Intelligent Route Planning
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Get optimized routes with real-time updates and alternative options
                </p>
                <Link 
                  to="/trip-planner"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Plan Trip <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Updates Section */}
      <section 
        ref={addToRefs}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Real-time</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Stay informed with live arrival times, service disruptions, and route changes. 
                Never miss your connection again.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">Live arrival predictions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">Service alerts & notifications</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <span className="text-green-400 font-medium">Bus 42 - Downtown</span>
                    <span className="text-green-300 text-sm">2 min</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <span className="text-blue-400 font-medium">Metro Line A</span>
                    <span className="text-blue-300 text-sm">5 min</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <span className="text-yellow-400 font-medium">Bus 18 - Airport</span>
                    <span className="text-yellow-300 text-sm">Delayed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section 
        ref={addToRefs}
        className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 backdrop-blur-sm">
              <Sparkles className="h-16 w-16 text-purple-400 mx-auto mb-8 animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  What's Next
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                The future of urban mobility is here. Advanced AI-powered features coming soon.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">AI Route Optimization</h3>
                  <p className="text-gray-500 text-sm">Smart routing with machine learning</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Offline Maps</h3>
                  <p className="text-gray-500 text-sm">Navigate without internet connection</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Carbon Tracking</h3>
                  <p className="text-gray-500 text-sm">Monitor your environmental impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
