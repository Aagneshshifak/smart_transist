
import { Link } from 'react-router-dom';
import { MapPin, Map, Bus, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Find Nearby Stops',
      description: 'Discover bus and train stops near your current location',
      link: '/nearby-stops',
      color: 'text-green-400 bg-green-950'
    },
    {
      icon: Map,
      title: 'Plan Your Trip',
      description: 'Get the best route suggestions for your journey',
      link: '/trip-planner',
      color: 'text-blue-400 bg-blue-950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Bus className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Smart Public Transport
            <span className="block text-blue-400">Assistant</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Navigate your city with confidence. Find nearby stops, plan optimal routes, 
            and get real-time updates for all your public transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/nearby-stops"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Find Nearby Stops
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/trip-planner"
              className="bg-gray-800 text-blue-400 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              Plan a Trip
              <Map className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map(({ icon: Icon, title, description, link, color }) => (
            <Link key={title} to={link}>
              <Card hover className="h-full bg-gray-800 border-gray-700">
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-full ${color} mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                  <div className="mt-4 inline-flex items-center text-blue-400 font-medium">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-blue-800">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-blue-200 mb-6">
              Real-time arrivals, route optimization, and offline maps powered by Google Maps API
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full">Real-time Updates</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Route Optimization</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Offline Support</span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Index;
