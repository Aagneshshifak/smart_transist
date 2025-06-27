
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight, Sparkles, Navigation, Clock, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import TimeThemeToggle from '../components/TimeThemeToggle';
import { useTimeBasedTheme } from '../hooks/useTimeBasedTheme';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const { theme } = useTimeBasedTheme();

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

  // Dynamic styles based on time theme
  const getThemeStyles = () => {
    if (theme === 'day') {
      return {
        heroBackground: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(135, 206, 235, 0.4)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=4928&auto=format&fit=crop')`,
        textColor: 'text-gray-900',
        headingColor: 'text-gray-900',
        subTextColor: 'text-gray-700',
        sectionBg: 'bg-gradient-to-b from-sky-100 to-blue-100',
        sectionBgAlt: 'bg-gradient-to-b from-blue-100 to-sky-50',
        cardBg: 'from-white to-blue-50 border-blue-200',
        buttonPrimary: 'from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 shadow-blue-500/25',
        buttonSecondary: 'border-gray-400 hover:border-blue-500 text-gray-700 hover:text-blue-500 shadow-blue-500/10',
        featureAccent: 'from-blue-500 to-sky-500',
        gradientText: 'from-blue-600 to-sky-600'
      };
    } else {
      return {
        heroBackground: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=3880&auto=format&fit=crop')`,
        textColor: 'text-white',
        headingColor: 'text-white',
        subTextColor: 'text-gray-300',
        sectionBg: 'bg-gradient-to-b from-black to-gray-900',
        sectionBgAlt: 'bg-gradient-to-b from-gray-900 to-black',
        cardBg: 'from-gray-900 to-black border-gray-800 hover:border-blue-500/50',
        buttonPrimary: 'from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-blue-500/25',
        buttonSecondary: 'border-gray-600 hover:border-blue-400 text-white hover:text-blue-400 shadow-blue-500/10',
        featureAccent: 'from-blue-600 to-purple-600',
        gradientText: 'from-blue-400 to-purple-500'
      };
    }
  };

  const styles = getThemeStyles();

  return (
    <div className={`min-h-screen overflow-x-hidden transition-all duration-1000 ${theme === 'day' ? 'bg-sky-50' : 'bg-black text-white'}`}>
      <Navbar />
      <TimeThemeToggle />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: styles.heroBackground }}
        />
        
        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${styles.headingColor}`}>
              <span className="block">Smart Public</span>
              <span className={`block bg-gradient-to-r ${styles.gradientText} bg-clip-text text-transparent`}>
                Transport
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${styles.subTextColor}`}>
              Navigate your city with confidence. Experience the future of public transportation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/nearby-stops"
                className={`group relative overflow-hidden bg-gradient-to-r ${styles.buttonPrimary} text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl`}
              >
                <span className="relative z-10">Find Nearby Stops</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
              </Link>
              
              <Link
                to="/trip-planner"
                className={`group border-2 ${styles.buttonSecondary} px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm`}
              >
                <span>Plan Your Journey</span>
                <Map className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${theme === 'day' ? 'border-gray-800/30' : 'border-white/30'}`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${theme === 'day' ? 'bg-gray-800/60' : 'bg-white/60'}`}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={addToRefs}
        className={`min-h-screen ${styles.sectionBg} py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.headingColor}`}>
              <span className={`bg-gradient-to-r ${styles.gradientText} bg-clip-text text-transparent`}>
                Powerful Features
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${styles.subTextColor}`}>
              Everything you need for seamless public transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`group relative overflow-hidden bg-gradient-to-br ${styles.cardBg} rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'day' ? 'from-blue-500/5 to-sky-500/5' : 'from-blue-500/5 to-purple-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${styles.featureAccent} mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300`}>
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${styles.headingColor} ${theme === 'day' ? 'group-hover:text-blue-600' : 'group-hover:text-blue-400'}`}>
                  Smart Location Detection
                </h3>
                <p className={`mb-6 leading-relaxed ${styles.subTextColor}`}>
                  Automatically discover nearby bus and train stops with precise location tracking
                </p>
                <Link 
                  to="/nearby-stops"
                  className={`inline-flex items-center font-medium group-hover:translate-x-2 transition-all duration-300 ${theme === 'day' ? 'text-blue-600 hover:text-blue-500' : 'text-blue-400 hover:text-blue-300'}`}
                >
                  Explore <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className={`group relative overflow-hidden bg-gradient-to-br ${styles.cardBg} rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'day' ? 'from-sky-500/5 to-blue-500/5' : 'from-purple-500/5 to-blue-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${theme === 'day' ? 'from-sky-600 to-blue-600' : 'from-purple-600 to-blue-600'} mb-6 group-hover:shadow-2xl transition-all duration-300`} style={{ boxShadow: theme === 'day' ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' : '0 25px 50px -12px rgba(147, 51, 234, 0.25)' }}>
                  <Navigation className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${styles.headingColor} ${theme === 'day' ? 'group-hover:text-sky-600' : 'group-hover:text-purple-400'}`}>
                  Intelligent Route Planning
                </h3>
                <p className={`mb-6 leading-relaxed ${styles.subTextColor}`}>
                  Get optimized routes with real-time updates and alternative options
                </p>
                <Link 
                  to="/trip-planner"
                  className={`inline-flex items-center font-medium group-hover:translate-x-2 transition-all duration-300 ${theme === 'day' ? 'text-sky-600 hover:text-sky-500' : 'text-purple-400 hover:text-purple-300'}`}
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
        className={`min-h-screen ${styles.sectionBgAlt} py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.headingColor}`}>
                <span>Real-time</span>
                <br />
                <span className={`bg-gradient-to-r ${theme === 'day' ? 'from-green-600 to-blue-600' : 'from-green-400 to-blue-500'} bg-clip-text text-transparent`}>
                  Intelligence
                </span>
              </h2>
              <p className={`text-xl mb-8 leading-relaxed ${styles.subTextColor}`}>
                Stay informed with live arrival times, service disruptions, and route changes. 
                Never miss your connection again.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${theme === 'day' ? 'from-green-600 to-blue-600' : 'from-green-500 to-blue-500'} flex items-center justify-center`}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-lg ${styles.subTextColor}`}>Live arrival predictions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${theme === 'day' ? 'from-blue-600 to-sky-600' : 'from-blue-500 to-purple-500'} flex items-center justify-center`}>
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <span className={`text-lg ${styles.subTextColor}`}>Service alerts & notifications</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`absolute inset-0 rounded-3xl blur-3xl ${theme === 'day' ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20' : 'bg-gradient-to-r from-green-500/20 to-blue-500/20'}`}></div>
              <div className={`relative bg-gradient-to-br ${styles.cardBg} rounded-3xl p-8 backdrop-blur-sm`}>
                <div className="space-y-4">
                  <div className={`flex items-center justify-between p-4 rounded-xl ${theme === 'day' ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-500/10 border border-green-500/20'}`}>
                    <span className={`font-medium ${theme === 'day' ? 'text-green-700' : 'text-green-400'}`}>Bus 42 - Downtown</span>
                    <span className={`text-sm ${theme === 'day' ? 'text-green-600' : 'text-green-300'}`}>2 min</span>
                  </div>
                  <div className={`flex items-center justify-between p-4 rounded-xl ${theme === 'day' ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-blue-500/10 border border-blue-500/20'}`}>
                    <span className={`font-medium ${theme === 'day' ? 'text-blue-700' : 'text-blue-400'}`}>Metro Line A</span>
                    <span className={`text-sm ${theme === 'day' ? 'text-blue-600' : 'text-blue-300'}`}>5 min</span>
                  </div>
                  <div className={`flex items-center justify-between p-4 rounded-xl ${theme === 'day' ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-yellow-500/10 border border-yellow-500/20'}`}>
                    <span className={`font-medium ${theme === 'day' ? 'text-yellow-700' : 'text-yellow-400'}`}>Bus 18 - Airport</span>
                    <span className={`text-sm ${theme === 'day' ? 'text-yellow-600' : 'text-yellow-300'}`}>Delayed</span>
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
        className={`min-h-screen ${styles.sectionBg} py-20 px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10 transition-all duration-1000`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className={`absolute inset-0 rounded-3xl blur-3xl ${theme === 'day' ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20' : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'}`}></div>
            <div className={`relative bg-gradient-to-br ${styles.cardBg} rounded-3xl p-12 backdrop-blur-sm`}>
              <Sparkles className={`h-16 w-16 mx-auto mb-8 animate-pulse ${theme === 'day' ? 'text-purple-600' : 'text-purple-400'}`} />
              <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.headingColor}`}>
                <span className={`bg-gradient-to-r ${theme === 'day' ? 'from-purple-600 to-blue-600' : 'from-purple-400 to-blue-500'} bg-clip-text text-transparent`}>
                  What's Next
                </span>
              </h2>
              <p className={`text-xl mb-12 leading-relaxed ${styles.subTextColor}`}>
                The future of urban mobility is here. Advanced AI-powered features coming soon.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`p-6 bg-gradient-to-br rounded-xl ${theme === 'day' ? 'from-purple-500/20 to-transparent border border-purple-500/30' : 'from-purple-500/10 to-transparent border border-purple-500/20'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'day' ? 'text-purple-700' : 'text-purple-400'}`}>AI Route Optimization</h3>
                  <p className={`text-sm ${theme === 'day' ? 'text-gray-600' : 'text-gray-500'}`}>Smart routing with machine learning</p>
                </div>
                <div className={`p-6 bg-gradient-to-br rounded-xl ${theme === 'day' ? 'from-blue-500/20 to-transparent border border-blue-500/30' : 'from-blue-500/10 to-transparent border border-blue-500/20'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'day' ? 'text-blue-700' : 'text-blue-400'}`}>Offline Maps</h3>
                  <p className={`text-sm ${theme === 'day' ? 'text-gray-600' : 'text-gray-500'}`}>Navigate without internet connection</p>
                </div>
                <div className={`p-6 bg-gradient-to-br rounded-xl ${theme === 'day' ? 'from-green-500/20 to-transparent border border-green-500/30' : 'from-green-500/10 to-transparent border border-green-500/20'}`}>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === 'day' ? 'text-green-700' : 'text-green-400'}`}>Carbon Tracking</h3>
                  <p className={`text-sm ${theme === 'day' ? 'text-gray-600' : 'text-gray-500'}`}>Monitor your environmental impact</p>
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
