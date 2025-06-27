
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Find Nearby Stops',
      description: 'Discover bus and train stops near your current location',
      link: '/nearby-stops',
      color: 'premium-gradient-green',
      gradient: 'from-green-50 to-emerald-50 dark:from-green-500/20 dark:to-emerald-500/20'
    },
    {
      icon: Map,
      title: 'Plan Your Trip',
      description: 'Get the best route suggestions for your journey',
      link: '/trip-planner',
      color: 'premium-gradient-blue',
      gradient: 'from-blue-50 to-indigo-50 dark:from-blue-500/20 dark:to-indigo-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cce0ff] via-white to-[#e6f3ff] dark:bg-black dark:bg-gradient-to-br dark:from-black dark:via-gray-900/50 dark:to-black transition-all duration-500">
      <div className="dark:bg-gradient-to-br dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 dark:min-h-screen">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 smooth-scroll">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-purple-500 rounded-full opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-300"></div>
                <div className="relative premium-gradient-blue hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-blue-400/60 p-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-xl">
                  <Bus className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Smart Public Transport
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-scale-in animation-delay-200">
                Assistant
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up animation-delay-300">
              Navigate your city with confidence. Find nearby stops, plan optimal routes, 
              and get real-time updates for all your public transportation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
              <Link
                to="/nearby-stops"
                className="group premium-gradient-blue hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:scale-105"
              >
                Find Nearby Stops
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/trip-planner"
                className="group bg-white/90 hover:bg-white dark:bg-black/90 dark:hover:bg-black/95 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold border-2 border-blue-500/20 dark:border-blue-400/40 hover:border-blue-500/40 dark:hover:border-blue-400/60 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/40 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              >
                Plan a Trip
                <Map className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map(({ icon: Icon, title, description, link, color, gradient }, index) => (
              <Link key={title} to={link} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 200}ms` }}>
                <Card hover className="h-full group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative text-center">
                    <div className={`inline-flex p-4 rounded-2xl ${color} mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/30 dark:group-hover:shadow-blue-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="animate-fade-in animation-delay-300">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 premium-gradient-purple opacity-90"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
              <div className="relative text-center text-white p-8">
                <div className="flex justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                <p className="text-blue-100 dark:text-purple-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Real-time arrivals, route optimization, and offline maps powered by Google Maps API
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  {['Real-time Updates', 'Route Optimization', 'Offline Support'].map((feature, index) => (
                    <span 
                      key={feature}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100 + 500}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
