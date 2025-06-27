
import { useState } from 'react';
import { Map, ArrowRight, Bus, Clock, DollarSign, Navigation } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import MapSection from '../components/MapSection';

interface RouteOption {
  id: string;
  duration: string;
  transfers: number;
  walkTime: string;
  cost: string;
  steps: string[];
}

const TripPlanner = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  // Mock route data
  const mockRoutes: RouteOption[] = [
    {
      id: '1',
      duration: '28 min',
      transfers: 1,
      walkTime: '8 min',
      cost: '$3.50',
      steps: ['Walk to Main St Station (3 min)', 'Route 42 to Central Hub (15 min)', 'Route 67 to Destination (10 min)']
    },
    {
      id: '2',
      duration: '35 min',
      transfers: 0,
      walkTime: '12 min',
      cost: '$2.25',
      steps: ['Walk to Park Ave Stop (6 min)', 'Route 23 Direct (25 min)', 'Walk to destination (4 min)']
    },
    {
      id: '3',
      duration: '31 min',
      transfers: 2,
      walkTime: '10 min',
      cost: '$4.00',
      steps: ['Walk to Train Station (5 min)', 'Blue Line (12 min)', 'Route 15 (9 min)', 'Walk (5 min)']
    }
  ];

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromLocation.trim() || !toLocation.trim()) {
      return;
    }

    setLoading(true);
    console.log('Planning trip from:', fromLocation, 'to:', toLocation);
    
    // Simulate API call with enhanced loading
    setTimeout(() => {
      setRoutes(mockRoutes);
      setLoading(false);
    }, 1500);
  };

  const clearSearch = () => {
    setFromLocation('');
    setToLocation('');
    setRoutes([]);
    setSelectedRoute(null);
  };

  const handleRouteSelect = (routeId: string) => {
    setSelectedRoute(routeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#cce0ff] to-white dark:from-[#0a192f] dark:to-[#1c1c3a] transition-all duration-300 ease-in-out">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Trip Planner</h1>
          <p className="text-gray-600 dark:text-slate-100 transition-colors duration-300">Plan your journey and get the best route suggestions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search Form */}
          <div className="lg:col-span-1 space-y-6">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Plan Your Route
                </h2>
                
                <form onSubmit={handlePlanTrip} className="space-y-4">
                  <div className="space-y-4">
                    <div className="group">
                      <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                        From
                      </label>
                      <input
                        type="text"
                        id="from"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        placeholder="Enter starting location"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ease-in-out hover:shadow-md focus:shadow-lg transform hover:-translate-y-0.5"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 transition-colors duration-300 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400">
                        To
                      </label>
                      <input
                        type="text"
                        id="to"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        placeholder="Enter destination"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ease-in-out hover:shadow-md focus:shadow-lg transform hover:-translate-y-0.5"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl disabled:from-blue-400 disabled:to-blue-500 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-lg"
                    >
                      <Map className="h-4 w-4" />
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Planning...
                        </>
                      ) : (
                        'Plan Trip'
                      )}
                    </button>
                    
                    {routes.length > 0 && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </form>
              </Card>
            </div>

            {/* Route Options */}
            {routes.length > 0 && (
              <div className="animate-fade-in animation-delay-200">
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                    <Bus className="h-5 w-5 text-green-600 dark:text-green-400" />
                    Route Options ({routes.length})
                  </h3>
                  
                  <div className="space-y-3">
                    {routes.map((route, index) => (
                      <div
                        key={route.id}
                        onClick={() => handleRouteSelect(route.id)}
                        className={`p-4 border-2 rounded-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-lg ${
                          selectedRoute === route.id
                            ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                            : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                              Option {index + 1}
                            </span>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                              <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{route.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400 transition-colors duration-300">{route.cost}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors duration-300">
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            {route.transfers} transfer{route.transfers !== 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {route.walkTime} walking
                          </span>
                        </div>
                        
                        <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 leading-relaxed">
                          {route.steps.join(' → ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* Map and Details */}
          <div className="lg:col-span-2">
            <div className="transform transition-all duration-300 hover:scale-[1.005]">
              <Card>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 flex items-center gap-2">
                  <Map className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Route Map
                </h2>
                <div className="rounded-xl overflow-hidden shadow-inner">
                  <MapSection height="h-96" />
                </div>
                
                {routes.length === 0 && !loading && (
                  <div className="mt-8 text-center animate-fade-in">
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 transition-all duration-300">
                      <Bus className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-4 animate-pulse" />
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg">Enter your start and destination to see routes</p>
                    </div>
                  </div>
                )}
                
                {loading && (
                  <div className="mt-8 text-center animate-fade-in">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-8 transition-all duration-300">
                      <div className="relative">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 mx-auto mb-4"></div>
                        <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/20 animate-ping opacity-20"></div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 text-lg font-medium">Finding the best routes for you...</p>
                      <div className="flex justify-center mt-4 space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripPlanner;
